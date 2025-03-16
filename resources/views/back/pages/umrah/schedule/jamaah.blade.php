@extends('back.app')
@section('content')
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
                                    <div class="mb-5 fv-row">
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
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <label class="form-label required">NIK</label>
                                        <input type="text" class="form-control form-control-lg form-control-solid"
                                            placeholder="NIK" name="nik" value="{{ $jamaah->nik }}" required />
                                        @error('nik')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <label class="form-label required">Nama Lengkap</label>
                                        <input type="text" class="form-control form-control-lg form-control-solid"
                                            placeholder="Nama Lengkap" name="name" value="{{ $jamaah->name }}"
                                            required />
                                        @error('name')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label class="form-label required">Tempat Lahir</label>
                                                <input type="text"
                                                    class="form-control form-control-lg form-control-solid"
                                                    placeholder="Tempat Lahir" name="birthplace"
                                                    value="{{ $jamaah->birthplace }}" required />
                                                @error('birthplace')
                                                    <small class="text-danger">{{ $message }}</small>
                                                @enderror
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label required">Tanggal Lahir</label>
                                                <input type="date"
                                                    class="form-control form-control-lg form-control-solid"
                                                    placeholder="Tanggal Lahir" name="birthdate"
                                                    value="{{ $jamaah->birthdate }}" required />
                                                @error('birthdate')
                                                    <small class="text-danger">{{ $message }}</small>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <label class="form-label required">Jenis Kelamin</label>
                                        <select name="gender" class="form-select form-select-lg form-select-solid"
                                            data-control="select2" data-placeholder="Pilih Jenis Kelamin"
                                            data-allow-clear="true" data-hide-search="true" required>
                                            <option></option>
                                            <option value="laki-laki"
                                                {{ $jamaah->gender == 'laki-laki' ? 'selected' : '' }}>Laki-laki</option>
                                            <option value="perempuan"
                                                {{ $jamaah->gender == 'perempuan' ? 'selected' : '' }}>Perempuan</option>
                                        </select>
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <label class="form-label required">Alamat</label>
                                        <textarea name="address" class="form-control form-control-lg form-control-solid" rows="3" placeholder="Alamat"
                                            required>{{ $jamaah->address }}</textarea>
                                        @error('address')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <label class="form-label required">No. Telp / WA</label>
                                        <input type="text" class="form-control form-control-lg form-control-solid"
                                            placeholder="No. Telp / WA" name="phone" value="{{ $jamaah->phone }}"
                                            required />
                                        <small class="text-muted">Nomor telepon diawali dengan kode negara, contoh: (
                                            <code>+62</code> ) </small>
                                        @error('phone')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <label class="form-label required">KTP/KK</label>
                                        <input type="file" class="form-control form-control-lg form-control-solid"
                                            accept=".pdf, .jpg, .jpeg, .png" placeholder="KTP" name="file_ktp"
                                            value="{{ old('file_ktp') }}" />
                                        <div>File Sebelumnya : <a href="{{ Storage::url($jamaah->file_ktp) }}"
                                                target="_blank">Lihat Disini</a></div>
                                        <small class="text-muted">Kosongkan Jika Tidak Ingin Mengganti file KTP/KK</small>
                                        @error('file_ktp')
                                            <br>
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-5 fv-row">
                                        <label class="form-label required">No. Paspor</label>
                                        <input type="text" class="form-control form-control-lg form-control-solid"
                                            placeholder="No. Paspor" name="passport" value="{{ $jamaah->passport }}" />
                                        @error('passport')
                                            <br>
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>

                                    <div class="mb-5 fv-row">
                                        <label class="form-label">Diskon <i class="ki-outline ki-information-5 text-gray-500 fs-6" data-bs-toggle="tooltip" data-bs-placement="right" title="berikan Diskon kepada jama'ah yang berhak diberikan"></i></label>
                                        <div class="input-group">
                                            <span class="input-group-text">Rp</span>
                                            <input type="number" class="form-control form-control-lg form-control-solid"
                                                placeholder="Diskon" name="discount" value="{{ $jamaah->discount }}" />
                                        </div>
                                            <small class="text-muted">Diskon dalam nilai uang</small>
                                        @error('discount')
                                            <br>
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                </div>
                                <div class="card-footer d-flex justify-content-end py-6 px-9">
                                    <button type="reset"
                                        class="btn btn-light btn-active-light-primary me-2">Batal</button>
                                    <button type="submit" class="btn btn-warning">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="kt_user_view_overview_security" role="tabpanel">
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
