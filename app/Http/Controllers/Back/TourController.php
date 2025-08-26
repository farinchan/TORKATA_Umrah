<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\SettingWebsite;
use App\Models\TourFinance;
use App\Models\TourPackage;
use App\Models\TourPackageImage;
use App\Models\TourPackageItinerary;
use App\Models\TourSchedule;
use App\Models\TourUser;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class TourController extends Controller
{
    public function tourPackageIIndex()
    {
        $data = [
            'title' => 'Paket Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Paket Tour',
                    'link' => route('back.tour.package.index')
                ]

            ],
            'list_tour_package' => TourPackage::all()
        ];

        return view('back.pages.tour.package.index', $data);
    }

    public function tourPackageCreate()
    {
        $data = [
            'title' => 'Tambah Paket Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Paket Tour',
                    'link' => route('back.tour.package.index')
                ],
                [
                    'name' => 'Tambah',
                    'link' => route('back.tour.package.create')
                ]
            ]
        ];

        return view('back.pages.tour.package.create', $data);
    }

    public function tourPackageStore(Request $request)
    {
        // dd($request->all());
        $validator =  Validator::make($request->all(), [
            'banner' => 'nullable|image|mimes:jpg,jpeg,png',
            'name' => 'required',
            'days' => 'required|numeric',
            'description' => 'nullable',
            'file_brochure' => 'nullable|mimes:pdf',
            'facilities' => 'required',
            'exclude' => 'required',
            'status' => 'required',
            'meta_keywords' => 'nullable',
            'itinerary' => 'array',
            'itinerary.*.itinerary_day' => 'nullable',
            'itinerary.*.itinerary_description' => 'nullable',
        ], [
            'banner.image' => 'Banner harus berupa gambar',
            'banner.mimes' => 'Banner harus berupa file jpg, jpeg, png',
            'file_brochure.mimes' => 'File brochure harus berupa file pdf',
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

        $tour_package = new TourPackage();
        $tour_package->name = $request->name;
        $tour_package->slug = Str::slug($request->name);
        $tour_package->days = $request->days;
        $tour_package->description = $request->description;
        $tour_package->facilities = $request->facilities;
        $tour_package->exclude = $request->exclude;
        $tour_package->status = $request->status;
        $tour_package->meta_title = $request->name;
        $tour_package->meta_description = Str::limit(strip_tags($request->description), 160);
        $tour_package->meta_keywords = 'tour, paket tour, ' . implode(", ", array_column(json_decode($request->meta_keywords), 'value')) . ', ' . $request->name;

        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $filepath = $file->storeAs('tour/banner', $filename, 'public');
            $tour_package->banner = $filepath;
        }

        if ($request->hasFile('file_brochure')) {
            $file = $request->file('file_brochure');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $filepath = $file->storeAs('tour/brochure', $filename, 'public');
            $tour_package->file_brochure = $filepath;
        }

        $tour_package->save();

        if ($request->itinerary) {
            foreach ($request->itinerary as $itinerary) {
                if (!isset($itinerary['itinerary_day'])) {
                    continue;
                }
                $tour_package->itineraries()->create([
                    'tour_package_id' => $tour_package->id,
                    'day' => $itinerary['itinerary_day'],
                    'description' => $itinerary['itinerary_description']
                ]);
            }
        }

        return redirect()->route('back.tour.package.index')->with('success', 'Data berhasil disimpan');
    }

    public function tourPackageEdit($id)
    {
        $data = [
            'title' => 'Edit Paket Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Paket Tour',
                    'link' => route('back.tour.package.index')
                ],
                [
                    'name' => 'Edit',
                    'link' => route('back.tour.package.edit', $id)
                ]
            ],
            'package' => TourPackage::with('itineraries')->findOrFail($id)
        ];

        return view('back.pages.tour.package.edit', $data);
    }

    public function tourPackageUpdate(Request $request, $id)
    {
        $validator =  Validator::make($request->all(), [
            'banner' => 'nullable|image|mimes:jpg,jpeg,png',
            'name' => 'required',
            'days' => 'required|numeric',
            'description' => 'required',
            'file_brochure' => 'nullable|mimes:pdf',
            'facilities' => 'required',
            'exclude' => 'required',
            'status' => 'required',
            'meta_keywords' => 'nullable',
            'itinerary' => 'array',
            'itinerary.*.itinerary_day' => 'nullable',
            'itinerary.*.itinerary_description' => 'nullable',
        ], [
            'banner.image' => 'Banner harus berupa gambar',
            'banner.mimes' => 'Banner harus berupa file jpg, jpeg, png',
            'file_brochure.mimes' => 'File brochure harus berupa file pdf',
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

        $tour_package = TourPackage::findOrFail($id);
        $tour_package->name = $request->name;
        $tour_package->slug = Str::slug($request->name);
        $tour_package->days = $request->days;
        $tour_package->description = $request->description;
        $tour_package->facilities = $request->facilities;
        $tour_package->exclude = $request->exclude;
        $tour_package->status = $request->status;
        $tour_package->meta_title = $request->name;
        $tour_package->meta_description = Str::limit(strip_tags($request->description), 160);
        $tour_package->meta_keywords = 'tour, paket tour, ' . implode(", ", array_column(json_decode($request->meta_keywords), 'value')) . ', ' . $request->name;

        if ($request->hasFile('banner')) {
            $file = $request->file('banner');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $filepath = $file->storeAs('tour/banner', $filename, 'public');
            $tour_package->banner = $filepath;
        }

        if ($request->hasFile('file_brochure')) {
            $file = $request->file('file_brochure');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $filepath = $file->storeAs('tour/brochure', $filename, 'public');
            $tour_package->file_brochure = $filepath;
        }

        $tour_package->save();

        if ($request->delete_itinerary) {
            $delete_itinerary = json_decode($request->delete_itinerary, true);
            foreach ($delete_itinerary as $itinerary) {
                TourPackageItinerary::where('id', $itinerary)->delete();
            }
        }

        if ($request->itinerary) {
            foreach ($request->itinerary as $itinerary) {
                if (!isset($itinerary['itinerary_day'])) {
                    continue;
                }
                if (isset($itinerary['itinerary_id'])) {
                    $tour_package->itineraries()->where('id', $itinerary['itinerary_id'])->update([
                        'day' => $itinerary['itinerary_day'],
                        'description' => $itinerary['itinerary_description']
                    ]);
                } else {
                    $tour_package->itineraries()->create([
                        'tour_package_id' => $tour_package->id,
                        'day' => $itinerary['itinerary_day'],
                        'description' => $itinerary['itinerary_description']
                    ]);
                }
            }
        }


        return redirect()->route('back.tour.package.index')->with('success', 'Data berhasil disimpan');
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
                $file->storeAs('tour/image', Str::random(16) . "." . $file->getClientOriginalExtension(), 'public');
            }

            return response()->json([
                'status' => 'success',
                'message' => 'File berhasil diupload'
            ]);
        }
    }

    public function tourPackageDestroy($id)
    {
        $tour_package = TourPackage::findOrFail($id);
        $tour_package->delete();

        return redirect()->route('back.tour.package.index')->with('success', 'Data berhasil dihapus');
    }

    public function tourPackageImageUpload(Request $request, $id)
    {
        $request->validate([
            'file' => 'required|image|max:10240', // validasi file gambar
        ]);

        $tour_package_image = new TourPackageImage();
        $tour_package_image->tour_package_id = $id;
        $tour_package_image->image = $request->file('file')->storeAs('tour/package', Str::random(16) . '.' . $request->file('file')->getClientOriginalExtension(), 'public');
        $tour_package_image->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Gambar berhasil diupload',
            'image_id' => $tour_package_image->id
        ]);
    }

    public function tourPackageImageDelete(Request $request, $id, $image_id)
    {

        $tour_package_image = TourPackageImage::findOrFail($image_id);

        if (Storage::exists($tour_package_image->image)) {
            Storage::delete($tour_package_image->image);
        }
        $tour_package_image->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Gambar berhasil dihapus'
        ]);
    }

    public function tourPackageImage($id)
    {
        $tour_package_images = TourPackageImage::where('tour_package_id', $id)->get();
        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diambil',
            'images' => $tour_package_images->map(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->image,
                    'size' =>  Storage::size($item->image),
                    'url' => Storage::url($item->image),
                    'dataURL' => Storage::url($item->image),
                ];
            })
        ]);
    }

    //Schedule

    public function tourScheduleIndex()
    {
        $data = [
            'title' => 'Jadwal Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Jadwal Tour',
                    'link' => route('back.tour.schedule.index')
                ]

            ],
            'list_tour_package' => TourPackage::where('status', 'enabled')->get(),
            'list_tour_schedule' => TourSchedule::with(['tourPackage'])->latest()->get()
        ];

        // return response()->json($data);
        return view('back.pages.tour.schedule.index', $data);
    }

    public function tourSchedulestore(Request $request)
    {
        $validator =  Validator::make($request->all(), [
            'tour_package_id' => 'required',
            'name' => 'required',
            'price' => 'nullable',
            'quota' => 'nullable',
            'departure' => 'nullable',
            'hotel' => 'nullable',
            'airline' => 'nullable',
        ], [
            'tour_package_id.required' => 'Paket Tour harus diisi',
            'name.required' => 'Nama harus diisi',
            'status.required' => 'Status harus diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data gagal disimpan');
        }

        $tour_schedule = new TourSchedule();
        $tour_schedule->tour_package_id = $request->tour_package_id;
        $tour_schedule->name = $request->name;
        $tour_schedule->quota = $request->quota;
        $tour_schedule->price = $request->price;
        $tour_schedule->departure = $request->departure;
        $tour_schedule->hotel = $request->hotel;
        $tour_schedule->airline = $request->airline;
        $tour_schedule->status = 'aktif';

        $tour_schedule->save();

        return redirect()->route('back.tour.schedule.index')->with('success', 'Data berhasil disimpan');
    }

    public function tourScheduleSetting($id)
    {
        $schedule = TourSchedule::with(['tourPackage', 'tourUser'])->findOrFail($id);
        $data = [
            'title' => $schedule->name,
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Jadwal Tour',
                    'link' => route('back.tour.schedule.index')
                ],
                [
                    'name' => 'Setting',
                    'link' => route('back.tour.schedule.setting', $id)
                ]
            ],
            'list_tour_package' => TourPackage::where('status', 'enabled')->get(),
            'schedule' => $schedule
        ];

        return view('back.pages.tour.schedule.detail-setting', $data);
    }

    public function tourScheduleUpdate(Request $request, $id)
    {
        $validator =  Validator::make($request->all(), [
            'tour_package_id' => 'required',
            'name' => 'required',
            'quota' => 'nullable',
            'departure' => 'nullable',
            'hotal' => 'nullable',
            'airline' => 'nullable',
            'status' => 'required',
        ], [
            'tour_package_id.required' => 'Paket Tour harus diisi',
            'name.required' => 'Nama harus diisi',
            'status.required' => 'Status harus diisi',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data gagal disimpan');
        }

        $tour_schedule = TourSchedule::findOrFail($id);
        $tour_schedule->tour_package_id = $request->tour_package_id;
        $tour_schedule->name = $request->name;
        $tour_schedule->quota = $request->quota;
        $tour_schedule->price = $request->price;
        $tour_schedule->departure = $request->departure;
        $tour_schedule->hotel = $request->hotel;
        $tour_schedule->airline = $request->airline;
        $tour_schedule->status = $request->status;

        $tour_schedule->save();

        return redirect()->route('back.tour.schedule.setting', $id)->with('success', 'Data berhasil disimpan');
    }

    public function tourScheduleDestroy($id)
    {
        $tour_schedule = TourSchedule::findOrFail($id);
        $tour_schedule->delete();

        return redirect()->route('back.tour.schedule.index')->with('success', 'Data berhasil dihapus');
    }

    public function tourScheduleUser($id)
    {
        $schedule = TourSchedule::with(['tourPackage', 'tourUser'])->findOrFail($id);
        $data = [
            'title' => $schedule->name,
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Jadwal Tour',
                    'link' => route('back.tour.schedule.index')
                ],
                [
                    'name' => 'User',
                    'link' => route('back.tour.schedule.user', $id)
                ]
            ],
            'schedule' => $schedule,
            'list_user' => TourUser::where('tour_schedule_id', $id)
                ->withSum(['tourUserPayments as total_payment' => function ($query) {
                    $query->where('status', 'approved');
                }], 'amount')
                ->get()
        ];

        // return response()->json($data);
        return view('back.pages.tour.schedule.detail-user', $data);
    }

    public function tourScheduleUserDetail($id, $code)
    {
        $schedule = TourSchedule::with('tourPackage')->findOrFail($id);
        $user = TourUser::where('tour_schedule_id', $id)->where('code', $code)->first();
        $data = [
            'title' => $schedule->name,
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Jadwal Tour',
                    'link' => route('back.tour.schedule.index')
                ],
                [
                    'name' => 'User',
                    'link' => route('back.tour.schedule.user', $id)
                ],
                [
                    'name' => 'Detail',
                    'link' => route('back.tour.schedule.user.detail', [$id, $code])
                ]
            ],
            'schedule' => $schedule,
            'user' => $user,
            'payments' => $user->tourUserPayments
        ];

        return view('back.pages.tour.schedule.user', $data);
    }

    public function tourScheduleUserInvoice($id, $code)
    {
        $schedule = TourSchedule::with('tourPackage')->findOrFail($id);
        $user = TourUser::where('tour_schedule_id', $id)->where('code', $code)->first();

        // Calculate package price from schedule
        $package_price = $schedule->price;

        $data = [
            'schedule' => $schedule,
            'user' => $user,
            'payments' => $user->tourUserPayments->where('status', 'approved'),
            'setting' => SettingWebsite::first(),
            'package_price' => $package_price
        ];

        $pdf = Pdf::loadView('back.pages.tour.schedule.user-invoice-pdf', $data);

        return $pdf->stream('invoice-' . $user->code . '.pdf');
    }

    public function tourScheduleUserUpdate(Request $request, $id, $code)
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

        $tour_schedule = TourSchedule::find($id);
        $tour_user = TourUser::where('tour_schedule_id', $id)->where('code', $code)->first();
        $tour_user->nik = $request->nik;
        $tour_user->name = $request->name;
        $tour_user->birthplace = $request->birthplace;
        $tour_user->birthdate = $request->birthdate;
        $tour_user->gender = $request->gender;
        $tour_user->address = $request->address;
        $tour_user->phone = $request->phone;
        $tour_user->discount = $request->discount;

        if ($request->hasFile('photo')) {
            if ($tour_user->photo) {
                Storage::delete('public/' . $tour_user->photo);
            }
            $photo = $request->file('photo');
            $photo_name = 'photo-' . $tour_user->nik . '-' . time() . '.' . $photo->getClientOriginalExtension();
            $tour_user->photo = $photo->storeAs('tour/user', $photo_name, 'public');
        }

        if ($request->hasFile('file_ktp')) {
            if ($tour_user->file_ktp) {
                Storage::delete('public/' . $tour_user->file_ktp);
            }
            $file_ktp = $request->file('file_ktp');
            $file_ktp_name = 'ktp-' . $tour_user->nik . '-' . time() . '.' . $file_ktp->getClientOriginalExtension();
            $tour_user->file_ktp = $file_ktp->storeAs('tour/user', $file_ktp_name, 'public');
        }

        if ($request->hasFile('file_kk')) {
            if ($tour_user->file_kk) {
                Storage::delete('public/' . $tour_user->file_kk);
            }
            $file_kk = $request->file('file_kk');
            $file_kk_name = 'kk-' . $tour_user->nik . '-' . time() . '.' . $file_kk->getClientOriginalExtension();
            $tour_user->file_kk = $file_kk->storeAs('tour/user', $file_kk_name, 'public');
        }

        if ($request->hasFile('file_paspor')) {
            if ($tour_user->file_paspor) {
                Storage::delete('public/' . $tour_user->file_paspor);
            }
            $file_paspor = $request->file('file_paspor');
            $file_paspor_name = 'paspor-' . $tour_user->nik . '-' . time() . '.' . $file_paspor->getClientOriginalExtension();
            $tour_user->file_paspor = $file_paspor->storeAs('tour/user', $file_paspor_name, 'public');
        }

        $tour_user->save();

        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    public function TourScheduleFinance($id)
    {
        $schedule = $schedule = TourSchedule::with(['tourPackage', 'tourUser'])->findOrFail($id);
        $data = [
            'title' => $schedule->name,
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Jadwal Tour',
                    'link' => route('back.tour.schedule.index')
                ],
                [
                    'name' => 'Keuangan',
                    'link' => route('back.tour.schedule.finance', $id)
                ]
            ],
            'schedule' => $schedule,
            'list_finance' => TourFinance::where('tour_schedule_id', $id)->get(),
            'total_income' => TourFinance::where('tour_schedule_id', $id)->where('type', 'income')->sum('amount'),
            'total_expense' => TourFinance::where('tour_schedule_id', $id)->where('type', 'expense')->sum('amount')
        ];

        return view('back.pages.tour.schedule.detail-finance', $data);
    }

    public function TourScheduleFinanceStore(Request $request, $id)
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

        // $tour_schedule = TourSchedule::find($id);
        $tour_finance = new TourFinance();
        $tour_finance->tour_schedule_id = $id;
        $tour_finance->name = $request->name;
        $tour_finance->description = $request->description;
        $tour_finance->amount = $request->amount;
        $tour_finance->type = $request->type;
        $tour_finance->date = $request->date;
        $tour_finance->payment_method = $request->payment_method;
        $tour_finance->payment_reference = $request->payment_reference;
        $tour_finance->payment_note = $request->payment_note;
        $tour_finance->created_by = Auth::user()->id;
        $tour_finance->updated_by = Auth::user()->id;

        if ($request->hasFile('attachment')) {
            $attachment = $request->file('attachment');
            $attachment_name = 'attachment-' . Str::slug($tour_finance->name, '-') . '-' . time() . '.' . $attachment->getClientOriginalExtension();
            $tour_finance->attachment = $attachment->storeAs('tour/finance', $attachment_name, 'public');
        }

        $tour_finance->save();

        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    public function TourScheduleFinanceUpdate(Request $request, $id, $finance_id)
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

        // $tour_schedule = TourSchedule::find($id);
        $tour_finance = TourFinance::find($finance_id);
        $tour_finance->name = $request->name;
        $tour_finance->description = $request->description;
        $tour_finance->amount = $request->amount;
        $tour_finance->type = $request->type;
        $tour_finance->date = $request->date;
        $tour_finance->payment_method = $request->payment_method;
        $tour_finance->payment_reference = $request->payment_reference;
        $tour_finance->payment_note = $request->payment_note;
        $tour_finance->updated_by = Auth::user()->id;

        if ($request->hasFile('attachment')) {
            if ($tour_finance->attachment) {
                Storage::delete('public/' . $tour_finance->attachment);
            }
            $attachment = $request->file('attachment');
            $attachment_name = 'attachment-' . Str::slug($tour_finance->name, '-') . '-' . time() . '.' . $attachment->getClientOriginalExtension();
            $tour_finance->attachment = $attachment->storeAs('tour/finance', $attachment_name, 'public');
        }

        $tour_finance->save();

        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }

    public function TourScheduleFinanceDestroy($id, $finance_id)
    {
        $tour_finance = TourFinance::find($finance_id);
        if ($tour_finance->attachment) {
            Storage::delete('public/' . $tour_finance->attachment);
        }
        $tour_finance->delete();

        return redirect()->back()->with('success', 'Data berhasil dihapus');
    }
}
