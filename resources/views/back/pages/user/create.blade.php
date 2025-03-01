@extends('back.app')
@section('content')
    <div id="kt_app_content" class="app-content flex-column-fluid">
        <div id="kt_app_content_container" class="app-container container-xxl">
            <form id="kt_ecommerce_add_category_form" class="form d-flex flex-column flex-lg-row"
                action="{{ route('back.user.store') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Foto</h2>
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
                                    <input type="file" name="photo" accept=".png, .jpg, .jpeg" />
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
                                Set foto anggota, hanya menerima file dengan ekstensi .png, .jpg, .jpeg
                            </div>
                        </div>
                    </div>
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Role</h2>
                            </div>
                            <div class="card-toolbar">
                                <div class="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_category_status">
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="form-check mt-3">
                                <input class="form-check-input" type="checkbox" name="role_admin" value="1"
                                    @if (old('role_admin') == 1) checked @endif id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Super-Admin/Owner
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <input class="form-check-input" type="checkbox" name="role_kantor" value="1"
                                    @if (old('role_kantor') == 1) checked @endif id="flexCheckKantor" />
                                <label class="form-check-label" for="flexCheckKantor">
                                    Admin Kantor
                                </label>
                            </div>
                            <div class="form-check mt-3">
                                <input class="form-check-input" type="checkbox" name="role_agen" value="1"
                                    @if (old('role_agen') == 1) checked @endif id="flexCheckAgen" />
                                <label class="form-check-label" for="flexCheckAgen">
                                    Agen
                                </label>
                            </div>

                            @error('status')
                                <div class="text-danger fs-7">{{ $message }}</div>
                            @enderror

                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Biodata</h2>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="mb-5 fv-row">
                                <label class="form-label required">NIK</label>
                                <input type="text" name="nik" class="form-control mb-2" placeholder="NIK" value="{{ old('nik') }}" required />
                                @error('nik')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="required form-label">Nama</label>
                                <input type="text" name="name" class="form-control mb-2"
                                    placeholder="Nama Staff" value="{{ old('name') }}" required />
                                @error('name')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-5 row">
                                <div class="col-md-4">

                                    <label class="form-label required">Tempat Lahir</label>
                                    <input type="text" name="birthplace" class="form-control mb-2" placeholder="Tempat Lahir" value="{{ old('birthplace') }}" required/>
                                    @error('birthplace')
                                        <div class="text-danger fs-7">{{ $message }}</div>
                                    @enderror
                                </div>
                                <div class="col-md-8">
                                    <label class="form-label required">Tanggal Lahir</label>
                                    <input type="date" name="birthdate" class="form-control mb-2" placeholder="Tanggal Lahir" value="{{ old('birthdate') }}" required />
                                    @error('birthdate')
                                        <div class="text-danger fs-7">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="form-label required">Jenis Kelamin</label>
                                <select name="gender" class="form-control mb-2" required>
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="laki-laki" @if (old('gender') == 'laki-laki') selected @endif>Laki-laki</option>
                                    <option value="perempuan" @if (old('gender') == 'perempuan') selected @endif>Perempuan</option>
                                </select>
                                @error('gender')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="form-label required">Alamat</label>
                                <textarea name="address" class="form-control mb-2" rows="3" placeholder="Alamat" required>{{ old('address') }}</textarea>
                                @error('address')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="form-label required">Agama</label>
                                <select name="religion" class="form-control mb-2" required>
                                    <option value="islam" @if (old('religion') == 'islam') selected @endif>Islam</option>
                                    <option value="kristen" @if (old('religion') == 'kristen') selected @endif>Kristen</option>
                                    <option value="katolik" @if (old('religion') == 'katolik') selected @endif>Katolik</option>
                                    <option value="hindu" @if (old('religion') == 'hindu') selected @endif>Hindu</option>
                                    <option value="budha" @if (old('religion') == 'budha') selected @endif>Budha</option>
                                    <option value="konghucu" @if (old('religion') == 'konghucu') selected @endif>Konghucu</option>
                                </select>
                                @error('religion')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="form-label">Pekerjaan</label>
                                <input type="text" name="occupation" class="form-control mb-2" placeholder="Pekerjaan" value="{{ old('occupation') }}" />
                                @error('occupation')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-5 fv-row">
                                <label class=" form-label">Email</label>
                                <input type="email" name="email" class="form-control mb-2" placeholder="Email"
                                    value="{{ old('email') }}" required />
                                @error('email')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                            <div class="mb-5 fv-row">
                                <label class="form-label required">Telepon</label>
                                <input type="text" name="phone" class="form-control mb-2" placeholder="+628XXXXXXX" value="{{ old('phone') }}" required/>
                                <small class="text-muted">Nomor telepon harus diawali dengan kode negara, contoh :<code>indonesia : +62</code></small>
                                @error('phone')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>

                        </div>
                    </div>
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <div class="card-title">
                                <h2>File</h2>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="mb-5 fv-row">
                                <div class="row">
                                    <div class="mb-5 fv-row">
                                        <label class="form-label">File KTP</label>
                                        <input type="file" name="file_ktp" class="form-control mb-2" accept=".jpg, .jpeg, .png, .pdf" />
                                        <small class="text-muted">File CV harus berformat .jpg, .jpeg, .png, .pdf</small>
                                        @error('file_ktp')
                                            <div class="text-danger fs-7">{{ $message }}</div>
                                        @enderror
                                    </div>
                                    <div class="mb-5 fv-row">
                                        <label class="form-label">File CV</label>
                                        <input type="file" name="file_cv" class="form-control mb-2" accept=".jpg, .jpeg, .png, .pdf" />
                                        <small class="text-muted">File CV harus berformat .jpg, .jpeg, .png, .pdf</small>
                                        @error('file_cv')
                                            <div class="text-danger fs-7">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Buat Password</h2>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="mb-5 fv-row">
                                <label class="required form-label">Password</label>
                                <input type="password" name="password" class="form-control mb-2" placeholder="Password"
                                    required />
                                    <small class="text-muted">Password minimal 8 karakter</small>
                                @error('password')
                                    <div class="text-danger fs-7">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <a href="{{ route('back.user.index') }}" id="kt_ecommerce_add_product_cancel"
                            class="btn btn-light me-5">Batal</a>
                        <button type="submit" class="btn btn-primary">
                            <span class="indicator-label">Simpan Perubahan</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection

@section('scripts')
@endsection
