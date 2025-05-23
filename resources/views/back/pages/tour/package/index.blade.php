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
                            class="form-control form-control-solid w-250px ps-12" placeholder="Cari Paket Tour" />
                    </div>
                </div>
                <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                    <div class="w-100 mw-150px">
                        <select class="form-select form-select-solid" data-control="select2" data-hide-search="true"
                            data-placeholder="Status" data-kt-ecommerce-product-filter="status">
                            <option></option>
                            <option value="all">Semua</option>
                            <option value="disabled">disabled</option>
                            <option value="enabled">enabled</option>
                        </select>
                    </div>
                    <a href="{{ route('back.tour.package.create') }}" class="btn btn-primary">
                        <i class="ki-duotone ki-plus fs-2"></i>Tambah Paket Tour</a>
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
                            <th class="min-w-200px">paket Tour</th>
                            <th class="text-end min-w-150px">Hari</th>
                            <th class="text-end min-w-150px">Info</th>
                            <th class="text-end min-w-100px">Status</th>
                            <th class="text-end min-w-70px">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="fw-semibold text-gray-600">
                        @foreach ($list_tour_package as $tour_package)
                            <tr>
                                <td>
                                    <div class="form-check form-check-sm form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="1" />
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="symbol symbol-50px">
                                            <span class="symbol-label"
                                                style="background-image:url({{ $tour_package->getBanner() }});"></span>
                                        </a>
                                        <div class="ms-5">
                                            <a href="#" class="text-gray-800 text-hover-primary fs-5 fw-bold mb-1"
                                                data-kt-ecommerce-category-filter="category_name">{{ $tour_package->name }}</a>
                                            <div class="text-muted fs-7 fw-bold">
                                                {{ Str::limit(strip_tags($tour_package->description), 100) }}...</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-end pe-0">
                                    <span class="fw-bold">{{ $tour_package->days }}</span>
                                </td>
                                <td class="text-end pe-0">
                                  <ul style="list-style-type: none; padding: 0;">
                                    <li>
                                      <span class="fw-bold">Update:</span>
                                      <span>{{ $tour_package->updated_at->format('d M Y H:i') }}</span>
                                    </li>
                                    <li>
                                      <span class="fw-bold">Dibuat:</span>
                                      <span>{{ $tour_package->created_at->format('d M Y H:i') }}</span>
                                    </li>
                                  </ul>
                                </td>
                                <td class="text-end pe-0">
                                    @if ($tour_package->status == 'enabled')
                                        <div class="badge badge-light-success">enabled</div>
                                    @else
                                        <div class="badge badge-light-danger">disabled</div>
                                    @endif
                                </td>
                                <td class="text-end">
                                    <a href="#"
                                        class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                        <i class="ki-duotone ki-down fs-5 ms-1"></i></a>
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                        data-kt-menu="true">
                                        <div class="menu-item px-3">
                                            <a href="{{ route('back.tour.package.edit', $tour_package->id) }}"
                                                class="menu-link px-3">Edit</a>
                                        </div>
                                        <div class="menu-item px-3">
                                            <a href="#" class="menu-link px-3" data-bs-toggle="modal"
                                                data-bs-target="#delete_package{{ $tour_package->id }}">Delete</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    @foreach ($list_tour_package as $tour_package)
        <div class="modal fade" tabindex="-1" id="delete_package{{ $tour_package->id }}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Hapus Paket Tour</h3>
                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>
                    <form action="{{ route('back.tour.package.destroy', $tour_package->id) }}" method="POST">
                        @method('DELETE')
                        @csrf
                        <div class="modal-body">
                            <div class="mb-3">
                                <p>Apakah Anda yakin ingin menghapus paket Tour <strong>{{ $tour_package->name }}</strong>?</p>
                                <span class="text-danger"><b>Peringatan: </b> menghapus paket Tour akan menghapus semua data yang terkait dengan paket ini dan tidak dapat dikembalikan.</span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-danger">Hapus</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endforeach
@endsection
@section('scripts')
    <script src="{{ asset('back/js/custom/apps/ecommerce/catalog/news.js') }}"></script>
@endsection
