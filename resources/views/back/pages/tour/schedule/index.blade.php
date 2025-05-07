@extends('back.app')
@section('content')
    <div id="kt_content_container" class=" container-xxl ">
        <div class="card card-flush">
            <div class="card-header align-items-center py-5 gap-2 gap-md-5">
                <div class="card-title">
                    <div class="d-flex align-items-center position-relative my-1">
                        <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-4">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                        <input type="text" data-kt-ecommerce-product-filter="search"
                            class="form-control form-control-solid w-250px ps-12" placeholder="Cari Jadwal" />
                    </div>
                </div>
                <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                    <div class="w-100 mw-150px">
                        <select class="form-select form-select-solid" data-control="select2" data-hide-search="true"
                            data-placeholder="Status" data-kt-ecommerce-product-filter="status">
                            <option></option>
                            <option value="all">Semua</option>
                            <option value="Aktif">Aktif</option>
                            <option value="Berakhir">Berakhir</option>
                        </select>
                    </div>
                    <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add_schedule"><i
                            class="ki-duotone ki-plus fs-2"></i>Tambah Jadwal Tour</a>
                </div>
            </div>
            <div class="card-body pt-0">
                <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_ecommerce_products_table">
                    <thead>
                        <tr class="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                            <th class="w-10px pe-2">
                                <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                    <input class="form-check-input" type="checkbox" data-kt-check="true"
                                        data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                                        value="1" />
                                </div>
                            </th>
                            <th class="min-w-200px">Jadwal Tour</th>
                            <th class="text-center min-w-150px">Harga</th>
                            <th class="text-center min-w-150px">Quota</th>
                            <th class="text-center min-w-100px">Keberangkatan</th>
                            <th class="text-center min-w-100px">Status</th>
                            <th class="text-end min-w-70px">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="fw-semibold text-gray-600">
                        @foreach ($list_tour_schedule as $tour_schedule)
                            <tr>
                                <td>
                                    <div class="form-check form-check-sm form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="1" />
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">

                                        <div class="ms-5">
                                            <a href="#" class="text-gray-800 text-hover-primary fs-5 fw-bold mb-1"
                                                data-kt-ecommerce-category-filter="category_name">{{ $tour_schedule->name }}</a>
                                            <div class="text-muted fs-7 fw-bold">
                                                Paket: {{ $tour_schedule->tourPackage->name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center pe-0">
                                    @money($tour_schedule->price)
                                </td>
                                <td class="text-center pe-0
                                    @if ($tour_schedule->tourUser->count() >= $tour_schedule->quota)
                                        text-danger
                                    @elseif ($tour_schedule->tourUser->count() >= $tour_schedule->quota * 0.8)
                                        text-warning
                                    @else
                                        text-success
                                    @endif
                                ">
                                    {{ $tour_schedule->tourUser->count() }}/{{ $tour_schedule->quota }}
                                </td>
                                <td class="text-center pe-0 ">
                                    {{ $tour_schedule->departure ? \Carbon\Carbon::parse($tour_schedule->departure)->translatedFormat('d F Y') : '-' }}
                                </td>
                                <td class="text-center">
                                    @if ($tour_schedule->status == 'aktif')
                                        <span class="badge badge-light-success">Aktif</span>
                                    @else
                                        <span class="badge badge-light-danger">Berakhir</span>
                                    @endif
                                </td>
                                <td class="text-end">
                                    <a href="{{ route('back.tour.schedule.setting', $tour_schedule->id) }}"
                                        class="btn btn-light-primary">Detail</a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="modal fade" tabindex="-1" id="add_schedule">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Tambah Jadwal Tour</h3>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                    </div>
                    <!--end::Close-->
                </div>
                <form action="{{ route('back.tour.schedule.store') }}" method="post">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-5">
                            <label class="form-label required">Pilih Paket Tour</label>
                            <select class="form-select" name="tour_package_id" required>
                                <option value="">Pilih Paket Tour</option>
                                @foreach ($list_tour_package as $tour_package)
                                    <option value="{{ $tour_package->id }}">{{ $tour_package->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-5">
                            <label class="form-label required">Nama jadwal Tour</label>
                            <input type="text" class="form-control" placeholder="Nama Jadwal Tour" name="name"
                                value="{{ old('name') }}" required />
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label class="form-label">Harga </label>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="text" class="form-control" placeholder="Harga Paket"
                                            value="{{ old('price') }}" oninput="formatRupiah1(this)">
                                    </div>
                                    <input type="hidden" id="rupiah_value1" name="price"
                                        value="{{ old('price') }}">
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Kuota</label>
                                    <input type="number" class="form-control" placeholder="Kuota" name="quota"
                                        value="{{ old('quota') }}" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <label class="form-label">Waktu Keberangkatan</label>
                            <input type="date" class="form-control" placeholder="Waktu Keberangkatan"
                                name="departure" value="{{ old('departure') }}" />
                        </div>
                        <div class="mb-5">
                            <label class="form-label">Maskapai</label>
                            <input type="text" class="form-control" placeholder="Maskapai" name="airline"
                                value="{{ old('airline') }}" />
                        </div>
                        <div class="mb-5">

                            <label class="form-label">Hotel</label>
                            <input type="text" class="form-control" placeholder="Nama Hotel" name="hotel"
                                value="{{ old('hotel') }}" />

                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
@section('scripts')
    <script src="{{ asset('back/js/custom/apps/ecommerce/catalog/schdule_tour.js') }}"></script>
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
