<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\NewsViewer;
use App\Models\TourSchedule;
use App\Models\UmrahSchedule;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Dashboard',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ]
            ],
            'list_umrah_schedule' => UmrahSchedule::withCount([
                'jamaah as quad_count' => function ($query) {
                    $query->where('package_type', 'quad');
                },
                'jamaah as triple_count' => function ($query) {
                    $query->where('package_type', 'triple');
                },
                'jamaah as double_count' => function ($query) {
                    $query->where('package_type', 'double');
                }
            ])->where('status', 'aktif')->get(),
            'list_tour_schedule' => TourSchedule::with(['tourPackage'])->latest()->where('status', 'aktif')->get(),
            'wallet_chart' => Auth::user()->transactions
                ->where('created_at', '>=', now()->subMonths(11))
                ->groupBy(function ($transaction) {
                    return $transaction->created_at->format('M');
                })->map(function ($item) {
                    return [
                        'x' => $item->first()->created_at->format('M'),
                        'y' => $item->sum('amount')
                    ];
                })->values(),
        ];
        // return response()->json($data);
        return view('back.pages.dashboard.index', $data);
    }

    public function visistorStat()
    {


        $data = [
            'visitor_monthly' => Visitor::select(DB::raw('Date(created_at) as date'), DB::raw('count(*) as total'))
                ->orderBy('date', 'desc')
                ->limit(30)
                ->groupBy('date')
                ->get(),
            'visitor_platfrom' => Visitor::select('platform', DB::raw('count(*) as total'))
                ->groupBy('platform')
                ->get(),
            'visitor_browser' => Visitor::select('browser', DB::raw('count(*) as total'))
                ->groupBy('browser')
                ->get(),
        ];
        return response()->json($data);
    }

    public function news()
    {
        $data = [
            'title' => 'Dashboard Berita',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Berita',
                    'link' => null
                ]
            ],
            'berita_count' => News::count(),
            'news_popular' => News::with('comments')->withCount('viewers')->orderBy('viewers_count', 'desc')->limit(8)->get(),
            'news_new' => News::with(['comments', 'viewers'])->latest()->limit(5)->get(),
            'news_writer' => User::withCount('news')->orderBy('news_count', 'desc')->limit(5)->get(),
        ];
        return view('back.pages.dashboard.news', $data);
    }

    public function newsStat()
    {


        $data = [
            'news_viewer_monthly' => NewsViewer::select(DB::raw('Date(created_at) as date'), DB::raw('count(*) as total'))
                ->orderBy('date', 'desc')
                ->limit(30)
                ->groupBy('date')
                ->get(),
            'news_viewer_platfrom' => NewsViewer::select('platform', DB::raw('count(*) as total'))
                ->groupBy('platform')
                ->get(),
            'news_viewer_browser' => NewsViewer::select('browser', DB::raw('count(*) as total'))
                ->groupBy('browser')
                ->get(),
        ];
        return response()->json($data);
    }
}
