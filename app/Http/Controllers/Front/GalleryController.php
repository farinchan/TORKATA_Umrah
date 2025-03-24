<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\SettingWebsite;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $setting_web = SettingWebsite::first();
        $data = [
            'title' => 'Gallery',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Gallery',
                    'link' => route('gallery.index')
                ]
            ],
            'meta' => [
                'title' => 'Gallery | ' . $setting_web->name,
                'description' => 'Gallery ' . $setting_web->name . ' - ' . $setting_web->about,
                'keywords' => $setting_web->name, 'home', 'umrah', 'travel', 'tour', 'islam', 'muslim', 'paket umrah',  'paket wisata', 'gallery',
                'favicon' => $setting_web->favicon
            ],
            'setting_web' => SettingWebsite::first(),
            'galleries' => Gallery::latest()->get()
        ];

        return view('front.pages.gallery.index', $data);
    }
}
