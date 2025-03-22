@extends('back.app')
@section('content')
    <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
            @include('back.pages.umrah.schedule.detail-header')

            <div class="card">
                <div class="card-header border-0 pt-6">
                    <div class="card-title">
                        <div class="d-flex align-items-center position-relative my-1">
                            <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                            <input type="text" data-kt-user-table-filter="search"
                                class="form-control form-control-solid w-250px ps-13" placeholder="Cari Jama'ah" />
                        </div>
                    </div>
                    <div class="card-toolbar">
                        <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                            <button type="button" class="btn btn-light-primary me-3" data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end">
                                <i class="ki-duotone ki-filter fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>Filter</button>
                            <div class="menu menu-sub menu-sub-dropdown w-300px w-md-325px" data-kt-menu="true">
                                <div class="px-7 py-5">
                                    <div class="fs-5 text-gray-900 fw-bold">Filter Options</div>
                                </div>
                                <div class="separator border-gray-200"></div>
                                <div class="px-7 py-5" data-kt-user-table-filter="form">
                                    <div class="mb-5">
                                        <label class="form-label fs-6 fw-semibold">Jenis Kelamin</label>
                                        <select class="form-select form-select-solid fw-bold" data-kt-select2="true"
                                            data-placeholder="Select option" data-allow-clear="true"
                                            data-kt-user-table-filter="role" data-hide-search="true">
                                            <option></option>
                                            <option value="laki-laki">Laki-laki</option>
                                            <option value="perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                    <div class="mb-5">
                                        <label class="form-label fs-6 fw-semibold">Paket</label>
                                        <select class="form-select form-select-solid fw-bold" data-kt-select2="true"
                                            data-placeholder="Select option" data-allow-clear="true"
                                            data-kt-user-table-filter="type" data-hide-search="true">
                                            <option></option>
                                            <option value="Quad">Quad</option>
                                            <option value="Triple">Triple</option>
                                            <option value="Double">Double</option>
                                        </select>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="reset"
                                            class="btn btn-light btn-active-light-primary fw-semibold me-2 px-6"
                                            data-kt-menu-dismiss="true" data-kt-user-table-filter="reset">Reset</button>
                                        <button type="submit" class="btn btn-primary fw-semibold px-6"
                                            data-kt-menu-dismiss="true" data-kt-user-table-filter="filter">Apply</button>
                                    </div>
                                </div>
                            </div>

                            <div class="btn-group">

                                <a href="#" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#import">
                                    <i class="ki-duotone ki-file-down fs-2">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                    Import</a>
                                <a class="btn btn-secondary" href="">
                                    <i class="ki-duotone ki-file-up fs-2">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </i>
                                    Export
                                </a>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end align-items-center d-none" {{-- data-kt-user-table-toolbar="selected" --}}>
                            <div class="fw-bold me-5">
                                <span class="me-2" data-kt-user-table-select="selected_count"></span>Selected
                            </div>
                            <button type="button" class="btn btn-danger" data-kt-user-table-select="delete_selected">Delete
                                Selected</button>
                        </div>

                    </div>
                </div>
                <div class="card-body py-4">
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                        <thead>
                            <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                <th class="w-10px pe-2">
                                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                        <input class="form-check-input" type="checkbox" data-kt-check="true"
                                            data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                                    </div>
                                </th>
                                <th class="min-w-200px">Jama'ah</th>
                                <th class="min-w-125px">Jenis Kelamin</th>
                                <th class="min-w-125px">No Telp</th>
                                <th class="min-w-200px">Paket</th>
                                <th class="min-w-125px">Total Pembayaran</th>
                                <th class="min-w-125px">Diskon</th>
                                <th class="text-end min-w-100px">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-semibold">
                            @foreach ($list_jamaah as $user)
                                <tr>
                                    <td>
                                        <div class="form-check form-check-sm form-check-custom form-check-solid">
                                            <input class="form-check-input" type="checkbox" value="1" />
                                        </div>
                                    </td>
                                    <td class="d-flex align-items-center">
                                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="#">
                                                <div class="symbol-label">
                                                    <img src="{{ $user->getPhoto() }}" alt="{{ $user->name }}"
                                                        width="50px" />
                                                </div>
                                            </a>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <a href="#"
                                                class="text-gray-800 text-hover-primary mb-1">{{ $user->name }}</a>
                                            <span> ID. {{ $user->code }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="fw-bold">{{ $user->gender ?? '-' }}</span>
                                    </td>
                                    <td>
                                        <span class="fw-bold"></span>{{ $user->phone ?? '-' }}
                                    </td>
                                    <td>
                                        <span class="fw-bold"></span>
                                        Paket: {{ $user->umrahSchedule->umrahPackage->name ?? '-' }} <br>
                                        Jadwal: {{ $user->umrahSchedule?->name ?? '-' }} <br>
                                        Tipe Paket:
                                        @if ($user->package_type == 'quad')
                                            <span class="text-danger">Quad</span>
                                        @elseif($user->package_type == 'triple')
                                            <span class="text-warning">Triple</span>
                                        @elseif($user->package_type == 'double')
                                            <span class="text-primary">Double</span>
                                        @endif
                                    </td>
                                    <td>

                                        <span class="text-primary">@money($user->total_payment)</span>
                                        <br>
                                        @php
                                            $totalPaymentWithDiscount = $user->total_payment + $user->discount;
                                        @endphp
                                        @if ($user->package_type == 'quad')
                                            @if ($totalPaymentWithDiscount < $schedule->quad_price)
                                                <span class="badge badge-light-danger">Belum Lunas</span>
                                            @else
                                                <span class="badge badge-light-success">Lunas</span>
                                            @endif
                                        @elseif($user->package_type == 'triple')
                                            @if ($totalPaymentWithDiscount < $schedule->triple_price)
                                                <span class="badge badge-light-danger">Belum Lunas</span>
                                            @else
                                                <span class="badge badge-light-success">Lunas</span>
                                            @endif
                                        @elseif($user->package_type == 'double')
                                            @if ($totalPaymentWithDiscount < $schedule->double_price)
                                                <span class="badge badge-light-danger">Belum Lunas</span>
                                            @else
                                                <span class="badge badge-light-success">Lunas</span>
                                            @endif
                                        @endif
                                    </td>

                                    <td>
                                        @if ($user->discount > 0)
                                            <span class="text-warning">- @money($user->discount)</span>
                                        @else
                                            <span class="text-muted">No Discount</span>
                                        @endif
                                    </td>

                                    <td class="text-end d-flex">
                                        <a href="{{ route('back.umrah.schedule.jamaah.detail', [$schedule->id, $user->code]) }}"
                                            class="btn btn-light-primary">Detail</a>
                                        <a href="{{ route('back.umrah.schedule.jamaah.invoice', [$schedule->id, $user->code]) }}" class="ms-2 btn btn-light-info">
                                            <i class="ki-duotone ki-printer fs-2">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                                <span class="path3"></span>
                                                <span class="path4"></span>
                                                <span class="path5"></span>
                                            </i>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('back/js/custom/apps/user-management/users/list/jamaah.js') }}"></script>
@endsection
