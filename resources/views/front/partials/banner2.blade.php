@php
    $banner1 = App\Models\SettingBanner::where('status', 1)->find(1) ?? null;
    $banner2 = App\Models\SettingBanner::where('status', 1)->find(2) ?? null;
    $banner3 = App\Models\SettingBanner::where('status', 1)->find(3) ?? null;
    $banners = App\Models\SettingBanner::where('status', 1)->get();
@endphp



    <!-- banner starts -->
    <section class="banner overflow-hidden">
        <div class="slider slider1">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    @foreach ($banners as $banner)

                    <div class="swiper-slide">
                        <div class="slide-inner">
                           <div class="slide-image" style="background-image:url({{ $banner->getImage() }})"></div>
                           <div class="swiper-content1 container">
                                <h1 class="white">{{ $banner->title }}</h1>
                                <p class="white mb-4">{{  $banner->subtitle  }}</p>
                                <a href="{{ $banner->url }}" class="per-btn">
                                    <span class="white">Discover</span>
                                    <i class="fa fa-arrow-right white"></i>
                                </a>
                            </div>
                            <div class="dot-overlay"></div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
    <!-- banner ends -->
