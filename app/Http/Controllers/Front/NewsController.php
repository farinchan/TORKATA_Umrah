<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\NewsCategory;
use App\Models\NewsViewer;
use App\Models\SettingWebsite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Jenssegers\Agent\Facades\Agent;
use Stevebauman\Location\Facades\Location;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->q;
        $setting_web = SettingWebsite::first();

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
            'meta' => [
                'title' => 'Berita | ' . $setting_web->name,
                'description' => 'Berita terbaru seputar umrah, haji, travel, dan paket wisata muslim',
                'keywords' =>  $setting_web->name, 'home', 'umrah', 'travel', 'tour', 'islam', 'muslim', 'paket umrah',  'paket wisata', 'berita', 'news', 'berita terbaru', 'berita umrah',  'berita travel', 'berita wisata',
                'favicon' => $setting_web->favicon
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
        $setting_web = SettingWebsite::first();
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
            'meta' => [
                'title' => $news->title . ' | ' . $setting_web->name,
                'description' => strip_tags($news->content),
                'keywords' => $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah', 'paket wisata', 'berita', 'news', 'berita terbaru', 'berita umrah', 'berita travel', 'berita wisata',
                'favicon' => $news->thumbnail
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
        $setting_web = SettingWebsite::first();

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
            'meta' => [
                'title' => $category->name . ' | ' . $setting_web->name,
                'description' => 'Kategori berita ' . $category->name,
                'keywords' => $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah',  'paket wisata', 'berita', 'news', 'berita terbaru', 'berita umrah', 'berita travel', 'berita wisata',
                'favicon' => $setting_web->favicon
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

    public function visit(Request $request)
    {
        $news_id = $request->news_id;
        // dd($news_id);
        try {
            $currentUserInfo = Location::get(request()->ip());
            $news_visitor = new NewsViewer();
            $news_visitor->news_id = $news_id;
            $news_visitor->ip = request()->ip();
            if ($currentUserInfo) {
                $news_visitor->country = $currentUserInfo->countryName;
                $news_visitor->city = $currentUserInfo->cityName;
                $news_visitor->region = $currentUserInfo->regionName;
                $news_visitor->postal_code = $currentUserInfo->postalCode;
                $news_visitor->latitude = $currentUserInfo->latitude;
                $news_visitor->longitude = $currentUserInfo->longitude;
                $news_visitor->timezone = $currentUserInfo->timezone;
            }
            $news_visitor->user_agent = Agent::getUserAgent();
            $news_visitor->platform = Agent::platform();
            $news_visitor->browser = Agent::browser();
            $news_visitor->device = Agent::device();
            $news_visitor->save();

            return response()->json(['status' => 'success', 'message' => 'Visitor has been saved'], 200);
        } catch (\Throwable $th) {
            return response()->json(['status' => 'error', 'message' => $th->getMessage()], 500);
        }
    }
}
