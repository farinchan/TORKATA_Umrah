@extends('back.app')
@section('content')
    <div id="kt_content_container" class=" container-xxl ">
        <form id="kt_ecommerce_add_category_form" class="form d-flex flex-column flex-lg-row"
            action="{{ route('back.tour.package.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                <div class="card card-flush py-4">
                    <div class="card-header">
                        <div class="card-title">
                            <h2>Banner</h2>
                        </div>
                    </div>
                    <div class="card-body text-center pt-0">
                        <style>
                            .image-input-placeholder {
                                background-image: url('{{ asset('back/media/svg/files/blank-image.svg') }}');
                            }

                            [data-bs-theme="dark"] .image-input-placeholder {
                                background-image: url('{{ asset('back/media/svg/files/blank-image-dark.svg') }}');
                            }
                        </style>
                        <div class="image-input image-input-empty image-input-outline image-input-placeholder mb-3"
                            data-kt-image-input="true">
                            <div class="image-input-wrapper w-150px h-150px"></div>
                            <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Ubah Thumbnail">
                                <i class="ki-duotone ki-pencil fs-7">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                                <input type="file" name="banner" accept=".png, .jpg, .jpeg" />
                                <input type="hidden" name="avatar_remove" />
                            </label>
                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Batalkan Thumbnail">
                                <i class="ki-duotone ki-cross fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                            </span>
                            <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Hapus Thumbnail">
                                <i class="ki-duotone ki-cross fs-2">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                </i>
                            </span>
                        </div>
                        <div class="text-muted fs-7">
                            Banner hanya menerima file dengan ekstensi .png, .jpg, .jpeg
                        </div>
                    </div>
                </div>
                <div class="card card-flush py-4">
                    <div class="card-header">
                        <div class="card-title">
                            <h2>Status</h2>
                        </div>
                        <div class="card-toolbar">
                            <div class="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_category_status">
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <select name="status" class="form-select mb-2" data-control="select2" data-hide-search="true"
                            data-placeholder="Select an option" id="kt_ecommerce_add_category_status_select" required>
                            <option></option>
                            <option value="enabled" {{ old('status') == 'enabled' ? 'selected' : '' }}>Enabled</option>
                            <option value="disabled" {{ old('status') == 'disabled' ? 'selected' : '' }}>Disabled</option>
                            </option>
                        </select>
                        @error('status')
                            <div class="text-danger fs-7">{{ $message }}</div>
                        @enderror
                        <div class="text-muted fs-7">
                            Set Status paket Tour, <code>enabled</code> untuk mempublikasikan paket Tour,
                            <code>disable</code>
                            untuk menyimpan sebagai draft
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <div class="card card-flush py-4">
                    <div class="card-header">
                        <div class="card-title">
                            <h2>Paket Tour</h2>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <div class="mb-10 fv-row">
                            <label class="required form-label">Nama Paket</label>
                            <input type="text" name="name" class="form-control mb-2" placeholder="Nama Paket"
                                value="{{ old('name') }}" required />
                            @error('name')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="mb-10 fv-row">
                            <label class="required form-label">Hari</label>
                            <div class="input-group mb-2">
                                <input type="number" name="days" class="form-control" placeholder="Hari"
                                    value="{{ old('days') }}" required />
                                <span class="input-group-text">Hari</span>
                            </div>
                            @error('days')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-10">
                            <label class="form-label">Deskripsi</label>
                            <div id="quill_content" name="kt_ecommerce_add_category_description" class="min-h-400px mb-2">
                                {!! old('description') !!}
                            </div>
                            <input type="hidden" name="description" id="content" required>
                            @error('description')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror
                        </div>

                        <div class="mb-10">
                            <label class="form-label">File Brosur</label>
                            <input type="file" name="file_brochure" class="form-control mb-2" accept=".pdf" />
                            @error('file_brochure')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror
                            <div class="text-muted fs-7">
                                File Brosur hanya menerima file dengan ekstensi .pdf
                            </div>
                        </div>


                        <div class="mb-10">
                            <label class="form-label">Fasilitas</label>
                            <div id="quill_facilities" class=" mb-2">
                                {!! old(
                                    'facilities',
                                    '
                                                                                                                                                                                                                                                                    <ul>
                                                                                                                                                                                                                                                                        <li>Hotel Bintang 5</li>
                                                                                                                                                                                                                                                                        <li>Transportasi</li>
                                                                                                                                                                                                                                                                        <li>dll</li>
                                                                                                                                                                                                                                                                    </ul>
                                                                                                                                                                                                                                                                ',
                                ) !!}
                            </div>
                            <input type="hidden" name="facilities" id="facilities" required>
                            @error('facilities')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="mb-10">
                            <label class="form-label">Exclude</label>
                            <div id="quill_exclude" class=" mb-2">
                                {!! old(
                                    'exclude',
                                    '<ul>
                                                                                                                                                                                                                                                                        <li>Pembuatan Visa</li>
                                                                                                                                                                                                                                                                        <li>dll</li>
                                                                                                                                                                                                                                                                    </ul> ',
                                ) !!}
                            </div>
                            <input type="hidden" name="exclude" id="exclude" required>
                            @error('exclude')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror
                        </div>
                        <div>
                            <label class="form-label">Meta Tag Keywords</label>
                            <input id="keyword_tagify" name="meta_keywords" class="form-control mb-2"
                                value="{{ old('meta_keywords') }}" />
                            @error('meta_keywords')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror
                            <div class="text-muted fs-7">
                                Meta Tag Keywords digunakan untuk SEO, pisahkan dengan koma <code>,</code> jika lebih
                                dari satu keywoard yang digunakan
                            </div>
                        </div>
                    </div>
                </div>

                {{-- <div class="card card-flush py-4">
                    <div class="card-header">
                        <div class="card-title">
                            <h2>Gambar Preview Lokasi</h2>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <form class="form" action="#" method="post">
                            <div class="fv-row">
                                <div class="dropzone" id="kt_dropzonejs_example_1">
                                    <div class="dz-message needsclick">
                                        <i class="ki-duotone ki-file-up fs-3x text-primary"><span
                                                class="path1"></span><span class="path2"></span></i>

                                        <div class="ms-4">
                                            <h3 class="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.
                                            </h3>
                                            <span class="fs-7 fw-semibold text-gray-500">Upload up to 10 files</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> --}}

                <div class="card card-flush py-4">
                    <div class="card-header">
                        <div class="card-title">
                            <h2>Itinerary</h2>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <div id="repeater_itinerary">
                            <div class="form-group">
                                <div data-repeater-list="itinerary">
                                    <div data-repeater-item>
                                        <div class="form-group row mb-3">
                                            <div class="col-md-3">
                                                <label class="form-label">Hari:</label>
                                                <input type="text" class="form-control mb-2 mb-md-0" name='itinerary_day'
                                                    placeholder="Hari Ke-1" />
                                            </div>
                                            <div class="col-md-7">
                                                <label class="form-label">Deskripsi</label>
                                                <textarea class="form-control mb-2 mb-md-0" rows="1" name="itinerary_description"
                                                    placeholder="Deskripsi Untuk Hari Ke-1"></textarea>
                                            </div>
                                            <div class="col-md-2">
                                                <a href="javascript:;" data-repeater-delete
                                                    class="btn btn-sm btn-light-danger mt-3 mt-md-8">
                                                    <i class="ki-duotone ki-trash fs-5"><span class="path1"></span><span
                                                            class="path2"></span><span class="path3"></span><span
                                                            class="path4"></span><span class="path5"></span></i>
                                                    Hapus
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mt-5">
                                <a href="javascript:;" data-repeater-create class="btn btn-light-primary">
                                    <i class="ki-duotone ki-plus fs-3"></i>
                                    Tambah
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <a href="{{ route('back.tour.package.index') }}" id="kt_ecommerce_add_product_cancel"
                        class="btn btn-light me-5">Batal</a>
                    <button type="submit" class="btn btn-primary">
                        <span class="indicator-label">Simpan Perubahan</span>
                    </button>
                </div>

            </div>
        </form>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('back/plugins/custom/formrepeater/formrepeater.bundle.js') }}"></script>
    <script>
        let toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
            [{
                'header': 1
            }, {
                'header': 2
            }], // custom button values
            [{
                'list': 'ordered'
            }, {
                'list': 'bullet'
            }],
            [{
                'script': 'sub'
            }, {
                'script': 'super'
            }], // superscript/subscript
            [{
                'indent': '-1'
            }, {
                'indent': '+1'
            }], // outdent/indent
            [{
                'direction': 'rtl'
            }], // text direction
            [{
                'size': ['small', false, 'large', 'huge']
            }], // custom dropdown
            [{
                'header': [1, 2, 3, 4, 5, 6, false]
            }],
            [{
                'color': []
            }, {
                'background': []
            }], // dropdown with defaults from theme
            [{
                'font': []
            }],
            [{
                'align': []
            }],
            ['clean'] // remove formatting button
        ];
        var quill = new Quill('#quill_content', {
            modules: {
                toolbar: toolbarOptions
            },
            placeholder: 'Tulis Deskripsi Paket Tour disini...',
            theme: 'snow' // or 'bubble'
        });

        $("#content").val(quill.root.innerHTML);
        quill.on('text-change', function() {
            $("#content").val(quill.root.innerHTML);
        });

        var quill_facilities = new Quill('#quill_facilities', {
            modules: {
                toolbar: toolbarOptions
            },
            placeholder: 'Tulis Fasilitas Paket Tour disini...',
            theme: 'snow' // or 'bubble'
        });

        $("#facilities").val(quill_facilities.root.innerHTML);
        quill_facilities.on('text-change', function() {
            $("#facilities").val(quill_facilities.root.innerHTML);
        });

        var quill_exclude = new Quill('#quill_exclude', {
            modules: {
                toolbar: toolbarOptions
            },
            placeholder: 'Tulis Fasilitas Paket Tour disini...',
            theme: 'snow' // or 'bubble'
        });

        $("#exclude").val(quill_exclude.root.innerHTML);
        quill_exclude.on('text-change', function() {
            $("#exclude").val(quill_exclude.root.innerHTML);
        });

        var tagify = new Tagify(document.querySelector("#keyword_tagify"), {
            whitelist: [],
            dropdown: {
                maxItems: 20, // <- mixumum allowed rendered suggestions
                classname: "tags-look",
                enabled: 0,
                closeOnSelect: true
            }
        });



        $('#repeater_itinerary').repeater({
            initEmpty: false,

            defaultValues: {
                'text-input': ''
            },

            show: function() {
                $(this).slideDown();
            },

            hide: function(deleteElement) {
                $(this).slideUp(deleteElement);
            }
        });
    </script>
@endsection
