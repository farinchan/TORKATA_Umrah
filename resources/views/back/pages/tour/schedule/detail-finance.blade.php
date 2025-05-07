@extends('back.app')
@section('content')
    <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
            @include('back.pages.tour.schedule.detail-header')

            <div class="card mb-5 mb-xl-8">
                <div class="card-header border-0 pt-6">
                    <div class="card-title py-5">
                        <h3 class="card-label fw-bolder fs-2 mb-1">Keuangan</h3>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-5">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <span class="fs-5 fw-bold text-gray-700 me-3 fs-2">Total Income:</span>
                                        <span class="fs-5 fw-bold text-success fs-2">@money($total_income)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-5">
                                <div class="card-body">
                                    <div class="d-flex align-items-center">
                                        <span class="fs-5 fw-bold text-gray-700 me-3 fs-2">Total Expense:</span>
                                        <span class="fs-5 fw-bold text-danger fs-2">@money($total_expense)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card text-center">
                                <div class="card-body">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <span class="fs-5 fw-bold text-gray-700 me-3 fs-2">Balance:</span>
                                        <span
                                            class="fs-5 fw-bold fs-2 @if ($total_income - $total_expense < 0) text-danger @else text-success @endif">
                                            @money($total_income - $total_expense)
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header border-0 pt-6">
                    <div class="card-title">
                        <div class="d-flex align-items-center position-relative my-1">
                            <i class="ki-duotone ki-magnifier fs-3 position-absolute ms-5">
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </i>
                            <input type="text" data-kt-user-table-filter="search"
                                class="form-control form-control-solid w-250px ps-13" placeholder="Cari Keuangan" />
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
                                        <label class="form-label fs-6 fw-semibold">Type</label>
                                        <select class="form-select form-select-solid fw-bold" data-kt-select2="true"
                                            data-placeholder="Select option" data-allow-clear="true"
                                            data-kt-user-table-filter="type" data-hide-search="true">
                                            <option></option>
                                            <option value="income">Income</option>
                                            <option value="expense">Expense</option>
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

                                <a href="#" class="btn btn-light-info" data-bs-toggle="modal"
                                    data-bs-target="#add_finance">
                                    <i class="ki-duotone ki-plus fs-2"></i>
                                    Tambah Transaksi
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
                                <th class="min-w-200px">Transaksi</th>
                                <th class="min-w-125px">Tanggal</th>
                                <th class="min-w-150px">Jumlah</th>
                                <th class="min-w-50px">Type</th>
                                <th class="min-w-200px">Payment Info</th>
                                <th class="min-w-100px">Lampiran</th>
                                <th class="min-w-300px">Log</th>
                                <th class="text-end min-w-100px">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-semibold">
                            @foreach ($list_finance as $finance)
                                <tr>
                                    <td>
                                        <div class="form-check form-check-sm form-check-custom form-check-solid">
                                            <input class="form-check-input" type="checkbox" value="1" />
                                        </div>
                                    </td>
                                    <td class="d-flex align-items-center">

                                        <div class="d-flex flex-column">
                                            <a href="#"
                                                class="text-gray-800 text-hover-primary mb-1">{{ $finance->name }}</a>
                                            <span> {{ Str::limit($finance->description, 50) }}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                            class="fw-bold">{{ Carbon\Carbon::parse($finance->date)->format('d M Y H:i') }}
                                        </span>
                                    </td>
                                    <td>
                                        @if ($finance->type == 'income')
                                            <span class="fw-bold text-success">+@money($finance->amount)</span>
                                        @else
                                            <span class="fw-bold text-danger">-@money($finance->amount)</span>
                                        @endif
                                    </td>
                                    <td>
                                        @if ($finance->type == 'income')
                                            <span class="badge badge-light-success">Income</span>
                                        @else
                                            <span class="badge badge-light-danger">Expense</span>
                                        @endif
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <span class="fw-bold">Metode Pembayaran:</span>
                                                <span>{{ $finance->payment_method ?? '-' }}</span>
                                            </li>
                                            <li>
                                                <span class="fw-bold">No Ref:</span>
                                                <span>{{ $finance->payment_reference ?? '-' }}</span>
                                            </li>
                                            <li>
                                                <span class="fw-bold">Note:</span>
                                                <span>{{ $finance->payment_note ?? '-' }}</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td>
                                        @if ($finance->attachment)
                                            <a href="{{ asset('storage/' . $finance->attachment) }}" target="_blank">
                                                <i class="ki-duotone ki-file-added text-primary fs-3x"
                                                    data-bs-toggle="tooltip" data-bs-placement="right"
                                                    title="Lihat File">
                                                    <span class="path1"></span>
                                                    <span class="path2"></span>
                                                </i>
                                            </a>
                                        @else
                                            <i class="ki-duotone ki-file-deleted text-danger fs-3x"
                                                data-bs-toggle="tooltip" data-bs-placement="right"
                                                title="File Tidak Ada">
                                                <span class="path1"></span>
                                                <span class="path2"></span>
                                            </i>
                                        @endif
                                    </td>
                                    <td>
                                        <ul>
                                            <li>
                                                <span class="fw-bold">Created At:</span>
                                                <span>{{ Carbon\Carbon::parse($finance->created_at)->format('d M Y H:i') }}</span>
                                            </li>

                                            <li>
                                                <span class="fw-bold">Created By:</span>
                                                <span>{{ $finance->createdBy->name }}</span>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li>
                                                <span class="fw-bold">Updated At:</span>
                                                <span>{{ Carbon\Carbon::parse($finance->updated_at)->format('d M Y H:i') }}</span>
                                            </li>

                                            <li>
                                                <span class="fw-bold">Updated By:</span>
                                                <span>{{ $finance->updatedBy->name }}</span>
                                            </li>
                                        </ul>
                                    </td>
                                    <td class="text-end d-flex">
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#edit_finance_{{ $finance->id }}"
                                            class="btn btn-icon btn-light-warning me-5 "><i
                                                class="fa-solid fa-pen-to-square fs-4"></i></a>
                                        <a href="#" data-bs-toggle="modal"
                                            data-bs-target="#delete_finance_{{ $finance->id }}"
                                            class="btn btn-icon btn-light-danger me-5 "><i
                                                class="fa-solid fa-trash fs-4"></i></a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" tabindex="-1" id="add_finance">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Tambah Data Keuangan</h3>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                    </div>
                    <!--end::Close-->
                </div>
                <form action="{{ route('back.tour.schedule.finance.store', $schedule->id) }}" method="post"
                    enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-5">
                            <label class="form-label required">Nama Transaksi</label>
                            <input type="text" class="form-control" placeholder="Nama transaksi keuangan"
                                name="name" value="{{ old('name') }}" required />
                        </div>
                        <div class="mb-5">
                            <label class="form-label">Deskripsi</label>
                            <textarea class="form-control" placeholder="Deskripsi transaksi keuangan" name="description">{{ old('description') }}</textarea>
                        </div>
                        <div class="mb-5">
                            <label class="form-label required">Jumlah</label>
                            <div class="input-group mb-5">
                                <span class="input-group-text">Rp.</span>
                                <input type="text" class="form-control" placeholder="Jumlah transaksi keuangan"
                                    value="{{ old('amount') }}" oninput="formatRupiah(this)" required />
                            </div>
                            <input type="hidden" id="rupiah_value" name="amount"
                                        value="{{ old('amount') }}">
                        </div>
                        <div class="mb-5">
                            <label class="form-label required">Tanggal</label>
                            <input type="datetime-local" class="form-control" placeholder="Tanggal transaksi keuangan"
                                name="date" value="{{ old('date') }}" required />
                        </div>
                        <div class="mb-5">
                            <label class="form-label required">Type</label>
                            <select class="form-select" name="type" required>
                                <option value="income" {{ old('type') == 'income' ? 'selected' : '' }}>Income</option>
                                <option value="expense" {{ old('type') == 'expense' ? 'selected' : '' }}>Expense</option>
                            </select>
                        </div>
                        <div class="row mb-5">
                            <div class="col-md-6">
                                <label class="form-label ">Metode Pembayaran</label>
                                <input type="text" class="form-control" placeholder="Metode Pembayaran"
                                    name="payment_method" value="{{ old('payment_method') }}" />
                            </div>
                            <div class="col-md-6">
                                <label class="form-label ">No Ref</label>
                                <input type="text" class="form-control" placeholder="No Ref" name="payment_reference"
                                    value="{{ old('payment_reference') }}" />
                            </div>
                        </div>
                        <div class="mb-5">
                            <label class="form-label ">Note</label>
                            <textarea class="form-control" placeholder="Note" name="payment_note">{{ old('payment_note') }}</textarea>
                        </div>
                        <div class="mb-5">
                            <label class="form-label">Lampiran</label>
                            <input type="file" class="form-control" name="attachment" />
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

    @foreach ($list_finance as $finance)
        <div class="modal fade" tabindex="-1" id="edit_finance_{{ $finance->id }}">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Edit Data Keuangan</h3>

                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>
                    <form action="{{ route('back.tour.schedule.finance.update', [$schedule->id, $finance->id]) }}"
                        method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="modal-body mb-5">
                            <div class="mb-5">
                                <label class="form-label required">Nama Transaksi</label>
                                <input type="text" class="form-control" placeholder="Nama transaksi keuangan"
                                    name="name" value="{{ $finance->name }}" required />
                            </div>
                            <div class="mb-5">
                                <label class="form-label">Deskripsi</label>
                                <textarea class="form-control" placeholder="Deskripsi transaksi keuangan" name="description">{{ $finance->description }}</textarea>
                            </div>
                            <div class="mb-5">
                                <label class="form-label required">Jumlah</label>
                                <div class="input-group mb-5">
                                    <span class="input-group-text">Rp.</span>
                                    <input type="number" class="form-control" placeholder="Jumlah transaksi keuangan"
                                        name="amount" value="{{ $finance->amount }}" required />
                                </div>
                            </div>
                            <div class="mb-5">
                                <label class="form-label required">Tanggal</label>
                                <input type="datetime-local" class="form-control"
                                    placeholder="Tanggal transaksi keuangan" name="date"
                                    value="{{ Carbon\Carbon::parse($finance->date)->format('Y-m-d\TH:i') }}" required />
                            </div>
                            <div class="mb-5">
                                <label class="form-label required">Type</label>
                                <select class="form-select" name="type" required>
                                    <option value="income" {{ $finance->type == 'income' ? 'selected' : '' }}>Income
                                    </option>
                                    <option value="expense" {{ $finance->type == 'expense' ? 'selected' : '' }}>Expense
                                    </option>
                                </select>
                            </div>
                            <div class="row mb-5">
                                <div class="col-md-6">
                                    <label class="form-label ">Metode Pembayaran</label>
                                    <input type="text" class="form-control" placeholder="Metode Pembayaran"
                                        name="payment_method" value="{{ $finance->payment_method }}" />
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label ">No Ref</label>
                                    <input type="text" class="form-control" placeholder="No Ref"
                                        name="payment_reference" value="{{ $finance->payment_reference }}" />
                                </div>
                            </div>
                            <div class="mb-5">
                                <label class="form-label ">Note</label>
                                <textarea class="form-control" placeholder="Note" name="payment_note">{{ $finance->payment_note }}</textarea>
                            </div>
                            <div class="mb-5">
                                <label class="form-label ">Lampiran</label>
                                <input type="file" class="form-control" name="attachment" />
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

        <div class="modal fade" tabindex="-1" id="delete_finance_{{ $finance->id }}">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Hapus Transaksi</h3>

                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body mb-5">
                        <p>Apakah Anda yakin ingin menghapus transaksi ini?</p>
                        <p class="text-danger">
                            <strong>Peringatan: </strong> Seluruh data yang terkait dengan transaksi ini
                            akan dihapus dan tidak dapat dikembalikan.
                        </p>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Batal</button>
                        <form action="{{ route('back.tour.schedule.finance.destroy', [$schedule->id, $finance->id]) }}"
                            method="POST">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger">Ya, Hapus</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
@endsection

@section('scripts')
    <script src="{{ asset('back/js/custom/apps/user-management/users/list/jamaah.js') }}"></script>
    <script>
        function formatRupiah(element) {
            let angka = element.value.replace(/\D/g, '');
            let formatted = angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            element.value = formatted;
            document.getElementById('rupiah_value').value = angka;
        }
    </script>
@endsection
