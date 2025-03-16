<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\UmrahFinance;
use App\Models\UmrahJamaah;
use App\Models\UmrahPackage;
use App\Models\UmrahPackageItinerary;
use App\Models\UmrahSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
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

    //Schedule

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
            'list_umrah_schedule' => UmrahSchedule::withCount([
                'jamaah as quad_count' => function ($query) {
                    $query->where('package_type', 'quad');
                },
                'jamaah as triple_count' => function ($query) {
                    $query->where('package_type', 'triple');
                },
                'jamaah as double_count' => function ($query) {
                    $query->where('package_type', 'double');
                }
            ])->latest()->get()
        ];

        // return response()->json($data);
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
        $schedule = UmrahSchedule::with('umrahPackage')->withCount([
            'jamaah as quad_count' => function ($query) {
                $query->where('package_type', 'quad');
            },
            'jamaah as triple_count' => function ($query) {
                $query->where('package_type', 'triple');
            },
            'jamaah as double_count' => function ($query) {
                $query->where('package_type', 'double');
            }
        ])->findOrFail($id);
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

    public function umrahScheduleJamaah($id)
    {
        $schedule = UmrahSchedule::with('umrahPackage')->withCount([
            'jamaah as quad_count' => function ($query) {
                $query->where('package_type', 'quad');
            },
            'jamaah as triple_count' => function ($query) {
                $query->where('package_type', 'triple');
            },
            'jamaah as double_count' => function ($query) {
                $query->where('package_type', 'double');
            }
        ])->findOrFail($id);
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
                    'name' => 'Jamaah',
                    'link' => route('back.umrah.schedule.jamaah', $id)
                ]
            ],
            'schedule' => $schedule,
            'list_jamaah' => UmrahJamaah::where('umrah_schedule_id', $id)
            ->withSum([ 'umrahJamaahPayments as total_payment' => function ($query) {
                $query->where('status', 'approved');
            }], 'amount')
            ->get()
        ];

        // return response()->json($data);
        return view('back.pages.umrah.schedule.detail-jamaah', $data);
    }

    public function umrahScheduleJamaahDetail($id, $code)
    {
        $schedule = UmrahSchedule::with('umrahPackage')->withCount([
            'jamaah as quad_count' => function ($query) {
                $query->where('package_type', 'quad');
            },
            'jamaah as triple_count' => function ($query) {
                $query->where('package_type', 'triple');
            },
            'jamaah as double_count' => function ($query) {
                $query->where('package_type', 'double');
            }
        ])->findOrFail($id);
        $jamaah = UmrahJamaah::where('umrah_schedule_id', $id)->where('code', $code)->first();
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
                    'name' => 'Jamaah',
                    'link' => route('back.umrah.schedule.jamaah', $id)
                ],
                [
                    'name' => 'Detail',
                    'link' => route('back.umrah.schedule.jamaah.detail', [$id, $code])
                ]
            ],
            'schedule' => $schedule,
            'jamaah' => $jamaah,
            'payments' => $jamaah->umrahJamaahPayments
        ];

        return view('back.pages.umrah.schedule.jamaah', $data);
    }

    public function umrahScheduleJamaahUpdate(Request $request, $id, $code)
    {
        $validator =  Validator::make($request->all(), [
            'nik' => 'required',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg',
            'name' => 'required|string',
            'birthplace' => 'required|string',
            'birthdate' => 'required|date',
            'gender' => 'required|in:laki-laki,perempuan',
            'address' => 'required|string',
            'phone' => 'required|string',
            'file_ktp' => 'nullable|mimes:jpeg,png,jpg,pdf',
            'file_kk' => 'nullable|mimes:jpeg,png,jpg,pdf',
            'file_paspor' => 'nullable|mimes:jpeg,png,jpg,pdf',
            'discount' => 'nullable|numeric',
        ], [
            'nik.required' => 'NIK wajib diisi',
            'photo.required' => 'Foto wajib diisi',
            'photo.image' => 'Foto harus berupa gambar',
            'photo.mimes' => 'Foto harus berformat jpeg, png, jpg',
            'name.required' => 'Nama wajib diisi',
            'name.string' => 'Nama harus berupa huruf',
            'birthplace.required' => 'Tempat lahir wajib diisi',
            'birthplace.string' => 'Tempat lahir harus berupa huruf',
            'birthdate.required' => 'Tanggal lahir wajib diisi',
            'birthdate.date' => 'Tanggal lahir harus berupa tanggal',
            'gender.required' => 'Jenis kelamin wajib diisi',
            'gender.in' => 'Jenis kelamin harus berupa laki-laki atau perempuan',
            'address.required' => 'Alamat wajib diisi',
            'address.string' => 'Alamat harus berupa huruf',
            'phone.required' => 'Nomor telepon wajib diisi',
            'phone.string' => 'Nomor telepon harus berupa huruf',
            'file_ktp.image' => 'File KTP harus berupa gambar',
            'file_ktp.mimes' => 'File KTP harus berformat jpeg, png, jpg, pdf',
            'file_kk.image' => 'File KK harus berupa gambar',
            'file_kk.mimes' => 'File KK harus berformat jpeg, png, jpg, pdf',
            'file_paspor.image' => 'File Paspor harus berupa gambar',
            'file_paspor.mimes' => 'File Paspor harus berformat jpeg, png, jpg, pdf',
            'discount.numeric' => 'Diskon harus berupa angka',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data tidak valid');
        }

        $umrah_schedule = UmrahSchedule::find($id);
        $umrah_jamaah = UmrahJamaah::where('umrah_schedule_id', $id)->where('code', $code)->first();
        $umrah_jamaah->nik = $request->nik;
        $umrah_jamaah->name = $request->name;
        $umrah_jamaah->birthplace = $request->birthplace;
        $umrah_jamaah->birthdate = $request->birthdate;
        $umrah_jamaah->gender = $request->gender;
        $umrah_jamaah->address = $request->address;
        $umrah_jamaah->phone = $request->phone;
        $umrah_jamaah->discount = $request->discount;

        if ($request->hasFile('photo')) {
            if ($umrah_jamaah->photo) {
                Storage::delete('public/' . $umrah_jamaah->photo);
            }
            $photo = $request->file('photo');
            $photo_name = 'photo-' . $umrah_jamaah->nik . '-' . time() . '.' . $photo->getClientOriginalExtension();
            $umrah_jamaah->photo = $photo->storeAs('umrah/jamaah', $photo_name, 'public');
        }

        if ($request->hasFile('file_ktp')) {
            if ($umrah_jamaah->file_ktp) {
                Storage::delete('public/' . $umrah_jamaah->file_ktp);
            }
            $file_ktp = $request->file('file_ktp');
            $file_ktp_name = 'ktp-' . $umrah_jamaah->nik . '-' . time() . '.' . $file_ktp->getClientOriginalExtension();
            $umrah_jamaah->file_ktp = $file_ktp->storeAs('umrah/jamaah', $file_ktp_name, 'public');
        }

        if ($request->hasFile('file_kk')) {
            if ($umrah_jamaah->file_kk) {
                Storage::delete('public/' . $umrah_jamaah->file_kk);
            }
            $file_kk = $request->file('file_kk');
            $file_kk_name = 'kk-' . $umrah_jamaah->nik . '-' . time() . '.' . $file_kk->getClientOriginalExtension();
            $umrah_jamaah->file_kk = $file_kk->storeAs('umrah/jamaah', $file_kk_name, 'public');
        }

        if ($request->hasFile('file_paspor')) {
            if ($umrah_jamaah->file_paspor) {
                Storage::delete('public/' . $umrah_jamaah->file_paspor);
            }
            $file_paspor = $request->file('file_paspor');
            $file_paspor_name = 'paspor-' . $umrah_jamaah->nik . '-' . time() . '.' . $file_paspor->getClientOriginalExtension();
            $umrah_jamaah->file_paspor = $file_paspor->storeAs('umrah/jamaah', $file_paspor_name, 'public');
        }

        $umrah_jamaah->save();

        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    public function UmrahScheduleFinance($id)
    {
        $schedule = UmrahSchedule::with('umrahPackage')->withCount([
            'jamaah as quad_count' => function ($query) {
                $query->where('package_type', 'quad');
            },
            'jamaah as triple_count' => function ($query) {
                $query->where('package_type', 'triple');
            },
            'jamaah as double_count' => function ($query) {
                $query->where('package_type', 'double');
            }
        ])->findOrFail($id);
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
                    'name' => 'Keuangan',
                    'link' => route('back.umrah.schedule.finance', $id)
                ]
            ],
            'schedule' => $schedule,
            'list_finance' => UmrahFinance::where('umrah_schedule_id', $id)->get(),
            'total_income' => UmrahFinance::where('umrah_schedule_id', $id)->where('type', 'income')->sum('amount'),
            'total_expense' => UmrahFinance::where('umrah_schedule_id', $id)->where('type', 'expense')->sum('amount')
        ];

        return view('back.pages.umrah.schedule.detail-finance', $data);
    }

    public function UmrahScheduleFinanceStore(Request $request, $id)
    {
        $validator =  Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'nullable',
            'amount' => 'required',
            'type' => 'required',
            'date' => 'required',
            'payment_method' => 'nullable',
            'payment_reference' => 'nullable',
            'payment_note' => 'nullable',
            'attachment' => 'nullable|mimes:jpeg,png,jpg,pdf',
        ], [
            'name.required' => 'Nama wajib diisi',
            'description.required' => 'Deskripsi wajib diisi',
            'amount.required' => 'Jumlah wajib diisi',
            'type.required' => 'Tipe wajib diisi',
            'date.required' => 'Tanggal wajib diisi',
            'date.date' => 'Tanggal harus berupa tanggal',
            'payment_method.required' => 'Metode pembayaran wajib diisi',
            'payment_reference.required' => 'Referensi pembayaran wajib diisi',
            'payment_note.required' => 'Catatan pembayaran wajib diisi',
            'attachment.required' => 'Bukti pembayaran wajib diisi',
            'attachment.mimes' => 'Bukti pembayaran harus berformat jpeg, png, jpg, pdf',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', implode(', ', $validator->errors()->all()));
        }

        // $umrah_schedule = UmrahSchedule::find($id);
        $umrah_finance = new UmrahFinance();
        $umrah_finance->umrah_schedule_id = $id;
        $umrah_finance->name = $request->name;
        $umrah_finance->description = $request->description;
        $umrah_finance->amount = $request->amount;
        $umrah_finance->type = $request->type;
        $umrah_finance->date = $request->date;
        $umrah_finance->payment_method = $request->payment_method;
        $umrah_finance->payment_reference = $request->payment_reference;
        $umrah_finance->payment_note = $request->payment_note;
        $umrah_finance->created_by = Auth::user()->id;
        $umrah_finance->updated_by = Auth::user()->id;

        if ($request->hasFile('attachment')) {
            $attachment = $request->file('attachment');
            $attachment_name = 'attachment-' . Str::slug($umrah_finance->name, '-') . '-' . time() . '.' . $attachment->getClientOriginalExtension();
            $umrah_finance->attachment = $attachment->storeAs('umrah/finance', $attachment_name, 'public');
        }

        $umrah_finance->save();

        return redirect()->back()->with('success', 'Data berhasil disimpan');

    }

    public function UmrahScheduleFinanceUpdate(Request $request, $id, $finance_id)
    {
        $validator =  Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'nullable',
            'amount' => 'required',
            'type' => 'required',
            'date' => 'required',
            'payment_method' => 'nullable',
            'payment_reference' => 'nullable',
            'payment_note' => 'nullable',
            'attachment' => 'nullable|mimes:jpeg,png,jpg,pdf',
        ], [
            'name.required' => 'Nama wajib diisi',
            'description.required' => 'Deskripsi wajib diisi',
            'amount.required' => 'Jumlah wajib diisi',
            'type.required' => 'Tipe wajib diisi',
            'date.required' => 'Tanggal wajib diisi',
            'date.date' => 'Tanggal harus berupa tanggal',
            'payment_method.required' => 'Metode pembayaran wajib diisi',
            'payment_reference.required' => 'Referensi pembayaran wajib diisi',
            'payment_note.required' => 'Catatan pembayaran wajib diisi',
            'attachment.required' => 'Bukti pembayaran wajib diisi',
            'attachment.mimes' => 'Bukti pembayaran harus berformat jpeg, png, jpg, pdf',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', implode(', ', $validator->errors()->all()));
        }

        // $umrah_schedule = UmrahSchedule::find($id);
        $umrah_finance = UmrahFinance::find($finance_id);
        $umrah_finance->name = $request->name;
        $umrah_finance->description = $request->description;
        $umrah_finance->amount = $request->amount;
        $umrah_finance->type = $request->type;
        $umrah_finance->date = $request->date;
        $umrah_finance->payment_method = $request->payment_method;
        $umrah_finance->payment_reference = $request->payment_reference;
        $umrah_finance->payment_note = $request->payment_note;
        $umrah_finance->updated_by = Auth::user()->id;

        if ($request->hasFile('attachment')) {
            if ($umrah_finance->attachment) {
                Storage::delete('public/' . $umrah_finance->attachment);
            }
            $attachment = $request->file('attachment');
            $attachment_name = 'attachment-' . Str::slug($umrah_finance->name, '-') . '-' . time() . '.' . $attachment->getClientOriginalExtension();
            $umrah_finance->attachment = $attachment->storeAs('umrah/finance', $attachment_name, 'public');
        }

        $umrah_finance->save();

        return redirect()->back()->with('success', 'Data berhasil disimpan');

    }

    public function UmrahScheduleFinanceDestroy($id, $finance_id)
    {
        $umrah_finance = UmrahFinance::find($finance_id);
        if ($umrah_finance->attachment) {
            Storage::delete('public/' . $umrah_finance->attachment);
        }
        $umrah_finance->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus');
    }
}
