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
            'code' => $code,
            'jamaah' => $jamaah,
            'payments' => $jamaah->umrahJamaahPayments??[],
        ];

        return view('front.pages.payment.index', $data);
    }


}
