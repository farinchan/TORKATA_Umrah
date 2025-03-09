<!-- BreadCrumb Starts -->
<section class="breadcrumb-main pb-10" style="background-image: url( {{ asset('front/images/bg/bg8.jpg') }});">
    <div class="breadcrumb-outer pt-0">
        <div class="container">
            <div class="breadcrumb-content d-md-flex align-items-center pt-10">
                <h2 class="mb-0">
                    @isset($title)
                        {{ $title }}
                    @endisset
                </h2>
                <nav aria-label="breadcrumb">
                    <ul class="breadcrumb">
                        @isset($breadcrumbs)
                            @foreach ($breadcrumbs as $breadcrumb)
                                @if (!$loop->last)
                                    <li class="breadcrumb-item ">
                                        @if ($breadcrumb['link'])
                                            <a class="pink" href="{{ $breadcrumb['link'] }}">{{ $breadcrumb['name'] }}</a>
                                        @else
                                            {{ $breadcrumb['name'] }}
                                        @endif
                                    </li>
                                @else
                                    <li class="breadcrumb-item active" aria-current="page" style="color: white;">
                                        {{ $breadcrumb['name'] }}
                                    </li>
                                @endif
                            @endforeach
                            {{-- <li class="breadcrumb-item active" aria-current="page">Blog Single</li> --}}
                        @endisset
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="dot-overlay"></div>
</section>
<!-- BreadCrumb Ends -->
