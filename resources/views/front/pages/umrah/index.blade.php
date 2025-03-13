@extends('front.app')

@section('styles')
    <style>
        .flip-card {
            margin-top: 40px;
            background-color: transparent;
            width: 100%;
            height: 885px;
            perspective: 1000px;
        }

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            /* text-align: center; */
            transition: transform 0.6s;
            transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
            transform: rotateY(-180deg);
        }

        .flip-card-front,
        .flip-card-back {
            position: absolute;
            width: 100%;
            min-height: 100%;
            backface-visibility: hidden;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* align-items: center; */
        }

        .flip-card-front {
            background: #fff;
        }

        .flip-card-back {
            padding: 30px;
            background: #2c3e50;
            transform: rotateY(180deg);
            color: white;
            justify-content: flex-start;
            text-align: left;
        }

        .flip-card-back h2 {
            font-size: 24px;
            margin-bottom: 0px;
            color: #fff;
        }

        .flip-card-back h4 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #fff;
        }

        .flip-card-back hr {
            width: 100%;
            height: 3px;
            background: #fff;
            border: none;
            margin-bottom: 20px;
        }

        ol {
            list-style-type: upper-roman;
            padding: 0;
            text-align: left;
        }

        ol li {
            color: #fff;
            margin-bottom: 10px;
        }

        ol li span {
            font-weight: bold;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            color: #fff;
            margin-bottom: 0px;
            display: flex;
            align-items: center;
        }

        ul li span {
            font-weight: 100;
            margin-right: 10px;
        }

    </style>
@endsection

@section('seo')
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $meta["description"] }}">
    <meta name="keywords" content="{{ $meta["keywords"] }}">
    <meta name="author" content="PT. Torkata Jaya Persada">

    <meta property="og:title" content="{{ $meta["title"] }}">
    <meta property="og:description" content="{{ $meta["description"] }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ route('umrah.index') }}">
    <link rel="canonical" href="{{ route('umrah.index') }}">
    <meta property="og:image" content="{{ Storage::url($meta["favicon"]) }}">
@endsection

@section('content')
@include('front.partials.breadcrumb')

    <!-- blog starts -->
    <section class="blog trending destination-b">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <div class="trend-box">
                        <div class="row">

                            @foreach ($umrahs as $umrah)
                                <div class="col-lg-6 col-md-6 col-xs-12 mb-4">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">

                                                <div class="trend-item" id="trend-item">
                                                    <div class="trend-image">
                                                        <img src="{{ $umrah->getBanner() }}" alt="image"
                                                            style="height: 600px; width: 100%; object-fit: cover;">
                                                    </div>
                                                    <div class="trend-content-main">
                                                        <div class="trend-content">
                                                            <div class="rating pb-1">
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                            </div>
                                                            <h4><a href="#">{{ $umrah->name }}</a></h4>
                                                        </div>
                                                        <div class="trend-last-main">
                                                            <p class="mb-0 trend-para">
                                                                {{ Str::limit(strip_tags($umrah->description), 180) }}
                                                            </p>
                                                            <div
                                                                class="trend-last d-flex align-items-center justify-content-between bg-navy">
                                                                <p class="mb-0 white"><i class="fa fa-clock-o"
                                                                        aria-hidden="true"></i> {{ $umrah->days }} Hari</p>
                                                                <div class="trend-price">
                                                                    <p class="price white mb-0">Mulai Dari <span>Rp.
                                                                            32.000.000</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flip-card-back">
                                                <div style="text-align: center;">

                                                    <h2>
                                                        Jadwal Keberangkatan
                                                    </h2>
                                                    <h4>
                                                        {{ $umrah->name }}
                                                    </h4>
                                                </div>
                                                <hr>
                                                <div >
                                                    <ol>
                                                        @forelse ($umrah->schedules as $schedule )
                                                        <li>
                                                            <span>{{ $schedule->name }}</span>
                                                            <ul>
                                                                <li>
                                                                    <i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;
                                                                    <span>Keberangkatan</span>
                                                                    <span class="float-right">: {{ $umrah->departure??"-" }}</span>
                                                                </li>
                                                                <li>
                                                                    <i class="fa fa-plane" aria-hidden="true"></i> &nbsp;
                                                                    <span>Maskapai</span>
                                                                    <span class="float-right">: {{ $umrah->airline??"-" }}</span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        @empty
                                                        <li>
                                                            <span>Belum ada jadwal keberangkatan</span>
                                                        </li>
                                                        @endforelse

                                                    </ol>
                                                </div>
                                                <small class="mt-3" class="text-center">*Jadwal Keberangkatan dapat berubah sewaktu-waktu</small>
                                                <a href="{{ route("umrah.show", $umrah->slug) }}" class="btn btn-light" >Lihat Detail</a>
                                            </div>
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
    <!-- blog Ends -->
@endsection

@section('scripts')
@endsection
