@php
    $banner1 = App\Models\SettingBanner::where('status', 1)->find(1) ?? null;
    $banner2 = App\Models\SettingBanner::where('status', 1)->find(2) ?? null;
    $banner3 = App\Models\SettingBanner::where('status', 1)->find(3) ?? null;
@endphp

  <!-- banner starts -->
  <section class="banner overflow-hidden">
    <div class="slider slider1">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                @if($banner1)
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <div class="slide-image" style="background-image:url({{ $banner1?->getImage()?? "" }})"></div>
                            <div class="swiper-content container">
                                <h1 class="white mb-2">{{ $banner1->title }}</h1>
                                <p class="white mb-4">{{ $banner1->subtitle }}</p>
                                <a href="{{ $banner1->url }}" class="per-btn">
                                    <span class="white">Read More</span>
                                    <i class="fa fa-arrow-right white"></i>
                                </a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                @endif
                @if($banner2)
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <div class="slide-image" style="background-image:url({{ $banner2->getImage()?? "" }})"></div>
                            <div class="swiper-content1 container">
                                <h1 class="white mb-2">{{ $banner2->title }}</h1>
                                <p class="white mb-4">{{ $banner2->subtitle }}</p>
                                <a href="{{ $banner2->url }}" class="per-btn">
                                    <span class="white">Read More</span>
                                    <i class="fa fa-arrow-right white"></i>
                                </a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                @endif
                @if($banner3)
                    <div class="swiper-slide">
                        <div class="slide-inner">
                            <div class="slide-image" style="background-image:url({{ $banner3->getImage()?? "" }})"></div>
                            <div class="swiper-content2 container">
                                <h1 class="white mb-2">{{ $banner3->title }}</h1>
                                <p class="white mb-4">{{ $banner3->subtitle }}</p>
                                <a href="{{ $banner3->url }}" class="per-btn">
                                    <span class="white">Read More</span>
                                    <i class="fa fa-arrow-right white"></i>
                                </a>
                            </div>
                            <div class="overlay"></div>
                        </div>
                    </div>
                @endif

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>
<!-- banner ends -->
