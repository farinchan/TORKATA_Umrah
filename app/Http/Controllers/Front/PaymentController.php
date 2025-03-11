<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\UmrahJamaah;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        $code = $request->q;

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
            'code' => $code,
            'jamaah' => UmrahJamaah::where('code', $code)->with(['umrahSchedule', 'umrahJamaahPayments', 'user'])->first()
        ];

        return view('front.pages.payment.index', $data);
    }

    public function show(Request $request, $code)
    {
        $data = [
            'title' => 'Cek Pembayaran',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Cek Pembayaran',
                    'link' => route('payment.index')
                ],
                [
                    'name' => 'Detail Pembayaran',
                    'link' => null
                ]
            ],
            'code' => $code,
            'jamaah' => UmrahJamaah::where('code', $code)->with(['umrahSchedule', 'umrahJamaahPayments', 'user'])->first()
        ];

        return view('front.pages.payment.show', $data);
    }
}
