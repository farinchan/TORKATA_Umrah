@extends('front.app')

@section('styles')

@endsection

@section('seo')
    <title>{{ $title }}</title>
    <meta name="description" content="{{ $meta["description"] }}">
    <meta name="keywords" content="{{ $meta["keywords"] }}">
    <meta name="author" content="PT. Torkata Jaya Persada">

    <meta property="og:title" content="{{ $meta["title"] }}">
    <meta property="og:description" content="{{ $meta["description"] }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ route('tour.index') }}">
    <link rel="canonical" href="{{ route('tour.index') }}">
    <meta property="og:image" content="{{ Storage::url($meta["favicon"]) }}">
@endsection

@section('content')
@include('front.partials.breadcrumb')

    <!-- error section starts -->
    <section class="error overflow-hidden">
        <div class="container">

            <div class="error-content text-center">
                <h3>Cooming Soon</h3>
                <img src="{{ asset("front/images/404.svg") }}" alt="" class="mb-4">
                <h3 class="mb-0 navy">
                    We are working on it and we will be back soon
                </h3>
                <div class="error-btn mt-4">
                    <a href="{{ route("home") }}" class="nir-btn mr-2">Kembali ke Home</a>
                </div>
            </div>
        </div>
    </section>
    <!-- error section Ends -->
@endsection

@section('scripts')
@endsection
