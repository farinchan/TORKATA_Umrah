<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function loginProcess(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ], [
            'email.required' => 'Email Harus Diisi',
            'email.email' => 'Email Tidak Valid',
            'password.required' => 'Password Harus Diisi',
            'password.string' => 'Password Harus Berupa String'
        ]);

        if ($validator->fails()) {
            return back()->witheErrors($validator)->withInput()->with('error', 'Ada kesalahan dalam input!');
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return redirect()->route('back.dashboard');
        }

        return back()->with('error', 'Email atau Password Salah');
    }
}
