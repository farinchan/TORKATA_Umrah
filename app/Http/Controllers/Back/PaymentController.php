<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\UmrahFinance;
use App\Models\UmrahJamaah;
use App\Models\UmrahJamaahPayment;
use App\Models\UmrahSchedule;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        $jamaah = UmrahJamaah::findOrFail($payment->umrah_jamaah_id);
        $shedule = UmrahSchedule::findOrFail($jamaah->umrah_schedule_id);


        if ($request->status == 'approved') {
            $money = 0;
            if ($jamaah->package_type == 'quad') {
                $money = $shedule->price_quad;
            } elseif ($jamaah->package_type == 'triple') {
                $money = $shedule->price_triple;
            } elseif ($jamaah->package_type == 'double') {
                $money = $shedule->price_double;
            }
            $money = $money - $jamaah->discount;

            if ($money <= UmrahJamaahPayment::where('umrah_jamaah_id', $jamaah->id)->where('status', 'approved')->sum('amount')) {
                User::findOrFail($jamaah->user_id)->deposit(500000, [ 'description' => 'Pembayaran Komisi dari jamaah ' . $jamaah->name . ' (' . $jamaah->code . ')']);
            }

            UmrahFinance::create([
                'umrah_schedule_id' => $jamaah->umrah_schedule_id,
                'name' => 'Pembayaran ' . $jamaah->name,
                'description' => 'Pembayaran di verifikasi oleh ' . Auth::user()->name  . 'melalui sistem verifikasi pembayaran',
                'amount' => $payment->amount,
                'type' => 'income',
                'date' => now(),
                'created_by' => Auth::id(),
                'updated_by' => Auth::id()
            ]);
        }

        return redirect()->back()->with('success', 'Status pembayaran berhasil diubah');
    }
}
