<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\UmrahPackage;
use App\Models\UmrahPackageItinerary;
use App\Models\UmrahSchedule;
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

    public function umrahScheduleIndex()
    {
        $data = [
            'title' => 'Jadwal Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Jadwal Umrah',
                    'link' => route('back.umrah.schedule.index')
                ]

            ],
            'list_umrah_package' => UmrahPackage::where('status', 'enabled')->get(),
            'list_umrah_schedule' => UmrahSchedule::with('umrahPackage')->latest()->get()
        ];

        return view('back.pages.umrah.schedule.index', $data);
    }

    public function umrahSchedulestore(Request $request)
    {
        $validator =  Validator::make($request->all(), [
            'umrah_package_id' => 'required',
            'name' => 'required',
            'quad_quota' => 'nullable',
            'quad_price' => 'nullable',
            'triple_quota' => 'nullable',
            'triple_price' => 'nullable',
            'double_quota' => 'nullable',
            'double_price' => 'nullable',
            'departure' => 'nullable',
            'hotel_makka' => 'nullable',
            'hotel_madinah' => 'nullable',
            'airline' => 'nullable',
        ], [
            'umrah_package_id.required' => 'Paket Umrah harus diisi',
            'name.required' => 'Nama harus diisi',
            'status.required' => 'Status harus diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data gagal disimpan');
        }

        $umrah_schedule = new UmrahSchedule();
        $umrah_schedule->umrah_package_id = $request->umrah_package_id;
        $umrah_schedule->name = $request->name;
        $umrah_schedule->quad_quota = $request->quad_quota;
        $umrah_schedule->quad_price = $request->quad_price;
        $umrah_schedule->triple_quota = $request->triple_quota;
        $umrah_schedule->triple_price = $request->triple_price;
        $umrah_schedule->double_quota = $request->double_quota;
        $umrah_schedule->double_price = $request->double_price;
        $umrah_schedule->departure = $request->departure;
        $umrah_schedule->hotel_makka = $request->hotel_makka;
        $umrah_schedule->hotel_madinah = $request->hotel_madinah;
        $umrah_schedule->airline = $request->airline;
        $umrah_schedule->status = 'aktif';

        $umrah_schedule->save();

        return redirect()->route('back.umrah.schedule.index')->with('success', 'Data berhasil disimpan');
    }

    public function umrahScheduleSetting($id)
    {
        $schedule = UmrahSchedule::with('umrahPackage')->findOrFail($id);
        $data = [
            'title' => $schedule->name,
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Jadwal Umrah',
                    'link' => route('back.umrah.schedule.index')
                ],
                [
                    'name' => 'Setting',
                    'link' => route('back.umrah.schedule.setting', $id)
                ]
            ],
            'list_umrah_package' => UmrahPackage::where('status', 'enabled')->get(),
            'schedule' => $schedule
        ];

        return view('back.pages.umrah.schedule.detail-setting', $data);
    }

    public function umrahScheduleUpdate(Request $request, $id)
    {
        $validator =  Validator::make($request->all(), [
            'umrah_package_id' => 'required',
            'name' => 'required',
            'quad_quota' => 'nullable',
            'quad_price' => 'nullable',
            'triple_quota' => 'nullable',
            'triple_price' => 'nullable',
            'double_quota' => 'nullable',
            'double_price' => 'nullable',
            'departure' => 'nullable',
            'hotel_makka' => 'nullable',
            'hotel_madinah' => 'nullable',
            'airline' => 'nullable',
            'status' => 'required',
        ], [
            'umrah_package_id.required' => 'Paket Umrah harus diisi',
            'name.required' => 'Nama harus diisi',
            'status.required' => 'Status harus diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data gagal disimpan');
        }

        $umrah_schedule = UmrahSchedule::findOrFail($id);
        $umrah_schedule->umrah_package_id = $request->umrah_package_id;
        $umrah_schedule->name = $request->name;
        $umrah_schedule->quad_quota = $request->quad_quota;
        $umrah_schedule->quad_price = $request->quad_price;
        $umrah_schedule->triple_quota = $request->triple_quota;
        $umrah_schedule->triple_price = $request->triple_price;
        $umrah_schedule->double_quota = $request->double_quota;
        $umrah_schedule->double_price = $request->double_price;
        $umrah_schedule->departure = $request->departure;
        $umrah_schedule->hotel_makka = $request->hotel_makka;
        $umrah_schedule->hotel_madinah = $request->hotel_madinah;
        $umrah_schedule->airline = $request->airline;
        $umrah_schedule->status = $request->status;

        $umrah_schedule->save();

        return redirect()->route('back.umrah.schedule.setting', $id)->with('success', 'Data berhasil disimpan');
    }

    public function umrahScheduleDestroy($id)
    {
        $umrah_schedule = UmrahSchedule::findOrFail($id);
        $umrah_schedule->delete();

        return redirect()->route('back.umrah.schedule.index')->with('success', 'Data berhasil dihapus');
    }
}
