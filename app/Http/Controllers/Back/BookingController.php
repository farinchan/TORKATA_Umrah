<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\UmrahPackage;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function umrahIndex()
    {
        $data = [
            'title' => 'Booking Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Booking Umrah',
                    'link' => route('back.booking.umrah.index')
                ]
            ],
            'list_umrah_package' => UmrahPackage::where('status', 'enabled')->get(),
        ];
        return view('back.pages.booking.umrah.index', $data);
    }
}
