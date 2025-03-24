<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zxx">

@php
    $setting_web = \App\Models\SettingWebsite::first() ?? null;
@endphp

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>
        @isset($title)
            {{ $title }} |
        @endisset
        {{ $setting_web->name }}
    </title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ Storage::url($setting_web->favicon) }}">
    <link rel="icon" href="{{ Storage::url($setting_web->favicon) }}" type="image/png">

    @yield('seo')
    <!-- Bootstrap core CSS -->
    <link href="{{ asset('front/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
    <!--Custom CSS-->
    <link href="{{ asset('front/css/style.css') }}" rel="stylesheet" type="text/css">
    <!--Plugin CSS-->
    <link href="{{ asset('front/css/plugin.css') }}" rel="stylesheet" type="text/css">
    <!--Flaticons CSS-->
    <link href="{{ asset('front/fonts/flaticon.css') }}" rel="stylesheet" type="text/css">
    <!--Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">

    <link rel="stylesheet" href="{{ asset('front/fonts/line-icons.css') }}" type="text/css">

    @yield('styles')

</head>

<body>

    <!-- Preloader -->
    {{-- <div id="preloader">
        <div id="status"></div>
    </div> --}}
    <!-- Preloader Ends -->

    @include('front.layouts.header')

    @yield('content')

    @include('front.layouts.footer')

    <!-- Back to top start -->
    <div id="back-to-top">
        <a href="#"></a>
    </div>
    <!-- Back to top ends -->

    {{-- <!-- search popup -->
    <div id="search1">
        <button type="button" class="close">×</button>
        <form>
            <input type="search" value="" placeholder="type keyword(s) here" />
            <button type="submit" class="btn btn-primary">Search</button>
        </form>
    </div> --}}


    <!-- login Modal -->
    <div class="modal fade" id="login" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bordernone p-0">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body p-0">
                    <div class="login-content p-4 text-center">
                        <div class="login-title section-border">
                            <img src="{{ asset('ext_images/logo_long_bg_white.png') }}" alt="logo">
                            <h3 class="pink">Login Agen</h3>
                        </div>
                        <div class="login-form">
                            <form action="{{ route('login.process') }}" method="POST" class="form">
                                @csrf
                                <div class="form-group">
                                    <input type="email" placeholder="Masukkan Email*" name="email"
                                        value="{{ old('email') }}" required>
                                    @error('email')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Masukkan password*" name="password" required>
                                    @error('password')
                                        <small class="text-danger">{{ $message }}</small>
                                    @enderror
                                </div>
                                <div class="form-group mb-0 form-checkbox px-2">
                                    <span class="float-left">

                                        <input type="checkbox" name="remember" value="1"
                                            @if (old('remember') == 1) checked @endif> Ingat saya
                                    </span>
                                    <a href="#" class="float-right">Forgot Password?</a>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" onclick="this.form.submit();"
                                        class="nir-btn btn-block">LOGIN</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- *Scripts* -->
    <script src="{{ asset('front/js/jquery-3.5.1.min.js') }}"></script>
    <script src="{{ asset('front/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('front/js/plugin.js') }}"></script>
    <script src="{{ asset('front/js/main.js') }}"></script>
    <script src="{{ asset('front/js/custom-swiper2.js') }}"></script>
    <script src="{{ asset('front/js/custom-nav.js') }}"></script>
    {{-- <script src="{{ asset('front/js/custom-date.js') }}"></script> --}}
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        function toggleMobileLogin() {
            if ($(window).width() < 1200) {
                $('.mobile-login').css('display', 'block');
            } else {
                $('.mobile-login').css('display', 'none');
            }
        }

        toggleMobileLogin();

        $(window).on('resize', function() {
            toggleMobileLogin();
        });
    </script>

    @if (session('success'))
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Sukses!',
                text: '{{ session('success') }}',
            });
        </script>
    @endif

    @if (session('error'))
        <script>
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '{{ session('error') }}',
            });
        </script>
    @endif

    @yield('scripts')


</body>

</html>
