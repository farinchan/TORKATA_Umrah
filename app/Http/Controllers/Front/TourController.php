<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\SettingWebsite;
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
                'description' => 'Paket tour terbaru seputar travel, dan paket wisata muslim terbaru dari ' . $setting_web->name,
                'keywords' =>  $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah', 'paket haji', 'paket wisata', 'tour', 'tour terbaru', 'tour umrah', 'tour travel', 'tour wisata',
                'favicon' => $setting_web->favicon
            ],
        ];

        return view('front.pages.tour.index', $data);
    }
}
