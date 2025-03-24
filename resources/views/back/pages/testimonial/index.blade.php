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
                            class="form-control form-control-solid w-250px ps-12" placeholder="Cari Testimonial" />
                    </div>
                </div>
                <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                    <div class="w-100 mw-150px">
                        <select class="form-select form-select-solid" data-control="select2" data-hide-search="true"
                            data-placeholder="Status" data-kt-ecommerce-product-filter="status">
                            <option></option>
                            <option value="all">Semua</option>
                            <option value="Aktif">Aktif</option>
                            <option value="Non-Aktif">Non-Aktif</option>
                        </select>
                    </div>
                    <div class="card-toolbar">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#add_category" class="btn btn-primary">
                            <i class="ki-duotone ki-plus fs-2"></i>
                            Tambah Testimonial
                        </a>
                    </div>
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
                            <th class="min-w-200px">Pelanggang</th>
                            <th class="text-start min-w-100px">Testimonial</th>
                            <th class="text-end ">Tampil</th>
                            <th class="text-end min-w-70px">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="fw-semibold text-gray-600">
                        @foreach ($list_testimonial as $testimonial)
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
                                                <img src="{{ $testimonial->getPhoto() }}" alt="{{ $testimonial->name }}"
                                                    width="50px" />
                                            </div>
                                        </a>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <a href="#"
                                            class="text-gray-800 text-hover-primary mb-1">{{ $testimonial->name }}</a>
                                        <span> {{ $testimonial->position }} di {{ $testimonial->company }}</span>
                                    </div>
                                </td>
                                <td class="text-start">
                                    <div class=" text-gray-800">"{{ $testimonial->content }}"</div>
                                </td>
                                <td class="text-end pe-0">
                                    <div class="form-check form-switch form-check-custom form-check-solid text-end"
                                        style="display: inline-block">
                                        <input class="form-check-input" data-name="checkbox_status"
                                            data-checked="@if ($testimonial->status == 1) Aktif @else Non-Aktif @endif"
                                            type="checkbox" value="{{ $testimonial->id }}"
                                            @if ($testimonial->status == 1) checked @endif>
                                    </div>
                                </td>
                                <td class="text-end">
                                    <a href="#"
                                        class="btn btn-sm btn-light btn-flex btn-center btn-active-light-primary"
                                        data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                                        <i class="ki-duotone ki-down fs-5 ms-1"></i></a>
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                        data-kt-menu="true">
                                        <div class="menu-item px-3">
                                            <a href="#" class="menu-link px-3" data-bs-toggle="modal"
                                                data-bs-target="#edit_testimonial{{ $testimonial->id }}">
                                                Edit</a>
                                        </div>
                                        <div class="menu-item px-3">
                                            <a href="#" class="menu-link px-3" data-bs-toggle="modal"
                                                data-bs-target="#delete_testimonial{{ $testimonial->id }}">Delete</a>
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
    <div class="modal fade" tabindex="-1" id="add_category">
        <div class="modal-dialog modal-dialog-centered mw-650px">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Tambah Testimonial</h3>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                    </div>
                    <!--end::Close-->
                </div>

                <form action="{{ route('back.testimonial.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                        @csrf
                        <div class="mb-3 justify-content-center d-flex">
                            <style>
                                .image-input-placeholder {
                                    background-image: url('{{ asset('back/media/svg/avatars/blank.svg') }}');
                                }

                                [data-bs-theme="dark"] .image-input-placeholder {
                                    background-image: url('{{ asset('back/media/svg/avatars/blank-dark.svg') }}');
                                }
                            </style>
                            <div class="image-input image-input-empty image-input-circle" data-kt-image-input="true"
                                style="background-image: url({{ asset('back/media/svg/avatars/blank.svg') }})">
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
                            @error('photo')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="name" class=" form-label required">Nama</label>
                            <input type="text" class="form-control form-control-solid" id="name" name="name"
                                value="{{ old('name') }}" placeholder="Nama" required>
                            @error('name')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <div class="row">
                                <div class="col-md-6">

                                    <label for="type" class="form-label required">Posisi</label>
                                    <input type="text" class="form-control form-control-solid" id="position"
                                        value="{{ old('position') }}" name="position" placeholder="Posisi yang dijabat"
                                        required>
                                    @error('position')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                                <div class="col-md-6">
                                    <label for="type" class="form-label required">Perusahaan/Lembaga</label>
                                    <input type="text" class="form-control form-control-solid" id="company"
                                        value="{{ old('company') }}" name="company"
                                        placeholder="Perusahaan/Lembaga yang diwakili" required>
                                    @error('company')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="type" class="form-label required">Testimonial</label>
                            <textarea class="form-control form-control-solid" id="content" name="content" rows="5"
                                placeholder="Tulis testimonial disini" required>{{ old('content') }}</textarea>
                            @error('content')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror

                        </div>

                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Tambah</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    @foreach ($list_testimonial as $testimonial)
        <div class="modal fade" tabindex="-1" id="edit_testimonial{{ $testimonial->id }}">
            <div class="modal-dialog modal-dialog-centered mw-650px">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Edit Testimonial</h3>

                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>

                    <form action="{{ route('back.testimonial.update', $testimonial->id) }}" method="POST"
                        enctype="multipart/form-data">
                        @method('PUT')
                        @csrf
                        <div class="modal-body">
                            @csrf
                            <div class="mb-3 justify-content-center d-flex">
                                <style>
                                    .image-input-placeholder {
                                        background-image: url('{{ asset('back/media/svg/avatars/blank.svg') }}');
                                    }

                                    [data-bs-theme="dark"] .image-input-placeholder {
                                        background-image: url('{{ asset('back/media/svg/avatars/blank-dark.svg') }}');
                                    }
                                </style>
                                <div class="image-input  image-input-circle" data-kt-image-input="true"
                                    style="background-image: url({{ asset('back/media/svg/avatars/blank.svg') }})">
                                    <div class="image-input-wrapper w-125px h-125px"
                                        style="background-image: url({{ $testimonial->getPhoto() }})"></div>
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
                            <div class="mb-3">
                                <label for="name" class=" form-label required">Nama</label>
                                <input type="text" class="form-control form-control-solid" id="name"
                                    name="name" value="{{ $testimonial->name }}" placeholder="Nama" required>
                            </div>
                            <div class="mb-3">
                                <div class="row">
                                    <div class="col-md-6">

                                        <label for="type" class="form-label required">Posisi</label>
                                        <input type="text" class="form-control form-control-solid" id="position"
                                            value="{{ $testimonial->position }}" name="position"
                                            placeholder="Posisi yang dijabat" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="type" class="form-label required">Perusahaan/Lembaga</label>
                                        <input type="text" class="form-control form-control-solid" id="company"
                                            value="{{ $testimonial->company }}" name="company"
                                            placeholder="Perusahaan/Lembaga yang diwakili" required>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="type" class="form-label required">Testimonial</label>
                                <textarea class="form-control form-control-solid" id="content" name="content" rows="5"
                                    placeholder="Tulis testimonial disini" required>{{ $testimonial->content }}</textarea>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Update Testimonial</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" id="delete_testimonial{{ $testimonial->id }}">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Hapus Testimonial</h3>
                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>
                    <form action="{{ route('back.testimonial.destroy', $testimonial->id) }}" method="POST">
                        @method('DELETE')
                        @csrf
                        <div class="modal-body">
                            <div class="mb-3">
                                <p>Apakah Anda yakin ingin menghapus Testimonial dari <b>{{ $testimonial->name }}</b>?</p>
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
    <script src="{{ asset('back/js/custom/apps/ecommerce/catalog/testimonial.js') }}"></script>
    <script>
        $(document).ready(function() {

            $('input[data-name="checkbox_status"]').change(function() {
                var id = $(this).val();
                var status = $(this).prop('checked') == true ? 1 : 0;
                $.ajax({
                    type: "PUT",
                    dataType: "json",
                    url: "{{ route('back.testimonial.status') }}",
                    headers: {
                        'X-CSRF-TOKEN': "{{ csrf_token() }}"
                    },
                    data: {
                        'status': status,
                        'id': id
                    },
                    success: function(data) {
                        console.log(data)
                        toastr.success(data.message)
                    },
                    error: function(data) {
                        console.log(data)
                        toastr.error(data.message)
                    }
                });
            });
        });
    </script>
@endsection
