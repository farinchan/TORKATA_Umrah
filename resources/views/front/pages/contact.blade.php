@extends('front.app')

@section('content')

 <!-- contact starts -->
 <section class="contact-main pt-0 contact1 bg-grey">
    <div class="map mb-10">
        <div style="width: 100%">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.0460526010716!2d100.37064499983212!3d-0.9457972130883991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b982c9fe455f%3A0x5061d73acccaf624!2sEmily%20Queen%20Home%20Photo%20Studio!5e0!3m2!1sid!2sid!4v1741505386339!5m2!1sid!2sid" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <div class="container">
        <div class="contact-info">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="contact-info">
                        <h3 class="">INFORMATION ABOUT US</h3>
                        <p class="mb-4">
                            Hubungi kami untuk informasi lebih lanjut tentang layanan kami. Kami akan dengan senang hati membantu Anda.
                        </p>
                        <div class="info-item d-flex align-items-center bg-white mb-3">
                            <div class="info-icon">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="info-content pl-4">
                                <p class="m-0">{{ $setting_web->address }}</p>
                            </div>
                        </div>
                        <div class="info-item d-flex align-items-center bg-white mb-3">
                            <div class="info-icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="info-content pl-4">
                                <p class="m-0">{{ $setting_web->phone }}</p>
                            </div>
                        </div>
                        <div class="info-item d-flex align-items-center bg-white mb-3">
                            <div class="info-icon">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="info-content pl-4">
                                <p class="m-0">{{ $setting_web->email }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div id="contact-form1" class="contact-form">
                        <h3 class="">Ajukan Pertanyaan/Kritik/saran</h3>
                        <p class="mb-4">
                            Kami akan menerima pertanyaan, kritik, saran, dan masukan dari anda. Silahkan isi form di bawah ini.
                        </p>

                        <form method="post" action="{{ route('contact.store') }}" id="contact_form">
                            @csrf
                            <div class="form-group">
                                <input type="text" name="name" class="form-control" id="fname" placeholder="Nama" value="{{ old('name') }}" required>
                                @error('name')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="email" name="email"  class="form-control" id="email" placeholder="Email" value="{{ old('email') }}" required>
                                @error('email')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="text" name="phone" class="form-control" id="phnumber" placeholder="Phone" value="{{ old('phone') }}" required>
                                @error('phone')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" value="{{ old('subject') }}" required>
                                @error('subject')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="textarea">
                                <textarea name="message" placeholder="Enter a message" id="message" required>{{ old('message') }}</textarea>
                                @error('message')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="comment-btn text-right mt-1">
                                <button type="submit" class="nir-btn" value="Send Message" onclick="event.preventDefault(); document.getElementById('contact_form').submit();">
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- contact Ends -->
@endsection

@section('scripts')
@endsection
