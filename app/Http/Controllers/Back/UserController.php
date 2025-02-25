<?php

namespace App\Http\Controllers\back;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use RealRashid\SweetAlert\Facades\Alert;

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
            'name' => 'required',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png',
            'position' => 'nullable',
            'about' => 'nullable',
            'twitter' => 'nullable|url',
            'instagram' => 'nullable|url',
            'tiktok' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            Alert::error('Error', $validator->errors()->all());
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $user = new User();
        $user->name = $request->name;
        $user->position = $request->position;
        $user->about = $request->about;
        $user->twitter = $request->twitter;
        $user->instagram = $request->instagram;
        $user->tiktok = $request->tiktok;
        $user->linkedin = $request->linkedin;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photoName = Str::slug($request->name) . "-" . time() . "." . $photo->getClientOriginalExtension();
            $photoPath = $photo->storeAs('uploads/user', $photoName, 'public');
            $user->photo = $photoPath;
        }
        $user->save();

        if ($request->role_admin) {
            $user->assignRole('admin');
        }

        Alert::success('Success', __('create_data'));
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
            'name' => 'required',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png',
            'position' => 'nullable',
            'about' => 'nullable',
            'twitter' => 'nullable|url',
            'instagram' => 'nullable|url',
            'tiktok' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'email' => 'required|email|unique:users,email,' . $id,
        ]);

        if ($validator->fails()) {
            Alert::error('Error', $validator->errors()->all());
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $user = User::find($id);
        $user->name = $request->name;
        $user->position = $request->position;
        $user->about = $request->about;
        $user->twitter = $request->twitter;
        $user->instagram = $request->instagram;
        $user->tiktok = $request->tiktok;
        $user->linkedin = $request->linkedin;
        $user->email = $request->email;
        if ($request->password) {
            $user->password = bcrypt($request->password);
        }
        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photoName = Str::slug($request->name) . "-" . time() . "." . $photo->getClientOriginalExtension();
            $photoPath = $photo->storeAs('uploads/user', $photoName, 'public');
            $user->photo = $photoPath;
        }
        $user->save();

        if ($request->role_admin) {
            $user->assignRole('admin');
        } else {
            $user->removeRole('admin');
        }

        Alert::success('Success', __('update_data'));
        return redirect()->route('back.user.index')->with('success', 'Data pengguna berhasil diubah');
    }

    public function delete($id)
    {
        $user = User::find($id);
        if ($user->photo) {
            Storage::delete('public/' . $user->photo);
        }
        $user->delete();

        Alert::success('Success', __('delete_data'));
        return redirect()->route('back.user.index')->with('success', 'Data pengguna berhasil dihapus');
    }
}
