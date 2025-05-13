<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\SettingWebsite;
use App\Models\TourPackage;
use Illuminate\Http\Request;

class TourController extends Controller
{
   public function index()
    {
        $setting_web = SettingWebsite::first();

        $data = [
            'title' => 'Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Tour',
                    'link' => route('tour.index')
                ]
            ],
            'meta' => [
                'title' => 'Tour | ' . $setting_web->name,
                'description' => 'Temukan paket tour terbaik dan terbaru dari ' . $setting_web->name . '. Kami menyediakan berbagai paket wisata muslim yang sesuai dengan kebutuhan Anda.',
                'keywords' =>  $setting_web->name, 'home', 'tour',  'travel', 'tour', 'islam', 'muslim', 'paket tour', 'paket haji', 'paket wisata', 'tour', 'tour terbaru', 'tour tour', 'tour travel', 'tour wisata',
                'favicon' => $setting_web->favicon
            ],
            'tours' => TourPackage::where('status', 'enabled')->with(['images', 'schedules'])->get(),
        ];

        return view('front.pages.tour.index', $data);
    }

    public function show($slug)
    {
        $tour = TourPackage::where('slug', $slug)->with('itineraries', 'images', 'schedules')->first();

        $data = [
            'title' => $tour->name,
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Tour',
                    'link' => route('tour.index')
                ],
                [
                    'name' => $tour->name,
                    'link' => route('tour.show', $tour->slug)
                ]
            ],
            'meta' => [
                'title' => $tour->name . ' | ' . $tour->location,
                'description' => strip_tags($tour->description),
                'keywords' =>  $tour->name, 'home', 'tour',  'travel', 'tour', 'islam', 'muslim', 'paket tour', 'paket haji', 'paket wisata', 'tour', 'tour terbaru', 'tour tour', 'tour travel', 'tour wisata',
                'favicon' => $tour->banner
            ],
            'tour' => $tour,
            'setting_web' => SettingWebsite::first()
        ];

        // return response()->json($data);
        return view('front.pages.tour.show', $data);
    }
}
