@extends('back.app')
@section('content')
    <div id="kt_content_container" class=" container-xxl ">
        <div class="card card-flush mb-10">
            <div class="card-header py-5">
                <h3 class="card-title fw-bold text-gray-800">Dompet Saya</h3>
                <div class="card-toolbar">
                    <a href="#" class="btn btn-light-primary">Ajukan Penarikan</a>
                </div>
            </div>
            <div class="card-body justify-content-between flex-column ">
                <div class="d-flex flex-wrap d-grid gap-5 px-9 mb-5">
                    <div class="me-md-2">
                        <div class="d-flex mb-2">
                            <span class="fs-4 fw-semibold text-gray-500 me-1">Rp.</span>
                            <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                {{ number_format(Auth::user()->balance, 0, ',', '.') }}
                            </span>
                        </div>
                        <span class="fs-6 fw-semibold text-gray-500">Saldo Saya</span>
                    </div>
                    <div
                        class="border-start-dashed border-end-dashed border-start border-end border-gray-300 px-5 ps-md-10 pe-md-7 me-md-5">
                        <div class="d-flex mb-2">
                            <span class="fs-4 fw-semibold text-gray-500 me-1">Rp.</span>
                            <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                {{ number_format(Auth::user()->transactions->where('type', 'deposit')->where('confirmed', 1)->where('created_at', '>=', now()->startOfYear())->sum('amount'),0,',','.') }}
                        </div>
                        <span class="fs-6 fw-semibold text-gray-500">Pendapatan Tahun Ini</span>
                    </div>
                    <div class="m-0">
                        <div class="d-flex align-items-center mb-2">
                            <span class="fs-4 fw-semibold text-gray-500 align-self-start me-1">Rp.</span>
                            <span class="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                {{ number_format(Auth::user()->transactions->where('type', 'deposit')->where('confirmed', 1)->sum('amount'), 0, ',', '.') }}</span>
                            <span class="badge badge-light-success fs-base">
                                <i class="ki-duotone ki-black-up fs-7 text-success ms-n1"></i>
                                {{ ((Auth::user()->transactions->where('type', 'deposit')->where('confirmed', 1)->where('created_at', '>=', now()->startOfYear())->sum('amount') ??0) /(Auth::user()->transactions->where('type', 'deposit')->where('confirmed', 1)->sum('amount') ?? 0)) *100 }}%</span>
                        </div>
                        <span class="fs-6 fw-semibold text-gray-500">Total Pendapatan</span>
                    </div>
                </div>
                <div id="wallet_chart" class="min-h-auto ps-4 pe-6" data-kt-chart-info="Revenue" style="height: 300px">
                    {{-- <div id="wallet_chart2" class="min-h-auto ps-4 pe-6" data-kt-chart-info="Revenue" style="height: 300px"> --}}
                </div>
            </div>
        </div>
        <div class="card card-flush ">
            <div class="card-header py-5">
                <h3 class="card-title fw-bold text-gray-800">History Transaksi</h3>

            </div>
            <div class="card-body ">
                <table id="kt_datatable_vertical_scroll" class="table table-striped table-row-bordered gy-5 gs-7">
                    <thead>
                        <tr class="fw-semibold fs-6 text-gray-800">
                            <th class="pe-7">Tanggal</th>
                            <th>Tipe</th>
                            <th>Jumlah</th>
                            <th>Deskripsi</th>
                            <th>Lampiran</th>
                            <th>Confirm</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 fw-semibold fs-6">

                        @foreach ($transactions as $transaction)
                            <tr>
                                <td>{{ $transaction->created_at->format('d-m-Y H:i') }}</td>
                                <td>
                                    @if ($transaction->type == 'deposit')
                                        <span class="badge badge-light-primary">Deposit</span>
                                    @else
                                        <span class="badge badge-light-info">Withdraw</span>
                                    @endif
                                </td>
                                <td>
                                    @if ($transaction->type == 'deposit')
                                        <span class="text-success">+Rp.
                                            {{ number_format($transaction->amount, 0, ',', '.') }}</span>
                                    @else
                                        <span class="text-danger">-Rp.
                                            {{ number_format($transaction->amount, 0, ',', '.') }}</span>
                                    @endif
                                </td>
                                <td>{{ $transaction->meta['description'] ?? '-' }}</td>
                                <td>
                                    @if ($transaction->meta['file'] ?? false)
                                        <a href="{{ asset('storage/' . $transaction->meta['file']) }}" target="_blank"
                                            class="btn btn-light-primary">Lihat</a>
                                    @else
                                        -
                                    @endif
                                <td>
                                    @if ($transaction->confirmed == 1)
                                        <span class="badge badge-light-success">Confirmed</span>
                                    @else
                                        <span class="badge badge-light-danger">Pending</span>
                                    @endif
                                </td>
                            </tr>
                        @endforeach


                    </tbody>
                    <tfoot>
                        <tr class="border-top fw-semibold fs-6 text-gray-800">
                            <th class="pe-7">Tanggal</th>
                            <th>Tipe</th>
                            <th>Jumlah</th>
                            <th>Meta</th>
                            <th>Confirm</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    </div>
@endsection
@section('scripts')
    <script>
        $("#kt_datatable_vertical_scroll").DataTable({
            "scrollY": "500px",
            "scrollCollapse": true,
            "paging": false,
            "dom": "<'table-responsive'tr>",
            "order": [
                [0, "desc"]
            ]
        });
    </script>
    <script>
        var wallet_chart = @json($wallet_chart);
        var wallet_chart2 = @json($wallet_chart2);

        console.log(wallet_chart);
        var element = document.getElementById("wallet_chart");
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = '#6c757d'; // Grey 500
        var borderColor = '#e5eaee'; // Grey 200
        var baseColor = '#8967d0';
        var lightColor = '#d1d9e6';


        var options = {
            series: [{
                name: 'Transaksi',
                data: wallet_chart.map(function(item) {
                    return item.y;
                })
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: wallet_chart.map(function(item) {
                    return item.x;
                }),
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function(val) {
                        return 'Rp. ' + val.toLocaleString('id-ID');
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        var chart = new ApexCharts(element, options);
        chart.render();

        // var element2 = document.getElementById("wallet_chart2");

        // options.series = [{
        //     name: 'Transaksi',
        //     data: wallet_chart2.map(function(item) {
        //         return item.y;
        //     })
        // }];

        // options.xaxis.categories = wallet_chart2.map(function(item) {
        //     return item.x;
        // });

        // options.colors = ['#f66d9b'];
        // options.stroke.colors = ['#f66d9b'];
        // options.stroke.width = 3;
        // options.fill.colors = ['#f66d9b'];

        // var chart = new ApexCharts(element2, options);
        // chart.render();
    </script>
@endsection
