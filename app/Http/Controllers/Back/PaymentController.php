<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\UmrahJamaahPayment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function umrahPaymentVerification()
    {
        $data = [
            'title' => 'Verifikasi Pembayaran',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Verifikasi Pembayaran',
                    'link' => route('back.payment.umrah.verification')
                ]
            ],
            'payments' => UmrahJamaahPayment::with('umrahJamaah')->latest()->get()
        ];
        return view('back.pages.payment.umrah-verification', $data);
    }

    public function umrahPaymentVerificationUpdate(Request $request, $id)
    {
        $payment = UmrahJamaahPayment::findOrFail($id);
        $payment->update([
            'status' => $request->status,
            'note' => $request->note
        ]);

        return redirect()->back()->with('success', 'Status pembayaran berhasil diubah');
    }
}
