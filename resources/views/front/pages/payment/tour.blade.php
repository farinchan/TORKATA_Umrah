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
    <meta property="og:url" content="{{ route('payment.index') }}">
    <link rel="canonical" href="{{ route('payment.index') }}">
    <meta property="og:image" content="{{ Storage::url($meta["favicon"]) }}">
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
                                                    Cek status pembayaran Anda dengan memasukkan kode Peserta yang telah
                                                    diberikan oleh kami.
                                                </p>
                                                <input type="text" name="q" class="form-control"
                                                    placeholder="TR-XXXX-XXXX" value="{{ request('q') }}"
                                                    style=" margin-top: 10px; border-radius: 10px; border: 1px solid #e0e0e0;">
                                                @if (request('q'))
                                                    @if (!$jamaah)
                                                        <div class="text-danger"
                                                            style="margin-top: 10px; margin-left: 10px;">
                                                            ID Wisatawan tidak ditemukan
                                                        </div>
                                                    @endif
                                                @endif
                                                <button type="submit" class="btn"
                                                    style="float: right; background-color: #15365F; color: white; width: 100px; margin-top: 10px; border-radius: 10px;"
                                                    onclick="event.preventDefault(); document.getElementById('searchForm').submit();"><i
                                                        class="fa fa-search"></i></button>

                                            </div>
                                            <div class="col-md-4">
                                                <img src="{{ asset('ext_images/tour_payment.png') }}" alt="Cek Pembayaran"
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
                                                <td>ID</td>
                                                <td class="pink">{{ $jamaah->code }}</td>
                                            </tr>
                                            <tr>
                                                <td>Nama</td>
                                                <td class="pink">{{ $jamaah->name }}</td>
                                            </tr>
                                            <tr>
                                                <td>Jenis Kelamin</td>
                                                <td class="pink">{{ $jamaah->gender }}</td>
                                            </tr>
                                            <tr>
                                                <td>Tempat, Tanggal Lahir</td>
                                                <td class="pink">{{ $jamaah->birthplace }}, {{ Carbon\Carbon::parse($jamaah->birthdate)->format('d F Y') }}</td>
                                            </tr>
                                            <tr>
                                                <td>Alamat</td>
                                                <td class="pink">{{ $jamaah->address }}</td>
                                            </tr>
                                            <tr>
                                                <td>No.Telp</td>
                                                <td class="pink">{{ substr($jamaah->phone, 0, 5) . '****' . substr($jamaah->phone, -3) }}</td>
                                            </tr>
                                        </tbody>
                                        <tfoot class="bg-pink">
                                            <tr>
                                                <th class="font-weight-bold white">Paket Umrah</th>
                                                <th class="font-weight-bold white">
                                                    {{ $jamaah->tourSchedule->tourPackage->name }}
                                                    <div style="font-weight: 100; font-size: 14px;">

                                                        jadwal: {{ $jamaah->tourSchedule->name }} <br>
                                                        Tipe paket: {{ $jamaah->package_type }} <br>
                                                    </div>

                                                </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 mt-3">
                        <div class="sidebar-sticky sticky1 tab-sticky">
                            <div class="list-sidebar">
                                <div class="sidebar-item">
                                    <h4>History Pembayaran</h4>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="min-w-100px">Tanggal</th>
                                                <th>Tipe</th>
                                                <th>Jumlah</th>
                                                <th>Bukti</th>
                                                <th>Status</th>
                                                <th>Catatan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($payments as $payment)

                                            <tr>
                                                <td>{{ $payment->created_at->format('d M Y H:i') }}</td>
                                                <td>{{ $payment->type }} </td>
                                                <td>@money($payment->amount)</td>
                                                <td>
                                                    <a href="{{ Storage::url($payment->proof) }}" target="_blank">Lihat
                                                        Bukti</a>
                                                </td>
                                                <td>
                                                    @if ($payment->status == 'pending')
                                                        <span class="badge badge-light-warning">Pending</span>
                                                    @elseif ($payment->status == 'approved')
                                                        <span class="badge badge-light-success">Diterima</span>
                                                    @else
                                                        <span class="badge badge-light-danger">Ditolak</span>
                                                    @endif
                                                </td>
                                                <td>{{ $payment->note?? "-" }}</td>
                                            </tr>
                                            @endforeach
                                        </tbody>
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
