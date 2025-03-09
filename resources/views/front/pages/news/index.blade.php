@extends('front.app')

@section('styles')
@endsection

@section('content')
    @include('front.partials.breadcrumb')
    <!-- blog starts -->
    <section class="blog blog-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 float-right">
                    <div class="listing-inner">
                        @isset($category)
                            <div class="list-results d-flex align-items-center justify-content-between">
                                <div class="list-results-sort">
                                    <p class="m-0">Kategori: {{ $category->name ?? 'Semua' }}</p>
                                </div>
                            </div>
                        @endisset
                        @isset(request()->q)
                            <div class="list-results d-flex align-items-center justify-content-between">
                                <div class="list-results-sort">
                                    <p class="m-0">Cari: {{ request()->q }}</p>
                                </div>
                            </div>
                        @endisset
                        @foreach ($news as $item)
                            @if ($loop->iteration % 2 != 0)
                                <div class="blog-full d-flex justify-content-around mb-4">
                                    <div class="row w-100">
                                        <div class="col-lg-5 col-md-4 col-xs-12 blog-height">
                                            <div class="blog-image">
                                                <a href="blog-single.html"
                                                    style="background-image: url({{ $item?->getThumbnail() ?? '-' }});"></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-7 col-md-8 col-xs-12">
                                            <div class="blog-content">
                                                <span class="h-date pink mb-1 font-weight-light d-block">
                                                    {{ $item->created_at?->diffForHumans() }}</span>
                                                <h3 class="mb-2"><a href="{{ route('news.show', $item->slug) }}"
                                                        class=""> {{ $item->title }}</a></h3>
                                                <p class="date-cats mb-0 border-t pt-2 pb-2">
                                                    <a href="{{ route('news.category', $item->category->slug) }}"
                                                        class="mr-2"><i class="fa fa-file"></i>
                                                        {{ $item->category?->name ?? '-' }}
                                                    </a> <a href="#" class=""><i class="fa fa-user"></i> By
                                                        {{ $item->user?->name ?? '-' }}</a>
                                                </p>
                                                <p class="mb-2 border-t pt-2">
                                                    {{ Str::limit(strip_tags($item->content), 100, '...') }}
                                                </p>
                                                <a href="{{ route('news.show', $item->slug) }}"
                                                    class="grey font-weight-light">Baca ini <i
                                                        class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                            @if ($loop->iteration % 2 == 0)
                                <div class="blog-full d-flex justify-content-around mb-4">
                                    <div class="row flex-row-reverse w-100">
                                        <div class="col-lg-5 col-md-4 col-xs-12 blog-height">
                                            <div class="blog-image">
                                                <a href="blog-single.html"
                                                    style="background-image: url({{ $item?->getThumbnail() ?? '-' }});"></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-7 col-md-8 col-xs-12">
                                            <div class="blog-content">
                                                <span class="h-date pink mb-1 font-weight-light d-block">
                                                    {{ $item->created_at?->diffForHumans() }}</span>
                                                <h3 class="mb-2"><a href="{{ route('news.show', $item->slug) }}"
                                                        class=""> {{ $item->title }}</a></h3>
                                                <p class="date-cats mb-0 border-t pt-2 pb-2">
                                                    <a href="{{ route('news.category', $item->category->slug) }}"
                                                        class="mr-2"><i class="fa fa-file"></i>
                                                        {{ $item->category?->name ?? '-' }}
                                                    </a> <a href="#"><i class="fa fa-user"></i> By
                                                        {{ $item->user?->name ?? '-' }}</a>
                                                </p>
                                                <p class="mb-2 border-t pt-2">
                                                    {{ Str::limit(strip_tags($item->content), 100, '...') }}
                                                </p>
                                                <a href="{{ route('news.show', $item->slug) }}"
                                                    class="grey font-weight-light">Baca Ini <i
                                                        class="fa fa-long-arrow-alt-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endforeach




                        <div class="pagination-main text-center">
                            <ul class="pagination">
                                @if ($news->onFirstPage())
                                    <li><a href="#"><i class="fas fa-angle-double-left"></i></a></li>
                                @else
                                    <li><a href="{{ $news->previousPageUrl() }}"><i
                                                class="fas fa-angle-double-left"></i></a></li>
                                @endif
                                @php
                                    $start = max($news->currentPage() - 2, 1);
                                    $end = min($start + 2, $news->lastPage());
                                @endphp
                                @if ($start > 1)
                                    <li class="{{ $news->currentPage() == 1 ? 'active' : '' }}"><a
                                            href="{{ $news->url(1) }}">1</a></li>
                                    <li><a href="#">...</a></li>
                                @endif

                                @foreach ($news->getUrlRange($start, $end) as $page => $url)
                                    <li class="{{ $page == $news->currentPage() ? ' active' : '' }}"><a
                                            href="{{ $url }}">{{ $page }}</a></li>
                                @endforeach

                                @if ($end < $news->lastPage())
                                    <li><a href="#">...</a></li>
                                    <li class="{{ $news->currentPage() == $news->lastPage() ? ' active' : '' }}">
                                        <a href="{{ $news->url($news->lastPage()) }}">{{ $news->lastPage() }}</a>
                                    </li>
                                @endif

                                @if ($news->hasMorePages())
                                    <li><a href="{{ $news->nextPageUrl() }}"><i class="fas fa-angle-double-right"></i></a>
                                    </li>
                                @else
                                    <li><a href="#"><i class="fas fa-angle-double-right"></i></a></li>
                                @endif
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- sidebar starts -->
                <div class="col-lg-4 col-md-12">
                    <div class="sidebar-sticky">
                        <div class="list-sidebar">

                            <div class="sidebar-item mb-4">
                                <h4 class="">Cari</h4>
                                <div class="search-box">
                                    <form action="{{ route('news.index') }}" method="GET" id="searchForm">
                                        <div class="row">
                                            <div class="col-md-10 col-xs-10">

                                                <input type="text" name="q" class="form-control" placeholder="Cari"
                                                    value="{{ request()->q }}">
                                            </div>
                                            <div class="col-md-2 col-xs-2">
                                                <button type="submit" class="btn "
                                                    style="float: right; background-color: #15365F; color: white; height: 100%;"
                                                    onclick="event.preventDefault(); document.getElementById('searchForm').submit();"><i
                                                        class="fa fa-search"></i></button>

                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>

                            <div class="sidebar-item mb-4">
                                <h4 class="">Semua Kategori</h4>
                                <ul class="sidebar-category">
                                    <li><a href="{{ route('news.index') }}">Semua</a></li>
                                    @foreach ($categories as $category)
                                        <li><a
                                                href="{{ route('news.category', $category->slug) }}">{{ $category->name }}</a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>

                            <div class="sidebar-item mb-4">
                                <div class="sidebar-tabs">
                                    <div class="sidebar-navtab text-center">
                                        <ul class="nav nav-tabs">
                                            <li class="active"><a data-toggle="tab" href="#popular"><i
                                                        class="fa fa-check-circle"></i> Poluler </a></li>
                                            <li><a data-toggle="tab" href="#recent"><i class="fa fa-check-circle"></i>
                                                    Terbaru</a></li>
                                        </ul>
                                    </div>

                                    <div class="tab-content">
                                        <div id="popular" class="tab-pane fade in active">
                                            <div class="sidebar-image mb-2 mt-2">
                                                {{-- <a href="blog-single.php"><img src="images/blog/blog3.jpg" alt=""></a> --}}
                                            </div>

                                            @foreach ($news_populars as $news_popular)
                                                <article class="post mb-2">
                                                    <div class="s-content d-flex align-items-center justify-space-between">
                                                        <div class="blog-no">0{{ $loop->iteration }}</div>
                                                        <div class="content-list pl-3">
                                                            <div class="date">
                                                                {{ $news_popular->created_at->format('d M Y') }}</div>
                                                            <h5 class="m-0"><a
                                                                    href="{{ route('news.show', $news_popular->slug) }}">{{ $news_popular->title }}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </article>
                                            @endforeach
                                        </div>

                                        <div id="recent" class="tab-pane fade">
                                            <div class="sidebar-image mb-2 mt-2">
                                                {{-- <a href="blog-single.php"><img src="{{ asset("front/images/blog/blog1.jpg")}}" alt=""></a> --}}
                                            </div>

                                            @foreach ($news_latests as $news_latest)
                                                <article class="post mb-2">
                                                    <div class="s-content d-flex align-items-center justify-space-between">
                                                        <div class="blog-no">0{{ $loop->iteration }}</div>
                                                        <div class="content-list pl-3">
                                                            <div class="date">
                                                                {{ $news_latest->created_at->diffForHumans() }}</div>
                                                            <h5 class="m-0"><a
                                                                    href="{{ route('news.show', $news_latest->slug) }}">{{ $news_latest->title }}</a>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </article>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {{-- <div class="sidebar-item mb-4">
                                <h4 class="">Tags</h4>
                                <ul class="sidebar-tags">
                                    <li><a href="#">Tour</a></li>
                                    <li><a href="#">Rental</a></li>
                                    <li><a href="#">City</a></li>
                                    <li><a href="#">Yatch</a></li>
                                    <li><a href="#">Activity</a></li>
                                    <li><a href="#">Museum</a></li>
                                    <li><a href="#">Beauty</a></li>
                                    <li><a href="#">Classic</a></li>
                                    <li><a href="#">Creative</a></li>
                                    <li><a href="#">Designs</a></li>
                                    <li><a href="#">Featured</a></li>
                                    <li><a href="#">Free Style</a></li>
                                    <li><a href="#">Programs</a></li>
                                    <li><a href="#">Travel</a></li>
                                </ul>
                            </div> --}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- blog Ends -->
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            $('#searchForm').submit(function(e) {
                e.preventDefault();
                let q = $(this).find('input[name=q]').val();
                window.location.href = "{{ route('news.index') }}?q=" + q;
            });
        });
    </script>
@endsection
