<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\SettingWebsite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        $setting_web = SettingWebsite::first();
        $data = [
            'title' => 'Kontak Kami',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Kontak Kami',
                    'link' => route('contact.index')
                ]
            ],
            'meta' => [
                'title' => 'Kontak Kami | ' . $setting_web->name,
                'description' => 'Hubungi kami untuk informasi lebih lanjut. Phone/WA : ' . $setting_web->phone . ' Email : ' . $setting_web->email . ' Alamat : ' . $setting_web->address,
                'keywords' => $setting_web->name, 'home', 'umrah', 'travel', 'tour', 'islam', 'muslim', 'paket umrah',  'paket wisata', 'kontak', 'contact', 'hubungi kami', 'phone', 'wa', 'email', 'alamat',
                'favicon' => $setting_web->favicon
            ],
            'setting_web' => SettingWebsite::first()
        ];

        return view('front.pages.contact', $data);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Gagal mengirim pesan, silahkan coba lagi.');
        }

        $message = new Message();
        $message->name = $request->name;
        $message->email = $request->email;
        $message->subject = $request->subject;
        $message->message = $request->message;
        $message->save();

        return redirect()->back()->with('success', 'Pesan berhasil dikirim.');

    }
}
