@extends('back.app')
@section('content')
    @php
        $total_price = 0;
        if ($jamaah->package_type == 'quad') {
            $total_price = $schedule->quad_price;
        } elseif ($jamaah->package_type == 'triple') {
            $total_price = $schedule->triple_price;
        } elseif ($jamaah->package_type == 'double') {
            $total_price = $schedule->double_price;
        }
    @endphp
    <div id="kt_content_container" class=" container-xxl ">
        <div class="d-flex flex-column flex-lg-row">
            <div class="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
                <div class="card mb-5 mb-xl-8">
                    <div class="card-body">
                        <div class="d-flex flex-center flex-column py-5">
                            <div class="symbol symbol-100px symbol-circle mb-7">
                                <img src="{{ $jamaah->getPhoto() }}" alt="image">
                            </div>
                            <a href="#" class="fs-3 text-gray-800 text-hover-primary fw-bold mb-3">
                                {{ $jamaah->name }}
                            </a>
                            <div class="mb-9">
                                <div class="text-gray-800">
                                    ID. {{ $jamaah->code }}
                                </div>
                            </div>
                            <hr>
                            <div class="mb-3 text-center">

                                <h2 class="mb-3">
                                    @money($jamaah->total_payment) / @money($total_price) <br>
                                    <small class="text-muted fs-6">Sisa Pembayaran : @money($total_price - $jamaah->total_payment)</small>

                                </h2>
                                @if ($jamaah->total_payment >= $total_price)
                                    <span class="badge badge-light-success">Lunas</span>
                                @else
                                    <span class="badge badge-light-danger">Belum Lunas</span>
                                @endif
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-lg-row-fluid ms-lg-15">
                <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8"
                    role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link text-active-primary pb-4 active" data-bs-toggle="tab"
                            href="#kt_user_view_overview_tab" aria-selected="true" role="tab">Data</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link text-active-primary pb-4" data-kt-countup-tabs="true" data-bs-toggle="tab"
                            href="#kt_user_view_overview_security" data-kt-initialized="1" aria-selected="false"
                            tabindex="-1" role="tab">Pembayaran</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="kt_user_view_overview_tab" role="tabpanel">
                        <div class="card card-flush mb-6 mb-xl-9">
                            <div class="card-header">
                                <div class="card-title fs-3 fw-bold">Data Jama'ah</div>
                            </div>
                            <form id="kt_project_settings_form" class="form" method="POST" enctype="multipart/form-data"
                                action="{{ route('back.umrah.schedule.jamaah.update', [$schedule->id, $jamaah->code]) }}">
                                @method('PUT')
                                @csrf
                                <div class="card-body p-9">
                                    {{-- <div class="mb-5 fv-row">
                                        <div class="image-input image-input-empty" data-kt-image-input="true"
                                            style="background-image: url('{{ $jamaah->getPhoto() }}')">
                                            <div class="image-input-wrapper w-125px h-125px"></div>
                                            <label
                                                class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="change" data-bs-toggle="tooltip"
                                                data-bs-dismiss="click" title="Change avatar">
                                                <i class="ki-duotone ki-pencil fs-6"><span class="path1"></span><span
                                                        class="path2"></span></i>
                                                <input type="file" name="photo" accept=".png, .jpg, .jpeg" />
                                                <input type="hidden" name="avatar_remove" />
                                            </label>
                                            <span
                                                class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="cancel" data-bs-toggle="tooltip"
                                                data-bs-dismiss="click" title="Cancel avatar">
                                                <i class="ki-outline ki-cross fs-3"></i>
                                            </span>
                                            <span
                                                class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="remove" data-bs-toggle="tooltip"
                                                data-bs-dismiss="click" title="Remove avatar">
                                                <i class="ki-outline ki-cross fs-3"></i>
                                            </span>
                                        </div>
                                    </div> --}}
                                    <table class="table table-bordered">
                                        <tr>
                                            <th>NIK</th>
                                            <td>{{ $jamaah->nik }}</td>
                                        </tr>
                                        <tr>
                                            <th>Nama Lengkap</th>
                                            <td>{{ $jamaah->name }}</td>
                                        </tr>
                                        <tr>
                                            <th>Tempat, Tanggal Lahir</th>
                                            <td>{{ $jamaah->birthplace }},
                                                {{ Carbon\Carbon::parse($jamaah->birthdate)->format('d M Y') }}</td>
                                        </tr>
                                        <tr>
                                            <th>Jenis Kelamin</th>
                                            <td>{{ $jamaah->gender == 'laki-laki' ? 'Laki-laki' : 'Perempuan' }}</td>
                                        </tr>
                                        <tr>
                                            <th>Alamat</th>
                                            <td>{{ $jamaah->address }}</td>
                                        </tr>
                                        <tr>
                                            <th>No. Telp / WA</th>
                                            <td>{{ $jamaah->phone }}</td>
                                        </tr>
                                        <tr>
                                            <th>KTP/KK</th>
                                            <td><a href="{{ Storage::url($jamaah->file_ktp) }}" target="_blank"
                                                    class="btn btn-sm btn-light-primary">Lihat Disini</a></td>
                                        </tr>
                                        <tr>
                                            <th>No. Paspor</th>
                                            <td>{{ $jamaah->passport }}</td>
                                        </tr>
                                    </table>
                                </div>
                                {{-- <div class="card-footer d-flex justify-content-end py-6 px-9">
                                    <button type="reset"
                                        class="btn btn-light btn-active-light-primary me-2">Batal</button>
                                    <button type="submit" class="btn btn-warning">Update</button>
                                </div> --}}
                            </form>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="kt_user_view_overview_security" role="tabpanel">

                        <div class="card pt-4 mb-6 mb-xl-9">
                            <div class="card-header">
                                <h3 class="card-title">Pembayaran</h3>
                                @if ($jamaah->total_payment < $total_price)
                                    <div class="card-toolbar">
                                        <a href="{{ route('back.booking.umrah.payment', $jamaah->id) }}"
                                            class="btn btn-sm btn-light-primary">
                                            Bayar Sisa
                                        </a>
                                    </div>
                                @endif
                            </div>
                            <div class="card-body">
                                <h2>
                                    @money($jamaah->total_payment) / @money($total_price) <br>
                                    <small class="text-muted fs-6">Sisa Pembayaran : @money($total_price - $jamaah->total_payment)</small>

                                </h2>
                            </div>
                        </div>
                        <div class="card pt-4 mb-6 mb-xl-9">
                            <div class="card-header border-0">
                                <div class="card-title">
                                    <h2>history Pembayaran</h2>
                                </div>

                            </div>
                            <div class="card-body pt-0 pb-5">
                                <div class="table-responsive">
                                    <table class="table align-middle table-row-dashed gy-5"
                                        id="kt_table_users_login_session">
                                        <thead class="border-bottom border-gray-200 fs-7 fw-bold">
                                            <tr class="text-start text-muted text-uppercase gs-0">
                                                <th class="min-w-100px">Tanggal</th>
                                                <th>Tipe</th>
                                                <th>Jumlah</th>
                                                <th>Bukti</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody class="fs-6 fw-semibold text-gray-600">
                                            @foreach ($payments as $payment)
                                                <tr>
                                                    <td>{{ $payment->created_at->format('d M Y H:i') }}</td>
                                                    <td>{{ $payment->type }} </td>
                                                    <td>@money($payment->amount)</td>
                                                    <td>
                                                        <a href="{{ Storage::url($payment->proof) }}" target="_blank">Lihat
                                                            Bukti</a>
                                                    </td>
                                                    <td>
                                                        @if ($payment->status == 'pending')
                                                            <span class="badge badge-light-warning">Pending</span>
                                                        @elseif ($payment->status == 'approved')
                                                            <span class="badge badge-light-success">Diterima</span>
                                                        @else
                                                            <span class="badge badge-light-danger">Ditolak</span>
                                                        @endif
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
@endsection
