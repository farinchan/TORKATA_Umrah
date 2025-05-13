@extends('front.app')

@section('styles')
    <style>
    </style>
@endsection

@section('seo')
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $meta['description'] }}">
    <meta name="keywords" content="{{ $meta['keywords'] }}">
    <meta name="author" content="PT. Torkata Jaya Persada">

    <meta property="og:title" content="{{ $meta['title'] }}">
    <meta property="og:description" content="{{ $meta['description'] }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ route('tour.show', $tour->slug) }}">
    <link rel="canonical" href="{{ route('tour.show', $tour->slug) }}">
    <meta property="og:image" content="{{ Storage::url($meta['favicon']) }}">
@endsection

@section('content')
    @include('front.partials.breadcrumb')

    <!-- blog starts -->
    <section class="blog trending destination-b">
        <div class="container">
            <div class="row flex-lg-row-reverse">
                <div class="col-md-9 col-xs-12">
                    <div class="single-content">

                        <div class="description" id="description">
                            <div class="single-full-title border-b mb-2 pb-2">
                                <div class="single-title">
                                    <h3 class="mb-1">{{ $tour->name }}</h3>
                                    <div class="rating-main d-sm-flex align-items-center">
                                        {{-- <p class="mb-0 mr-2"><i class="flaticon-location-pin"></i> Greater London, United Kingdom</p> --}}
                                        <div class="rating mr-2">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                        {{-- <span>(1,186 Reviews)</span> --}}
                                    </div>
                                </div>
                            </div>

                            <div class="description-inner mb-2">
                                <img src="{{ $tour->getBanner() }}" alt="image">
                            </div>

                            <div class="description-inner mb-2">
                                <h4>Deskrpsi</h4>
                                <p>
                                    {!! $tour->description !!}
                                </p>
                            </div>

                            <div class="tour-includes mb-2">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><i class="fa fa-clock-o pink mr-1" aria-hidden="true"></i>
                                                {{ $tour->days }} Hari</td>
                                            {{-- <td><i class="fa fa-calendar pink mr-1" aria-hidden="true"></i> Jan 18 - Dec 21</td>
                                            <td><i class="fa fa-group pink mr-1" aria-hidden="true"></i> Max People : 26</td> --}}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="description-inner mb-2">
                                <div class="row">
                                    {{-- <div class="col-lg-6 col-md-6 mb-2 pr-2">
                                        <div class="desc-box">
                                            <h5 class="mb-1">Departure & Return Location</h5>
                                            <p class="mb-0">John F.K. International Airport(Google Map)</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-2 pl-2">
                                        <div class="desc-box">
                                            <h5 class="mb-1">Bedroom</h5>
                                            <p class="mb-0">4 Bedrooms</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-2 pr-2">
                                        <div class="desc-box">
                                            <h5 class="mb-1">Departure Time</h5>
                                            <p class="mb-0">3 Hours Before Flight Time</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-2 pl-2">
                                        <div class="desc-box">
                                            <h5 class="mb-1">Departure Time</h5>
                                            <p class="mb-0">3 Hours Before Flight Time</p>
                                        </div>
                                    </div> --}}
                                    <div class="col-lg-6 col-md-6 mb-2 pr-2">
                                        <div class="desc-box">
                                            <h5 class="mb-1">Fasilitas</h5>
                                            {!! $tour->facilities !!}
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-2 pl-2">
                                        <div class="desc-box">
                                            <h5 class="mb-1">Tidak Termasuk</h5>
                                            {!! $tour->exclude !!}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            @if ($tour->images->count() > 0)
                                <div class="description-inner mb-4" id="dokumentasi">
                                    <h4>Dokumentasi Perjalanan</h4>
                                    <div class="description-images mb-4">
                                        <div class="thumbnail-images">
                                            <div class="slider-store">
                                                @foreach ($tour->images as $image)
                                                    <div>
                                                        <img src="{{ Storage::url($image->image) }}"
                                                            alt="Gambar {{ $loop->index }}" style="width: 100%; height: 500px; object-fit: cover;">
                                                    </div>
                                                @endforeach
                                            </div>
                                            <div class="slider-thumbs">
                                                @foreach ($tour->images as $image)
                                                    <div>
                                                        <img src="{{ Storage::url($image->image) }}"
                                                            alt="Gambar {{ $loop->index }}" style="width: 100%; height: 100px; object-fit: cover;">
                                                    </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif


                        </div>

                        <div class="accrodion-grp faq-accrodion mb-4" id="iternary" data-grp-name="faq-accrodion">
                            <h4>Iternary</h4>
                            @foreach ($tour->itineraries as $itinerary)
                                <div class="accrodion @if ($loop->first) active @endif">
                                    <div class="accrodion-title">
                                        <h5 class="mb-0"><span>{{ $itinerary->day }}</span></h5>
                                    </div>
                                    <div class="accrodion-content" style="display: block;">
                                        <div class="inner">
                                            <p>{{ $itinerary->description }}</p>
                                        </div><!-- /.inner -->
                                    </div>
                                </div>
                            @endforeach
                        </div>

                        <div class="single-map mb-4" id="single-map">
                            <h4>Map</h4>
                            <div class="map">
                                <div style="width: 100%">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.1333489503577!2d39.82248211232081!3d21.424002980244104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204b74d3fb493%3A0x55d1f94f8e094785!2sMasjidil%20Haram!5e0!3m2!1sid!2sid!4v1741451281597!5m2!1sid!2sid"
                                        height="400" style="border:0;" allowfullscreen="" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>

                        <div class="accrodion-grp faq-accrodion mb-4" id="jadwal" data-grp-name="faq-accrodion">
                            <h4>Jadwal</h4>
                            @forelse ($tour->schedules as $schedule)
                                <div class="accrodion active">
                                    <div class="accrodion-title">
                                        <h5 class="mb-0"><span>{{ $schedule->name }} -
                                                {{ $schedule->departure }}
                                            </span></h5>
                                    </div>
                                    <div class="accrodion-content" style="display: block;">
                                        <div class="inner">

                                            <div style="margin-bottom: 10px"><i class="fa fa-calendar"
                                                    aria-hidden="true"></i> &nbsp; Keberangkatan
                                                : {{ $schedule->departure }}
                                            </div>
                                            <div style="margin-bottom: 10px"><i class="fa fa-plane" aria-hidden="true"></i>
                                                &nbsp; Maskapai :
                                                {{ $schedule->airline ?? '-' }}
                                            </div>
                                            <div style="margin-bottom: 10px"><i class="fa fa-hotel" aria-hidden="true"></i>
                                                &nbsp; Hotel Mekkah :
                                                {{ $schedule->hotel ?? '-' }}
                                            </div>
                                            <div style="margin-bottom: 10px"><i class="fa fa-hotel" aria-hidden="true"></i>
                                                &nbsp; Hotel Madinah :
                                                {{ $schedule->hotel_madinah ?? '-' }}
                                            </div>


                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Tipe Paket</th>
                                                        <th>Harga</th>
                                                        <th>Kuota</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Quad</td>
                                                        <td>@money($schedule->quad_price)</td>
                                                        <td>0/{{ $schedule->quad_quota }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Triple</td>
                                                        <td>@money($schedule->triple_price)</td>
                                                        <td>0/{{ $schedule->triple_quota }}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Double</td>
                                                        <td>@money($schedule->double_price)</td>
                                                        <td>0/{{ $schedule->double_quota }}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div><!-- /.inner -->
                                    </div>
                                </div>
                            @empty
                            @endforelse


                        </div>

                        {{-- <div class="single-review mb-4" id="single-review">
                            <h4>Average Reviews</h4>
                            <div class="row d-flex align-items-center">
                                <div class="col-lg-4 col-md-4">
                                    <div class="review-box bg-pink text-center pb-4 pt-4">
                                        <h2 class="mb-1 white"><span>2.2</span>/5</h2>
                                        <h4 class="white mb-1">"Feel so much worst than thinking"</h4>
                                        <p class="mb-0 white font-italic">From 40 Reviews</p>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-8">
                                    <div class="review-progress">
                                        <div class="progress-item">
                                            <p>Cleanliness</p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">
                                                    <span class="sr-only">40% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress-item">
                                            <p>Facilities</p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">
                                                    <span class="sr-only">30% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress-item">
                                            <p>Value for money</p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%">
                                                    <span class="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress-item">
                                            <p>Service</p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
                                                    <span class="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="progress-item">
                                            <p>Location</p>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width:45%">
                                                    <span class="sr-only">45% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- blog comment list -->
                        <div class="single-comments single-box mb-4" id="single-comments">
                            <h5 class="border-b pb-2 mb-2">Showing 16 verified guest comments</h5>
                            <div class="comment-box">
                                <div class="comment-image">
                                    <img src="images/reviewer/1.jpg" alt="image">
                                </div>
                                <div class="comment-content">
                                    <h5 class="mb-1">Helena</h5>
                                    <p class="comment-date">April 25, 2019 at 10:46 am</p>
                                    <div class="comment-rate">
                                        <div class="rating mar-right-15">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                        <span class="comment-title">The worst hotel ever"</span>
                                    </div>

                                    <p class="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                    <div class="comment-like">
                                        <div class="like-title">
                                            <a href="#" class="nir-btn">Reply</a>
                                        </div>
                                        <div class="like-btn pull-right">
                                            <a href="#" class="like"><i class="fa fa-thumbs-up"></i> Like</a>
                                            <a href="#" class="disike"><i class="fa fa-thumbs-down"></i> Dislike</a>
                                            <a href="#" class="love"><i class="flaticon-like"></i> Love</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-box">
                                <div class="comment-image">
                                    <img src="images/reviewer/2.jpg" alt="image">
                                </div>
                                <div class="comment-content">
                                    <h5 class="mb-1">Helena</h5>
                                    <p class="comment-date">April 25, 2019 at 10:46 am</p>
                                    <div class="comment-rate">
                                        <div class="rating mar-right-15">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                        <span class="comment-title">Was too noisy and not suitable for business meetings"</span>
                                    </div>

                                    <p class="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                                    <div class="comment-like">
                                        <div class="like-title">
                                            <a href="#" class="nir-btn">Reply</a>
                                        </div>
                                        <div class="like-btn pull-right">
                                            <a href="#" class="like"><i class="fa fa-thumbs-up"></i> Like</a>
                                            <a href="#" class="disike"><i class="fa fa-thumbs-down"></i> Dislike</a>
                                            <a href="#" class="love"><i class="flaticon-like"></i> Love</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- blog review -->
                        <div class="single-add-review" id="single-add-review">
                            <h4>Write a Review</h4>
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea>Comment</textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-btn">
                                            <a href="#" class="nir-btn">Submit Review</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div> --}}
                    </div>
                </div>

                <div class="col-md-3 col-xs-12">
                    <div class="sidebar-sticky sticky1">
                        <div class="tabs-navbar bg-lgrey mb-4">
                            <div class="row">
                                <div class="col-md-12">
                                    <ul id="tabs" class="nav nav-tabs bordernone">
                                        <li class="active"><a data-toggle="tab" href="#description">Deskripsi</a></li>
                                        @if ($tour->images->count() > 0)
                                            <li><a data-toggle="tab" href="#dokumentasi">Dokumentasi</a></li>
                                        @endif
                                        <li><a data-toggle="tab" href="#iternary">Iternary</a></li>
                                        <li><a data-toggle="tab" href="#single-map">Map</a></li>
                                        <li><a data-toggle="tab" href="#jadwal">Jadwal</a></li>
                                        {{-- <li><a data-toggle="tab" href="#single-review">Reviews</a></li>
                                        <li><a data-toggle="tab" href="#single-comments">Comments</a></li>
                                        <li><a data-toggle="tab" href="#single-add-review" class="bordernone">Add Reviews</a></li> --}}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-item">
                            @php
                                $phone = $setting_web->phone;
                                if (substr($phone, 0, 1) === '+') {
                                    $phone = substr($phone, 1);
                                } elseif (substr($phone, 0, 1) === '0') {
                                    $phone = '62' . substr($phone, 1);
                                }

                            @endphp
                            <div class="sidebar-contact text-center bg-navy">
                                {{-- <i class=" fa fa-phone-alt pink"></i> --}}
                                <a href="https://wa.me/{{ $phone }}?text=Halo%20saya%20ingin%20bertanya%20tentang%20paket%20tour%20{{ $tour->name }}"
                                    target="_blank">
                                    <img src="{{ asset('ext_images/icon/whatsapp.svg') }}" alt=""
                                        style="width: 80px;" class="mb-2">
                                </a>
                                <h3 class="white"><span>Pesan Melalui</span> phone/Whatsapp</h3>
                                <a href="tel:{{ $setting_web->phone ?? '' }}"
                                    class="phone white">{{ $setting_web->phone ?? '+' }}</a>
                                <small class="white d-block mt-2">*Setiap Waktu</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- blog Ends -->
@endsection

@section('scripts')
    <script src="{{ asset('front/js/custom-accordian.js') }}"></script>
    <script src="{{ asset('front/js/custom-navscroll.js') }}"></script>
@endsection
