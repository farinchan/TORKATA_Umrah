<div class="card mb-9">
    <div class="card-body pt-9 pb-0">
        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">

            <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <div class="d-flex flex-column">
                        <div class="d-flex align-items-center mb-1">
                            <a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bold me-3">
                                 {{ $schedule->name }}
                            </a>
                            @if ($schedule->status == 'aktif')
                                <span class="badge badge-light-success fw-bold">Aktif</span>
                            @else
                                <span class="badge badge-light-danger fw-bold ">Berakhir</span>
                            @endif

                        </div>
                        <div class="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-500">
                            Paket: {{ $schedule->umrahPackage->name }}
                        </div>
                    </div>
                        <div class="d-flex mb-4">

                                <a href="#" class="btn btn-sm btn-danger me-3"data-bs-toggle="modal"
                                    data-bs-target="#modal-delete-exam">
                                    Hapus Jadwal
                                </a>


                                <div class="modal fade" tabindex="-1" id="modal-delete-exam">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title">Hapus Ujian</h3>

                                                <!--begin::Close-->
                                                <div class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                                                    data-bs-dismiss="modal" aria-label="Close">
                                                    <i class="ki-duotone ki-cross fs-1"><span class="path1"></span><span
                                                            class="path2"></span></i>
                                                </div>
                                                <!--end::Close-->
                                            </div>

                                            <div class="modal-body">
                                                <p>Apakah Anda yakin ingin menghapus ujian ini?</p>
                                                <p class="text-danger">
                                                    <strong>Peringatan: </strong> Seluruh data yang terkait dengan ujian
                                                    ini
                                                    akan dihapus dan tidak dapat dikembalikan.

                                                </p>
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-light"
                                                    data-bs-dismiss="modal">Batal</button>
                                                <form action="{{ route('back.umrah.schedule.destroy', $schedule->id) }}"
                                                    method="POST">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger">Ya, Hapus</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                        </div>
                </div>
                <div class="d-flex flex-wrap justify-content-start">
                    <div class="d-flex flex-wrap">

                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                            <div class="d-flex align-items-center">
                                <div class="fs-4 fw-bold" >
                                    0/{{ $schedule->quad_quota }}
                                </div>
                            </div>
                            <div class="fw-semibold fs-6 text-gray-500">Quad</div>
                        </div>
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                            <div class="d-flex align-items-center">
                                <div class="fs-4 fw-bold" >
                                    0/{{ $schedule->triple_quota }}
                                </div>
                            </div>
                            <div class="fw-semibold fs-6 text-gray-500">Triple</div>
                        </div>
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                            <div class="d-flex align-items-center">
                                <div class="fs-4 fw-bold" >
                                    0/{{ $schedule->double_quota }}
                                </div>
                            </div>
                            <div class="fw-semibold fs-6 text-gray-500">Double</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
            <li class="nav-item">
                <a class="nav-link text-active-primary py-5 me-6 @if (request()->routeIs('back.ppdb.exam.question')) active @endif"
                    href="#">Jama'ah</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-active-primary py-5 me-6 @if (request()->routeIs('back.umrah.schedule.setting')) active @endif"
                    href="{{ route('back.umrah.schedule.setting', $schedule->id) }}">Settings</a>
            </li>
        </ul>
    </div>
</div>
