<div class="hover-scroll-overlay-y mx-3 my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true"
    data-kt-scroll-height="auto"
    data-kt-scroll-dependencies="{default: '#kt_aside_toolbar, #kt_aside_footer', lg: '#kt_header, #kt_aside_toolbar, #kt_aside_footer'}"
    data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="5px">

    <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
        id="#kt_aside_menu" data-kt-menu="true">

        <div data-kt-menu-trigger="click"
            class="menu-item menu-accordion @if (request()->routeIs('back.dashboard.*')) here show @endif">
            <span class="menu-link">
                <span class="menu-icon">
                    <i class="ki-duotone ki-element-11 fs-2">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                    </i></span>
                <span class="menu-title">Dashboards</span>
                <span class="menu-arrow"></span>
            </span>
            <div class="menu-sub menu-sub-accordion">
                <div class="menu-item">
                    <a class="menu-link @if (request()->routeIs('back.dashboard.index')) active @endif"
                        href="{{ route('back.dashboard.index') }}">
                        <span class="menu-bullet">
                            <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">Default</span>
                    </a>
                </div>
            </div>
            @role('super-admin|admin-kantor')
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.dashboard.news')) active @endif"
                            href="{{ route('back.dashboard.news') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Berita</span>
                        </a>
                    </div>
                </div>
            @endrole
        </div>

        <div class="menu-item">
            <a class="menu-link @if (request()->routeIs('back.wallet.my-wallet')) active @endif"
                href="{{ route('back.wallet.my-wallet') }}">
                <span class="menu-icon">
                    <i class="ki-duotone ki-wallet fs-2">
                        <span class="path1"></span>
                        <span class="path2"></span>
                        <span class="path3"></span>
                        <span class="path4"></span>
                    </i>
                </span>
                <span class="menu-title">Dompet Saya</span>
            </a>
        </div>
        @role('super-admin|admin-kantor')
            <div class="menu-item pt-5">
                <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">Post</span>
                </div>
            </div>
            <div data-kt-menu-trigger="click"
                class="menu-item menu-accordion @if (request()->routeIs('back.news.*')) here show @endif">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-book fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                        </i>
                    </span>
                    <span class="menu-title">Berita</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.news.category')) active @endif"
                            href="{{ route('back.news.category') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Kategori</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.news.index')) active @endif"
                            href="{{ route('back.news.index') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">List Berita</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.news.comment')) active @endif"
                            href="{{ route('back.news.comment') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Komentar</span>
                        </a>
                    </div>
                </div>
            </div>
            <div data-kt-menu-trigger="click"
                class="menu-item menu-accordion @if (request()->routeIs('back.gallery.*')) here show @endif">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-picture fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </span>
                    <span class="menu-title">Galeri</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.gallery.album')) active @endif"
                            href="{{ route('back.gallery.album') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Album</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.gallery.index')) active @endif"
                            href="{{ route('back.gallery.index') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Foto & Video</span>
                        </a>
                    </div>

                </div>
            </div>
            <div class="menu-item">
                <a class="menu-link @if (request()->routeIs('back.testimonial.index')) active @endif"
                    href="{{ route('back.testimonial.index') }}">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-like-tag fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </span>
                    <span class="menu-title">Testimonial</span>
                </a>
            </div>
        @endrole

        @role('super-admin|admin-kantor')
            <div class="menu-item pt-5">
                <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">Paket & Jadwal</span>
                </div>
            </div>


            <div data-kt-menu-trigger="click"
                class="menu-item menu-accordion @if (request()->routeIs('back.umrah.*')) here show @endif">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-address-book fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                        </i>
                    </span>
                    <span class="menu-title">Umrah</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.umrah.package.*')) active @endif"
                            href="{{ route('back.umrah.package.index') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Paket</span>
                        </a>
                    </div>

                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.umrah.schedule.*')) active @endif"
                            href="{{ route('back.umrah.schedule.index') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Jadwal</span>
                        </a>
                    </div>
                </div>
            </div>

            <div data-kt-menu-trigger="click" class="menu-item menu-accordion ">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-address-book fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                        </i>
                    </span>
                    <span class="menu-title">Tour</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link " href="#">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Coming Soon</span>
                        </a>
                    </div>

                </div>
            </div>
        @endrole

        @role('super-admin|admin-kantor|agen')
            <div class="menu-item pt-5">
                <div class="menu-content">
                    <span class="menu-heading fw-bold text-uppercase fs-7">Booking</span>
                </div>
            </div>

            <div data-kt-menu-trigger="click"
                class="menu-item menu-accordion @if (request()->routeIs('back.booking.umrah.*')) here show @endif ">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-bookmark-2 fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </span>
                    <span class="menu-title">Umrah</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.booking.umrah.index')) active @endif"
                            href="{{ route('back.booking.umrah.index') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Booking</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.booking.umrah.history')) active @endif"
                            href="{{ route('back.booking.umrah.history') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">History</span>
                        </a>
                    </div>
                    @role('super-admin|admin-kantor')
                        <div class="menu-item">
                            <a class="menu-link @if (request()->routeIs('back.booking.umrah.history.all')) active @endif"
                                href="{{ route('back.booking.umrah.history.all') }}">
                                <span class="menu-bullet">
                                    <span class="bullet bullet-dot"></span>
                                </span>
                                <span class="menu-title">Semua History</span>
                            </a>
                        </div>
                    @endrole
                </div>
            </div>
        @endrole


        @role('super-admin|admin-kantor')
            <div class="menu-item pt-5">
                <div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">Keuangan</span>
                </div>
            </div>

            <div class="menu-item">
                <a class="menu-link @if (request()->routeIs('back.payment.umrah.verification')) active @endif"
                    href="{{ route('back.payment.umrah.verification') }}">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-finance-calculator fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                            <span class="path6"></span>
                            <span class="path7"></span>
                        </i>
                    </span>
                    <span class="menu-title">Verifikasi Pembayaran</span>
                </a>
            </div>
        @endrole

        @role('super-admin|admin-kantor')
            <div class="menu-item pt-5">
                <div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">Laporan</span>
                </div>
            </div>

            <div data-kt-menu-trigger="click"
                class="menu-item menu-accordion @if (request()->routeIs('back.report.*')) here show @endif ">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-cheque fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                            <span class="path5"></span>
                            <span class="path6"></span>
                            <span class="path7"></span>
                        </i>
                    </span>
                    <span class="menu-title">Umrah</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.report.umrah.finance')) active @endif"
                            href="{{ route('back.report.umrah.finance') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Keuangan</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.booking.umrah.history')) active @endif"
                            href="{{ route('back.booking.umrah.history') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Paket & Jadwal</span>
                        </a>
                    </div>
                </div>
            </div>
        @endrole

        @role('super-admin')
            <div class="menu-item pt-5">
                <div class="menu-content"><span class="menu-heading fw-bold text-uppercase fs-7">Administrator</span>
                </div>
            </div>

            <div class="menu-item">
                <a class="menu-link @if (request()->routeIs('back.message.index')) active @endif"
                    href="{{ route('back.message.index') }}">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-sms fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </span>
                    <span class="menu-title">Inbox</span>
                </a>
            </div>

            <div class= "menu-item">
                <a class="menu-link @if (request()->routeIs('back.user.*')) active @endif"
                    href="{{ route('back.user.index') }}">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-profile-user fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                            <span class="path3"></span>
                            <span class="path4"></span>
                        </i>
                    </span>
                    <span class="menu-title">Staff & Agen</span>
                </a>
            </div>

            <div data-kt-menu-trigger="click"
                class="menu-item menu-accordion @if (request()->routeIs('back.whatsapp.*')) here show @endif">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-setting-4 fs-2"></i>
                    </span>
                    <span class="menu-title">Whatsapp API</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.whatsapp.setting')) active @endif"
                            href="{{ route('back.whatsapp.setting') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Pengaturan</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.whatsapp.message')) active @endif"
                            href="{{ route('back.whatsapp.message') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Kirim Pesan</span>
                        </a>
                    </div>
                </div>
            </div>

            <div data-kt-menu-trigger="click"
                class="menu-item menu-accordion @if (request()->routeIs('back.setting.*')) here show @endif">
                <span class="menu-link">
                    <span class="menu-icon">
                        <i class="ki-duotone ki-setting-2 fs-2">
                            <span class="path1"></span>
                            <span class="path2"></span>
                        </i>
                    </span>
                    <span class="menu-title">Pengaturan</span>
                    <span class="menu-arrow"></span>
                </span>
                <div class="menu-sub menu-sub-accordion">
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.setting.website')) active @endif"
                            href="{{ route('back.setting.website') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Website</span>
                        </a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-link @if (request()->routeIs('back.setting.banner')) active @endif"
                            href="{{ route('back.setting.banner') }}">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">Banner</span>
                        </a>
                    </div>
                </div>
            </div>
        @endrole


    </div>

</div>
