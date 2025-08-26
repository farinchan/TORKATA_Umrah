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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

    <link rel="stylesheet" href="{{ asset('front/fonts/line-icons.css') }}" type="text/css">


    <!-- Floating WhatsApp Button Styles -->
    <style>
        .floating-whatsapp {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
        }

        .floating-whatsapp a {
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #25D366, #128C7E);
            color: white;
            padding: 12px 16px;
            border-radius: 50px;
            text-decoration: none;
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            animation: pulse 2s infinite;
            max-width: 60px;
            overflow: hidden;
        }

        .floating-whatsapp a:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
            max-width: 200px;
            color: white;
            text-decoration: none;
        }

        .whatsapp-icon {
            font-size: 24px;
            margin-right: 0;
            transition: margin-right 0.3s ease;
            flex-shrink: 0;
        }

        .floating-whatsapp a:hover .whatsapp-icon {
            margin-right: 10px;
        }

        .whatsapp-text {
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s ease;
            font-weight: 500;
            font-size: 14px;
        }

        .floating-whatsapp a:hover .whatsapp-text {
            opacity: 1;
        }

        @keyframes pulse {
            0% {
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
            50% {
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.7);
            }
            100% {
                box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
            }
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
            .floating-whatsapp {
                bottom: 15px;
                right: 15px;
            }

            .floating-whatsapp a {
                padding: 10px 12px;
                max-width: 50px;
            }

            .whatsapp-icon {
                font-size: 20px;
            }

            .floating-whatsapp a:hover {
                max-width: 160px;
            }

            .whatsapp-text {
                font-size: 12px;
            }
        }

        /* Ensure button stays above other elements */
        .floating-whatsapp {
            z-index: 10000;
        }
    </style>

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
    {{-- <div id="back-to-top">
        <a href="#"></a>
    </div> --}}
    <!-- Back to top ends -->

    <!-- Floating WhatsApp Button -->
    @if($setting_web && $setting_web->phone)
        <div class="floating-whatsapp">
            <a href="https://wa.me/{{ preg_replace('/[^0-9]/', '', $setting_web->phone) }}" target="_blank" rel="noopener noreferrer">
                <div class="whatsapp-icon">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <span class="whatsapp-text">Chat WhatsApp</span>
            </a>
        </div>
    @endif

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
    @if (request()->routeIs('home.tour'))
        <script src="{{ asset('front/js/custom-swiper.js') }}"></script>
    @else
        <script src="{{ asset('front/js/custom-swiper2.js') }}"></script>
    @endif
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

        // Fix TikTok icon if it doesn't load
        $(document).ready(function() {
            setTimeout(function() {
                $('.fa-tiktok').each(function() {
                    if ($(this).css('font-family').indexOf('Font Awesome') === -1) {
                        $(this).html('🎵'); // Fallback emoji
                        $(this).css({
                            'font-family': 'Apple Color Emoji, Segoe UI Emoji, sans-serif',
                            'font-size': '16px'
                        });
                    }
                });
            }, 1000);
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
