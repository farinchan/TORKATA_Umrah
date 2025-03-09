<!DOCTYPE html>

<html lang="en">
<!--begin::Head-->
@php
    $setting_web = \App\Models\SettingWebsite::first();
@endphp
<head>
    <base href="" />
    <title>{{ $setting_web->name }} </title>
    <meta charset="utf-8" />
    <meta name="description"
        content="
            {{ strip_tags($setting_web->about) }}
        " />
    <meta name="keywords"
        content="
            {{ $setting_web->name }}, admin, administator, dashboard, panel, control,
            panel, admin panel, admin dashboard, admin control panel, admin panel, admin dashboard, admin control panel
        " />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:type" content="article" />
    <meta property="og:title"
        content="{{ $setting_web->name }}" />
    <meta property="og:url" content="{{ url()->current() }}" />
    <meta property="og:site_name" content="{{ $setting_web->name }}" />
    <link rel="canonical" href="{{ url()->current() }}" />
    <link rel="shortcut icon" href="{{ Storage::url($setting_web->favicon) }}" />
    <!--begin::Fonts(mandatory for all pages)-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700" /> <!--end::Fonts-->
    <!--begin::Vendor Stylesheets(used for this page only)-->
    <link href="{{ asset("back/plugins/custom/fullcalendar/fullcalendar.bundle.css")}}" rel="stylesheet" type="text/css" />
    <link href="{{ asset("back/plugins/custom/datatables/datatables.bundle.css")}}" rel="stylesheet" type="text/css" />
    <!--end::Vendor Stylesheets-->
    <!--begin::Global Stylesheets Bundle(mandatory for all pages)-->
    <link href="{{ asset("back/plugins/global/plugins.bundle.css")}}" rel="stylesheet" type="text/css" />
    <link href="{{ asset("back/css/style.bundle.css")}}" rel="stylesheet" type="text/css" />
    @yield('styles')
    <!--end::Global Stylesheets Bundle-->
    <script>
        // Frame-busting to prevent site from being loaded within a frame without permission (click-jacking)
        if (window.top != window.self) {
            window.top.location.replace(window.self.location.href);
        }
    </script>
</head>
<!--end::Head-->
<!--begin::Body-->

<body id="kt_body" class="aside-enabled">
    @include('back/partials/theme-mode/_init')
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            @include('back/layout/aside/_base')
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                @include('back/layout/header/_base')
                <!--begin::Content-->
                <div class="content d-flex flex-column flex-column-fluid " id="kt_content">
                    <!--begin::Post-->
                    <div class="post d-flex flex-column-fluid" id="kt_post">
                        @yield('content')
                    </div>
                    <!--end::Post-->
                </div>
                <!--end::Content-->
                @include('back/layout/_footer')
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::Root-->
    {{-- @include('back/partials/_drawers') --}}
    <!--end::Main-->
    @include('back/partials/_scrolltop')
    <!--begin::Modals-->
    {{-- @include('back/partials/modals/_invite-friends')
    @include('back/partials/modals/users-search/_main') --}}
    <!--end::Modals-->
    <!--begin::Javascript-->
    <script>
        var hostUrl = "assets/";
    </script>
    <!--begin::Global Javascript Bundle(mandatory for all pages)-->
    <script src="{{ asset("back/plugins/global/plugins.bundle.js")}}"></script>
    <script src="{{ asset("back/js/scripts.bundle.js")}}"></script>
    <!--end::Global Javascript Bundle-->
    <!--begin::Vendors Javascript(used for this page only)-->
    <script src="{{ asset("back/plugins/custom/fullcalendar/fullcalendar.bundle.js")}}"></script>
    {{-- <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js"></script> --}}
    <script src="{{ asset("back/plugins/custom/datatables/datatables.bundle.js")}}"></script>
    <!--end::Vendors Javascript-->
    <!--begin::Custom Javascript(used for this page only)-->
    <script src="{{ asset("back/js/widgets.bundle.js")}}"></script>
    <script src="{{ asset("back/js/custom/widgets.js")}}"></script>
    {{-- <script src="{{ asset("back/js/custom/apps/chat/chat.js")}}"></script>
    <script src="{{ asset("back/js/custom/utilities/modals/users-search.js")}}"></script> --}}
    @if (session('error'))
        <script>
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '{{ session('error ') }}',
            });
        </script>
    @endif

    @if (session('success'))
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: '{{ session('success ') }}',
            });
        </script>
    @endif

    @yield('scripts')
    <!--end::Custom Javascript-->
    <!--end::Javascript-->
</body>
<!--end::Body-->

</html>
