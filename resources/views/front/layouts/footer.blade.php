    <!-- Newsletter Starts -->
    <section class="newsletter-area m-0 pb-5 pt-5 bg-navy">
        <div class="container">
            <div class="newsletter-main">
                <div class="newsletter-wrapper">
                    <div class="row d-flex align-items-center justify-content-between">
                        <div class="col-lg-5">
                            <div class="newsletter-content-wrapper d-sm-flex align-items-center">
                                <div class="newsletter-icon">
                                    <i class="fa fa-envelope-open white"></i>
                                </div>
                                <div class="newsletter-content ml-4">
                                    <h3 class="title white mb-1">Dapatkan Penawaran <span>eksklusif</span> </h3>
                                    <p class="m-0 white">
                                        Berlangganan newsletter kami untuk mendapatkan penawaran eksklusif kepada Anda.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="newsletter-form">
                                <form action="#">
                                    <input type="text" placeholder="Masukkan email anda...">
                                    <button class="nir-btn">subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Newsletter Ends -->
    <!-- footer starts -->
    <footer class="pt-10" style="background-image:url(images/bg/bg3.jpg);">
        <div class="footer-upper pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-4">
                        <div class="footer-about">
                            <img src="images/logo-white.png" alt="">
                            <p class="mt-3 mb-3">
                                {{ Str::limit($setting_web->getAboutRaw(), 150) }}
                            </p>
                            <div class="social-links">
                                <ul>
                                    <li><a href="{{ $setting_web->facebook ?? '#' }}"><i class="fab fa-facebook"
                                                aria-hidden="true"></i></a></li>
                                    <li><a href="{{ $setting_web->instagram ?? '#' }}"><i class="fab fa-instagram"
                                                aria-hidden="true"></i></a></li>
                                    <li><a href="{{ $setting_web->tiktok ?? '#' }}"><i class="fab fa-tiktok"
                                                aria-hidden="true"></i></a></li>
                                    <li><a href="{{ $setting_web->linkedin ?? '#' }}"><i class="fab fa-linkedin"
                                                aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 mb-4">
                        <div class="footer-links text-center">
                            <ul class="list">
                                <li>
                                    <a href="#">Umrah</a>
                                </li>
                                <li>
                                    <a href="#">Tour</a>
                                </li>
                                <li>
                                    <a href="#">Berita</a>
                                </li>
                                <li>
                                    <a href="#">Agen</a>
                                </li>
                                <li>
                                    <a href="#">Tentang</a>
                                </li>
                                <li>
                                    <a href="#">Kontak</a>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="footer-listing-main d-lg-flex align-items-center justify-content-between mt-4 text-center">
                            <div class="footer-listing white">
                                <i class="fa fa-map-marked white mb-1"></i>
                                <p class="white mb-0">{{ $setting_web->address }}</p>
                            </div>
                            <div class="footer-listing">
                                <i class="fa fa-fax white mb-1"></i>
                                <p class="white mb-0">phone/wa: {{ $setting_web->phone }}</p>
                                {{-- <p class="white mb-0">Fax: +47-252-254-2542</p> --}}
                            </div>
                            <div class="footer-listing">
                                <i class="fa fa-headphones white mb-1"></i>
                                <p class="white mb-0">{{ $setting_web->email }}</p>
                                {{-- <p class="white mb-0">info@Yatriiworld.com</p> --}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright pt-2 pb-2">
            <div class="container">
                <div class="copyright-inner">
                    <div class="copyright-text text-center">
                        <p class="m-0 white">{{ date('Y') }} © {{ $setting_web->name }}.
                            All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="dot-overlay"></div>
    </footer>
    <!-- footer ends -->
