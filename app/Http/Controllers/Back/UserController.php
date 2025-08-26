<?php

namespace App\Http\Controllers\back;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'List Pengguna',
            'menu' => 'Pengguna',
            'sub_menu' => '',
            'users' => User::all()
        ];

        return view('back.pages.user.index', $data);
    }

    public function create()
    {
        $data = [
            'title' => 'Tambah Pengguna',
            'menu' => 'Pengguna',
            'sub_menu' => '',
        ];

        return view('back.pages.user.create', $data);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nik' => 'nullable|unique:users,nik',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png',
            'name' => 'required',
            'birthplace' => 'nullable',
            'birthdate' => 'nullable|date',
            'gender' => 'nullable|in:laki-laki,perempuan',
            'address' => 'nullable',
            'religion' => 'nullable|in:islam,kristen,katolik,hindu,budha,konghucu',
            'occupation' => 'nullable',
            'phone' => 'nullable',
            'file_ktp' => 'nullable|mimes:jpg,jpeg,png,pdf',
            'file_cv' => 'nullable|mimes:jpg,jpeg,png,pdf',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $user = new User();
        $user->nik = $request->nik;
        $user->name = $request->name;
        $user->birthplace = $request->birthplace;
        $user->birthdate = $request->birthdate;
        $user->gender = $request->gender;
        $user->address = $request->address;
        $user->religion = $request->religion;
        $user->occupation = $request->occupation;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        if ($request->hasFile('file_ktp')) {
            $fileKtp = $request->file('file_ktp');
            $fileKtpName = Str::slug($request->name) . "-ktp-" . time() . "." . $fileKtp->getClientOriginalExtension();
            $fileKtpPath = $fileKtp->storeAs('uploads/user/ktp', $fileKtpName, 'public');
            $user->file_ktp = $fileKtpPath;
        }
        if ($request->hasFile('file_cv')) {
            $fileCv = $request->file('file_cv');
            $fileCvName = Str::slug($request->name) . "-cv-" . time() . "." . $fileCv->getClientOriginalExtension();
            $fileCvPath = $fileCv->storeAs('uploads/user/cv', $fileCvName, 'public');
            $user->file_cv = $fileCvPath;
        }
        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photoName = Str::slug($request->name) . "-" . time() . "." . $photo->getClientOriginalExtension();
            $photoPath = $photo->storeAs('uploads/user/photo', $photoName, 'public');
            $user->photo = $photoPath;
        }
        $user->save();

        if ($request->role_admin) {
            $user->assignRole('super-admin');
        }
        if ($request->role_kantor) {
            $user->assignRole('admin-kantor');
        }
        if ($request->role_admin_cabang) {
            $user->assignRole('admin-cabang');
        }
        if ($request->role_agen) {
            $user->assignRole('agen');
        }

        return redirect()->route('back.user.index')->with('success', 'Data pengguna berhasil ditambahkan');
    }

    public function edit($id)
    {
        $data = [
            'title' => 'Edit Pengguna',
            'menu' => 'Pengguna',
            'sub_menu' => '',
            'user' => User::find($id)
        ];

        return view('back.pages.user.edit', $data);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nik' => 'nullable|unique:users,nik,' . $id,
            'photo' => 'nullable|image|mimes:jpg,jpeg,png',
            'name' => 'required',
            'birthplace' => 'nullable',
            'birthdate' => 'nullable|date',
            'gender' => 'nullable|in:laki-laki,perempuan',
            'address' => 'nullable',
            'religion' => 'nullable|in:islam,kristen,katolik,hindu,budha,konghucu',
            'occupation' => 'nullable',
            'phone' => 'nullable',
            'file_ktp' => 'nullable|mimes:jpg,jpeg,png,pdf',
            'file_cv' => 'nullable|mimes:jpg,jpeg,png,pdf',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $user = User::find($id);
        $user->nik = $request->nik;
        $user->name = $request->name;
        $user->birthplace = $request->birthplace;
        $user->birthdate = $request->birthdate;
        $user->gender = $request->gender;
        $user->address = $request->address;
        $user->religion = $request->religion;
        $user->occupation = $request->occupation;
        $user->phone = $request->phone;
        $user->email = $request->email;

        if ($request->hasFile('file_ktp')) {
            if ($user->file_ktp) {
                Storage::delete('public/' . $user->file_ktp);
            }
            $fileKtp = $request->file('file_ktp');
            $fileKtpName = Str::slug($request->name) . "-ktp-" . time() . "." . $fileKtp->getClientOriginalExtension();
            $fileKtpPath = $fileKtp->storeAs('uploads/user/ktp', $fileKtpName, 'public');
            $user->file_ktp = $fileKtpPath;
        }
        if ($request->hasFile('file_cv')) {
            if ($user->file_cv) {
                Storage::delete('public/' . $user->file_cv);
            }
            $fileCv = $request->file('file_cv');
            $fileCvName = Str::slug($request->name) . "-cv-" . time() . "." . $fileCv->getClientOriginalExtension();
            $fileCvPath = $fileCv->storeAs('uploads/user/cv', $fileCvName, 'public');
            $user->file_cv = $fileCvPath;
        }
        if ($request->hasFile('photo')) {
            if ($user->photo) {
                Storage::delete('public/' . $user->photo);
            }
            $photo = $request->file('photo');
            $photoName = Str::slug($request->name) . "-" . time() . "." . $photo->getClientOriginalExtension();
            $photoPath = $photo->storeAs('uploads/user/photo', $photoName, 'public');
            $user->photo = $photoPath;
        }
        $user->save();

        if ($request->role_admin) {
            $user->assignRole('super-admin');
        } else {
            $user->removeRole('super-admin');
        }
        if ($request->role_kantor) {
            $user->assignRole('admin-kantor');
        } else {
            $user->removeRole('admin-kantor');
        }
        if ($request->role_admin_cabang) {
            $user->assignRole('admin-cabang');
        } else {
            $user->removeRole('admin-cabang');
        }
        if ($request->role_agen) {
            $user->assignRole('agen');
        } else {
            $user->removeRole('agen');
        }

        return redirect()->route('back.user.index')->with('success', 'Data pengguna berhasil diubah');
    }

    public function delete($id)
    {
        $user = User::find($id);
        if ($user->photo) {
            Storage::delete('public/' . $user->photo);
        }
        if ($user->file_ktp) {
            Storage::delete('public/' . $user->file_ktp);
        }
        if ($user->file_cv) {
            Storage::delete('public/' . $user->file_cv);
        }
        $user->delete();

        return redirect()->route('back.user.index')->with('success', 'Data pengguna berhasil dihapus');
    }

    public function editProfile()
    {
        $data = [
            'title' => 'Edit Profil',
            'user' => Auth::user()
        ];

        return view('back.pages.user.profile', $data);
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $validator = Validator::make($request->all(), [
            'nik' => 'nullable|unique:users,nik,' . $user->id,
            'photo' => 'nullable|image|mimes:jpg,jpeg,png',
            'name' => 'required',
            'birthplace' => 'nullable',
            'birthdate' => 'nullable|date',
            'gender' => 'nullable|in:laki-laki,perempuan',
            'address' => 'nullable',
            'religion' => 'nullable|in:islam,kristen,katolik,hindu,budha,konghucu',
            'occupation' => 'nullable',
            'phone' => 'nullable',
            'file_ktp' => 'nullable|mimes:jpg,jpeg,png,pdf',
            'file_cv' => 'nullable|mimes:jpg,jpeg,png,pdf',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'password' => 'nullable|min:6',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $user->nik = $request->nik;
        $user->name = $request->name;
        $user->birthplace = $request->birthplace;
        $user->birthdate = $request->birthdate;
        $user->gender = $request->gender;
        $user->address = $request->address;
        $user->religion = $request->religion;
        $user->occupation = $request->occupation;
        $user->phone = $request->phone;
        $user->email = $request->email;

        if ($request->filled('password')) {
            $user->password = bcrypt($request->password);
        }

        if ($request->hasFile('file_ktp')) {
            if ($user->file_ktp) {
                Storage::delete('public/' . $user->file_ktp);
            }
            $fileKtp = $request->file('file_ktp');
            $fileKtpName = Str::slug($request->name) . "-ktp-" . time() . "." . $fileKtp->getClientOriginalExtension();
            $fileKtpPath = $fileKtp->storeAs('uploads/user/ktp', $fileKtpName, 'public');
            $user->file_ktp = $fileKtpPath;
        }

        if ($request->hasFile('file_cv')) {
            if ($user->file_cv) {
                Storage::delete('public/' . $user->file_cv);
            }
            $fileCv = $request->file('file_cv');
            $fileCvName = Str::slug($request->name) . "-cv-" . time() . "." . $fileCv->getClientOriginalExtension();
            $fileCvPath = $fileCv->storeAs('uploads/user/cv', $fileCvName, 'public');
            $user->file_cv = $fileCvPath;
        }

        if ($request->hasFile('photo')) {
            if ($user->photo) {
                Storage::delete('public/' . $user->photo);
            }
            $photo = $request->file('photo');
            $photoName = Str::slug($request->name) . "-" . time() . "." . $photo->getClientOriginalExtension();
            $photoPath = $photo->storeAs('uploads/user/photo', $photoName, 'public');
            $user->photo = $photoPath;
        }

        $user->save();

        return redirect()->route('back.profile.edit')->with('success', 'Profil berhasil diperbarui');
    }
}
