@extends('back.app')
@section('content')
<div id="kt_content_container" class=" container-xxl ">
            <div class="card card-flush">
                <div class="card-header align-items-center py-5 gap-2 gap-md-5">
                    <div class="card-title">
                        <ul class="nav nav-tabs nav-line-tabs mb-5 fs-6">
                            @foreach ($list_gallery_album as $index => $item)
                                <li class="nav-item">
                                    <a class="nav-link {{ $index == 0 ? 'active' : '' }}" data-bs-toggle="tab" href="#{{ $item->slug }}">{{ $item->title }}</a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="card-toolbar flex-row-fluid justify-content-end gap-5">
                        <div class="w-100 mw-150px">
                            <select class="form-select form-select-solid" data-control="select2" data-hide-search="true"
                                data-placeholder="Tipe Galeri" data-kt-ecommerce-product-filter="type_galeri">
                                <option></option>
                                <option value="all">Semua</option>
                                <option value="foto">Foto</option>
                                <option value="video">Video</option>
                            </select>
                        </div>
                        <div class="card-toolbar">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#add_category" class="btn btn-primary">
                                <i class="ki-duotone ki-plus fs-2"></i>
                                Tambah Foto/Video
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body pt-0">
                    <div class="tab-content" id="myTabContent">
                        @foreach ($list_gallery_album as $index => $album)
                            <div class="tab-pane fade {{ $index == 0 ? 'show active' : '' }}" id="{{ $album->slug }}">
                                <div class="row">
                                    @foreach ($album->gallery as $photo)
                                        <div class="col-md-3 mb-3">
                                            <div class="image-input image-input-outline">
                                                <div class="image-input-wrapper w-250px h-250px" style="background-image: url({{ Storage::url($photo->foto) }})"></div>
                                                <span data-bs-toggle="modal" data-bs-target="#delete_news{{ $photo->id }}" class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="remove"
                                                data-bs-toggle="tooltip"
                                                data-bs-dismiss="click"
                                                title="Remove avatar">
                                                    <i class="ki-outline ki-cross fs-3"></i>
                                                </span>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>

    </div>
    <div class="modal fade" tabindex="-1" id="add_category">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Tambah Foto/Video Galeri</h3>

                    <!--begin::Close-->
                    <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                        aria-label="Close">
                        <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span class="path2"></span></i>
                    </div>
                    <!--end::Close-->
                </div>

                <form action="{{ route('back.gallery.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                        <div class="mb-3">
                            <div>
                                <label for="description" class="form-label required">Pilih Foto</label>
                            </div>
                            <div class="d-flex d-flex justify-content-center">
                                <div class="image-input image-input-outline " data-kt-image-input="true" style="background-image: url({{ asset('back/media/svg/avatars/blank.svg') }})">
                                    <div class="image-input-wrapper w-125px h-125px" style="background-image: url({{ asset('back/media/svg/avatars/blank.svg') }})"></div>
                                    <label class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="change"
                                    data-bs-toggle="tooltip"
                                    data-bs-dismiss="click"
                                    title="Change avatar">
                                        <i class="ki-duotone ki-pencil fs-6"><span class="path1"></span><span class="path2"></span></i>

                                        <!--begin::Inputs-->
                                        <input type="file" name="foto" accept=".png, .jpg, .jpeg" />
                                        <input type="hidden" name="avatar_remove" />
                                        <!--end::Inputs-->
                                    </label>
                                    <!--end::Edit button-->

                                    <!--begin::Cancel button-->
                                    <span class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="cancel"
                                    data-bs-toggle="tooltip"
                                    data-bs-dismiss="click"
                                    title="Cancel avatar">
                                        <i class="ki-outline ki-cross fs-3"></i>
                                    </span>
                                    <!--end::Cancel button-->

                                    <!--begin::Remove button-->
                                    <span class="btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px bg-body shadow"
                                    data-kt-image-input-action="remove"
                                    data-bs-toggle="tooltip"
                                    data-bs-dismiss="click"
                                    title="Remove avatar">
                                        <i class="ki-outline ki-cross fs-3"></i>
                                    </span>
                                    <!--end::Remove button-->
                                </div>
                            </div>
                        </div>
                        <!--end::Image input-->
                        <div class="mb-3">
                            <label for="description" class="form-label required">Pilih Album</label>
                            <select class="form-select form-select-solid" name="gallery_album_id" required>
                                <option selected disabled>Pilih album</option>
                                @foreach ($list_gallery_album as $album)
                                    <option value="{{ $album->id }}">{{ $album->title }}</option>
                                @endforeach
                            </select>
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
    @foreach ($list_gallery as $gallery)
        <div class="modal fade modal-lg " tabindex="-1" id="preview_galeri{{ $gallery->id }}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Preview Galeri</h3>

                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>

                    <div class="modal-body">
                        @if ($gallery->type == 'foto')
                            <img src="{{ $gallery->getFoto() }}" class="img-fluid" alt="{{ $gallery->title }}">
                        @else

                            <iframe width="100%" height="500" src="{{ $gallery->getvideo() }}" title="{{ $gallery->title }}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen>
                            </iframe>
                        @endif
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" id="edit_category{{ $gallery->id }}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Edit Galeri</h3>

                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>

                    <form action="{{ route('back.gallery.update', $gallery->id) }}" method="POST" enctype="multipart/form-data">
                        @method('PUT')
                        @csrf
                        <div class="modal-body">
                            @csrf
                            <div class="mb-3">
                                <label for="description" class="form-label required">Pilih Album</label>
                                <select class="form-select form-select-solid" name="gallery_album_id" required>
                                    <option value="">Pilih album</option>
                                    @foreach ($list_gallery_album as $album)
                                        <option value="{{ $album->id }}" @if ($album->id == $gallery->gallery_album_id) selected @endif>{{ $album->title }}</option>
                                    @endforeach
                                </select>
                            </div>
                                <input type="hidden" name="type" value="{{ $gallery->type }}">
                            @if ($gallery->type == 'foto')
                                <div class="mb-3">
                                    <label for="name" class=" form-label">Foto</label>
                                    <input type="file" class="form-control form-control-solid" id="foto" name="foto" accept="image/*"
                                     required>
                                    <small class="">
                                        Link Foto : <a href="{{ $gallery->getFoto() }}" target="_blank">{{ $gallery->getFoto() }}</a>
                                    </small>
                                    <br>
                                    <small class="text-muted text-danger">Kosongkan jika tidak ingin mengganti foto</small>
                                    <br>
                                    <small class="text-muted text-danger">Foto harus berformat jpg, jpeg, png, atau gif, dengan ukuran maksimal 4MB</small>
                                </div>
                            @else
                                <div class="mb-3">
                                    <label for="video" class="form-label required">Link youtube</label>
                                    <textarea class="form-control form-control-solid" id="video" name="video" rows="3"
                                        placeholder="https://www.youtube.com/watch?v=XXXXXXXXXXX">{{ $gallery->video }}</textarea>
                                </div>
                            @endif
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Update Galeri</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" id="delete_news{{ $gallery->id }}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Hapus Galeri</h3>
                        <!--begin::Close-->
                        <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal"
                            aria-label="Close">
                            <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                    class="path2"></span></i>
                        </div>
                        <!--end::Close-->
                    </div>
                    <form action="{{ route('back.gallery.destroy', $gallery->id) }}" method="POST">
                        @method('DELETE')
                        @csrf
                        <div class="modal-body">
                            <div class="mb-3">
                                <p>Apakah Anda yakin ingin menghapus galeri Ini?</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Hapus</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    @endforeach
@endsection
@section('scripts')
    <script src="{{ asset('back/js/custom/apps/ecommerce/catalog/products.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('#type').change(function() {
                var type = $(this).val();
                if (type == 'foto') {
                    $('#type_galeri').html(`
                        <div class="mb-3">
                            <label for="name" class="form-label required">Foto</label>
                            <input type="file" class="form-control form-control-solid" id="foto" name="foto" required>
                            <small class="text-muted text-danger">Foto harus berformat jpg, jpeg, png, atau gif, dengan ukuran maksimal 4MB</small>
                        </div>
                    `);
                } else {
                    $('#type_galeri').html(`
                        <div class="mb-3">
                            <label for="video" class="form-label required">Link youtube</label>
                            <textarea class="form-control form-control-solid" id="video" name="video" rows="3"
                                placeholder="https://www.youtube.com/watch?v=XXXXXXXXXXX"></textarea>
                        </div>
                    `);
                }
            });
        });
    </script>
@endsection
