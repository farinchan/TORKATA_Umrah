@extends('front.app')

@section('styles')

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
