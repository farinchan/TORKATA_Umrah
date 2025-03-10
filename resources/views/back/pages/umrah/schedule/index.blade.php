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
                            class="ki-duotone ki-plus fs-2"></i>Tambah Jadwal Umrah</a>
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
                            <th class="min-w-200px">Jadwal Umrah</th>
                            <th class="text-center min-w-150px">Quad</th>
                            <th class="text-center min-w-150px">Triple</th>
                            <th class="text-center min-w-100px">Double</th>
                            <th class="text-center min-w-100px">Status</th>
                            <th class="text-end min-w-70px">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="fw-semibold text-gray-600">
                        @foreach ($list_umrah_schedule as $umrah_schedule)
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
                                                data-kt-ecommerce-category-filter="category_name">{{ $umrah_schedule->name }}</a>
                                            <div class="text-muted fs-7 fw-bold">
                                                Paket: {{ $umrah_schedule->umrahPackage->name }}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center @if($umrah_schedule->quad_count == $umrah_schedule->quad_quota) text-danger @endif pe-0">
                                    {{ $umrah_schedule->quad_count }}/{{ $umrah_schedule->quad_quota }} <br>
                                    Harga: @money($umrah_schedule->quad_price)
                                </td>
                                <td class="text-center pe-0 @if($umrah_schedule->triple_count == $umrah_schedule->triple_quota) text-danger @endif">
                                    {{ $umrah_schedule->triple_count }}/{{ $umrah_schedule->triple_quota }}<br>
                                    Harga: @money($umrah_schedule->triple_price)
                                </td>
                                <td class="text-center pe-0 @if($umrah_schedule->double_count == $umrah_schedule->double_quota) text-danger @endif">
                                    {{ $umrah_schedule->double_count }}/{{ $umrah_schedule->double_quota }}<br>
                                    Harga: @money($umrah_schedule->double_price)
                                </td>
                                <td class="text-center">
                                    @if ($umrah_schedule->status == 'aktif')
                                        <span class="badge badge-light-success">Aktif</span>
                                    @else
                                        <span class="badge badge-light-danger">Berakhir</span>
                                    @endif
                                </td>
                                <td class="text-end">
                                    <a href="{{ route("back.umrah.schedule.setting", $umrah_schedule->id) }}" class="btn btn-light-primary">Detail</a>
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
                    <h3 class="modal-title">Tambah Jadwal Umrah</h3>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                    </div>
                    <!--end::Close-->
                </div>
                <form action="{{ route("back.umrah.schedule.store") }}" method="post">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-5">
                            <label class="form-label required">Pilih Paket Umrah</label>
                            <select class="form-select" name="umrah_package_id" required>
                                <option value="">Pilih Paket Umrah</option>
                                @foreach ($list_umrah_package as $umrah_package)
                                    <option value="{{ $umrah_package->id }}">{{ $umrah_package->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="mb-5">
                            <label class="form-label required">Nama jadwal Umrah</label>
                            <input type="text" class="form-control" placeholder="Nama Jadwal Umrah" name="name"
                                value="{{ old('name') }}" required />
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label class="form-label">Harga Paket Quad</label>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="number" class="form-control" placeholder="Harga Paket Quad"
                                            name="quad_price" value="{{ old('quad_price') }}" />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Kuota Quad</label>
                                    <input type="number" class="form-control" placeholder="Kuota Quad"
                                        name="quad_quota" value="{{ old('quad_quota') }}" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label class="form-label">Harga Paket Triple</label>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="number" class="form-control" placeholder="Harga Paket Triple"
                                            name="triple_price" value="{{ old('triple_price') }}" />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Kuota Triple</label>
                                    <input type="number" class="form-control" placeholder="Kuota Triple"
                                        name="triple_quota" value="{{ old('triple_quota') }}" />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div class="row">
                                <div class="col-md-8">
                                    <label class="form-label">Harga Paket Double</label>
                                    <div class="input-group mb-5">
                                        <span class="input-group-text">Rp.</span>
                                        <input type="number" class="form-control" placeholder="Harga Paket Double"
                                            name="double_price" value="{{ old('double_price') }}" />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <label class="form-label">Kuota Double</label>
                                    <input type="number" class="form-control" placeholder="Kuota Double"
                                        name="double_quota" value="{{ old('double_quota') }}" />
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
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="form-label">Hotel Mekkah</label>
                                    <input type="text" class="form-control" placeholder="Hotel Mekkah"
                                        name="hotel_makka" value="{{ old('hotel_makka') }}" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Hotel Madinah</label>
                                    <input type="text" class="form-control" placeholder="Hotel Madinah"
                                        name="hotel_madinah" value="{{ old('hotel_madinah') }}" />
                                </div>
                            </div>
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
    <script src="{{ asset('back/js/custom/apps/ecommerce/catalog/schdule_umrah.js') }}"></script>
@endsection
