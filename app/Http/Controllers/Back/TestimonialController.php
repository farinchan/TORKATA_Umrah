<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use RealRashid\SweetAlert\Facades\Alert;
use Illuminate\Support\Str;

class TestimonialController extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Testimonial List',
            'menu' => 'Post',
            'sub_menu' => 'Testimonial',
            'list_testimonial' => Testimonial::latest()->get(),
        ];

        return view('back.pages.testimonial.index', $data);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:20148',
            'name' => 'required',
            'position' => 'required',
            'company' => 'required',
            'content' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $testimonial = new Testimonial();
        $testimonial->name = $request->name;
        $testimonial->position = $request->position;
        $testimonial->company = $request->company;
        $testimonial->content = $request->content;
        $testimonial->status = 1;

        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photo_name = Str::random(10) . '.' . $photo->getClientOriginalExtension();
            $testimonial->photo = $photo->storeAs('testimonial', $photo_name, 'public');
        }

        $testimonial->save();

        return redirect()->route('back.testimonial.index')->with('success', 'Testimonial telah ditambahkan');
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:20148',
            'name' => 'required',
            'position' => 'required',
            'company' => 'required',
            'content' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', $validator->errors()->all());
        }

        $testimonial = Testimonial::findOrFail($id);
        $testimonial->name = $request->name;
        $testimonial->position = $request->position;
        $testimonial->company = $request->company;
        $testimonial->content = $request->content;

        if ($request->hasFile('photo')) {
            if ($testimonial->photo && Storage::disk('public')->exists($testimonial->photo)) {
                Storage::delete('public/' . $testimonial->photo);
            }
            $photo = $request->file('photo');
            $photo_name = Str::random(10) . '.' . $photo->getClientOriginalExtension();
            $testimonial->photo = $photo->storeAs('testimonial', $photo_name, 'public');
        }

        $testimonial->save();

        return redirect()->route('back.testimonial.index')->with('success', 'Testimonial telah diubah');
    }

    public function destroy($id)
    {
        $testimonial = Testimonial::findOrFail($id);
        if ($testimonial->photo && Storage::disk('public')->exists($testimonial->photo)) {
            Storage::delete('public/' . $testimonial->photo);
        }
        $testimonial->delete();

        return redirect()->route('back.testimonial.index')->with('success', 'Testimonial telah dihapus');
    }

    public function changeStatus(Request $request)
    {
        if (!$request->id) {
            return response()->json(['status' => 'error', 'message' => 'ID not found'], 404);
        }
        $testimonial = Testimonial::findOrFail($request->id);
        $testimonial->status = !$testimonial->status;
        $testimonial->save();

        return response()->json(['status' => 'success', 'message' => 'Status has been changed']);
    }
}
