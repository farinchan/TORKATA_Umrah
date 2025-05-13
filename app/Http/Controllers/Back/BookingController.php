<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\PaymentAccount;
use App\Models\TourPackage;
use App\Models\TourSchedule;
use App\Models\TourUser;
use App\Models\TourUserPayment;
use App\Models\UmrahJamaah;
use App\Models\UmrahJamaahPayment;
use App\Models\UmrahPackage;
use App\Models\UmrahSchedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class BookingController extends Controller
{
    public function umrahIndex()
    {
        $data = [
            'title' => 'Booking Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Booking Umrah',
                    'link' => route('back.booking.umrah.index')
                ]
            ],
            'list_umrah_package' => UmrahPackage::where('status', 'enabled')->get(),
        ];
        return view('back.pages.booking.umrah.index', $data);
    }

    public function umrahStore(Request $request)
    {
        $validator  = Validator::make($request->all(), [
            'nik' => 'required',
            'photo' => 'required|image|mimes:jpeg,png,jpg',
            'name' => 'required|string',
            'birthplace' => 'required|string',
            'birthdate' => 'required|date',
            'gender' => 'required|in:laki-laki,perempuan',
            'address' => 'required|string',
            'phone' => 'required|string',
            'passport' => 'required|string',
            'file_ktp' => 'required|mimes:jpeg,png,jpg,pdf',
            'umrah_schedule_id' => 'required|exists:umrah_schedules,id',
            'package_type' => 'required|in:quad,triple,double',
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
            'passport.required' => 'Nomor Passport wajib diisi',
            'umrah_schedule_id.required' => 'Jadwal Umrah wajib diisi',
            'umrah_schedule_id.exists' => 'Jadwal Umrah tidak ditemukan',
            'package_type.required' => 'Tipe Paket wajib diisi',
            'package_type.in' => 'Tipe Paket harus berupa quad, triple, atau double',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data tidak valid');
        }

        $umrah_schedule = UmrahSchedule::find($request->umrah_schedule_id);
        $umrah_jamaah = new UmrahJamaah();
        $umrah_jamaah->nik = $request->nik;
        $umrah_jamaah->name = $request->name;
        $umrah_jamaah->birthplace = $request->birthplace;
        $umrah_jamaah->birthdate = $request->birthdate;
        $umrah_jamaah->gender = $request->gender;
        $umrah_jamaah->address = $request->address;
        $umrah_jamaah->phone = $request->phone;
        $umrah_jamaah->umrah_schedule_id = $umrah_schedule->id;
        $umrah_jamaah->package_type = $request->package_type;
        $umrah_jamaah->user_id = Auth::user()->id;
        $umrah_jamaah->passport = $request->passport;

        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photo_name = 'photo-' . $umrah_jamaah->nik . '-' . time() . '.' . $photo->getClientOriginalExtension();
            $umrah_jamaah->photo = $photo->storeAs('umrah/jamaah', $photo_name, 'public');
        }

        if ($request->hasFile('file_ktp')) {
            $file_ktp = $request->file('file_ktp');
            $file_ktp_name = 'ktp-kk-' . $umrah_jamaah->nik . '-' . time() . '.' . $file_ktp->getClientOriginalExtension();
            $umrah_jamaah->file_ktp = $file_ktp->storeAs('umrah/jamaah', $file_ktp_name, 'public');
        }

        $umrah_jamaah->save();
        $umrah_jamaah->code = 'UMR-' . $umrah_schedule->umrah_package_id . $umrah_schedule->id . '-' . $umrah_jamaah->id;
        $umrah_jamaah->save();

        return redirect()->route('back.booking.umrah.payment', $umrah_jamaah->id)->with('success', 'Data berhasil disimpan, silahkan lakukan pembayaran');
    }

    public function umrahPayment($id)
    {
        $jamaah = UmrahJamaah::find($id);
        $data = [
            'title' => 'Pembayaran Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Pembayaran Umrah',
                    'link' => route('back.booking.umrah.payment', $id)
                ]
            ],
            'jamaah' => $jamaah,
            'payment_accounts' => PaymentAccount::all(),
        ];
        return view('back.pages.booking.umrah.payment', $data);
    }

    public function umrahPaymentStore($id, Request $request)
    {
        $validator  = Validator::make($request->all(), [
            'account_name' => 'required|string',
            'amount' => 'required|numeric',
            'type' => 'required|in:dp,pelunasan',
            'proof' => 'required|image|mimes:jpeg,png,jpg',
        ], [
            'account_name.required' => 'Nama Rekening wajib diisi',
            'account_name.string' => 'Nama Rekening harus berupa huruf',
            'amount.required' => 'Jumlah Pembayaran wajib diisi',
            'amount.numeric' => 'Jumlah Pembayaran harus berupa angka',
            'type.required' => 'Tipe Pembayaran wajib diisi',
            'type.in' => 'Tipe Pembayaran harus berupa dp atau pelunasan',
            'proof.required' => 'Bukti Pembayaran wajib diisi',
            'proof.image' => 'Bukti Pembayaran harus berupa gambar',
            'proof.mimes' => 'Bukti Pembayaran harus berformat jpeg, png, jpg',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data tidak valid');
        }

        $payment = new UmrahJamaahPayment();
        $payment->umrah_jamaah_id = $id;
        $payment->payment_method = 'transfer';
        $payment->account_name = $request->account_name;
        $payment->amount = $request->amount;
        $payment->type = $request->type;

        if ($request->hasFile('proof')) {
            $proof = $request->file('proof');
            $proof_name = 'proof-' . $id . '-' . time() . '.' . $proof->getClientOriginalExtension();
            $payment->proof = $proof->storeAs('umrah/jamaah/payment', $proof_name, 'public');
        }
        $payment->status = 'pending';
        $payment->save();

        return redirect()->route('back.booking.umrah.index')->with('success', 'Pembayaran berhasil dilakukan, silahkan tunggu verifikasi');
    }

    public function umrahHistory()
    {
        $data = [
            'title' => 'History Booking Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'History Booking Umrah',
                    'link' => route('back.booking.umrah.history')
                ]
            ],
            'list_jamaah' => UmrahJamaah::where('user_id', Auth::user()->id)
                ->withSum(['umrahJamaahPayments as total_payment' => function ($query) {
                    $query->where('status', 'approved');
                }], 'amount')->with('umrahSchedule')->latest()->get(),
        ];
        // return response()->json($data);
        return view('back.pages.booking.umrah.history', $data);
    }

    public function umrahHistoryAll()
    {
        $data = [
            'title' => 'History Booking Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Semua History Booking Umrah',
                    'link' => route('back.booking.umrah.history.all')
                ]
            ],
            'list_jamaah' => UmrahJamaah::withSum(['umrahJamaahPayments as total_payment' => function ($query) {
                    $query->where('status', 'approved');
                }], 'amount')->with('umrahSchedule')->latest()->get(),
        ];
        // return response()->json($data);
        return view('back.pages.booking.umrah.history-all', $data);
    }

    public function umrahHistoryDetail($code)
    {
        $jamaah = UmrahJamaah::where('code', $code)->withSum(['umrahJamaahPayments as total_payment' => function ($query) {
            $query->where('status', 'approved');
        }], 'amount')
        ->first();

        if(!in_array('super-admin', Auth::user()->getRoleNames()->toArray()) && !in_array('admin-kantor', Auth::user()->getRoleNames()->toArray())){
            if($jamaah->user_id != Auth::user()->id){
            return redirect()->route('back.dashboard.index')->with('error', 'Data tidak ditemukan');
            }
        }

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
        ])->findOrFail($jamaah->umrah_schedule_id);
        $data = [
            'title' => 'Detail Booking Umrah',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'History Booking Umrah',
                    'link' => route('back.booking.umrah.history')
                ],
                [
                    'name' => 'Detail Booking Umrah',
                    'link' => route('back.booking.umrah.history.detail', $code)
                ]
            ],
            'schedule' => $schedule,
            'jamaah' => $jamaah,
            'payments' => $jamaah->umrahJamaahPayments()->latest()->get(),
        ];
        // return response()->json($data);
        return view('back.pages.booking.umrah.history-detail', $data);
    }


    public function tourIndex()
    {
        $data = [
            'title' => 'Booking Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Booking Tour',
                    'link' => route('back.booking.tour.index')
                ]
            ],
            'list_tour_package' => TourPackage::where('status', 'enabled')->get(),
        ];
        return view('back.pages.booking.tour.index', $data);
    }

    public function tourStore(Request $request)
    {
        $validator  = Validator::make($request->all(), [
            'nik' => 'required',
            'photo' => 'required|image|mimes:jpeg,png,jpg',
            'name' => 'required|string',
            'birthplace' => 'required|string',
            'birthdate' => 'required|date',
            'gender' => 'required|in:laki-laki,perempuan',
            'address' => 'required|string',
            'phone' => 'required|string',
            'passport' => 'required|string',
            'file_ktp' => 'required|mimes:jpeg,png,jpg,pdf',
            'tour_schedule_id' => 'required|exists:tour_schedules,id',
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
            'passport.required' => 'Nomor Passport wajib diisi',
            'tour_schedule_id.required' => 'Jadwal Tour wajib diisi',
            'tour_schedule_id.exists' => 'Jadwal Tour tidak ditemukan',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', implode(', ', $validator->errors()->all()));
        }

        $tour_schedule = TourSchedule::find($request->tour_schedule_id);
        $tour_user = new TourUser();
        $tour_user->nik = $request->nik;
        $tour_user->name = $request->name;
        $tour_user->birthplace = $request->birthplace;
        $tour_user->birthdate = $request->birthdate;
        $tour_user->gender = $request->gender;
        $tour_user->address = $request->address;
        $tour_user->phone = $request->phone;
        $tour_user->tour_schedule_id = $tour_schedule->id;

        $tour_user->user_id = Auth::user()->id;
        $tour_user->passport = $request->passport;

        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photo_name = 'photo-' . $tour_user->nik . '-' . time() . '.' . $photo->getClientOriginalExtension();
            $tour_user->photo = $photo->storeAs('tour/jamaah', $photo_name, 'public');
        }

        if ($request->hasFile('file_ktp')) {
            $file_ktp = $request->file('file_ktp');
            $file_ktp_name = 'ktp-kk-' . $tour_user->nik . '-' . time() . '.' . $file_ktp->getClientOriginalExtension();
            $tour_user->file_ktp = $file_ktp->storeAs('tour/jamaah', $file_ktp_name, 'public');
        }

        $tour_user->save();
        $tour_user->code = 'TR-' . $tour_schedule->tour_package_id . $tour_schedule->id . '-' . $tour_user->id;
        $tour_user->save();

        return redirect()->route('back.booking.tour.payment', $tour_user->id)->with('success', 'Data berhasil disimpan, silahkan lakukan pembayaran');
    }

    public function tourPayment($id)
    {
        $jamaah = TourUser::find($id);
        $data = [
            'title' => 'Pembayaran Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Pembayaran Tour',
                    'link' => route('back.booking.tour.payment', $id)
                ]
            ],
            'jamaah' => $jamaah,
            'payment_accounts' => PaymentAccount::all(),
        ];
        return view('back.pages.booking.tour.payment', $data);
    }

    public function tourPaymentStore($id, Request $request)
    {
        $validator  = Validator::make($request->all(), [
            'account_name' => 'required|string',
            'amount' => 'required|numeric',
            'type' => 'required|in:dp,pelunasan',
            'proof' => 'required|image|mimes:jpeg,png,jpg',
        ], [
            'account_name.required' => 'Nama Rekening wajib diisi',
            'account_name.string' => 'Nama Rekening harus berupa huruf',
            'amount.required' => 'Jumlah Pembayaran wajib diisi',
            'amount.numeric' => 'Jumlah Pembayaran harus berupa angka',
            'type.required' => 'Tipe Pembayaran wajib diisi',
            'type.in' => 'Tipe Pembayaran harus berupa dp atau pelunasan',
            'proof.required' => 'Bukti Pembayaran wajib diisi',
            'proof.image' => 'Bukti Pembayaran harus berupa gambar',
            'proof.mimes' => 'Bukti Pembayaran harus berformat jpeg, png, jpg',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput()->with('error', 'Data tidak valid');
        }

        $payment = new TourUserPayment();
        $payment->tour_user_id = $id;
        $payment->payment_method = 'transfer';
        $payment->account_name = $request->account_name;
        $payment->amount = $request->amount;
        $payment->type = $request->type;

        if ($request->hasFile('proof')) {
            $proof = $request->file('proof');
            $proof_name = 'proof-' . $id . '-' . time() . '.' . $proof->getClientOriginalExtension();
            $payment->proof = $proof->storeAs('tour/jamaah/payment', $proof_name, 'public');
        }
        $payment->status = 'pending';
        $payment->save();

        return redirect()->route('back.booking.tour.index')->with('success', 'Pembayaran berhasil dilakukan, silahkan tunggu verifikasi');
    }

    public function tourHistory()
    {
        $data = [
            'title' => 'History Booking Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'History Booking Tour',
                    'link' => route('back.booking.tour.history')
                ]
            ],
            'list_jamaah' => TourUser::where('user_id', Auth::user()->id)
                ->withSum(['tourUserPayments as total_payment' => function ($query) {
                    $query->where('status', 'approved');
                }], 'amount')->with('tourSchedule')->latest()->get(),
        ];
        // return response()->json($data);
        return view('back.pages.booking.tour.history', $data);
    }

    public function tourHistoryAll()
    {
        $data = [
            'title' => 'History Booking Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'Semua History Booking Tour',
                    'link' => route('back.booking.tour.history.all')
                ]
            ],
            'list_jamaah' => TourUser::withSum(['tourUserPayments as total_payment' => function ($query) {
                    $query->where('status', 'approved');
                }], 'amount')->with('tourSchedule')->latest()->get(),
        ];
        // return response()->json($data);
        return view('back.pages.booking.tour.history-all', $data);
    }

    public function tourHistoryDetail($code)
    {
        $user = TourUser::where('code', $code)->withSum(['tourUserPayments as total_payment' => function ($query) {
            $query->where('status', 'approved');
        }], 'amount')
        ->first();

        if(!in_array('super-admin', Auth::user()->getRoleNames()->toArray()) && !in_array('admin-kantor', Auth::user()->getRoleNames()->toArray())){
            if($user->user_id != Auth::user()->id){
            return redirect()->route('back.dashboard.index')->with('error', 'Data tidak ditemukan');
            }
        }

        $schedule = TourSchedule::with(['tourPackage', 'tourUser'])->findOrFail($user->tour_schedule_id);
        $data = [
            'title' => 'Detail Booking Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Dashboard',
                    'link' => route('back.dashboard.index')
                ],
                [
                    'name' => 'History Booking Tour',
                    'link' => route('back.booking.tour.history')
                ],
                [
                    'name' => 'Detail Booking Tour',
                    'link' => route('back.booking.tour.history.detail', $code)
                ]
            ],
            'schedule' => $schedule,
            'user' => $user,
            'payments' => $user->tourUserPayments()->latest()->get(),
        ];
        // return response()->json($data);
        return view('back.pages.booking.tour.history-detail', $data);
    }
}
