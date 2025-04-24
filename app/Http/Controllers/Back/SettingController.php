<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\PaymentAccount;
use App\Models\SettingBanner;
use App\Models\SettingWebsite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use RealRashid\SweetAlert\Facades\Alert;

class SettingController extends Controller
{
    public function website()
    {
        $data = [
            'title' => 'Setting Website',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Setting',
                    'link' => route('back.setting.website')
                ]
            ],
            'setting' => SettingWebsite::first(),
        ];
        return view('back.pages.setting.index', $data);
    }

    public function websiteUpdate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'logo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'favicon' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'email' => 'required|email',
            'phone' => 'required',
            'address' => 'required',
            'latitude' => 'nullable',
            'longitude' => 'nullable',
            'facebook' => 'nullable',
            'instagram' => 'nullable',
            'tiktok' => 'nullable',
            'linkedin' => 'nullable',
            'about' => 'nullable',
        ]);

        // dd($request->all());
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $setting = SettingWebsite::firstOrNew([]);
        $setting->name = $request->name;
        $setting->email = $request->email;
        $setting->phone = $request->phone;
        $setting->address = $request->address;
        $setting->latitude = $request->latitude;
        $setting->longitude = $request->longitude;
        $setting->facebook = $request->facebook;
        $setting->instagram = $request->instagram;
        $setting->tiktok = $request->tiktok;
        $setting->linkedin = $request->linkedin;
        $setting->about = $request->about;

        if ($request->hasFile('logo')) {
            Storage::delete('public/' . $setting->logo);
            $logo = $request->file('logo');
            $logoPath = $logo->storeAs('setting', 'logo.' . $logo->getClientOriginalExtension(), 'public');
            $setting->logo = str_replace('public/', '', $logoPath);
        }

        if ($request->hasFile('favicon')) {
            Storage::delete('public/' . $setting->favicon);
            $favicon = $request->file('favicon');
            $faviconPath = $favicon->storeAs('setting', 'favicon.' . $favicon->getClientOriginalExtension(), 'public');
            $setting->favicon = str_replace('public/', '', $faviconPath);
        }

        $setting->save();

        return redirect()->back()->with('success', 'Setting website berhasil diperbarui');
    }

    public function informationUpdate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'terms_conditions' => 'nullable',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $setting = SettingWebsite::first();
        $setting->terms_conditions = $request->terms_conditions;
        $setting->save();

        return redirect()->back()->with('success', 'Informasi berhasil diperbarui');
    }

    public function banner()
    {
        $data = [
            'title' => 'Pengaturan Banner',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Setting',
                    'link' => route('back.setting.website')
                ],
                [
                    'name' => 'Banner',
                    'link' => route('back.setting.banner')
                ]
            ],
            'banner1' => SettingBanner::find(1) ?? null,
            'banner2' => SettingBanner::find(2) ?? null,
            'banner3' => SettingBanner::find(3) ?? null,

        ];
        // dd($data);
        return view('back.pages.setting.banner', $data);
    }

    public function bannerUpdate(Request $request, $id)
    {
        // dd($request->all());
        $request->validate([
            'image' => 'nullable|image|mimes:jpg,jpeg,png',
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'url' => 'required|string',
            'status' => 'required|in:1,0',
        ]);

        $banner = SettingBanner::find($id) ?? new SettingBanner();
        $banner->id = $id;
        $banner->title = $request->title;
        $banner->subtitle = $request->subtitle;
        $banner->url = $request->url;
        $banner->status = $request->status?? false;

        if ($request->hasFile('image')) {
            if ($banner->image) {
                Storage::delete('public/' . $banner->image);
            }
            $image = $request->file('image');
            $fileName = time() . '_' . $image->getClientOriginalName();
            $filePath = $image->storeAs('setting/banner/', $fileName, 'public');
            $banner->image = $filePath;
        }

        $banner->save();
        return redirect()->route('back.setting.banner')->with('success', 'Pengaturan Banner berhasil diubah');
    }

    public function paymentAccount()
    {
        $data = [
            'title' => 'Rekening Pembayaran',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Rekening Pembayaran',
                    'link' => route('back.setting.payment-account.index')
                ]
            ],
            'payment_accounts' => PaymentAccount::all()
        ];

        return view('back.pages.setting.payment', $data);
    }

    public function paymentAccountUpdate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'payment_accounts' => 'array',
            'payment_accounts.*.account_name' => 'required|string|max:255',
            'payment_accounts.*.account_number' => 'required|string|max:255',
            'payment_accounts.*.bank' => 'required|string|max:255',
        ],
        [
            'payment_accounts.*.account_name.required' => 'Nama pemilik rekening tidak boleh kosong',
            'payment_accounts.*.account_number.required' => 'Nomor rekening tidak boleh kosong',
            'payment_accounts.*.bank.required' => 'Nama bank tidak boleh kosong',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }



        if($request->delete_account) {
            $account_delete = json_decode($request->delete_account, true);
            foreach ($account_delete as $accountId) {
                $account = PaymentAccount::find($accountId);
                if ($account) {
                    $account->delete();
                }
            }
        }

        if ($request->payment_accounts) {
            foreach ($request->payment_accounts as $accountData) {
                $accountName = $accountData['account_name'] ?? '-';
                $accountNumber = $accountData['account_number'] ?? '-';
                $accountBank = $accountData['bank'] ?? '-';

                // Jika ada ID sertifikat, berarti update data lama
                if (isset($accountData['account_id'])) {
                    $account = PaymentAccount::find($accountData['account_id']);

                    if (!$account) continue;

                    // Update informasi lainnya
                    $account->account_name = $accountName;
                    $account->account_number = $accountNumber;
                    $account->bank = $accountBank;
                    $account->save();
                } else {
                    // Jika tidak ada ID, buat data baru
                    $account = new PaymentAccount();
                    $account->account_name = $accountName;
                    $account->account_number = $accountNumber;
                    $account->bank = $accountBank;
                    $account->save();
                }
            }
        }

        return redirect()->back()->with('success', 'Rekening pembayaran berhasil diperbarui');
    }
}
