<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class WalletController extends Controller
{
    public function myWallet()
    {
        $data = [
            'title' => 'Dompet Saya',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Wallet',
                    'link' => route('back.wallet.my-wallet')
                ]
            ],
            'wallet_chart' => Auth::user()->transactions
                ->where('created_at', '>=', now()->subMonths(11))
                ->groupBy(function ($transaction) {
                    return $transaction->created_at->format('M');
                })->map(function ($item) {
                    return [
                        'x' => $item->first()->created_at->format('M'),
                        'y' => $item->sum('amount')
                    ];
                })->values(),
            'wallet_chart2' => Auth::user()->transactions->sortByDesc('created_at')
                ->groupBy(function ($transaction) {
                    return $transaction->created_at->format('d M Y');
                })->map(function ($item) {
                    return [
                        'x' => $item->first()->created_at->format('d M Y'),
                        'y' => $item->sum('amount')
                    ];
                })->take(30)->values(),

            'transactions' => Auth::user()->transactions
        ];
        // return response()->json($data);
        return view('back.pages.wallet.my-wallet', $data);
    }

    public function userWallet($id)
    {
        $user = User::findOrFail($id);
        $data = [
            'title' => 'Dompet ' . $user->name,
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Pengguna',
                    'link' => route('back.user.index')
                ],
                [
                    'name' => 'Dompet ' . $user->name,
                    'link' => route('back.wallet.user-wallet', $user->id)
                ]
            ],
            'user' => $user,
            'wallet_chart' => $user->transactions
                ->where('created_at', '>=', now()->subMonths(11))
                ->groupBy(function ($transaction) {
                    return $transaction->created_at->format('M');
                })->map(function ($item) {
                    return [
                        'x' => $item->first()->created_at->format('M'),
                        'y' => $item->sum('amount')
                    ];
                })->values(),
            'wallet_chart2' => $user->transactions->sortByDesc('created_at')
                ->groupBy(function ($transaction) {
                    return $transaction->created_at->format('d M Y');
                })->map(function ($item) {
                    return [
                        'x' => $item->first()->created_at->format('d M Y'),
                        'y' => $item->sum('amount')
                    ];
                })->take(30)->values(),

            'transactions' => $user->transactions
        ];
        // return response()->json($data);
        return view('back.pages.wallet.user-wallet', $data);
    }


    public function userWalletDeposit(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $validator = Validator::make($request->all(), [
            'amount' => 'required|numeric|min:1000',
            'description' => 'nullable',
            'file' => 'nullable|mimes:jpg,jpeg,png,pdf'
        ], [
            'amount.required' => 'Jumlah deposit harus diisi',
            'amount.numeric' => 'Jumlah deposit harus berupa angka',
            'amount.min' => 'Jumlah deposit minimal Rp 1.000',
            'file.mimes' => 'File harus berupa gambar atau pdf'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $file_path = null;
        if ($request->file('file')) {
            $file = $request->file('file');
            $file_name = time() . '_' . $file->getClientOriginalName();
            $file_path = $file->storeAs('wallet/deposit', $file_name, 'public');
        }


        $user->deposit($request->amount, [
            'description' => $request->description,
            'file' => $file_path
        ]);
        return redirect()->back()->with('success', 'Deposit berhasil');
    }

    public function userWalletWithdraw(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $validator = Validator::make($request->all(), [
            'amount' => 'required|numeric|min:1000',
            'description' => 'nullable',
            'file' => 'nullable|mimes:jpg,jpeg,png,pdf'
        ], [
            'amount.required' => 'Jumlah penarikan harus diisi',
            'amount.numeric' => 'Jumlah penarikan harus berupa angka',
            'amount.min' => 'Jumlah penarikan minimal Rp 1.000',
            'file.mimes' => 'File harus berupa gambar atau pdf'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $file_path = null;
        if ($request->file('file')) {
            $file = $request->file('file');
            $file_name = time() . '_' . $file->getClientOriginalName();
            $file_path = $file->storeAs('wallet/withdraw', $file_name, 'public');
        }

        $user->withdraw($request->amount, [
            'description' => $request->description,
            'file' => $file_path
        ]);
        return redirect()->back()->with('success', 'Penarikan berhasil');
    }
}
