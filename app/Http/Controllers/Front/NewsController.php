<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->q;

        $data = [
            'title' => 'Berita',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Berita',
                    'link' => route('news.index')
                ]
                ],
            'news' => News::where('title', 'like', "%$search%")->with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->latest()->paginate(6),
            'categories' => NewsCategory::withCount('news')->get(),
            'news_populars' => News::with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->withCount('viewers')->orderBy('viewers_count', 'desc')->limit(5)->get(),
            'news_latests' => News::with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->latest()->limit(5)->get(),
        ];

        return view('front.pages.news.index', $data);
    }

    public function show($slug)
    {
        $news = News::where('slug', $slug)->with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->firstOrFail();

        $data = [
            'title' => $news->title,
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Berita',
                    'link' => route('news.index')
                ],
                [
                    'name' => 'Detail Berita',
                    'link' => route('news.show', $news->slug)
                ]
            ],
            'news' => $news,
            'categories' => NewsCategory::withCount('news')->get(),
            'news_populars' => News::with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->withCount('viewers')->orderBy('viewers_count', 'desc')->limit(5)->get(),
            'news_latests' => News::with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->latest()->limit(5)->get(),
            'prev_news' => News::where('id', '<', $news->id)->latest()->first(),
            'next_news' => News::where('id', '>', $news->id)->latest()->first(),
        ];

        return view('front.pages.news.show', $data);
    }

    public function category($slug)
    {
        $category = NewsCategory::where('slug', $slug)->withCount('news')->firstOrFail();

        $data = [
            'title' => $category->name,
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Berita',
                    'link' => route('news.index')
                ],
                [
                    'name' => 'Kategori Berita',
                    'link' => route('news.category', $category->slug)
                ]
            ],
            'category' => $category,
            'news' => $category->news()->with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->latest()->paginate(6),
            'categories' => NewsCategory::withCount('news')->get(),
            'news_populars' => News::with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->withCount('viewers')->orderBy('viewers_count', 'desc')->limit(5)->get(),
            'news_latests' => News::with(['category', 'comments', 'user', 'viewers'])->where('status', 'published')->latest()->limit(5)->get(),
        ];

        return view('front.pages.news.index', $data);
    }

    public function comment(Request $request, $slug)
    {
        $validator = Validator::make($request->all(), [
            'news_id' => 'required|exists:news,id',
            'name' => 'required',
            'email' => 'required|email',
            'comment' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Please fill in the form correctly');
        }

        $news = News::find($request->news_id);
        $news->comments()->create($request->all());
        return redirect()->back()->with('success', 'Comment has been added');
    }
}
