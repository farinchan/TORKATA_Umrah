@extends('front.app')

@section('content')
    <!-- banner starts -->
    <section class="banner overflow-hidden">
        <div class="slider slider1">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-inner">
                           <div class="slide-image" style="background-image:url({{ asset("front/images/slider/8.jpg") }})"></div>
                           <div class="swiper-content container">
                                <h1 class="white mb-2">Travel – Explore the world with a backpack</h1>
                                <p class="white mb-4">Primis aptent vel turpis a a class suspendisse et augue orci a diam tristique consequat hendrerit ullamcorper  top50torquent </p>
                                <a href="#" class="per-btn">
                                    <span class="white">Read More</span>
                                    <i class="fa fa-arrow-right white"></i>
                                </a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <div class="slide-image" style="background-image:url({{ asset("front/images/slider/5.jpg") }})"></div>
                            <div class="swiper-content1 container">
                                <h1 class="white mb-2">IT’S A BIG WORLD OUT THERE GO EXPLORE</h1>
                                <p class="white mb-4">Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet <br> contetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                <a href="#" class="per-btn">
                                    <span class="white">Contact Us</span>
                                    <i class="fa fa-arrow-right white"></i>
                                </a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-inner">
                           <div class="slide-image" style="background-image:url({{ asset("front/images/slider/10.jpg") }})"></div>
                           <div class="swiper-content2 container">
                                <h1 class="white mb-2">DISCOVER THE WORLD YOU HAVE NEVER SEEN</h1>
                                <p class="white mb-4">Lorem consectetur adipiscing elit, sed do eiusmod tempor dolor sit amet <br> contetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                <a href="#" class="per-btn">
                                    <span class="white">Discover</span>
                                    <i class="fa fa-arrow-right white"></i>
                                </a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>

                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
    <!-- banner ends -->

    <!-- form starts -->
    <div class="form-main">
        <div class="container">
            <div class="form-content form-content1 w-100 transparent p-0 shadow-none position-relative">
                <div class="form-navtab text-center">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tour"><i class="flaticon-global"></i> Tours</a></li>
                        <li><a data-toggle="tab" href="#hotel"><i class="flaticon-building"></i> Hotel</a></li>
                        <li><a data-toggle="tab" href="#flight"><i class="fa fa-plane"></i> Flight</a></li>
                        <li><a data-toggle="tab" href="#car"><i class="fa fa-car"></i> Cars</a></li>
                        <li><a data-toggle="tab" href="#train"><i class="fa fa-train"></i> Train</a></li>
                    </ul>
                </div>

                <div class="tab-content">
                    <div id="tour" class="tab-pane">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Your Destination</label>
                                    <div class="input-box">
                                        <i class="flaticon-placeholder"></i>
                                        <select class="niceSelect">
                                            <option value="1">Where are you going?</option>
                                            <option value="2">Argentina</option>
                                            <option value="3">Belgium</option>
                                            <option value="4">Canada</option>
                                            <option value="5">Denmark</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Check In</label>
                                    <div class="input-box">
                                        <i class="flaticon-calendar"></i>
                                        <input id="date-range0" type="text" placeholder="yyyy-mm-dd">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Check Out</label>
                                    <div class="input-box">
                                        <i class="flaticon-calendar"></i>
                                        <input id="date-range1" type="text" placeholder="yyyy-mm-dd">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>No. Of People</label>
                                    <div class="input-box">
                                        <i class="flaticon-add-user"></i>
                                        <select class="niceSelect">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0 mt-3">
                                    <a href="#" class="nir-btn w-100"><i class="fa fa-search mr-2"></i> Search Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="hotel" class="tab-pane in active">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Your Destination</label>
                                    <div class="input-box">
                                        <i class="flaticon-placeholder"></i>
                                        <select class="niceSelect">
                                            <option value="1">Where are you going?</option>
                                            <option value="2">Argentina</option>
                                            <option value="3">Belgium</option>
                                            <option value="4">Canada</option>
                                            <option value="5">Denmark</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Reserved Date</label>
                                    <div class="input-box">
                                        <i class="flaticon-calendar"></i>
                                        <input id="date-range2" type="text" placeholder="yyyy-mm-dd">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Hotel Types</label>
                                    <div class="input-box">
                                        <i class="flaticon-add-user"></i>
                                        <select class="niceSelect">
                                            <option value="1">High Class</option>
                                            <option value="2">Middle Class</option>
                                            <option value="3">Low Class</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Person</label>
                                    <div class="input-box">
                                        <i class="flaticon-add-user"></i>
                                        <select class="niceSelect">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0 mt-3">
                                    <a href="#" class="nir-btn w-100"><i class="fa fa-search mr-2"></i> Search Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="flight" class="tab-pane">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Flying From</label>
                                    <div class="input-box">
                                        <i class="flaticon-placeholder"></i>
                                        <select class="niceSelect">
                                            <option value="1">Where are you going?</option>
                                            <option value="2">Argentina</option>
                                            <option value="3">Belgium</option>
                                            <option value="4">Canada</option>
                                            <option value="5">Denmark</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Flying To</label>
                                    <div class="input-box">
                                        <i class="flaticon-placeholder"></i>
                                        <select class="niceSelect">
                                            <option value="1">Where are you going?</option>
                                            <option value="2">Argentina</option>
                                            <option value="3">Belgium</option>
                                            <option value="4">Canada</option>
                                            <option value="5">Denmark</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Depart Date</label>
                                    <div class="input-box">
                                        <i class="flaticon-calendar"></i>
                                        <input id="date-range3" type="text" placeholder="yyyy-mm-dd">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>No. of People</label>
                                    <div class="input-box">
                                        <i class="flaticon-add-user"></i>
                                        <select class="niceSelect">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0 mt-3">
                                    <a href="#" class="nir-btn w-100"><i class="fa fa-search mr-2"></i> Search Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="car" class="tab-pane">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Car Types</label>
                                    <div class="input-box">
                                        <i class="flaticon-placeholder"></i>
                                        <select class="niceSelect">
                                            <option value="1">Ferrari</option>
                                            <option value="2">BMW</option>
                                            <option value="3">Audi</option>
                                            <option value="4">Honda</option>
                                            <option value="5">Suzuki</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Pick Up</label>
                                    <div class="input-box">
                                        <i class="flaticon-calendar"></i>
                                        <input id="date-range4" type="text" placeholder="yyyy-mm-dd">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Drop Off</label>
                                    <div class="input-box">
                                        <i class="flaticon-calendar"></i>
                                        <input id="date-range5" type="text" placeholder="yyyy-mm-dd">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Price Range</label>
                                    <div class="input-box">
                                        <div class="range-slider">
                                            <div data-min="0" data-max="2000" data-unit="$" data-min-name="min_price" data-max-name="max_price" class="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
                                                <span class="min-value">0 $</span>
                                                <span class="max-value">2000 $</span>
                                                <div class="ui-slider-range ui-widget-header ui-corner-all whole" style="left: 0%; width: 100%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0 mt-3">
                                    <a href="#" class="nir-btn w-100"><i class="fa fa-search mr-2"></i> Search Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="train" class="tab-pane">
                        <div class="row d-flex align-items-center justify-content-between">
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Pick Up Location</label>
                                    <div class="input-box">
                                        <i class="flaticon-placeholder"></i>
                                        <select class="niceSelect">
                                            <option value="1">Where are you going?</option>
                                            <option value="2">Argentina</option>
                                            <option value="3">Belgium</option>
                                            <option value="4">Canada</option>
                                            <option value="5">Denmark</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Depart Date</label>
                                    <div class="input-box">
                                        <i class="flaticon-calendar"></i>
                                        <input id="date-range6" type="text" placeholder="yyyy-mm-dd">
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0">
                                    <label>Train Class</label>
                                    <div class="input-box">
                                        <i class="flaticon-add-user"></i>
                                        <select class="niceSelect">
                                            <option value="1">Economic</option>
                                            <option value="2">Premium</option>
                                            <option value="3">Deluxe</option>
                                            <option value="4">Luxury</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="form-group mb-0 mt-3">
                                    <a href="#" class="nir-btn w-100"><i class="fa fa-search mr-2"></i> Search Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- form ends -->

    <!-- Trending Starts -->
    <section class="trending destination-b pb-6 pt-7">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Perfect <span>Deals & Discounts</span></h2>
                <p class="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="trend-box">
                <div class="row team-slider">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="trend-item">
                            <div class="ribbon ribbon-top-left"><span>25% OFF</span></div>
                            <div class="trend-image">
                                <img src="{{ asset("front/images/trending/trending1.jpg") }}" alt="image">
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
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
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
                                <img src="{{ asset("front/images/trending/trending2.jpg") }}" alt="image">
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
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
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
                                <img src="{{ asset("front/images/trending/trending3.jpg") }}" alt="image">
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
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
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
                                <img src="{{ asset("front/images/trending/trending4.jpg") }}" alt="image">
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
                                    <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                    <div class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                        <p class="mb-0 white"><i class="fa fa-clock-o" aria-hidden="true"></i> 3 days & 2 night</p>
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

    <!-- about-us starts -->
    <section class="about-us bg-grey pb-6">
        <div class="container">
            <div class="about-image-box mb-4">
                <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-lg-6 col-sm-12">
                        <div class="about-content">
                            <h4 class="mb-1 font-weight-normal blue">About Yatriiworld</h4>
                            <h2 class="">We're Truely Dedicated To Make Your Travel Experience</h2>
                            <p class="mb-2">Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars. <br>Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
                            <div class="about-featured mb-0">
                                <ul>
                                    <li>Safety Travel System</li>
                                    <li>Budget-Friendly Tour</li>
                                    <li>Expert Trip Planning</li>
                                    <li>Fast Communication</li>
                                    <li>Right Solution & Guide</li>
                                    <li>24/7 Customer Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="about-image-main">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 mt-4">
                                    <img src="{{ asset("front/images/new-deal/deal3.jpg") }}" alt="">
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <img src="{{ asset("front/images/new-deal/deal5.jpg") }}" alt="">
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
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a day</p>
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
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a day</p>
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
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a day</p>
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
                                    <p class="mb-0">Travel worry free knowing that we're here if you need us, 24 hours a day</p>
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

    <!-- Call to action starts -->
    <section class="call-to-action call-to-action1 pb-6 pt-10" style="background-image:url({{ asset("front/images/bg/bg6.jpg") }})">
        <div class="call-main">
            <div class="container">
                <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-lg-6 mb-4">
                        <div class="action-content">
                        <h3 class="white mb-0 text-uppercase">Find next place to visit</h3>
                        <h2 class="white call-name">EXPLORE THE WORLD</h2>
                        <p class="white mb-4">There are many variations of passages of. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look.</p>
                        <a href="#" class="nir-btn">Go Explore <i class="fa fa-arrow-right"></i></a>
                    </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="video-button">
                            <img src="{{ asset("front/images/trending/trending3.jpg") }}" alt="">
                             <div class="call-button text-center">
                                <button type="button" class="play-btn js-video-button" data-video-id="152879427" data-channel="vimeo">
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
                            <img src="{{ asset("front/images/destination/destination5.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Manchester Tour</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination7.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">kathmandu Tour</h4>
                            </div>
                             <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination8.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Tokyo Tour</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination9.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Norwich Tour</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination10.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Norwich Tour</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row d-flex align-items-center">
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination12.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">New York Tour</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination3.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">New York Tour</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination4.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Armania Tour</h4>
                            </div>
                            <div class="desti-overlay">
                                <a href="#" class="nir-btn">
                                  <span class="white">Book Now</span>
                                    <i class="fa fa-arrow-right white pl-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg p-0">
                        <div class="desti-image bordernone">
                            <img src="{{ asset("front/images/destination/destination11.jpg") }}" alt="desti">
                            <div class="desti-content">
                                <div class="rating mb-1">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                                <h4 class="white mb-0">Armania Tour</h4>
                            </div>
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
    </section>
    <!-- top destination ends -->

    <!-- Fav destination Starts -->
    <section class="trending destination pb-6 bg-grey pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Find Your <span>Favourite Destination</span></h2>
                <p class="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="trend-box">
                <div class="price-navtab text-center mb-4">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#historical">Historical</a></li>
                        <li><a data-toggle="tab" href="#weekend">Weekend</a></li>
                        <li><a data-toggle="tab" href="#holidays">Holidays</a></li>
                        <li><a data-toggle="tab" href="#special">Special Tour</a></li>
                    </ul>
                </div>
                <div class="tab-content">
                    <div id="historical" class="tab-pane fade in active">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending8.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Nepal Special Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 852 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Nepal.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending11.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Canada New Year Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 615 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Canada.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/2.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending12.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">25 Reviews</span>
                                            </div>
                                            <h4><a href="#">America Christmas Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 926 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> America.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="weekend" class="tab-pane fade">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending14.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Nepal Weekend Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 852 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Nepal.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending13.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Canada Weekend Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 615 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Canada.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/2.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending7.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">25 Reviews</span>
                                            </div>
                                            <h4><a href="#">America Weekend Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 926 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> America.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="holidays" class="tab-pane fade">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending2.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Nepal Holidays Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 852 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Nepal.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending3.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Canada Holidays Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 615 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Canada.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/2.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending4.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">25 Reviews</span>
                                            </div>
                                            <h4><a href="#">America Holidays Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 926 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> America.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="special" class="tab-pane fade">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending6.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Nepal Special Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 852 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Nepal.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending5.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">38 Reviews</span>
                                            </div>
                                            <h4><a href="#">Canada Special Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 615 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> Canada.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/2.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 mb-4">
                                <div class="trend-item">
                                    <div class="trend-image">
                                        <img src="{{ asset("front/images/trending/trending9.jpg") }}" alt="image">
                                    </div>
                                    <div class="trend-content-main">
                                        <div class="trend-content">
                                            <div class="rating-main d-flex align-items-center pb-1">
                                                <div class="rating">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <span class="ml-2">25 Reviews</span>
                                            </div>
                                            <h4><a href="#">America Special Tour</a></h4>
                                            <p class="mb-0"><i class="fa fa-eye mr-1"></i> 926 Visiting Places <i class="fa fa-map-marker mr-1 ml-3"></i> America.</p>
                                        </div>
                                        <div class="trend-last-main">
                                            <p class="mb-0 trend-para">A wonderful little cottage right on the seashore - perfect for exploring.</p>
                                            <div class="trend-last d-flex align-items-center justify-content-between">
                                                <p class="mb-0 white d-flex align-items-center"><img src="{{ asset("front/images/reviewer/1.jpg") }}" class="d-author mr-2" alt=""> Thu Astudillo</p>
                                                <div class="trend-price">
                                                    <p class="price white mb-0"><a href="#"><i class="flaticon-like white"></i></a></p>
                                                </div>
                                            </div>
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
    <!-- Fav destination Ends -->

    <!-- Counter -->
    <section class="counter-main pb-6 pt-10" style="background-image: url({{ asset("front/images/bg/bg4.jpg") }})">
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

    <!-- top deal starts -->
    <section class="top-deals bg-grey pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">Today's <span>Top Deal</span></h2>
                <p class="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="row team-slider">
                <div class="col-lg-4 slider-item">
                    <div class="slider-image">
                        <img src="{{ asset("front/images/new-deal/deal1.jpg") }}" alt="image">
                    </div>
                    <div class="slider-content">
                        <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> United Kingdom</h6>
                        <h4><a href="#">Earning Asiana Club Miles</a></h4>
                        <p>With upto 30% Off, experience Europe your way!</p>
                        <div class="deal-price">
                            <p class="price font-weight-bold pink mb-0">From <span>$250.00</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 slider-item">
                    <div class="slider-image">
                        <img src="{{ asset("front/images/new-deal/deal2.jpg") }}" alt="image">
                    </div>
                    <div class="slider-content">
                        <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> Thailand</h6>
                        <h4><a href="#">Save big on hotels!</a></h4>
                        <p>With upto 30% Off, experience Europe your way!</p>
                        <div class="deal-price">
                            <p class="price font-weight-bold pink mb-0">From <span>$250.00</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 slider-item">
                    <div class="slider-image">
                        <img src="{{ asset("front/images/new-deal/deal3.jpg") }}" alt="image">
                    </div>
                    <div class="slider-content">
                        <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> South Korea</h6>
                        <h4><a href="#">Experience Europe Your Way</a></h4>
                        <p>With upto 30% Off, experience Europe your way!</p>
                        <div class="deal-price">
                            <p class="price font-weight-bold pink mb-0">From <span>$250.00</span></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 slider-item">
                    <div class="slider-image">
                        <img src="{{ asset("front/images/new-deal/deal4.jpg") }}" alt="image">
                    </div>
                    <div class="slider-content">
                        <h6 class="font-weight-normal"><i class="fa fa-map-marker-alt"></i> Germany</h6>
                        <h4><a href="#">Earning Asiana Club Miles</a></h4>
                        <p>With upto 30% Off, experience Europe your way!</p>
                        <div class="deal-price">
                            <p class="price font-weight-bold pink mb-0">From <span>$250.00</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- top deal ends -->

    <!-- testomonial start -->
    <section class="testimonial pb-6 pt-9">
        <div class="container">
            <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
                <h2 class="m-0">What <span>People Say About Us</span></h2>
                <p class="mb-0">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="row review-slider">
                <div class="col-sm-4 item">
                    <div class="testimonial-item1 text-center">
                        <div class="details">
                            <p class="m-0">Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                        </div>
                        <div class="author-info mt-2">
                            <a href="#"><img src="{{ asset("front/images/testimonial/img1.jpg") }}" alt=""></a>
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
                            <p class="m-0">Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem  Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                        </div>
                        <div class="author-info mt-2">
                            <a href="#"><img src="{{ asset("front/images/testimonial/img2.jpg") }}" alt=""></a>
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
                            <p class="m-0">Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                        </div>
                        <div class="author-info mt-2">
                            <a href="#"><img src="{{ asset("front/images/testimonial/img3.jpg") }}" alt=""></a>
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
                <p class="mb-0 ">Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes.</p>
            </div>
            <div class="news-outer">
                <div class="row">
                    <div class="col-lg-5 col-md-12 col-xs-12 mb-4">
                        <div class="news-item overflow-hidden">
                            <div class="news-image">
                                <img src="{{ asset("front/images/blog/blog1.jpg") }}" alt="image">
                            </div>
                            <div class="news-list mt-2 border-b pb-2 mb-2">
                                <ul>
                                    <li><a href="single-right.html" class="pr-3"><i class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                    <li><a href="single-right.html" class="pr-3"><i class="fa fa-comment pink pr-1"></i> 3</a></li>
                                    <li><a href="single-right.html" class=""><i class="fa fa-tag pink pr-1"></i> Tour, Tourism, Travel</a></li>
                                </ul>
                            </div>
                            <div class="news-content mt-2">
                                <h4 class="pb-2 mb-2 border-b"><a href="single-right.html">The real voyage does not consist in seeking new landscapes</a></h4>
                                <p class="mb-3">Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. <br><br>One of the programs is Save Our I have personally in many of the programs mentioned on this site.</p>

                                <div class="author-img">
                                    <img src="{{ asset("front/images/reviewer/1.jpg") }}" alt="Demo Image">
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
                                        <img src="{{ asset("front/images/blog/blog2.jpg") }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i class="fa fa-tag pink pr-1"></i> Travel</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">Mountains is always right destination.</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                <div class="news-item overflow-hidden">
                                    <div class="news-image">
                                        <img src="{{ asset("front/images/blog/blog3.jpg") }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i class="fa fa-tag pink pr-1"></i> Tourism</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">We have not all those who wander are lost.</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                <div class="news-item overflow-hidden">
                                    <div class="news-image">
                                        <img src="{{ asset("front/images/blog/blog4.jpg") }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i class="fa fa-tag pink pr-1"></i> Tour</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">Here Our's Life is either a daring adventure.</a></h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                <div class="news-item overflow-hidden">
                                    <div class="news-image">
                                        <img src="{{ asset("front/images/blog/blog5.jpg") }}" alt="image">
                                    </div>
                                    <div class="news-list mt-2 border-b pb-2 mb-2">
                                        <ul>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-calendar pink pr-1"></i> 4th AUg 2020 </a></li>
                                            <li><a href="single-right.html" class="pr-3"><i class="fa fa-comment pink pr-1"></i> 3</a></li>
                                            <li><a href="single-right.html" class=""><i class="fa fa-tag pink pr-1"></i> Travel</a></li>
                                        </ul>
                                    </div>
                                    <div class="news-content mt-2">
                                        <h4 class="bordernone mb-0"><a href="single-right.html">Take only memories, leave only footprints.</a></h4>
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

    <!-- Newsletter Starts -->
    <section class="newsletter-area m-0 pb-5 pt-5 bg-navy">
        <div class="container">
            <div class="newsletter-main">
                <div class="newsletter-wrapper">
                <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-lg-5">
                        <div class="newsletter-content-wrapper d-sm-flex align-items-center">
                            <div class="newsletter-icon">
                                <i class="fa fa-envelope-open white"></i>
                            </div>
                            <div class="newsletter-content ml-4">
                                <h3 class="title white mb-1">Get Discount <span>30% Off !</span> </h3>
                                <p class="m-0 white">Etiam bibendum turpis ac ligula blandit, quis euismod leo consectetur Vivamus maximus non.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="newsletter-form">
                            <form action="#">
                                <input type="text" placeholder="Enter Your Email...">
                                <button class="nir-btn">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Newsletter Ends -->
@endsection
