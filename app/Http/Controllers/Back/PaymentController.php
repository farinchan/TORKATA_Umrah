<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\TourFinance;
use App\Models\TourSchedule;
use App\Models\TourUser;
use App\Models\TourUserPayment;
use App\Models\UmrahFinance;
use App\Models\UmrahJamaah;
use App\Models\UmrahJamaahPayment;
use App\Models\UmrahSchedule;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaymentController extends Controller
{
    public function paymentVerification()
    {
        $umrah_payment = UmrahJamaahPayment::with('umrahJamaah')->latest()->get()->map(function ($item) {
            return [
                'id' => $item->id,
                'payment' => 'umrah',
                'payment_method' => $item->payment_method,
                'account_name' => $item->account_name,
                'amount' => $item->amount,
                'proof' => $item->proof,
                'type' => $item->type,
                'status' => $item->status,
                'note' => $item->note,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'user' => [
                    'id' => $item->umrahJamaah->id,
                    'name' => $item->umrahJamaah->name,
                    'code' => $item->umrahJamaah->code,
                    'staff' => [
                        'id' => $item->umrahJamaah->user->id ?? 0,
                        'name' => $item->umrahJamaah->user->name ?? "-",
                        'email' => $item->umrahJamaah->user->email ?? "-",
                        'phone' => $item->umrahJamaah->user->phone ?? "-"
                    ]
                ]
            ];
        });
        $tour_payment = TourUserPayment::with('tourUser')->latest()->get()->map(function ($item) {
            return [
                'id' => $item->id,
                'payment' => 'tour',
                'payment_method' => $item->payment_method,
                'account_name' => $item->account_name,
                'amount' => $item->amount,
                'proof' => $item->proof,
                'type' => $item->type,
                'status' => $item->status,
                'note' => $item->note,
                'created_at' => $item->created_at,
                'updated_at' => $item->updated_at,
                'user' => [
                    'id' => $item->tourUser->id,
                    'name' => $item->tourUser->name,
                    'code' => $item->tourUser->code,
                    'staff' => [
                        'id' => $item->tourUser->user->id ?? 0,
                        'name' => $item->tourUser->user->name ?? "-",
                        'email' => $item->tourUser->user->email ?? "-",
                        'phone' => $item->tourUser->user->phone ?? "-",
                    ]
                ]
            ];
        });

        $data = [
            'title' => 'Verifikasi Pembayaran',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Verifikasi Pembayaran',
                    'link' => route('back.payment.index')
                ]
            ],
            'payments' => collect($umrah_payment->merge($tour_payment))->sortByDesc('created_at')->map(function ($item) {
                return (object) $item;
            }),
        ];
        // dd($data);
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
            $moneyTemp = 0;
            if ($jamaah->package_type == 'quad') {
                $moneyTemp = $shedule->quad_price;
            } elseif ($jamaah->package_type == 'triple') {
                $moneyTemp = $shedule->triple_price;
            } elseif ($jamaah->package_type == 'double') {
                $moneyTemp = $shedule->double_price;
            }
            $money = $moneyTemp - $jamaah->discount;

            // dd($money, UmrahJamaahPayment::where('umrah_jamaah_id', $jamaah->id)->where('status', 'approved')->sum('amount'));


            if ($money <= UmrahJamaahPayment::where('umrah_jamaah_id', $jamaah->id)->where('status', 'approved')->sum('amount')) {
                foreach ($payment->umrahJamaah->user->roles as $role) {
                    if ($role->reward_money > 0) {
                        User::findOrFail($jamaah->user_id)->deposit($role->reward_money, ['description' => 'Pembayaran Komisi ' . $role->name . ' dari jamaah ' . $jamaah->name . ' (' . $jamaah->code . ')']);
                        UmrahFinance::create([
                            'umrah_schedule_id' => $jamaah->umrah_schedule_id,
                            'name' => 'Pembayaran Komisi ' . $role->name,
                            'description' => 'Pembayaran Komisi ' . $role->name . ' atas nama ' . $payment->umrahJamaah->user->name . ' dari jamaah ' . $jamaah->name . ' (' . $jamaah->code . ')',
                            'amount' => $role->reward_money,
                            'type' => 'expense',
                            'date' => now(),
                            'created_by' => Auth::id(),
                            'updated_by' => Auth::id()
                        ]);
                    }
                }
            }



            UmrahFinance::create([
                'umrah_schedule_id' => $jamaah->umrah_schedule_id,
                'name' => 'Pembayaran ' . $payment->type  . " " . $jamaah->name,
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

    public function tourPaymentVerificationUpdate(Request $request, $id)
    {
        $payment = TourUserPayment::findOrFail($id);
        $payment->update([
            'status' => $request->status,
            'note' => $request->note
        ]);

        $user = TourUser::findOrFail($payment->tour_user_id);
        $shedule = TourSchedule::findOrFail($user->tour_schedule_id);

        $money = $shedule->price - $user->discount;

        if ($request->status == 'approved') {
            if ($money <= TourUserPayment::where('tour_user_id', $user->id)->where('status', 'approved')->sum('amount')) {
                foreach ($payment->tourUser->user->roles as $role) {
                    if ($role->reward_money > 0) {
                        User::findOrFail($payment->tourUser->user_id)->deposit($role->reward_money, ['description' => 'Pembayaran Komisi ' . $role->name . ' dari jamaah ' . $payment->tourUser->name . ' (' . $payment->tourUser->code . ')']);
                        TourFinance::create([
                            'tour_schedule_id' => $payment->tourUser->tour_schedule_id,
                            'name' => 'Pembayaran Komisi ' . $role->name,
                            'description' => 'Pembayaran Komisi ' . $role->name . ' atas nama ' . $payment->tourUser->user->name . ' dari user ' . $payment->tourUser->name . ' (' . $payment->tourUser->code . ')',
                            'amount' => $role->reward_money,
                            'type' => 'expense',
                            'date' => now(),
                            'created_by' => Auth::id(),
                            'updated_by' => Auth::id()
                        ]);
                    }
                }
            }

            TourFinance::create([
                'tour_schedule_id' => $user->tour_schedule_id,
                'name' => 'Pembayaran ' . $payment->type  . " " . $user->name,
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
