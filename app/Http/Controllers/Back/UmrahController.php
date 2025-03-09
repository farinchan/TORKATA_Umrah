<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\UmrahPackage;
use App\Models\UmrahPackageItinerary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class UmrahController extends Controller
{
    public function umrahPackageIIndex()
    {
        $data = [
            'title' => 'Paket Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Paket Umrah',
                    'link' => route('back.umrah.package.index')
                ]

                ],
            'list_umrah_package' => UmrahPackage::all()
        ];

        return view('back.pages.umrah.package.index', $data);
    }

    public function umrahPackageCreate()
    {
        $data = [
            'title' => 'Tambah Paket Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Paket Umrah',
                    'link' => route('back.umrah.package.index')
                ],
                [
                    'name' => 'Tambah',
                    'link' => route('back.umrah.package.create')
                ]
            ]
        ];

        return view('back.pages.umrah.package.create', $data);
    }

    public function uploadFile(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'image' => 'required|array',
        ], [
            'required' => ':attribute tidak boleh kosong',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->all()
            ], 400);
        }
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $file) {
                $file->storeAs('umrah/image', Str::random(16) . "." . $file->getClientOriginalExtension(), 'public');
            }

            return response()->json([
                'status' => 'success',
                'message' => 'File berhasil diupload'
            ]);
        }
    }

    public function umrahPackageStore(Request $request)
    {
        // dd($request->all());
        $validator =  Validator::make($request->all(), [
            'banner' => 'nullable|image|mimes:jpg,jpeg,png',
            'name' => 'required',
            'days' => 'required|numeric',
            'description' => 'nullable',
            'facilities' => 'required',
            'exclude' => 'required',
            'status' => 'required',
            'meta_keywords' => 'nullable',
            'itinerary' => 'array',
            'itinerary.*.itinerary_day' => 'nullable',
            'itinerary.*.itinerary_description' => 'nullable',
        ], [
            'name.required' => 'Nama harus diisi',
            'days.required' => 'Hari harus diisi',
            'days.numeric' => 'Hari harus berupa angka',
            'description.required' => 'Deskripsi harus diisi',
            'facilities.required' => 'Fasilitas harus diisi',
            'exclude.required' => 'Yang tidak termasuk harus diisi',
            'status.required' => 'Status harus diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data gagal disimpan');
        }

        $umrah_package = new UmrahPackage();
        $umrah_package->name = $request->name;
        $umrah_package->slug = Str::slug($request->name);
        $umrah_package->days = $request->days;
        $umrah_package->description = $request->description;
        $umrah_package->facilities = $request->facilities;
        $umrah_package->exclude = $request->exclude;
        $umrah_package->status = $request->status;
        $umrah_package->meta_title = $request->name;
        $umrah_package->meta_description = Str::limit(strip_tags($request->description), 160);
        $umrah_package->meta_keywords = 'umrah, paket umrah, ' . implode(", ", array_column(json_decode($request->meta_keywords), 'value')) . ', ' . $request->name;

        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $filepath = $file->storeAs('umrah/banner', $filename, 'public');
            $umrah_package->banner = $filepath;
        }

        $umrah_package->save();

        if ($request->itinerary) {
            foreach ($request->itinerary as $itinerary) {
                if (!isset($itinerary['itinerary_day'])) {
                    continue;
                }
                $umrah_package->itineraries()->create([
                    'umrah_package_id' => $umrah_package->id,
                    'day' => $itinerary['itinerary_day'],
                    'description' => $itinerary['itinerary_description']
                ]);
            }
        }

        return redirect()->route('back.umrah.package.index')->with('success', 'Data berhasil disimpan');
    }

    public function umrahPackageEdit($id)
    {
        $data = [
            'title' => 'Edit Paket Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Paket Umrah',
                    'link' => route('back.umrah.package.index')
                ],
                [
                    'name' => 'Edit',
                    'link' => route('back.umrah.package.edit', $id)
                ]
            ],
            'package' => UmrahPackage::with('itineraries')->findOrFail($id)
        ];

        return view('back.pages.umrah.package.edit', $data);
    }

    public function umrahPackageUpdate(Request $request, $id)
    {
        $validator =  Validator::make($request->all(), [
            'banner' => 'nullable|image|mimes:jpg,jpeg,png',
            'name' => 'required',
            'days' => 'required|numeric',
            'description' => 'required',
            'facilities' => 'required',
            'exclude' => 'required',
            'status' => 'required',
            'meta_keywords' => 'nullable',
            'itinerary' => 'array',
            'itinerary.*.itinerary_day' => 'nullable',
            'itinerary.*.itinerary_description' => 'nullable',
        ], [
            'name.required' => 'Nama harus diisi',
            'days.required' => 'Hari harus diisi',
            'days.numeric' => 'Hari harus berupa angka',
            'description.required' => 'Deskripsi harus diisi',
            'facilities.required' => 'Fasilitas harus diisi',
            'exclude.required' => 'Yang tidak termasuk harus diisi',
            'status.required' => 'Status harus diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data gagal disimpan');
        }

        $umrah_package = UmrahPackage::findOrFail($id);
        $umrah_package->name = $request->name;
        $umrah_package->slug = Str::slug($request->name);
        $umrah_package->days = $request->days;
        $umrah_package->description = $request->description;
        $umrah_package->facilities = $request->facilities;
        $umrah_package->exclude = $request->exclude;
        $umrah_package->status = $request->status;
        $umrah_package->meta_title = $request->name;
        $umrah_package->meta_description = Str::limit(strip_tags($request->description), 160);
        $umrah_package->meta_keywords = 'umrah, paket umrah, ' . implode(", ", array_column(json_decode($request->meta_keywords), 'value')) . ', ' . $request->name;

        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $filepath = $file->storeAs('umrah/banner', $filename, 'public');
            $umrah_package->banner = $filepath;
        }

        $umrah_package->save();

        if ($request->delete_itinerary) {
            $delete_itinerary = json_decode($request->delete_itinerary, true);
            foreach ($delete_itinerary as $itinerary) {
                UmrahPackageItinerary::where('id', $itinerary)->delete();
            }
        }

        if ($request->itinerary) {
            foreach ($request->itinerary as $itinerary) {
                if (!isset($itinerary['itinerary_day'])) {
                    continue;
                }
                if (isset($itinerary['itinerary_id'])) {
                    $umrah_package->itineraries()->where('id', $itinerary['itinerary_id'])->update([
                        'day' => $itinerary['itinerary_day'],
                        'description' => $itinerary['itinerary_description']
                    ]);
                } else {
                    $umrah_package->itineraries()->create([
                        'umrah_package_id' => $umrah_package->id,
                        'day' => $itinerary['itinerary_day'],
                        'description' => $itinerary['itinerary_description']
                    ]);
                }
            }
        }


        return redirect()->route('back.umrah.package.index')->with('success', 'Data berhasil disimpan');
    }

    public function umrahPackageDestroy($id)
    {
        $umrah_package = UmrahPackage::findOrFail($id);
        $umrah_package->delete();

        return redirect()->route('back.umrah.package.index')->with('success', 'Data berhasil dihapus');
    }
}
