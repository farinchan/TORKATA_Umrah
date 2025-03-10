@extends('back.app')
@section('content')
    <div id="kt_content_container" class=" container-xxl ">
        <div class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid gap-10"
            id="kt_create_account_stepper">
            <div
                class="card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px">
                <div class="card-body px-6 px-lg-10 px-xxl-15 py-20">
                    <div class="stepper-nav">

                        <div class="stepper-item current" data-kt-stepper-element="nav">
                            <div class="stepper-wrapper">
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="ki-outline ki-check fs-2 stepper-check"></i>
                                    <span class="stepper-number">1</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Data Diri</h3>
                                    <div class="stepper-desc fw-semibold">Data Diri Jama'ah</div>
                                </div>
                            </div>
                            <div class="stepper-line h-40px"></div>
                        </div>
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            <div class="stepper-wrapper">
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="ki-outline ki-check fs-2 stepper-check"></i>
                                    <span class="stepper-number">2</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Dokumen Jama'ah</h3>
                                    <div class="stepper-desc fw-semibold">Dokumen yang diperlukan</div>
                                </div>
                            </div>
                            <div class="stepper-line h-40px"></div>
                        </div>
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            <div class="stepper-wrapper">
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="ki-outline ki-check fs-2 stepper-check"></i>
                                    <span class="stepper-number">3</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Pemilihan Paket Umrah</h3>
                                    <div class="stepper-desc fw-semibold">Pilih Paket Umrah</div>
                                </div>
                            </div>
                            <div class="stepper-line h-40px"></div>
                        </div>
                        <div class="stepper-item mark-completed" data-kt-stepper-element="nav">
                            <div class="stepper-wrapper">
                                <div class="stepper-icon w-40px h-40px">
                                    <i class="ki-outline ki-check fs-2 stepper-check"></i>
                                    <span class="stepper-number">4</span>
                                </div>
                                <div class="stepper-label">
                                    <h3 class="stepper-title">Final</h3>
                                    <div class="stepper-desc fw-semibold">Finalisasi data</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card d-flex flex-row-fluid flex-center">
                <form class="card-body py-20 w-100 mw-xl-700px px-9" id="kt_create_account_form" method="POST" enctype="multipart/form-data"
                    action="{{ route('back.booking.umrah.store') }}">

                    <div class="current" data-kt-stepper-element="content">
                        <div class="w-100">
                            <div class="pb-10 pb-lg-15">
                                <h2 class="fw-bold text-gray-900">Data Diri</h2>
                                <div class="text-muted fw-semibold fs-6">
                                    Masukkan data diri jama'ah dengan benar.
                                </div>
                            </div>
                            <div class="mb-5 fv-row">
                                @csrf

                                <div class="image-input image-input-empty" data-kt-image-input="true"
                                    style="background-image: url('{{ asset('back/media/avatars/blank.png') }}')">
                                    <div class="image-input-wrapper w-125px h-125px"></div>
                                    <label
                                        class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                        data-kt-image-input-action="change" data-bs-toggle="tooltip" data-bs-dismiss="click"
                                        title="Change avatar">
                                        <i class="ki-duotone ki-pencil fs-6"><span class="path1"></span><span
                                                class="path2"></span></i>

                                        <input type="file" name="photo" accept=".png, .jpg, .jpeg" />
                                        <input type="hidden" name="avatar_remove" />
                                    </label>

                                    <span
                                        class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                        data-kt-image-input-action="cancel" data-bs-toggle="tooltip" data-bs-dismiss="click"
                                        title="Cancel avatar">
                                        <i class="ki-outline ki-cross fs-3"></i>
                                    </span>

                                    <span
                                        class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                        data-kt-image-input-action="remove" data-bs-toggle="tooltip" data-bs-dismiss="click"
                                        title="Remove avatar">
                                        <i class="ki-outline ki-cross fs-3"></i>
                                    </span>
                                </div>
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">NIK</label>
                                <input type="text" class="form-control form-control-lg form-control-solid"
                                    placeholder="NIK" name="nik" value="{{ old('nik') }}" required />
                                @error('nik')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">Nama Lengkap</label>
                                <input type="text" class="form-control form-control-lg form-control-solid"
                                    placeholder="Nama Lengkap" name="name" value="{{ old('name') }}" required />
                                @error('name')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-5 fv-row">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="form-label required">Tempat Lahir</label>
                                        <input type="text" class="form-control form-control-lg form-control-solid"
                                            placeholder="Tempat Lahir" name="birthplace" value="{{ old('birthplace') }}"
                                            required />
                                        @error('birthplace')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label required">Tanggal Lahir</label>
                                        <input type="date" class="form-control form-control-lg form-control-solid"
                                            placeholder="Tanggal Lahir" name="birthdate" value="{{ old('birthdate') }}"
                                            required />
                                        @error('birthdate')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                </div>
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">Jenis Kelamin</label>
                                <select name="gender" class="form-select form-select-lg form-select-solid"
                                    data-control="select2" data-placeholder="Pilih Jenis Kelamin" data-allow-clear="true"
                                    data-hide-search="true" required>
                                    <option></option>
                                    <option value="laki-laki" {{ old('gender') == 'laki-laki' ? 'selected' : '' }}>Laki-laki</option>
                                    <option value="perempuan" {{ old('gender') == 'perempuan' ? 'selected' : '' }}>Perempuan</option>
                                </select>
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">Alamat</label>
                                <textarea name="address" class="form-control form-control-lg form-control-solid" rows="3" placeholder="Alamat"
                                    required>{{ old('address') }}</textarea>
                                @error('address')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">No. Telp / WA</label>
                                <input type="text" class="form-control form-control-lg form-control-solid"
                                    placeholder="No. Telp / WA" name="phone" value="{{ old('phone') }}" required />
                                    <small class="text-muted">Nomor telepon diawali dengan kode negara, contoh: ( <code>+62</code> ) </small>
                                @error('phone')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                        </div>
                    </div>
                    <div data-kt-stepper-element="content">
                        <div class="w-100">
                            <div class="pb-10 pb-lg-12">
                                <h2 class="fw-bold text-gray-900">Dokumen Jama'ah</h2>
                                <div class="text-muted fw-semibold fs-6">Masukkan dokumen yang diperlukan
                                </div>
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="form-label">KTP</label>
                                <input type="file" class="form-control form-control-lg form-control-solid" accept=".pdf, .jpg, .jpeg, .png"
                                    placeholder="KTP" name="file_ktp" value="{{ old('file_ktp') }}" />
                                @error('file_ktp')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">Kartu Keluarga</label>
                                <input type="file" class="form-control form-control-lg form-control-solid" accept=".pdf, .jpg, .jpeg, .png"
                                    placeholder="Kartu Keluarga" name="file_kk" value="{{ old('file_kk') }}" required />
                                @error('file_kk')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">Paspor</label>
                                <input type="file" class="form-control form-control-lg form-control-solid" accept=".pdf, .jpg, .jpeg, .png"
                                    placeholder="Paspor" name="file_paspor" value="{{ old('file_paspor') }}" required />
                                @error('file_paspor')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div data-kt-stepper-element="content">
                        <div class="w-100">
                            <div class="pb-10 pb-lg-15">
                                <h2 class="fw-bold text-gray-900">Pemilihan Paket Umrah</h2>
                                <div class="text-muted fw-semibold fs-6">pilih paket umrah yang diinginkan
                                </div>
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="form-label required">Paket Umrah</label>
                                <select name="umrah_id" class="form-select form-select-lg form-select-solid"
                                    id="umrah_select" data-control="select2" data-placeholder="Pilih Paket Umrah"
                                    data-allow-clear="false" data-hide-search="true" required>
                                    <option></option>
                                    @foreach ($list_umrah_package as $umrah)
                                        <option value="{{ $umrah->id }}">{{ $umrah->name }}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">Jadwal Umrah</label>
                                <select name="umrah_schedule_id" class="form-select form-select-lg form-select-solid"
                                    id="schedule_select" disabled required>
                                    <option disabled selected>Pilih Jadwal Umrah</option>
                                </select>
                                @error('schedule')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>

                            <div class="mb-5 fv-row">
                                <label class="form-label required">Tipe Paket</label>
                                <select name="package_type" class="form-select form-select-lg form-select-solid"
                                    id="package_type_select" disabled required>
                                    <option disabled selected>Pilih Tipe Paket</option>
                                </select>
                                @error('package_type')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div data-kt-stepper-element="content">
                        <div class="w-100">
                            <div class="pb-8 pb-lg-10">
                                <h2 class="fw-bold text-gray-900">Final!</h2>
                                <div class="text-muted fw-semibold fs-6">Finalisasi data jama'ah
                                </div>
                            </div>
                            <div class="mb-0">
                                <div class="fs-6 text-gray-600 mb-5">
                                    Sebelum melanjutkan, silahkan membaca pernyataan berikut:
                                </div>
                                <div
                                    class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                                    <i class="ki-outline ki-information fs-2tx text-warning me-4"></i>
                                    <div class="d-flex flex-stack flex-grow-1">
                                        <div class="fw-semibold">
                                            <h4 class="text-gray-900 fw-bold">Pernyataan!</h4>
                                            <div class="fs-6 text-gray-700">
                                                Dengan menekan tombol submit, anda sebagai agen telah memasukkan data
                                                jama'ah dengan benar dan tidak ada kesalahan. <br>
                                                Jika data jama'ah terdapat kesalahan anda akan bertanggung jawab atas
                                                kesalahan tersebut.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-stack pt-10">
                        <div class="mr-2">
                            <button type="button" class="btn btn-lg btn-light-primary me-3"
                                data-kt-stepper-action="previous">
                                <i class="ki-outline ki-arrow-left fs-4 me-1"></i>Back</button>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-lg btn-primary me-3" data-kt-stepper-action="submit">
                                <span class="indicator-label">Submit
                                    <i class="ki-outline ki-arrow-right fs-3 ms-2 me-0"></i></span>
                                <span class="indicator-progress">Please wait...
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                            </button>
                            <button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                                <i class="ki-outline ki-arrow-right fs-4 ms-1 me-0"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script>
        var element = document.querySelector("#kt_create_account_stepper");

        // Initialize Stepper
        var stepper = new KTStepper(element);

        // Handle next step
        stepper.on("kt.stepper.next", function(stepper) {
            stepper.goNext(); // go next step
        });

        // Handle previous step
        stepper.on("kt.stepper.previous", function(stepper) {
            stepper.goPrevious(); // go previous step
        });
    </script>

    <script>
        $(document).ready(function() {
            $('#umrah_select').on('change', function() {
                var umrah_id = $(this).val();
                if (umrah_id) {
                    $.ajax({
                        url: "{{ route('api.booking.get-umrah-schedule') }}",
                        type: "POST",
                        data: {
                            umrah_package_id: umrah_id,
                        },
                        dataType: "json",
                        success: function(data) {
                            console.log(data);
                            $('#schedule_select').empty();
                            $('#schedule_select').append(
                                '<option disabled selected>Pilih Jadwal Umrah</option>'
                            );
                            $.each(data, function(key, value) {

                                $('#schedule_select').append(
                                    '<option value="' + value.id + '">' + value
                                    .name + ' - ' + value.departure + '</option>'
                                );
                            });
                            $('#schedule_select').prop('disabled', false);
                        }
                    });
                } else {
                    $('#schedule_select').empty();
                    $('#schedule_select').append(
                        '<option disabled selected>Pilih Jadwal Umrah</option>'
                    );
                    $('#schedule_select').prop('disabled', true);

                    $('#package_type_select').empty();
                    $('#package_type_select').append(
                        '<option disabled selected>Pilih Tipe Paket</option>'
                    );
                    $('#package_type_select').prop('disabled', true);
                }
            });

            $('#schedule_select').on('change', function() {
                var schedule_id = $(this).val();
                if (schedule_id) {
                    $.ajax({
                        url: "{{ route('api.booking.get-umrah-schedule-info') }}",
                        type: "POST",
                        data: {
                            umrah_schedule_id: schedule_id
                        },
                        dataType: "json",
                        success: function(data) {
                            console.log(data);

                            $('#package_type_select').empty();
                            $('#package_type_select').append(
                                '<option disabled selected>Pilih Tipe Paket</option>'
                            );

                            if (data.schedule.quad_price) {
                                if (data.quad > data.schedule.quad_quota) {
                                    $('#package_type_select').append(
                                        '<option disabled>Quad - Kuota Habis</option>'
                                    );
                                } else {
                                    $('#package_type_select').append(
                                        '<option value="quad">Quad - Rp. ' + data.schedule.quad_price + ' - Kuota: ' + data.quad + '/' + data.schedule.quad_quota +
                                        '</option>'
                                    );
                                }
                            } else {
                                $('#package_type_select').append(
                                    '<option disabled>Quad - Tidak Tersedia</option>'
                                );
                            }

                            if (data.schedule.triple_price) {
                                if (data.triple > data.schedule.triple_quota) {
                                    $('#package_type_select').append(
                                        '<option disabled>Triple - Kuota Habis</option>'
                                    );
                                } else {
                                    $('#package_type_select').append(
                                        '<option value="triple">Triple - Rp. ' + data.schedule.triple_price + ' - Kuota: ' + data.triple + '/' + data.schedule.triple_quota +
                                        '</option>'
                                    );
                                }
                            } else {
                                $('#package_type_select').append(
                                    '<option disabled>Triple - Tidak Tersedia</option>'
                                );
                            }

                            if (data.schedule.double_price) {
                                if (data.double > data.schedule.double_quota) {
                                    $('#package_type_select').append(
                                        '<option disabled>Double - Kuota Habis</option>'
                                    );
                                } else {
                                    $('#package_type_select').append(
                                        '<option value="double">Double - Rp. ' + data.schedule.double_price + ' - Kuota: ' + data.double + '/' + data.schedule.double_quota +
                                        '</option>'
                                    );
                                }
                            } else {
                                $('#package_type_select').append(
                                    '<option disabled>Double - Tidak Tersedia</option>'
                                );
                            }
                            $('#package_type_select').prop('disabled', false);
                        }
                    });
                } else {
                    $('#package_type_select').empty();
                    $('#package_type_select').append(
                        '<option disabled selected>Pilih Tipe Paket</option>'
                    );
                    $('#package_type_select').prop('disabled', true);
                }
            });
        });
    </script>
@endsection
