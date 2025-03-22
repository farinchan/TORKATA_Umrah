<!DOCTYPE html>
<html lang="id">

@php
    $package_type = $jamaah->package_type;
    $package_price = 0;
    if ($package_type == 'quad') {
        $package_price = $jamaah?->umrahSchedule?->quad_price ?? 0;
    } elseif ($package_type == 'triple') {
        $package_price = $jamaah?->umrahSchedule?->triple_price ?? 0;
    } elseif ($package_type == 'double') {
        $package_price = $jamaah?->umrahSchedule?->double_price ?? 0;
    }
@endphp

<head>
    <meta charset="UTF-8">
    <title>Invoice {{ $jamaah->code }}</title>
    <style>
        @page {
            margin: 40px 40px;
        }

        body {
            font-family: 'Helvetica', sans-serif;
            font-size: 12px;
            color: #333;
        }

        .header {
            margin: -40px -40px 0px -40px;
            padding: 20px 40px 0px 40px;
            background-color: #15365F;
            color: #fff;
        }

        .title {
            text-align: right;
            font-size: 16px;
            font-weight: bold;
        }

        .details,
        .summary {
            width: 100%;
            margin-bottom: 20px;
        }

        .details td {
            padding: 4px 0;
        }

        table.items {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table.items th,
        table.items td {
            border-bottom: 1px solid #ddd;
            padding: 8px;
        }

        table.items th {
            text-align: left;
            background-color: #f9f9f9;
        }

        .totals {
            text-align: right;
            width: 100%;
            margin-top: 10px;
        }

        .totals td {
            padding: 4px;
        }

        .footer {
            font-size: 10px;
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
        }
    </style>
</head>

<body>
    <div class="header">
        <table width="100%">
            <tr>
                <td>
                   <img src="{{ public_path('ext_images/logo_long_no_bg.png') }}" alt="" style="width: 350px;">
                </td>
                <td class="title">
                    Invoice {{ $jamaah->code }}<br>
                    <small>Tanggal: {{ date('d F Y') }}</small><br>
                    <small style="font-size: 20px;">
                        @if ($package_price - $payments->sum('amount') - $jamaah->discount <= 0)
                            <span style="color: green;">Lunas</span>
                        @else
                            <span style="color: red;">Belum Lunas</span>
                        @endif
                    </small>
                </td>
            </tr>
        </table>
    </div>
    <img src="{{ public_path('ext_images/wave.svg')  }}" alt="" style="width: 115%; margin: 0px -40px -40px -40px;">

    <table class="details">
        <tr>
            <td>
                <strong>kepada YTH:</strong><br>
                {{ $jamaah->name }}<br>
                {{ $jamaah->phone }}<br>
                {{ $jamaah->address }}
            </td>
            <td style="text-align: right;">
                <strong>Dari:</strong><br>
                {{ $setting->name }}<br>
                PT. Torkata Jaya Persada<br>
                Jl. Sawahan V No.1, Sawahan, Kec. Padang Tim., Kota Padang <br>
                Sumatera Barat 25171 - Indonesia<br>
                Telp. {{ $setting->phone }}<br>
            </td>
        </tr>
    </table>

    <h3>
        Detail Paket Umroh
    </h3>

    <table class="items">
        <thead>
            <tr>
                <th>Nama Paket</th>
                <th>Tipe Paket</th>
                <th>Keberangkatan</th>
                <th>Biaya</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> <strong>{{ $jamaah->umrahSchedule->umrahPackage->name }}</strong><br>
                    {{ $jamaah->umrahSchedule->name }}
                </td>
                <td>{{ $jamaah->package_type }}</td>
                <td>{{ Carbon\Carbon::parse($jamaah->umrahSchedule->departure)->format('d F Y') }}</td>
                <td>
                    {{ 'Rp. ' . number_format($package_price, 2, ',', '.') }}
                </td>
            </tr>
        </tbody>
    </table>
<br>
    <h3>
        Rincian Pembayaran
    </h3>
    <p>
        Berikut adalah rincian pembayaran yang telah dilakukan untuk paket umroh yang dipilih.
    </p>

    <table class="items">
        <thead>
            <tr>
                <th>Tipe Pembayaran</th>
                <th>Metode Pembayaran</th>
                <th>Nama Pembayar</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($payments as $payment)
                <tr>
                    <td>{{ $payment->type }}</td>
                    <td>{{ $payment->payment_method }}</td>
                    <td>{{ $payment->account_name }}</td>
                    <td>{{ 'Rp. ' . number_format($payment->amount, 2, ',', '.') }}</td>
                </tr>
                @empty
                <tr>
                    <td colspan="4" style="text-align: center;">Belum ada pembayaran</td>
                </tr>
            @endforelse
            <tr>
                <td colspan="3" style="border: none; text-align: right;">Subtotal:</td>
                <td style="border: none;"><strong>{{ 'Rp. ' . number_format($payments->sum('amount'), 2, ',', '.') }}</strong></td>
            </tr>
            <tr>
                <td colspan="3" style="border: none; text-align: right;">Diskon:</td>
                <td style="border: none;"><strong>{{ 'Rp. ' . number_format($jamaah->discount, 2, ',', '.') }}</strong></td>
            </tr>
            <tr>
                <td colspan="3" style="border: none; text-align: right;">Sisa Pembayaran:</td>
                <td style="border: none;"><strong>{{ 'Rp. ' . number_format($package_price - $payments->sum('amount') - $jamaah->discount, 2, ',', '.') }}</strong></td>
            </tr>
        </tbody>
    </table>

<div style="right: 0; position: absolute; margin-top: 0px; margin-right: 40px;">
    <div style="text-align: center; margin-top: 50px;">
        <p> Padang, {{ date('d F Y') }}</p>
        <p>Penanggung Jawab,</p>
        <br><br><br>
        <p><strong>{{ $setting->director_name }}</strong></p>
        <p>( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</p>
    </div>
</div>


    <div class="footer">
        <p>
            {{ $setting->name }}<br>
            {{ $setting->address }}<br>
            Telp. {{ $setting->phone }}<br>
            Email: {{ $setting->email }}
        </p>
    </div>
</body>

</html>
