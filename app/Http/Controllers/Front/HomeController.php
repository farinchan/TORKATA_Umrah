<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\SettingWebsite;
use App\Models\Testimonial;
use App\Models\TourPackage;
use App\Models\TourSchedule;
use App\Models\UmrahPackage;
use App\Models\UmrahSchedule;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Jenssegers\Agent\Facades\Agent;
use Stevebauman\Location\Facades\Location;

class HomeController extends Controller
{
    public function indexUmrah()
    {
        $setting_web = SettingWebsite::first();
        $data = [
            'title' => 'Home',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ]
            ],
            'meta' => [
                'title' => 'Home | ' . $setting_web->name,
                'description' => strip_tags($setting_web->about),
                'keywords' => $setting_web->name,
                'home',
                'umrah',
                'travel',
                'tour',
                'islam',
                'muslim',
                'paket umrah',
                'paket wisata',
                'favicon' => $setting_web->favicon
            ],
            'agents' => User::role('agen')->take(10)->get(),
            'setting_web' => SettingWebsite::first(),
            'news' => News::orderBy('created_at', 'desc')->where('status', 'published')->limit(5)->get(),
            'umrah_packages' => UmrahPackage::orderBy('created_at', 'desc')->where('status', 'enabled')->get(),
            'umrah_schedules' => UmrahSchedule::orderBy('departure', 'desc')->where('status', 'aktif')->get(),
            'testimonials' => Testimonial::orderBy('created_at', 'desc')->where('status', true)->get()

        ];
        return view('front.pages.home', $data);
    }

    public function indexTour()
    {
        $setting_web = SettingWebsite::first();
        $data = [
            'title' => 'Home',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ]
            ],
            'meta' => [
                'title' => 'Home | ' . $setting_web->name,
                'description' => strip_tags($setting_web->about),
                'keywords' => $setting_web->name,
                'home',
                'umrah',
                'travel',
                'tour',
                'islam',
                'muslim',
                'paket umrah',
                'paket wisata',
                'favicon' => $setting_web->favicon
            ],
            'agents' => User::role('agen')->take(10)->get(),
            'setting_web' => SettingWebsite::first(),
            'news' => News::orderBy('created_at', 'desc')->where('status', 'published')->limit(5)->get(),
            'tour_packages' => TourPackage::orderBy('created_at', 'desc')->where('status', 'enabled')->get(),
            'tour_schedules' => TourSchedule::orderBy('departure', 'desc')->where('status', 'aktif')->get(),
            'testimonials' => Testimonial::orderBy('created_at', 'desc')->where('status', true)->get()

        ];
        return view('front.pages.home_tour', $data);
    }

    public function vistWebsite()
    {
        try {
            $currentUserInfo = Location::get(request()->ip());
            $visitor = new Visitor();
            $visitor->ip = request()->ip();
            if ($currentUserInfo) {
                $visitor->country = $currentUserInfo->countryName;
                $visitor->city = $currentUserInfo->cityName;
                $visitor->region = $currentUserInfo->regionName;
                $visitor->postal_code = $currentUserInfo->postalCode;
                $visitor->latitude = $currentUserInfo->latitude;
                $visitor->longitude = $currentUserInfo->longitude;
                $visitor->timezone = $currentUserInfo->timezone;
            }
            $visitor->user_agent = Agent::getUserAgent();
            $visitor->platform = Agent::platform();
            $visitor->browser = Agent::browser();
            $visitor->device = Agent::device();
            $visitor->save();

            return response()->json(['status' => 'success', 'message' => 'Visitor has been saved'], 200);
        } catch (\Throwable $th) {
            return response()->json(['status' => 'error', 'message' => $th->getMessage()], 500);
        }
    }
}
