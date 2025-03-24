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
        $setting_web = SettingWebsite::first();

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
            'meta' => [
                'title' => 'Umrah | ' . $setting_web->name,
                'description' => 'Temukan paket umrah terbaik dan terbaru dari ' . $setting_web->name . '. Kami menyediakan berbagai paket wisata muslim yang sesuai dengan kebutuhan Anda.',
                'keywords' =>  $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah', 'paket haji', 'paket wisata', 'umrah', 'umrah terbaru', 'umrah umrah', 'umrah travel', 'umrah wisata',
                'favicon' => $setting_web->favicon
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
            'meta' => [
                'title' => $umrah->name . ' | ' . $umrah->location,
                'description' => strip_tags($umrah->description),
                'keywords' =>  $umrah->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah', 'paket haji', 'paket wisata', 'umrah', 'umrah terbaru', 'umrah umrah', 'umrah travel', 'umrah wisata',
                'favicon' => $umrah->banner
            ],
            'umrah' => $umrah,
            'setting_web' => SettingWebsite::first()
        ];

        // return response()->json($data);
        return view('front.pages.umrah.show', $data);
    }
}
