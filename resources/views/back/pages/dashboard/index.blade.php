@extends('back.app')
@section('content')
    @php
        $setting_web = \App\Models\SettingWebsite::first();
    @endphp
    <!--begin::Container-->
    <div id="kt_content_container" class=" container-xxl ">
        <!--begin::Row-->
        <div class="row g-5 g-xl-8 mb-5">
            <div class="col-xl-12">
                <div class="card border-transparent" data-bs-theme="light" style="background-color: #1C325E;">
                    <div class="card-body d-flex ps-xl-15">
                        <div class="m-0">
                            <div class="position-relative fs-2x z-index-2 fw-bold text-white mb-7">
                                <span class="me-2">
                                    @if (now()->format('H') >= 0 && now()->format('H') < 12)
                                        Selamat Pagi,
                                    @elseif (now()->format('H') >= 12 && now()->format('H') < 15)
                                        Selamat Siang,
                                    @elseif (now()->format('H') >= 15 && now()->format('H') < 18)
                                        Selamat Sore,
                                    @elseif (now()->format('H') >= 18 && now()->format('H') < 24)
                                        Selamat Malam,
                                    @endif
                                    @if (Auth::user()->gender == 'laki-laki')
                                        Bapak
                                    @elseif (Auth::user()->gender == 'perempuan')
                                        Ibu
                                    @endif
                                    <span class="position-relative d-inline-block text-danger">
                                        <a href="#" class="text-danger opacity-75-hover">
                                            {{ Auth::user()->name }}
                                        </a>
                                        <span
                                            class="position-absolute opacity-50 bottom-0 start-0 border-4 border-danger border-bottom w-100"></span>
                                    </span>
                                </span>
                            </div>
                            <div class="row">
                                <div class="col-md-10">
                                    <p class="text-white ">
                                        Selamat datang di sistem aplikasi {{ $setting_web->name }}.
                                        <br>
                                        Dari sini, Anda dapat mengelola data jamaah, memantau pemesanan, mengatur jadwal
                                        keberangkatan, serta mengakses berbagai informasi penting lainnya. Kami berkomitmen
                                        untuk memberikan kemudahan dalam operasional dan layanan kepada calon jamaah,
                                        memastikan pengalaman ibadah yang lebih nyaman dan terorganisir. Mari bersama-sama
                                        wujudkan pelayanan terbaik untuk perjalanan spiritual yang penuh berkah! ✨
                                    </p>
                                </div>
                                <div class="col-md-2">
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                    <img src="https://man1kotapadangpanjang.sch.id/back/media/illustrations/sigma-1/17-dark.png"
                                        class="position-absolute mt-10 me-3 bottom-0 end-0 h-200px" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-5 gx-xl-10 mb-5 mb-xl-10">
            <div class="col-xl-6">
                <div class="card card-flush h-xl-50">
                    <div class="card-header py-5">
                        <h3 class="card-title fw-bold text-gray-800">Monthly Targets</h3>
                        <div class="card-toolbar">
                            <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" class="btn btn-sm btn-light d-flex align-items-center px-4">
                                <div class="text-gray-600 fw-bold">Loading date range...</div>
                                <i class="ki-duotone ki-calendar-8 text-gray-500 lh-0 fs-2 ms-2 me-0">
                                    <span class="path1"></span>
                                    <span class="path2"></span>
                                    <span class="path3"></span>
                                    <span class="path4"></span>
                                    <span class="path5"></span>
                                    <span class="path6"></span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div class="card-body d-flex justify-content-between flex-column pb-0 px-0 pt-1">
                        <div class="d-flex flex-wrap d-grid gap-5 px-9 mb-5">
                            <div class="me-md-2">
                                <div class="d-flex mb-2">
                                    <span class="fs-4 fw-semibold text-gray-500 me-1">$</span>
                                    <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">12,706</span>
                                </div>
                                <span class="fs-6 fw-semibold text-gray-500">Targets for April</span>
                            </div>
                            <div class="border-start-dashed border-end-dashed border-start border-end border-gray-300 px-5 ps-md-10 pe-md-7 me-md-5">
                                <div class="d-flex mb-2">
                                    <span class="fs-4 fw-semibold text-gray-500 me-1">$</span>
                                    <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">8,035</span>
                                </div>
                                <span class="fs-6 fw-semibold text-gray-500">Actual for April</span>
                            </div>
                            <div class="m-0">
                                <div class="d-flex align-items-center mb-2">
                                    <span class="fs-4 fw-semibold text-gray-500 align-self-start me-1">$</span>
                                    <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">4,684</span>
                                    <span class="badge badge-light-success fs-base">
                                    <i class="ki-duotone ki-black-up fs-7 text-success ms-n1"></i>4.5%</span>
                                </div>
                                <span class="fs-6 fw-semibold text-gray-500">GAP</span>
                            </div>
                        </div>
                        <div id="kt_charts_widget_20" class="min-h-auto ps-4 pe-6" data-kt-chart-info="Revenue" style="height: 300px"></div>
                    </div>
                </div>
                <div class="card card-flush h-lg-100">
                    <div class="card-header pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold text-gray-900">Dompet Saya</span>
                        </h3>
                    </div>
                    <div class="card-body">
                        <h1>
                            Saldo: Rp. {{ number_format(Auth::user()->balance, 0, ',', '.') }}
                        </h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card card-flush h-lg-100">
                    <div class="card-header pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold text-gray-900">Riwayat Transaksi</span>
                        </h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            @forelse (Auth::user()->transactions as $transaction)
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                    {{ $transaction->description }}
                                    <span class="badge bg-{{ $transaction->amount > 0 ? 'success' : 'danger' }}">
                                        {{ $transaction->amount > 0 ? '+' : '-' }}Rp. {{ number_format(abs($transaction->amount), 0, ',', '.') }}
                                    </span>
                                </li>
                            @empty
                                <li class="list-group-item text-center">Belum ada transaksi.</li>
                            @endforelse
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-5 gx-xl-10 mb-5 mb-xl-10">
            <div class="col-xl-12">
                <div class="card card-flush h-lg-100">
                    <div class="card-header pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold text-gray-900">Statistik Pengunjung berita sebulan
                                terakhir</span>
                        </h3>
                    </div>
                    <div class="card-body pt-0 px-0">
                        {{-- INI TEMPAT STAT NYA --}}
                        <div id="chart_1" class="px-5"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row g-5 gx-xl-10 mb-5 mb-xl-10">
            <div class="col-xl-6">
                <div class="card card-flush h-lg-100">
                    <div class="card-header pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold text-gray-900">Statistik Pengunjung Berdasarkan Platform
                                OS</span>
                        </h3>
                    </div>
                    <div class="card-body pt-0 px-0">
                        {{-- INI TEMPAT STAT NYA --}}
                        <div id="chart_2" class="px-5"></div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="card card-flush h-lg-100">
                    <div class="card-header pt-5">
                        <h3 class="card-title align-items-start flex-column">
                            <span class="card-label fw-bold text-gray-900">Statistik Pengunjung Berdasarkan Browser</span>
                        </h3>
                    </div>
                    <div class="card-body pt-0 px-0">
                        {{-- INI TEMPAT STAT NYA --}}
                        <div id="chart_3" class="px-5"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end::Container-->
@endsection
@section('scripts')
    <script>
        var chart_1 = new ApexCharts(document.querySelector("#chart_1"), {
            series: [{
                name: 'Pengunjung',
                data: [10]
            }],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Pengunjung',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['x'],
            }
        });
        chart_1.render();
        var chart_2 = new ApexCharts(document.querySelector("#chart_2"), {
            series: [{
                data: []
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: [],
            },
            legend: {
                show: true,
            }
        });
        chart_2.render();
        var chart_3 = new ApexCharts(document.querySelector("#chart_3"), {
            series: [{
                data: []
            }],
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    borderRadiusApplication: 'end',
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: [],
            },
            legend: {
                show: true,
            }
        });
        chart_3.render();
        $.ajax({
            url: "{{ route('back.dashboard.visitor.stat') }}",
            type: "GET",
            success: function(response) {
                console.log(response);
                chart_1.updateSeries([{
                    data: response.visitor_monthly.map(function(item) {
                        return item.total;
                    }).reverse()
                }]);
                chart_1.updateOptions({
                    xaxis: {
                        categories: response.visitor_monthly.map(function(item) {
                            return item.date;
                        }).reverse()
                    }
                });
                chart_2.updateOptions({
                    xaxis: {
                        categories: response.visitor_platfrom.map(function(item) {
                            if (item.platform == '0') {
                                return 'Unknown';
                            } else {
                                return item.platform;
                            }
                        })
                    },
                    series: [{
                        name: 'Jumlah',
                        data: response.visitor_platfrom.map(function(item) {
                            return item.total;
                        })
                    }]
                });
                chart_3.updateOptions({
                    xaxis: {
                        categories: response.visitor_browser.map(function(item) {
                            if (item.browser == '0') {
                                return 'Unknown';
                            } else {
                                return item.browser;
                            }
                        })
                    },
                    series: [{
                        name: 'Jumlah',
                        data: response.visitor_browser.map(function(item) {
                            return item.total;
                        })
                    }]
                });
            }
        });
    </script>
@endsection
