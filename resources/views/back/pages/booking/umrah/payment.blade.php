@extends('back.app')
@section('content')
    <div id="kt_content_container" class=" container-xxl ">
        <div class="d-flex flex-column flex-lg-row">
            <div class="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
                <div class="card mb-5 mb-xl-8">
                    <div class="card-body">
                        <div class="d-flex flex-center flex-column py-5">
                            <div class="symbol symbol-100px symbol-circle mb-7">
                                <img src="{{ $jamaah->getPhoto()}}" alt="image">
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
            <div class="flex-lg-row-fluid ms-lg-10">
                <div class="card mb-10">
                    <div class="card-header">
                        <div class="card-title fs-3 fw-bold">Informasi Rekening</div>
                    </div>
                    <div class="card-body p-9">
                        <div class="border border-hover-primary p-7 rounded mb-7">
                            <div class="d-flex fv-row">
                                <div class="form-check form-check-custom form-check-solid">
                                    <img class="w-45px me-3"
                                        src="{{ asset('ext_images/bank_logo/BRI.png') }}"
                                        alt="">
                                    <label class="form-check-label"
                                        for="kt_modal_update_role_option_0">
                                        <div class="fw-bold text-gray-800">BRI</div>
                                        <div class="text-gray-600">
                                            0000-0000-0000-0000 a/n PT. Torkata
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <div class="card-title fs-3 fw-bold">Bukti Pembayaran</div>
                    </div>
                    <form id="kt_project_settings_form" class="form" method="POST" enctype="multipart/form-data"
                        action="{{ route('back.booking.umrah.payment.store', $jamaah->id) }}">
                        @csrf
                        <div class="card-body p-9">
                            <div class="mb-5">
                                <label class="form-label required">Jenis Pembayaran</label>
                                <select class="form-select" name="type">
                                    <option value="dp" @if (old('type') == 'dp') selected @endif>DP</option>
                                    <option value="pelunasan" @if (old('type') == 'pelunasan') selected @endif>Pelunasan</option>
                                </select>
                                @error('type')
                                    <small class="text-danger">{{ $message }}</small>
                                @enderror
                            </div>
                            <div class="mb-5">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="form-label required">Nama Pengirim</label>
                                        <input type="text" class="form-control" name="account_name" value="{{ old('account_name') }}"
                                            placeholder="Nama Pengirim" required>
                                            @error('account_name')
                                            <small class="text-danger">{{ $message }}</small>
                                            @enderror
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label required">Nominal</label>
                                        <input type="number" class="form-control" name="amount" value="{{ old('amount') }}"
                                            placeholder="Nominal" required>
                                            @error('amount')
                                            <small class="text-danger">{{ $message }}</small>
                                            @enderror
                                    </div>
                                </div>
                            </div>
                            <div class="mb-5">
                                <label class="form-label required">bukti Pembayaran</label>
                                <input type="file" class="form-control" name="proof" value="{{ old('proof') }}"
                                    placeholder="bukti Pembayaran" required>
                                    @error('proof')
                                    <small class="text-danger">{{ $message }}</small>
                                    <br>
                                    @enderror
                                    <small class="text-muted">bukti pembayaran harus terlihat jelas</small>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-end py-6 px-9">
                            <button type="reset" class="btn btn-light btn-active-light-primary me-2">Batal</button>
                            <button type="submit" class="btn btn-primary">Bayar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
@endsection
@section('scripts')
<script>
    $(document).ready(function() {
        $('form').submit(function() {
            $(this).find('button[type="submit"]').attr('disabled', true);
        });
    });
</script>
@endsection
