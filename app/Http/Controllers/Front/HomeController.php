<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\SettingWebsite;
use App\Models\UmrahPackage;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Home',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ]
            ],
            'setting_web' => SettingWebsite::first(),
            'news' => News::orderBy('created_at', 'desc')->where ('status', 'published')->limit(5)->get(),
            'umrah_packages' => UmrahPackage::orderBy('created_at', 'desc')->where ('status', 'enabled')->get()

        ];
        return view('front.pages.home', $data);
    }
}
