@extends('front.app')

@section('styles')
@endsection

@section('content')
    @include('front.partials.breadcrumb')
    <!-- blog starts -->
    <section class="blog trending destination-b pb-6">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-3">
                    <div class="sidebar-sticky sticky1 tab-sticky">

                        <div class="list-sidebar" style="border: 1px solid #e0e0e0;  border-radius: 10px;">
                            <div class="sidebar-item">
                                <h4>Cek Pembayaran</h4>
                                <div class="search-box">

                                    <form action="#" method="GET" id="searchForm">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <p style=" width: 70%; margin-top: 10px;">
                                                    Cek status pembayaran Anda dengan memasukkan kode jama'ah yang telah
                                                    diberikan oleh kami.
                                                </p>
                                                <input type="text" name="q" class="form-control"
                                                    placeholder="UMR-XXXX-XXXX" value="{{ request('q') }}"
                                                    style=" margin-top: 10px; border-radius: 10px; border: 1px solid #e0e0e0;">
                                                @if (request('q'))
                                                    @if (!$jamaah)
                                                        <div class="text-danger"
                                                            style="margin-top: 10px; margin-left: 10px;">
                                                            ID Jamaah tidak ditemukan
                                                        </div>
                                                    @endif
                                                @endif
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
                @if ($jamaah)
                    <div class="col-md-4">
                        <div class="sidebar-sticky sticky1 tab-sticky">
                            <div class="list-sidebar">
                                <div class="sidebar-item" style="justify-content: center; text-align: center;">

                                    <img class="img-thumbnail rounded-circle mb-3" src="{{ $jamaah->getPhoto() }}"
                                        alt="Jamaah" style="width: 60%; height: 60%; object-fit: cover;">

                                    <div>
                                        <h3 class="mb-1"><a href="#">{{ $jamaah->name }}</a>
                                        </h3>
                                        <p class="">ID.
                                            {{ $jamaah->id }}-{{ $jamaah->created_at->format('mY') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="sidebar-sticky sticky1 tab-sticky">
                            <div class="list-sidebar">
                                <div class="sidebar-item">
                                    <h4>Data Jamaah</h4>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td> Price</td>
                                                <td class="pink">$580.00</td>
                                            </tr>
                                            <tr>
                                                <td>Number of Travellers</td>
                                                <td class="pink">1</td>
                                            </tr>
                                            <tr>
                                                <td>Infant Price</td>
                                                <td class="pink">$0.00</td>
                                            </tr>
                                            <tr>
                                                <td>Subtotal</td>
                                                <td class="pink">$580.00</td>
                                            </tr>
                                            <tr>
                                                <td>Total</td>
                                                <td class="pink">$580.00</td>
                                            </tr>
                                            <tr>
                                                <td>Tax &amp; fee</td>
                                                <td class="pink">0</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="bg-pink">
                                            <tr>
                                                <th class="font-weight-bold white">Amount</th>
                                                <th class="font-weight-bold white">$580.00</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>
    <!-- blog Ends -->
@endsection

@section('scripts')
    <script src="{{ asset('front/js/jpanelmenu.min.js') }}"></script>
    <script src="{{ asset('front/js/dashboard-custom.js') }}"></script>
@endsection
