@extends('front.app')

@section('styles')
    <!--ashboard CSS-->
    <link href="{{ asset('front/css/dashboard.css') }}" rel="stylesheet" type="text/css">
    <style>
        .form-group input {
            font-weight: bold;
        }

        .form-group textarea {
            font-weight: bold;
        }
    </style>
@endsection

@section('content')
    @include('front.partials.breadcrumb')

    <!-- Dashboard -->
    <div id="dashboard" class="pt-10 pb-10">
        <div class="container">
            <div class="dashboard-main">
                <div class="row">
                    <div class="col-md-4">
                        <div class="dashboard-sidebar">
                            <div class="profile-sec">
                                <div class="author-news mb-3">
                                    <div class="author-news-content text-center p-3">
                                        <div class="author-thumb mt-0">
                                            <img src="{{ $agent->getPhoto() }}" alt="author">
                                        </div>
                                        <div class="author-content pt-2 p-0">
                                            <h3 class="mb-1 white"><a href="#" class="white">{{ $agent->name }}</a>
                                            </h3>
                                            <p class="white">ID. {{ $agent->id }}-{{ $agent->created_at->format('mY') }}
                                            </p>


                                            {{-- <div class="header-social mt-2">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                </ul>
                                            </div> --}}
                                        </div>
                                    </div>
                                    <div class="dot-overlay"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="dashboard-content">
                            <div class="dashboard-form mb-4">
                                <div class="row">

                                    <!-- Profile -->
                                    <div class="col-md-12">
                                        <div class="dashboard-list">
                                            <h4 class="gray">Profile Details</h4>
                                            <div class="dashboard-list-static">

                                                <!-- Details -->
                                                <div class="my-profile">
                                                    <div class="form-group">
                                                        <label>ID Agen</label>
                                                        <input type="text"
                                                            value="{{ $agent->id }}-{{ $agent->created_at->format('mY') }}"
                                                            readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Nama</label>
                                                        <input type="text" value="{{ $agent->name }}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>No. Telp</label>
                                                        <input type="text" value="{{ $agent->phone }}" readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Email </label>
                                                        <input type="email" value="{{ $agent->email }}" readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Address *</label>
                                                        <textarea readonly>{{ $agent->address }}</textarea>
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
            <!-- Content / End -->
        </div>
    </div>
    <!-- Dashboard / End -->
@endsection

@section('scripts')
    <script src="{{ asset('front/js/jpanelmenu.min.js') }}"></script>
    <script src="{{ asset('front/js/dashboard-custom.js') }}"></script>
@endsection
