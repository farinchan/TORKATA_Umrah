@extends('front.app')

@section('seo')
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $meta['description'] }}">
    <meta name="keywords" content="{{ $meta['keywords'] }}">
    <meta name="author" content="PT. Torkata Jaya Persada">

    <meta property="og:title" content="{{ $meta['title'] }}">
    <meta property="og:description" content="{{ $meta['description'] }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ route('home') }}">
    <link rel="canonical" href="{{ route('home') }}">
    <meta property="og:image" content="{{ Storage::url($meta['favicon']) }}">
@endsection

@section('content')
    @include('front.partials.banner2')

    <!-- why us starts -->
    <section class="why-us pt-10 pb-6">
        <div class="container">
            <div class="why-us-box pt-9">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="why-us-item text-center">
                            <div class="why-us-icon mb-2">
                                <i class="flaticon-call pink"></i>
                            </div>
                            <div class="why-us-content">
                                <h4><a href="#">Saran & Dukungan</a></h4>
                                <p class="mb-0">Bepergian dengan tenang karena kami selalu ada jika Anda membutuhkan, 24
                                    jam sehari</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="why-us-item text-center">
                            <div class="why-us-icon mb-2">
                                <i class="flaticon-global pink"></i>
                            </div>
                            <div class="why-us-content">
                                <h4><a href="#">Tiket Pesawat</a></h4>
                                <p class="mb-0">Kami menyediakan layanan tiket pesawat dengan harga terbaik dan proses
                                    yang mudah untuk perjalanan Anda.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="why-us-item text-center">
                            <div class="why-us-icon mb-2">
                                <i class="flaticon-building pink"></i>
                            </div>
                            <div class="why-us-content">
                                <h4><a href="#">Layanan Hotel</a></h4>
                                <p class="mb-0">Nikmati kenyamanan menginap dengan layanan hotel terbaik yang kami
                                    sediakan hingga membuat anda semakin betah.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="why-us-item text-center">
                            <div class="why-us-icon mb-2">
                                <i class="flaticon-location-pin pink"></i>
                            </div>
                            <div class="why-us-content">
                                <h4><a href="#">Paket Wisata</a></h4>
                                <p class="mb-0">
                                    Paket wisata yang terjangkau dan pas untuk Anda dan keluarga
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- why us ends -->


    <!-- about-us starts -->
    <section class="about-us pb-0" style="background-image: url({{ asset('front/images/bg5.jpg') }});">
        <div class="container">
            <div class="about-image-box">
                <div class="row">
                    <div class="col-lg-7 col-sm-12">
                        <div class="about-content">
                            <h4 class="mb-1 white font-weight-normal">Tentang Kami</h4>
                            <h2 class="white">{{ $setting_web->name }}</h2>
                            <p class="mb-2 white">
                                {{ Str::limit(strip_tags($setting_web->about), 1000) }}
                            </p>
                            <div class="about-featured mb-0">
                                <ul>
                                    <li class="white">Sistem Perjalanan Aman</li>
                                    <li class="white">Paket Wisata Hemat</li>
                                    <li class="white">Perencanaan Perjalanan Ahli</li>
                                    <li class="white">Komunikasi Cepat</li>
                                    <li class="white">Solusi & Panduan yang Tepat</li>
                                    <li class="white">Dukungan Pelanggan 24/7</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-sm-12">
                        <div class="about-image-desti mt-5">
                            <img src="{{ asset('ext_images/tour/about.jpg') }}" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay"></div>
    </section>
    <!-- about-us ends -->



    <!-- Trending Starts -->
    <section class="trending destination-b pb-6 pt-7">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Paket <span>Tour & Travel</span></h2>
                <p class="mb-0">
                    Kami menawarkan berbagai paket tour dan travel yang menarik dan menyenangkan dan siap membantu anda
                    dalam perjalanan.
                </p>
            </div>
            <div class="trend-box">
                <div class="row team-slider">
                    @foreach ($tour_packages as $tour)
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="trend-item">
                                {{-- <div class="ribbon ribbon-top-left"><span>25% OFF</span></div> --}}
                                <div class="trend-image">
                                    <img src="{{ $tour->getBanner() }}" alt="image">

                                </div>
                                <div class="trend-content-main">
                                    <div class="trend-content">
                                        {{-- <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> Thailand</h6> --}}
                                        <h4><a href="{{ route('tour.show', $tour->slug) }}">
                                                {{ $tour->name }}
                                            </a></h4>
                                        <div class="rating-main d-flex align-items-center">
                                            <div class="rating">
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="trend-last-main">
                                        <p class="mb-0 trend-para">
                                            {{ Str::limit(strip_tags($tour->description), 180) }}
                                        </p>
                                        <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                            <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i>
                                                {{ $tour->days }} Hari
                                            </p>
                                            <div class="trend-price">
                                                <p class="price white mb-0">Harga Mulai <span>@money($tour->getSchedulesLowestPrice())</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    @if ($tour_packages->count() < 3)
                        @for ($i = 0; $i < 3 - $tour_packages->count(); $i++)
                            <div class="col-lg-4 col-md-6 mb-4">
                            </div>
                        @endfor
                    @endif
                </div>
            </div>
        </div>
    </section>
    <!-- Trending Ends -->

    <!-- flight-list starts -->
    <section class="flight-list pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Panggilan Terakhir <span>Perjalanan</span></h2>
                <p class="mb-0">
                    Ayo cepat pesan paket tour anda sebelum kehabisan. ini merupakan panggilan terakhir untuk anda menikmati
                    tour wisata dari kami
                </p>
            </div>

            <div class="flight-list">

                <div class="tab-content">
                    <div id="schedule1" class="tab-pane fade in active">
                        <div class="flight-full">
                            @forelse ($tour_schedules as $schedule)
                                <div class="item mb-2">
                                    <div class="row d-flex align-items-center justify-content-between">

                                        <div class="col-lg-4 col-md-4 col-sm-12">
                                            <div class="item-inner">
                                                <div class="content">
                                                    <h4 class="mb-0">{{ $schedule->tourPackage->name }}</h4>
                                                    <h3 class="mb-0 pink">{{ $schedule->name }}</h3>
                                                    <p class="mb-0 text-uppercase">
                                                        @if ($schedule->departure)
                                                            {{ \Carbon\Carbon::parse($schedule->departure)->translatedFormat('d F Y') }}
                                                        @endif
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-3 col-md-3 col-sm-12">
                                            <div class="item-inner">
                                                <div class="content">
                                                    <p class="mb-0 text-uppercase">Penerbangan:
                                                        {{ $schedule->airline ?? '-' }} </p>
                                                    <p class="mb-0 text-uppercase">Hotel: {{ $schedule->hotel ?? '-' }}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-2 col-sm-12">
                                            <div class="item-inner flight-time">
                                                <h4 class="mb-0">Kuota:
                                                    {{ $schedule->tourUser->count() }}/{{ $schedule->quota }}</h4>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-12">
                                            <div class="item-inner flight-btn text-center p-0 bordernone mb-0">
                                                <p class="navy">@money($schedule->price)</p>
                                                <a href="{{ route('tour.show', $schedule->tourPackage->slug) }}"
                                                    class="nir-btn-black">Pesan sekarang</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @empty
                                <div class="item mb-2">
                                    <div class="row d-flex align-items-center justify-content-center">

                                        <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                                            <h4 class="mb-0">Tidak ada jadwal perjalanan</h4>

                                        </div>

                                    </div>
                                </div>
                            @endforelse

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- flight-list ends -->


    <!-- Call to action starts -->
    <section class="call-to-action call-to-action1 pb-6 pt-10"
        style="background-image:url({{ asset('front/images/bg/bg6.jpg') }})">
        <div class="call-main">
            <div class="container">
                <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-lg-6 mb-4">
                        <div class="action-content">
                            <h2 class="white call-name">Ayo eksplorasi dunia</h2>
                            <p class="white mb-4">
                                Kami menawarkan berbagai paket Tour wisata yang menarik. Dapatkan pengalaman yang
                                tak terlupakan bersama kami. Berikutnya apa yang anda tunggu?
                            </p>
                            <a href="#" class="nir-btn">Mulai Eksplore <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="video-button">
                            <img src="{{ asset('ext_images/tour/tour.jpg') }}" alt=""
                                style="width: 100%; height: 30%; object-fit: cover;">
                            <div class="call-button text-center">
                                <button type="button" class="play-btn js-video-button"
                                    data-video-url="https://res.cloudinary.com/duuawbwih/video/upload/v1747210350/Holiday_family_trip_of_emilyqueen.homephotostudio_and_queenstudio.company_to_around_Japan_with_torkata_tour_and_travel_Hokkaido_-_Kyoto_Kobe_Kobe_Tokyo._Yuks_yang_mau_liburan_ke_Jepang_bisa_dengan_Torkata._i1veve.mp4"
                                    data-channel="html5">
                                    <i class="fa fa-play"></i>
                                </button>
                            </div>
                            <div class="video-figure"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dot-overlay"></div>
    </section>
    <!-- call to action Ends -->



    <!-- top destination starts -->
    <section class="top-destination overflow-hidden bg-navy p-0">
        <div class="container-fluid">
            <div class="desti-inner">
                <div class="row d-flex align-items-center">
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/1.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Istanbul - Turki</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/2.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Osaka - Jepang</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/3.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Seoul - Korea</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/4.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Dubai - Uni emirate arab</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/5.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Paris - Francis</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center">
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/6.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Sydney - Australia</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/7.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Singapura</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/8.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Bangkok - Thailand</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset('ext_images/tour/9.png') }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Kuala Lumpur - Malaysia</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Pesan Sekarang</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- top destination ends -->



    <!-- Counter -->
    {{-- <section class="counter-main pb-6 pt-10" style="background-image: url({{ asset('front/images/bg/bg4.jpg') }})">
        <div class="container">
            <div class="counter text-center">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div class="counter-item bg-lgrey">
                            <i class="fa fa-users white bg-navy mb-1"></i>
                            <h3 class="value mb-0 navy">100</h3>
                            <h4 class="m-0">Happy Customers</h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div class="counter-item bg-lgrey">
                            <i class="fa fa-plane mb-1 white bg-navy"></i>
                            <h3 class="value mb-0 navy">50</h3>
                            <h4 class="m-0">Amazing Tours </h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div class="counter-item bg-lgrey">
                            <i class="fa fa-chart-bar  white bg-navy mb-1"></i>
                            <h3 class="value mb-0 navy">3472</h3>
                            <h4 class="m-0">In Business</h4>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-4">
                        <div class="counter-item bg-lgrey">
                            <i class="fa fa-support  white bg-navy mb-1"></i>
                            <h3 class="value mb-0 navy">523</h3>
                            <h4 class="m-0">Support Cases </h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="overlay"></div>
    </section> --}}
    <!-- End Counter -->

    <!-- cta-horizon starts -->
    {{-- <div class="cta-horizon bg-navy pt-4 pb-4">
        <div class="container d-md-flex align-items-center justify-content-between">
            <h4 class="mb-0 white">It’s Time For a New Adventure! Don’t Wait Any Longer. Contact us!</h4>
            <a href="#" class="nir-btn">Fine More Destination</a>
        </div>
    </div> --}}
    <!-- cta-horizon Ends -->


    <!-- our teams starts -->
    <section class="our-team pb-4">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0"><span> Agen & Pemandu</span> Resmi Kami</h2>
                <p class="mb-0">
                    Kami memiliki tim yang profesional dan berpengalaman dalam bidangnya masing-masing. Kami siap
                    membantu anda dalam perjalanan wisata anda.
                </p>
            </div>
            <div class="team-main">
                <div class="row shop-slider">

                    @foreach ($agents as $agent)
                        <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div class="team-list">
                                <div class="team-image">
                                    <img src="{{ $agent->getPhoto() }}" alt="team">
                                </div>
                                <div class="team-content1 text-center">
                                    <h4 class="mb-0 pink">{{ $agent->name }}</h4>
                                    <p class="mb-0">ID. {{ $agent->id }}-{{ $agent->created_at->format('mY') }}</p>
                                </div>

                            </div>
                        </div>
                    @endforeach

                </div>
            </div>
        </div>
    </section>
    <!-- our teams Ends -->


    <!-- testomonial start -->
    <section class="testimonial pb-6 pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Apa Yang <span>Orang Katakan Tentang Kami</span></h2>
                <p class="mb-0">
                    para pelanggan kami yang puas dengan layanan kami. Kami berusaha memberikan yang terbaik untuk anda.
                </p>
            </div>
            <div class="row review-slider">
                @foreach ($testimonials as $testimonial)
                    <div class="col-sm-4 item">
                        <div class="testimonial-item1 text-center">
                            <div class="details">
                                <p class="m-0">
                                    {{ $testimonial->content }}
                                </p>
                            </div>
                            <div class="author-info mt-2">
                                <a href="#"><img src="{{ $testimonial->getAvatar() }}" alt=""></a>
                                <div class="author-title">
                                    <h4 class="m-0 pink">{{ $testimonial->name }}</h4>
                                    <span>{{ $testimonial->position }} at {{ $testimonial->company }}</span>
                                </div>
                            </div>
                            <i class="fa fa-quote-left mb-2"></i>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
    <!-- testimonial ends -->

    <!-- News Starts -->
    <section class="news pb-2 bg-lgrey pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Beberapa <span>Tips & artikel</span> Terbaru</h2>
                <p class="mb-0 ">
                    Perjalanan telah membantu kita memahami makna hidup dan telah membantu kita menjadi orang yang lebih
                    baik. Setiap kali kita bepergian, kita melihat dunia dengan mata baru.
                </p>
            </div>
            <div class="news-outer">
                <div class="row">
                    @php
                        $firstNews = $news->first();
                        $remainingNews = $news->slice(1);
                    @endphp
                    <div class="col-lg-5 col-md-12 col-xs-12 mb-4">
                        <div class="news-item overflow-hidden">
                            <div class="news-image">
                                <img src="{{ $firstNews->getThumbnail() }}" alt="image">
                            </div>
                            <div class="news-list mt-2 border-b pb-2 mb-2">
                                <ul>
                                    <li><a href="single-right.html" class="pr-3"><i
                                                class="fa fa-calendar pink pr-1"></i>
                                            {{ $firstNews->created_at->format('d M Y') }} </a></li>
                                    <li><a href="single-right.html" class="pr-3"><i
                                                class="fa fa-comment pink pr-1"></i> {{ $firstNews->comments->count() }}
                                        </a></li>
                                    <li><a href="single-right.html" class=""><i class="fa fa-tag pink pr-1"></i>
                                            {{ $firstNews->category->name }}
                                        </a></li>
                                </ul>
                            </div>
                            <div class="news-content mt-2">
                                <h4 class="pb-2 mb-2 border-b"><a href="{{ route('news.show', $firstNews->slug) }}">
                                        {{ $firstNews->title }}
                                    </a></h4>
                                <p class="mb-3">
                                    {{ Str::limit(strip_tags($firstNews->content), 300) }}
                                </p>

                                <div class="author-img">
                                    <img src="{{ $firstNews->user->getPhoto() }}" alt="Demo Image">
                                    <span>By - {{ $firstNews->user->name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-xs-12 mb-4">
                        <div class="row">
                            @foreach ($remainingNews as $news)
                                <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                    <div class="news-item overflow-hidden">
                                        <div class="news-image">
                                            <img src="{{ $news->getThumbnail() }}" alt="image">
                                        </div>
                                        <div class="news-list mt-2 border-b pb-2 mb-2">
                                            <ul>
                                                <li><a href="single-right.html" class="pr-3"><i
                                                            class="fa fa-calendar pink pr-1"></i>{{ $news->created_at->format('d M Y') }}
                                                    </a></li>
                                                <li><a href="single-right.html" class="pr-3"><i
                                                            class="fa fa-comment pink pr-1"></i>{{ $news->comments->count() }}
                                                    </a></li>
                                                <li><a href="single-right.html" class=""><i
                                                            class="fa fa-tag pink pr-1"></i> {{ $news->category->name }}
                                                    </a></li>
                                            </ul>
                                        </div>
                                        <div class="news-content mt-2">
                                            <h4 class="bordernone mb-0"><a href="{{ route('news.show', $news->slug) }}">
                                                    {{ $news->title }}
                                                </a></h4>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- News Ends -->
@endsection

@section('scripts')
    <script>
        $.ajax({
            url: "{{ route('visit.ajax') }}",
            type: "GET",
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    </script>
@endsection
