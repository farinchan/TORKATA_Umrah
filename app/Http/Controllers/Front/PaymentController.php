<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\SettingWebsite;
use App\Models\TourUser;
use App\Models\UmrahJamaah;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function umrah(Request $request)
    {
        $code = $request->q;
        $setting_web = SettingWebsite::first();
        $jamaah =  UmrahJamaah::where('code', $code)->with(['umrahSchedule', 'umrahJamaahPayments', 'user'])->first();

        $data = [
            'title' => 'Cek Pembayaran',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Cek Pembayaran',
                    'link' => null
                ]
            ],
            'meta' => [
                'title' => 'Cek Pembayaran | ' . $setting_web->name,
                'description' => 'Cek pembayaran paket umrah ' . $setting_web->name,
                'keywords' => $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah',  'paket wisata', 'cek pembayaran',
                'favicon' => $setting_web->favicon
            ],
            'code' => $code,
            'jamaah' => $jamaah,
            'payments' => $jamaah->umrahJamaahPayments??[],
        ];

        return view('front.pages.payment.umrah', $data);
    }

    public function tour(Request $request)
    {
        $code = $request->q;
        $setting_web = SettingWebsite::first();
        $jamaah =  TourUser::where('code', $code)->with(['tourSchedule', 'tourUserPayments', 'user'])->first();

        $data = [
            'title' => 'Cek Pembayaran',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Cek Pembayaran',
                    'link' => null
                ]
            ],
            'meta' => [
                'title' => 'Cek Pembayaran | ' . $setting_web->name,
                'description' => 'Cek Pembayaran Tour ' . $setting_web->name,
                'keywords' => $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah',  'paket wisata', 'cek pembayaran',
                'favicon' => $setting_web->favicon
            ],
            'code' => $code,
            'jamaah' => $jamaah,
            'payments' => $jamaah->tourUserPayments??[],
        ];

        return view('front.pages.payment.tour', $data);
    }


}
