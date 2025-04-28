@extends('back.app')
@section('content')
    <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
            @include('back.pages.umrah.schedule.detail-header')
            <div class="card">
                <div class="card-header">
                    <div class="card-title fs-3 fw-bold">Setting Jadwal</div>
                </div>
                <form id="kt_project_settings_form" class="form" method="POST"
                    action="{{ route('back.umrah.schedule.update', $schedule->id) }}">
                    @csrf
                    @method('PUT')
                    <div class="card-body p-9">

                        <div class="mb-5">
                            <label class="form-label required">Pilih Paket Umrah</label>
                            <select class="form-select" name="umrah_package_id" required>
                                <option value="">Paket Umrah</option>
                                @foreach ($list_umrah_package as $umrah_package)
                                    <option value="{{ $umrah_package->id }}" @if ($schedule->umrah_package_id == $umrah_package->id) selected @endif>
                                        {{ $umrah_package->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-5">
                            <label class="form-label required">Nama jadwal Umrah</label>
                            <input type="text" class="form-control" placeholder="Nama Jadwal Umrah" name="name"
                                value="{{ $schedule->name }}" required />
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label class="form-label">Harga Paket Quad</label>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="text" class="form-control" placeholder="Harga Paket Quad"
                                            value="{{ $schedule->quad_price }}" oninput="formatRupiah1(this)">
                                    </div>
                                    <input type="hidden" id="rupiah_value1" name="quad_price"
                                        value="{{ $schedule->quad_price }}">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Kuota Quad</label>
                                    <input type="number" class="form-control" placeholder="Kuota Quad" name="quad_quota"
                                        value="{{ $schedule->quad_quota }}" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label class="form-label">Harga Paket Triple</label>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="text" class="form-control" placeholder="Harga Paket Triple"
                                            value="{{ $schedule->triple_price }}" oninput="formatRupiah2(this)">
                                    </div>
                                    <input type="hidden" id="rupiah_value2" name="triple_price"
                                        value="{{ $schedule->triple_price }}">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Kuota Triple</label>
                                    <input type="number" class="form-control" placeholder="Kuota Triple"
                                        name="triple_quota" value="{{ $schedule->triple_quota }}" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label class="form-label">Harga Paket Double</label>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="text" class="form-control" placeholder="Harga Paket Double"
                                            value="{{ $schedule->double_price }}" oninput="formatRupiah3(this)">
                                    </div>
                                    <input type="hidden" id="rupiah_value3" name="double_price"
                                        value="{{ $schedule->double_price }}">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Kuota Double</label>
                                    <input type="number" class="form-control" placeholder="Kuota Double"
                                        name="double_quota" value="{{ $schedule->double_quota }}" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <label class="form-label">Waktu Keberangkatan</label>
                            <input type="date" class="form-control" placeholder="Waktu Keberangkatan" name="departure"
                                value="{{ $schedule->departure }}" />
                        </div>
                        <div class="mb-5">
                            <label class="form-label">Maskapai</label>
                            <input type="text" class="form-control" placeholder="Maskapai" name="airline"
                                value="{{ $schedule->airline }}" />
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="form-label">Hotel Mekkah</label>
                                    <input type="text" class="form-control" placeholder="Hotel Mekkah"
                                        name="hotel_makka" value="{{ $schedule->hotel_makka }}" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Hotel Madinah</label>
                                    <input type="text" class="form-control" placeholder="Hotel Madinah"
                                        name="hotel_madinah" value="{{ $schedule->hotel_madinah }}" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <label class="form-label text-danger">Status</label>
                            <select class="form-select" name="status">
                                <option value="aktif" @if ($schedule->status == 'aktif') selected @endif>Aktif</option>
                                <option value="berakhir" @if ($schedule->status == 'berakhir') selected @endif>Berakhir
                                </option>
                            </select>
                        </div>



                    </div>
                    <div class="card-footer d-flex justify-content-end py-6 px-9">
                        <button type="reset" class="btn btn-light btn-active-light-primary me-2">Batal</button>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
<script>
    function formatRupiah1(element) {
        let angka = element.value.replace(/\D/g, '');
        let formatted = angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        element.value = formatted;
        document.getElementById('rupiah_value1').value = angka;
    }

    function formatRupiah2(element) {
        let angka = element.value.replace(/\D/g, '');
        let formatted = angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        element.value = formatted;
        document.getElementById('rupiah_value2').value = angka;
    }

    function formatRupiah3(element) {
        let angka = element.value.replace(/\D/g, '');
        let formatted = angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        element.value = formatted;
        document.getElementById('rupiah_value3').value = angka;
    }
    $(document).ready(function() {
        $('form').submit(function() {
            $(this).find('button[type="submit"]').attr('disabled', true);
        });
    });
</script>
@endsection
