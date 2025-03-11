@extends('front.app')

@section('styles')
    <style>
    </style>
@endsection

@section('content')
    @include('front.partials.breadcrumb')
    <!-- blog starts -->
    <section class="blog blog-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12 col-sm-12">
                    <div class="blog-single">
                        <div class="blog-imagelist mb-3">
                            <img src="{{ $news->getThumbnail() }}" alt="image">
                        </div>
                        <div class="row">
                            <div class="col-lg-2 col-md-2">
                                <div class="date text-center bg-pink p-2">
                                    <h1 class="day mb-0 white">{{ $news->created_at->format('d') }}</h1>
                                    <div class="month white">{{ $news->created_at->format('M Y') }}</div>
                                </div>
                            </div>
                            <div class="col-lg-10 col-md-10">
                                <div class="blog-content mb-4 pt-0">
                                    <h3 class="blog-title"><a href="#" class="yellow">
                                            {{ $news->title }}
                                        </a></h3>
                                    <div class="para-content mb-2">
                                        <span class="mr-2"><a href="#" class="tag pink"><i
                                                    class="fa fa-tag mr-1"></i> {{ $news->category->name }}</a></span>
                                        <span class="mr-2"><a href="#" class="pink"><i
                                                    class="fa fa-user mr-1"></i> {{ $news->user->name }}</a></span>
                                        <span><a href="#" class="pink"><i class="fa fa-comment"></i>
                                                {{ $news->comments->count() }} Komentar</a></span>
                                    </div>
                                    <p>
                                        {!! $news->content !!}
                                    </p>
                                </div>




                                <!-- blog share -->
                                <div
                                    class="blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border">
                                    <div class="blog-share-tag">
                                        <ul class="inline">
                                            <li><strong>Tag:</strong></li>
                                            @php
                                                $tags = explode(',', $news->meta_keywords ?? '');
                                            @endphp
                                            @foreach ($tags ?? [] as $tag)
                                                <li><a href="#">{{ $tag }}</a></li>
                                            @endforeach
                                        </ul>
                                    </div>
                                    <div class="header-social">
                                        <ul>
                                            <li><a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode(Request::fullUrl()) }}"
                                                    title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="https://twitter.com/intent/tweet?url={{ urlencode(Request::fullUrl()) }}"
                                                    title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/shareArticle?mini=true&url={{ urlencode(Request::fullUrl()) }}"
                                                    title="Linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
                                            </li>
                                            <li><a href="https://wa.me/?text={{ urlencode(Request::fullUrl()) }}"
                                                    title="Whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- author detail -->
                        <div class="blog-author mb-4 bg-grey border">
                            <div class="blog-author-item">
                                <div class="row d-flex justify-content-between align-items-center">
                                    <div class="col-md-3 col-sm-3 col-xs-12">
                                        <div class="blog-thumb text-center">
                                            <img src="{{ $news->user->getPhoto() }}" alt="image">
                                        </div>
                                    </div>
                                    <div class="col-md-9 col-sm-9 col-xs-12">
                                        <h3 class="title pink"><a href="#">{{ $news->user->name }}</a></h3>
                                        </a></h3>
                                        {{-- <p class="m-0">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                            sceler neque in euismod. Nam vitae urnasodales neque in faucibus.
                                        </p> --}}
                                    </div>

                                </div>
                            </div>
                        </div>

                        <!-- blog next prev -->
                        <div class="blog-next mb-4">
                            @if ($prev_news)
                                <a href="{{ route('news.show', $prev_news->slug) }}" class="float-left">
                                    <div class="prev pl-4">
                                        <i class="fa fa-arrow-left white"></i>
                                        <p class="m-0 white">Artikel Sebelumnya</p>
                                        <p class="m-0 white">{{ $prev_news->title }}</p>
                                    </div>
                                </a>
                            @else
                                <a href="#" class="float-left bg-grey">
                                    <div class="prev pl-4 text-left">
                                        <p class="m-0">Artikel Sebelumnya tidak ada </p>
                                        <p class="m-0 white">&nbsp;</p>
                                    </div>
                                </a>
                            @endif
                            @if ($next_news)
                                <a href="{{ route('news.show', $next_news->slug) }}" class="float-right">
                                    <div class="next pr-4 text-right">
                                        <i class="fa fa-arrow-right"></i>
                                        <p class="m-0">Artikel Selanjutnya</p>
                                        <p class="m-0">{{ $next_news->title }}</p>
                                    </div>
                                </a>
                            @else
                                <a href="#" class="float-right bg-grey">
                                    <div class="next pr-4 text-right">
                                        <p class="m-0">Artikel Selanjutnya tidak ada</p>
                                        <p class="m-0 white">&nbsp;</p>
                                    </div>
                                </a>
                            @endif

                        </div>

                        @if ($news->comments->count() > 0)
                            <!-- blog comment list -->
                            <div class="single-comments single-box mb-4">
                                <h4 class="mb-4">Menampilkan {{ $news->comments->count() }} Komentar </h4>
                                @foreach ($news->comments as $comment)
                                    <div class="comment-box">
                                        <div class="comment-image mt-2">
                                            <img src="https://api.dicebear.com/9.x/bottts/png?seed={{ $comment->name }}"
                                                alt="image">
                                        </div>
                                        <div class="comment-content">
                                            <h4 class="mb-1 Soldman Kell"> {{ $comment->name }}</h4>
                                            <p class="comment-date">{{ $comment->created_at->format('d M Y H:i') }}</p>

                                            <p class="comment">
                                                {{ $comment->comment }}
                                            </p>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        @endif

                        <!-- blog review -->
                        <div class="single-add-review">
                            <h4 class="">Tulis Sebuah Komentar</h4>
                            <form action="{{ route('news.comment', $news->slug) }}" method="POST" id="comment-form">
                                @csrf
                                <div class="row">
                                    <input type="hidden" name="news_id" value="{{ $news->id }}">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" placeholder="Nama" value="{{ old('name') }}"
                                                name="name" required>
                                            @error('name')
                                                <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" placeholder="Email" name="email"
                                                value="{{ old('email') }}">
                                            @error('email')
                                                <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <textarea placeholder="Type your comments...." name="comment">{{ old('comment') }}</textarea>
                                            @error('comment')
                                                <span class="text-danger">{{ $message }}</span>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-btn">
                                            <button type="submit" class="nir-btn"
                                                onclick="event.preventDefault(); document.getElementById('comment-form').submit();">Posting</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
                                                <input type="text" name="q" class="form-control"
                                                    placeholder="Cari" value="{{ request()->q }}">
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
      $.ajax({
        url: "{{ route('news.visit') }}",
        data: {
            news_id: {{ $news->id }}
        },
        type: "GET",
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log(error);
        }
    });
</script>
@endsection
