@php
    $category_news = \App\Models\NewsCategory::all();
@endphp
<!-- header starts -->
<header class="main_header_area @if (request()->routeIs('home.tour')) headerstye-1 @endif">
    <div class="header-content bg-navy">
        <div class="container d-flex align-items-center justify-content-between">
            <div class="links">
                <ul>
                    <li><a href="#" class="white"><i class="fa fa-phone"></i> {{ $setting_web->phone }}</a></li>
                    <li><a href="#" class="white"><i class="fa fa-envelope"></i> {{ $setting_web->email }}</a></li>
                    <li><a href="#" class="white"><i class="fa fa-clock"></i> Setiap Hari 08.00 - 17.00</a></li>
                </ul>
            </div>
            <div class="links float-right">
                <ul>
                    <li><a href="{{ $setting_web->facebook ?? '#' }}"><i class="fab fa-facebook white"
                                aria-hidden="true"></i></a></li>
                    <li><a href="{{ $setting_web->instagram ?? '#' }}"><i class="fab fa-instagram white"
                                aria-hidden="true"></i></a></li>
                    <li><a href="{{ $setting_web->tiktok ?? '#' }}"><i class="fab fa-tiktok white"
                                aria-hidden="true"></i></a></li>
                    <li><a href="{{ $setting_web->linkedin ?? '#' }}"><i class="fab fa-linkedin white"
                                aria-hidden="true"></i></a></li>
                    <li><a href="#search1" class="mt_search"><i class="icon-magnifier white"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Navigation Bar -->
    <div class="header_menu" id="header_menu">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-flex d-flex align-items-center justify-content-between w-100 pb-2 pt-2">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <a class="navbar-brand" href="{{ route('home') }}">
                            <img src="{{ Storage::url($setting_web->logo) }}" alt="image" style="width: 250px;">
                        </a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="navbar-collapse1 d-flex align-items-center" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav" id="responsive-menu">

                            @if (request()->getScheme() . '://' . request()->getHost() == env('UMRAH_URL'))
                                <li class="@if (request()->routeIs('home')) active @endif"><a
                                        href="{{ route('home') }}">Home</a></li>
                                <li><a href="{{ route('umrah.index') }}">Umrah</a></li>
                            @endif
                            @if (request()->getScheme() . '://' . request()->getHost() === env('TOUR_URL'))
                                <li class="@if (request()->routeIs('home.tour')) active @endif"><a
                                        href="{{ route('home.tour') }}">Home</a></li>
                                <li><a href="{{ route('tour.index') }}">Tour</a></li>
                            @endif
                            <li class="submenu dropdown">
                                <a href="{{ route('news.index') }}" class="dropdown-toggle" data-toggle="dropdown"
                                    role="button" aria-haspopup="true" aria-expanded="false">Berita
                                    <i class="icon-arrow-down" aria-hidden="true"></i></a>
                                <ul class="dropdown-menu">
                                    @foreach ($category_news as $item)
                                        <li><a
                                                href="{{ route('news.category', $item->slug) }}">{{ $item->name }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </li>
                            <li><a href="{{ route('gallery.index') }}">Gallery</a></li>
                            <li><a href="{{ route('agent.index') }}">Agen Kami</a></li>
                            {{-- <li><a href="#">Tentang Kami</a></li> --}}
                            <li><a href="{{ route('contact.index') }}">kontak</a></li>
                            <li><a href="{{ route('payment.index') }}">Cek Pembayaran</a></li>
                            <li class="mobile-login" style="display: none;">
                                @guest
                                    <a href="#" data-toggle="modal" data-target="#login">Login</a>
                                @endguest
                                @auth
                                    <a href="{{ route('back.dashboard.index') }}">{{ Auth::user()->name }}</a>
                                @endauth
                            </li>
                        </ul>
                    </div><!-- /.navbar-collapse -->

                    <div class="register-login">
                        @guest
                            {{-- <a href="#" class="mr-2" data-toggle="modal" data-target="#register"><i class="icon-user mr-1"></i> Register</a> --}}
                            <a href="#" data-toggle="modal" data-target="#login"><i class="icon-login mr-1"></i>
                                Login</a>

                        @endguest
                        @auth
                            <a href="{{ route('back.dashboard.index') }}"><i class="fa fa-user-circle"></i>
                                {{ Auth::user()->name }}
                            </a>
                        @endauth
                    </div>


                    <div id="slicknav-mobile"></div>
                </div>
            </div><!-- /.container-fluid -->
        </nav>
    </div>
    <!-- Navigation Bar Ends -->
</header>
<!-- header ends -->
