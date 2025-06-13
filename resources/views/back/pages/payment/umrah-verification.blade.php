@extends('back.app')
@section('content')
    <div id="kt_content_container" class=" container-xxl ">
        <div class="card">
            <div class="card-header border-0 pt-6">
                <div class="card-title">
                    <div class="d-flex align-items-center position-relative my-1">
                        <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                        <input type="text" data-kt-user-table-filter="search"
                            class="form-control form-control-solid w-250px ps-13" placeholder="Cari Pembayaran" />
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
                                    <label class="form-label fs-6 fw-semibold">Status</label>
                                    <select class="form-select form-select-solid fw-bold" data-kt-select2="true"
                                        data-placeholder="Select option" data-allow-clear="true"
                                        data-kt-user-table-filter="status" data-hide-search="true">
                                        <option></option>
                                        <option value="Pending">Pending</option>
                                        <option value="Diterima">Diterima</option>
                                        <option value="Ditolak">Ditolak</option>
                                    </select>
                                </div>
                                <div class="mb-5">
                                    <label class="form-label fs-6 fw-semibold">Tipe</label>
                                    <select class="form-select form-select-solid fw-bold" data-kt-select2="true"
                                        data-placeholder="Select option" data-allow-clear="true"
                                        data-kt-user-table-filter="type" data-hide-search="true">
                                        <option></option>
                                        <option value="DP">DP</option>
                                        <option value="Pelunasan">Pelunasan</option>
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

                        {{-- <a href="#" class="btn btn-primary me-3">
                            <i class="ki-duotone ki-plus fs-2"></i>Tambah Pembayaran</a> --}}
                        <div class="btn-group">

                            {{-- <a href="#" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#import">
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
                            </a> --}}
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
                            <th>Tanggal</th>
                            <th>Pembayaran</th>
                            <th>Tipe</th>
                            <th>Jumlah</th>
                            <th>Bukti</th>
                            <th class="min-w-125px">Jama'ah</th>
                            <th>Agen/Staff</th>
                            <th>Status</th>
                            <th class="text-end min-w-100px">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 fw-semibold">
                        @foreach ($payments ?? [] as $payment)
                            {{-- @dd($payment) --}}
                            <tr>
                                <td>
                                    <div class="form-check form-check-sm form-check-custom form-check-solid">
                                        <input class="form-check-input" type="checkbox" value="1" />
                                    </div>
                                </td>
                                <td>{{ $payment->created_at->format('d M Y H:i') }}</td>
                                <td class="text-gray-900 text-bold">{{ strtoupper($payment->payment) }}</td>
                                <td>
                                    @if ($payment->type == 'dp')
                                        DP
                                    @elseif ($payment->type == 'pelunasan')
                                        Pelunasan
                                    @endif

                                </td>
                                <td>@money($payment->amount)</td>
                                <td>
                                    <a href="{{ Storage::url($payment->proof) }}" target="_blank">Lihat
                                        Bukti</a>
                                </td>
                                {{-- @dd($payment->user) --}}
                                <td class="d-flex align-items-center">
                                    @if ($payment->payment == 'umrah')
                                        <div class="d-flex flex-column">
                                            <a href="{{ route('back.booking.umrah.history.detail', $payment->user['code']) }}"
                                                class="text-gray-800 text-hover-primary mb-1">{{ $payment->user['name'] }}</a>
                                            <span> ID. {{ $payment->user['code'] }}</span>
                                        </div>
                                    @elseif ($payment->payment == 'tour')
                                        <div class="d-flex flex-column">
                                            <a href="{{ route('back.booking.tour.history.detail', $payment->user['code']) }}"
                                                class="text-gray-800 text-hover-primary mb-1">{{ $payment->user['name'] }}</a>
                                            <span> ID. {{ $payment->user['code'] }}</span>
                                        </div>
                                    @endif
                                </td>
                                <td>
                                    {{ $payment->user['staff']['name'] }}
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

                                <td class="text-end">
                                    @if ($payment->status == 'pending')
                                        <a href="#" class="btn btn-icon btn-secondary" data-bs-toggle="modal"
                                            data-bs-target="#edit{{ $payment->id }}">
                                            <i class="bi bi-pencil-square fs-4 me-2"></i>
                                        </a>
                                    @else
                                        -
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    @foreach ($payments as $payment)
        <div class="modal fade" tabindex="-1" id="edit{{ $payment->id }}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Edit Pembayaran</h3>

                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>
                    <form
                        action="
                    @if ($payment->payment == 'umrah') {{ route('back.payment.umrah.verification.update', $payment->id) }}
                    @elseif ($payment->payment == 'tour')
                    {{ route('back.payment.tour.verification.update', $payment->id) }} @endif
                     "
                        method="post">
                        @method('put')
                        @csrf


                        <div class="modal-body">
                            <div class="mb-10">
                                <label class="form-label">Status</label>
                                <select class="form-select form-select-solid" data-control="select2" name="status"
                                    data-placeholder="Select option" data-hide-search="true" data-allow-clear="true">
                                    <option></option>
                                    <option value="pending" @if ($payment->status == 'pending') selected @endif>Pending
                                    </option>
                                    <option value="approved" @if ($payment->status == 'approved') selected @endif>Diterima
                                    </option>
                                    <option value="rejected" @if ($payment->status == 'rejected') selected @endif>Ditolak
                                    </option>
                                </select>
                            </div>
                            <div class="mb-10">
                                <label class="form-label">Catatan</label>
                                <textarea class="form-control form-control-solid" rows="3" placeholder="Catatan" name="note"></textarea>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endforeach
@endsection
@section('scripts')
    <script src="{{ asset('back/js/custom/apps/user-management/users/list/payment.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('form').submit(function() {
                $(this).find("button[type='submit']").prop('disabled', true);
            });
        });
    </script>
@endsection
