@extends('front.app')

@section('content')
    @include('front.partials.banner')



    <!-- about-us starts -->
    <section class="about-us bg-grey pb-6">
        <div class="container">
            <div class="about-image-box mb-4">
                <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-lg-6 col-sm-12">
                        <div class="about-content">
                            <h4 class="mb-1 font-weight-normal blue">Tentang Kami</h4>
                            <h2 class="">
                                {{ $setting_web->name }}
                            </h2>
                            <p class="mb-2">
                                {!! $setting_web->about !!}
                            </p>
                            {{-- <div class="about-featured mb-0">
                                <ul>
                                    <li>Safety Travel System</li>
                                    <li>Budget-Friendly Tour</li>
                                    <li>Expert Trip Planning</li>
                                    <li>Fast Communication</li>
                                    <li>Right Solution & Guide</li>
                                    <li>24/7 Customer Support</li>
                                </ul>
                            </div> --}}
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="about-image-main">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mt-4">
                                    <img src="{{ asset('ext_images/banner/1.png') }}" alt="">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="{{ asset('ext_images/banner/2.png') }}" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- why us starts -->
            <div class="why-us pt-4 border-t">
                <div class="why-us-box">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="why-us-item text-center bg-lgrey">
                                <div class="why-us-icon mb-2">
                                    <i class="flaticon-call pink"></i>
                                </div>
                                <div class="why-us-content">
                                    <h4><a href="#">Advice & Support</a></h4>
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a
                                        day</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="why-us-item text-center bg-lgrey">
                                <div class="why-us-icon mb-2">
                                    <i class="flaticon-global pink"></i>
                                </div>
                                <div class="why-us-content">
                                    <h4><a href="#">Air Ticketing</a></h4>
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a
                                        day</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="why-us-item text-center bg-lgrey">
                                <div class="why-us-icon mb-2">
                                    <i class="flaticon-building pink"></i>
                                </div>
                                <div class="why-us-content">
                                    <h4><a href="#">Hotel Services</a></h4>
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a
                                        day</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 mb-4">
                            <div class="why-us-item text-center bg-lgrey">
                                <div class="why-us-icon mb-2">
                                    <i class="flaticon-location-pin pink"></i>
                                </div>
                                <div class="why-us-content">
                                    <h4><a href="#">Tour Packages</a></h4>
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a
                                        day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- why us ends -->
        </div>
    </section>
    <!-- about-us ends -->





    <!-- top destination starts -->
    <section class="top-destination overflow-hidden pb-9">
        <div class="container">
            <div class="desti-inner">
                <div class="row d-flex align-items-center">
                    <div class="col-lg-4 col-md-6 p-1">
                        <div class="desti-title text-center">
                            <h2 class="white">Umrah <br> Ke tanah Suci</h2>
                            <p class="white mb-5">Buat perjalanan umrah anda lebih mudah dan nyaman dengan kami sebagai
                                agen umrah terpercaya.</p>
                                <a href="#" class="nir-btn">Lihat Paket <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-1">
                        <div class="desti-image">
                            <img src="{{ asset('ext_images/umrah/1.png') }}" alt="desti">

                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 p-1">
                        <div class="desti-image">
                            <img src="{{ asset('ext_images/umrah/2.png') }}" alt="desti">

                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 p-1">
                        <div class="desti-image">
                            <img src="{{ asset('ext_images/umrah/3.png') }}" alt="desti">

                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 p-1">
                        <div class="desti-image">
                            <img src="{{ asset('ext_images/umrah/4.png') }}" alt="desti">
                            <div class="desti-content">

                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 p-1">
                        <div class="desti-image">
                            <img src="{{ asset('ext_images/umrah/5.png') }}" alt="desti">

                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12 p-1">
                        <div class="desti-image">
                            <img src="{{ asset('ext_images/umrah/6.png') }}" alt="desti">

                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                    <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="particles-js"></div>
    </section>
    <!-- top destination ends -->

    <!-- link Starts -->
    <div class="partners pt-4 pb-4">
        <div class="container-fluid">
            <div class="row attract-slider">
                <div class="col">
                    <div class="client-logo item">
                    <a href="#">
                        <img src="{{ asset("ext_images/link/1.png") }}" alt="" style="width: 60%;"/>
                    </a>
                    </div>
                </div>
                <div class="col">
                    <div class="client-logo item">
                    <a href="#">
                        <img src="{{ asset("ext_images/link/2.png") }}" alt="" style="width: 60%;"/>
                    </a>
                    </div>
                </div>
                <div class="col">
                    <div class="client-logo item">
                    <a href="#">
                        <img src="{{ asset("ext_images/link/3.png") }}" alt="" style="width: 60%;"/>
                    </a>
                    </div>
                </div>
                <div class="col">
                    <div class="client-logo item">
                    <a href="#">
                        <img src="{{ asset("ext_images/link/4.png") }}" alt="" style="width: 60%;"/>
                    </a>
                    </div>
                </div>
                <div class="col">
                    <div class="client-logo item">
                    <a href="#">
                        <img src="{{ asset("ext_images/link/5.png") }}" alt="" style="width: 60%;"/>
                    </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- link Ends -->

      <!-- Trending Starts -->
      <section class="trending destination-b pb-6 pt-7">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Perfect <span>Deals & Discounts</span></h2>
                <p class="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better
                    people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="trend-box">
                <div class="row team-slider">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="trend-item">
                            <div class="ribbon ribbon-top-left"><span>25% OFF</span></div>
                            <div class="trend-image">
                                <img src="{{ asset('front/images/trending/trending1.jpg') }}" alt="image">
                                <div class="trend-tags">
                                    <a href="#"><i class="flaticon-like"></i></a>
                                </div>
                            </div>
                            <div class="trend-content-main">
                                <div class="trend-content">
                                    <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> Thailand</h6>
                                    <h4><a href="#">Stonehenge, Windsor Castle, and Bath from London</a></h4>
                                    <div class="rating-main d-flex align-items-center">
                                        <div class="rating">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                        <span class="ml-2">38 Reviews</span>
                                    </div>
                                </div>
                                <div class="trend-last-main">
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect
                                        for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2
                                            night</p>
                                        <div class="trend-price">
                                            <p class="price white mb-0">From <span>$350.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="trend-item">
                            <div class="ribbon ribbon-top-left"><span>30% OFF</span></div>
                            <div class="trend-image">
                                <img src="{{ asset('front/images/trending/trending2.jpg') }}" alt="image">
                                <div class="trend-tags">
                                    <a href="#"><i class="flaticon-like"></i></a>
                                </div>
                            </div>
                            <div class="trend-content-main">
                                <div class="trend-content">
                                    <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> Germany</h6>
                                    <h4><a href="#">Here We Bosphorus and Black Sea Train from Istanbul</a></h4>
                                    <div class="rating-main d-flex align-items-center">
                                        <div class="rating">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                        <span class="ml-2">38 Reviews</span>
                                    </div>
                                </div>
                                <div class="trend-last-main">
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect
                                        for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2
                                            night</p>
                                        <div class="trend-price">
                                            <p class="price white mb-0">From <span>$350.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="trend-item">
                            <div class="ribbon ribbon-top-left"><span>20% OFF</span></div>
                            <div class="trend-image">
                                <img src="{{ asset('front/images/trending/trending3.jpg') }}" alt="image">
                                <div class="trend-tags">
                                    <a href="#"><i class="flaticon-like"></i></a>
                                </div>
                            </div>
                            <div class="trend-content-main">
                                <div class="trend-content">
                                    <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> Denmark</h6>
                                    <h4><a href="#">NYC One World Observatory Skip-the-Line Ticket</a></h4>
                                    <div class="rating-main d-flex align-items-center">
                                        <div class="rating">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                        <span class="ml-2">38 Reviews</span>
                                    </div>
                                </div>
                                <div class="trend-last-main">
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect
                                        for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2
                                            night</p>
                                        <div class="trend-price">
                                            <p class="price white mb-0">From <span>$350.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="trend-item">
                            <div class="ribbon ribbon-top-left"><span>40% OFF</span></div>
                            <div class="trend-image">
                                <img src="{{ asset('front/images/trending/trending4.jpg') }}" alt="image">
                                <div class="trend-tags">
                                    <a href="#"><i class="flaticon-like"></i></a>
                                </div>
                            </div>
                            <div class="trend-content-main">
                                <div class="trend-content">
                                    <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> Japan</h6>
                                    <h4><a href="#">Stonehenge, Windsor Castle, and Bath from London</a></h4>
                                    <div class="rating-main d-flex align-items-center">
                                        <div class="rating">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                        <span class="ml-2">38 Reviews</span>
                                    </div>
                                </div>
                                <div class="trend-last-main">
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect
                                        for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2
                                            night</p>
                                        <div class="trend-price">
                                            <p class="price white mb-0">From <span>$350.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Trending Ends -->

    <!-- Call to action starts -->
    <section class="call-to-action call-to-action1 pb-6 pt-10"
        style="background-image:url({{ asset('front/images/bg/bg6.jpg') }})">
        <div class="call-main">
            <div class="container">
                <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-lg-6 mb-4">
                        <div class="action-content">
                            <h3 class="white mb-0 text-uppercase">Selanjutnya Apa?</h3>
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
                            <img src="{{ asset('front/images/trending/trending3.jpg') }}" alt="">
                            <div class="call-button text-center">
                                <button type="button" class="play-btn js-video-button" data-video-id="152879427"
                                    data-channel="vimeo">
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

     <!-- our teams starts -->
     <section class="our-team pb-4">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Our <span>Team & Guide</span></h2>
                <p class="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="team-main">
                <div class="row shop-slider">
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="team-list">
                            <div class="team-image">
                                <img src="images/team/img1.jpg" alt="team">
                            </div>
                            <div class="team-content1 text-center">
                               <h4 class="mb-0 pink">Salmon Thuir</h4>
                                <p class="mb-0">Cheif Officer</p>

                            </div>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="team-list">
                            <div class="team-image">
                                <img src="images/team/img2.jpg" alt="team">
                            </div>
                            <div class="team-content1 text-center">
                               <h4 class="mb-0 pink">Horke Pels</h4>
                                <p class="mb-0">Head Chef</p>

                            </div>


                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="team-list">
                            <div class="team-image">
                                <img src="images/team/img4.jpg" alt="team">
                            </div>
                            <div class="team-content1 text-center">
                               <h4 class="mb-0 pink">Solden kalos</h4>
                                <p class="mb-0">Supervisor</p>

                            </div>


                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="team-list">
                            <div class="team-image">
                                <img src="images/team/img3.jpg" alt="team">
                            </div>
                            <div class="team-content1 text-center">
                               <h4 class="mb-0 pink">Nelson Bam</h4>
                                <p class="mb-0">Quality Assurance</p>

                            </div>

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="team-list">
                            <div class="team-image">
                                <img src="images/team/img5.jpg" alt="team">
                            </div>
                            <div class="team-content1 text-center">
                               <h4 class="mb-0 pink">Cacics Coold</h4>
                                <p class="mb-0">Asst. Chef</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- our teams Ends -->

    <!-- Counter -->
    <section class="counter-main pb-6 pt-10" style="background-image: url({{ asset('front/images/bg/bg4.jpg') }})">
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
    </section>
    <!-- End Counter -->

    <!-- cta-horizon starts -->
    <div class="cta-horizon bg-navy pt-4 pb-4">
        <div class="container d-md-flex align-items-center justify-content-between">
            <h4 class="mb-0 white">It’s Time For a New Adventure! Don’t Wait Any Longer. Contact us!</h4>
            <a href="#" class="nir-btn">Fine More Destination</a>
        </div>
    </div>
    <!-- cta-horizon Ends -->

    <!-- testomonial start -->
    <section class="testimonial pb-6 pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">What <span>People Say About Us</span></h2>
                <p class="mb-0">Travel has helped us to understand the meaning of life and it has helped us become
                    better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="row review-slider">
                <div class="col-sm-4 item">
                    <div class="testimonial-item1 text-center">
                        <div class="details">
                            <p class="m-0">Lorem Ipsum is simply dummy text of the printing andypesetting industry.
                                Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem.
                                Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                        </div>
                        <div class="author-info mt-2">
                            <a href="#"><img src="{{ asset('front/images/testimonial/img1.jpg') }}"
                                    alt=""></a>
                            <div class="author-title">
                                <h4 class="m-0 pink">Jared Erondu</h4>
                                <span>Supervisor</span>
                            </div>
                        </div>
                        <i class="fa fa-quote-left mb-2"></i>
                    </div>
                </div>
                <div class="col-sm-4 item">
                    <div class="testimonial-item1 text-center">
                        <div class="details">
                            <p class="m-0">Lorem Ipsum is simply dummy text of the printing andypesetting industry.
                                Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem.
                                Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                        </div>
                        <div class="author-info mt-2">
                            <a href="#"><img src="{{ asset('front/images/testimonial/img2.jpg') }}"
                                    alt=""></a>
                            <div class="author-title">
                                <h4 class="m-0 pink">Cadic Vegeta</h4>
                                <span>Sr. Chef</span>
                            </div>
                        </div>
                        <i class="fa fa-quote-left mb-2"></i>
                    </div>
                </div>
                <div class="col-sm-4 item">
                    <div class="testimonial-item1 text-center">
                        <div class="details">
                            <p class="m-0">Lorem Ipsum is simply dummy text of the printing andypesetting industry.
                                Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem.
                                Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                        </div>
                        <div class="author-info mt-2">
                            <a href="#"><img src="{{ asset('front/images/testimonial/img3.jpg') }}"
                                    alt=""></a>
                            <div class="author-title">
                                <h4 class="m-0 pink">Jonathan Beri</h4>
                                <span>Manager</span>
                            </div>
                        </div>
                        <i class="fa fa-quote-left mb-2"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- testimonial ends -->

    <!-- News Starts -->
    <section class="news pb-2 bg-lgrey pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Latest Some <span>Tips & Articles</span></h2>
                <p class="mb-0 ">Travel has helped us to understand the meaning of life and it has helped us become
                    better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="news-outer">
                <div class="row">
                    <div class="col-lg-5 col-md-12 col-xs-12 mb-4">
                        <div class="news-item overflow-hidden">
                            <div class="news-image">
                                <img src="{{ asset('front/images/blog/blog1.jpg') }}" alt="image">
                            </div>
                            <div class="news-list mt-2 border-b pb-2 mb-2">
                                <ul>
                                    <li><a href="single-right.html" class="pr-3"><i
                                                class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                    <li><a href="single-right.html" class="pr-3"><i
                                                class="fa fa-comment pink pr-1"></i> 3</a></li>
                                    <li><a href="single-right.html" class=""><i class="fa fa-tag pink pr-1"></i>
                                            Tour, Tourism, Travel</a></li>
                                </ul>
                            </div>
                            <div class="news-content mt-2">
                                <h4 class="pb-2 mb-2 border-b"><a href="single-right.html">The real voyage does not
                                        consist in seeking new landscapes</a></h4>
                                <p class="mb-3">Excited him now natural saw passage offices you minuter. At by asked
                                    being court hopes. Farther so friends am to detract. Forbade concern do private be.
                                    Offending residence but men engrossed shy. <br><br>One of the programs is Save Our I
                                    have personally in many of the programs mentioned on this site.</p>

                                <div class="author-img">
                                    <img src="{{ asset('front/images/reviewer/1.jpg') }}" alt="Demo Image">
                                    <span>By - Jack Well Fardez</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-xs-12 mb-4">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                <div class="news-item overflow-hidden">
                                    <div class="news-image">
                                        <img src="{{ asset('front/images/blog/blog2.jpg') }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i
                                                        class="fa fa-tag pink pr-1"></i> Travel</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">Mountains is always
                                                right destination.</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                <div class="news-item overflow-hidden">
                                    <div class="news-image">
                                        <img src="{{ asset('front/images/blog/blog3.jpg') }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i
                                                        class="fa fa-tag pink pr-1"></i> Tourism</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">We have not all those
                                                who wander are lost.</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                <div class="news-item overflow-hidden">
                                    <div class="news-image">
                                        <img src="{{ asset('front/images/blog/blog4.jpg') }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i
                                                        class="fa fa-tag pink pr-1"></i> Tour</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">Here Our's Life is
                                                either a daring adventure.</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                <div class="news-item overflow-hidden">
                                    <div class="news-image">
                                        <img src="{{ asset('front/images/blog/blog5.jpg') }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i
                                                        class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i
                                                        class="fa fa-tag pink pr-1"></i> Travel</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">Take only memories,
                                                leave only footprints.</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- News Ends -->
@endsection

@section('scripts')
@endsection
