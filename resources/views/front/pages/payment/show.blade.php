@extends('front.app')

@section('styles')
@endsection

@section('content')
    @include('front.partials.breadcrumb')
    <!-- blog starts -->
    <section class="blog trending destination-b pb-6">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="sidebar-sticky sticky1 tab-sticky">

                        <div class="list-sidebar" style="border: 1px solid #e0e0e0;  border-radius: 10px;">
                            <div class="sidebar-item">
                                <h4>Cek Pembayaran</h4>
                                <div class="search-box">

                                    <form action="{{ route('payment.show', $code) }}" method="post" id="searchForm">
                                        @csrf
                                        <div class="row">
                                            <div class="col-md-8">
                                                <p style=" width: 70%; margin-top: 10px;">
                                                    Cek status pembayaran Anda dengan memasukkan kode jama'ah yang telah
                                                    diberikan oleh kami.
                                                </p>
                                                <input type="text" name="q" class="form-control"
                                                    placeholder="UMR-XXXX-XXXX"
                                                    style=" margin-top: 10px; border-radius: 10px; border: 1px solid #e0e0e0;">
                                                <button type="submit" class="btn"
                                                    style="float: right; background-color: #15365F; color: white; width: 100px; margin-top: 10px; border-radius: 10px;"
                                                    onclick="event.preventDefault(); document.getElementById('searchForm').submit();"><i
                                                        class="fa fa-search"></i></button>
                                            </div>
                                            <div class="col-md-4">
                                                <img src="{{ asset('ext_images/kakbah.png') }}" alt="Cek Pembayaran"
                                                    style="width: 100%;">
                                            </div>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog Ends -->

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
                                            <img src="{{ $jamaah->getPhoto() }}" alt="author">
                                        </div>
                                        <div class="author-content pt-2 p-0">
                                            <h3 class="mb-1 white"><a href="#" class="white">{{ $jamaah->name }}</a>
                                            </h3>
                                            <p class="white">ID.
                                                {{ $jamaah->id }}-{{ $jamaah->created_at->format('mY') }}
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
                                                            value="{{ $jamaah->id }}-{{ $jamaah->created_at->format('mY') }}"
                                                            readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Nama</label>
                                                        <input type="text" value="{{ $jamaah->name }}" readonly>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>No. Telp</label>
                                                        <input type="text" value="{{ $jamaah->phone }}" readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Email </label>
                                                        <input type="email" value="{{ $jamaah->email }}" readonly>
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Address *</label>
                                                        <textarea readonly>{{ $jamaah->address }}</textarea>
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
