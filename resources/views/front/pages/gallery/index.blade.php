@extends('front.app')

@section('styles')
@endsection

@section('seo')
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $meta['description'] }}">
    <meta name="keywords" content="{{ $meta['keywords'] }}">
    <meta name="author" content="PT. Torkata Jaya Persada">

    <meta property="og:title" content="{{ $meta['title'] }}">
    <meta property="og:description" content="{{ $meta['description'] }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ route('tour.index') }}">
    <link rel="canonical" href="{{ route('tour.index') }}">
    <meta property="og:image" content="{{ Storage::url($meta['favicon']) }}">
@endsection

@section('content')
    @include('front.partials.breadcrumb')

    <!-- Gallery starts -->
    <div class="gallery pb-6 pt-10">
        <div class="container">
            <div class="row blog-main">

                @foreach ($galleries as $gallery)
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mansonry-item">
                        <div class="gallery-item mb-4">
                            <div class="gallery-image">
                                <img src="{{ $gallery->getFoto() }}" alt="image">
                                <div class="overlay"></div>
                            </div>
                            <div class="gallery-content">
                                <ul>
                                    <li><a href="{{ $gallery->getFoto() }}" data-lightbox="gallery"
                                            data-title="{{ $gallery?->album?->title }} - {{ carbon\carbon::parse($gallery?->created_at)->format('d F Y') }}">
                                            <i class="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
    <!-- Gallery Ends -->
@endsection

@section('scripts')
@endsection
