<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\SettingWebsite;
use App\Models\UmrahPackage;
use Illuminate\Http\Request;

class UmrahController extends Controller
{
    public function index()
    {

        $data = [
            'title' => 'Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Umrah',
                    'link' => route('umrah.index')
                ]
            ],
            'umrahs' => UmrahPackage::where('status', 'enabled')->with(['images', 'schedules'])->get(),
        ];

        return view('front.pages.umrah.index', $data);
    }

    public function show($slug)
    {
        $umrah = UmrahPackage::where('slug', $slug)->with('itineraries', 'images', 'schedules')->first();

        $data = [
            'title' => $umrah->name,
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Umrah',
                    'link' => route('umrah.index')
                ],
                [
                    'name' => $umrah->name,
                    'link' => route('umrah.show', $umrah->slug)
                ]
            ],
            'umrah' => $umrah,
            'setting_web' => SettingWebsite::first()
        ];

        return view('front.pages.umrah.show', $data);
    }
}
