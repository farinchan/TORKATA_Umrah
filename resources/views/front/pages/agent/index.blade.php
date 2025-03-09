@extends('front.app')

@section('styles')

@endsection

@section('content')
@include('front.partials.breadcrumb')

<!-- our teams starts -->
<section class="our-team pb-4">
    <div class="container">
        <div class="section-title text-center mb-5 pb-2 w-50 mx-auto">
            <h2 class="m-0"><span> Agen & Pemandu</span> Resmi Kami</h2>
            <p class="mb-0">
                Kami memiliki tim yang profesional dan berpengalaman dalam bidangnya masing-masing. Kami siap
                membantu anda dalam perjalanan umrah dan wisata anda.
            </p>
        </div>
        <div class="team-main">
            <div class="row ">

                @foreach ($agents as $agent)
                    <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div class="team-list">
                            <div class="team-image">
                                <img src="{{ $agent->getPhoto() }}" alt="team">
                            </div>
                            <div class="team-content1 text-center">
                                <h4 class="mb-0 pink"><a href="{{ route('agent.show', $agent->id) }}">{{ $agent->name }}</a></h4>
                                <p class="mb-0">ID. {{ $agent->id }}-{{ $agent->created_at->format('mY') }}</p>
                            </div>

                        </div>
                    </div>
                @endforeach

            </div>
        </div>
    </div>
</section>
<!-- our teams Ends -->
@endsection

@section('scripts')
@endsection
