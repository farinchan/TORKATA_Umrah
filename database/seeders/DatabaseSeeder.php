<?php

namespace Database\Seeders;

use App\Models\News;
use App\Models\NewsCategory;
use App\Models\NewsComment;
use App\Models\SettingBanner;
use App\Models\SettingWebsite;
use App\Models\Testimonial;
use App\Models\UmrahPackage;
use App\Models\UmrahPackageItinerary;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Role::create(['name' => 'super-admin']);
        Role::create(['name' => 'admin-kantor']);
        Role::create(['name' => 'agen']);

        User::create([
            'name' => 'Inan - Akun Developer',
            'email' => 'fajri@gariskode.com',
            'password' => bcrypt('password'),
        ])->assignRole('super-admin');

        User::factory(10)->create()->each(function ($user) {
            $user->assignRole('agen');
        });

        SettingWebsite::create([
            'name' => 'Torkata Umrah, Tour & Travel',
            'logo' => 'setting/logo.png',
            'favicon' => 'setting/favicon.png',
            'email' => 'umrah@torkata.com',
            'phone' => '081234567890',
            'address' => 'Jl. Sawahan V No. 1, Sawahan, Kec. Padang Timur., Kota Padang, Sumatera Barat 25171 - Indonesia',
            'latitude' => '-0.9456998391935463',
            'longitude' => '100.3708887862257',
            'facebook' => 'https://www.facebook.com',
            'instagram' => 'https://www.instagram.com/torkata_umrah',
            'tiktok' => 'https://www.tiktok.com',
            'linkedin' => 'https://www.linkedin.com/company/',
            'about' => '<p><strong>Torkata Umrah, Tour &amp; Travel </strong>adalah agen perjalanan terpercaya di Kota Padang yang menyediakan layanan ibadah Umrah serta paket wisata halal ke berbagai destinasi. Dengan komitmen tinggi terhadap kenyamanan dan kepuasan pelanggan, kami menawarkan perjalanan yang aman, nyaman, dan berkesan, didukung oleh tim profesional yang berpengalaman. Torkata memastikan setiap jemaah mendapatkan bimbingan ibadah yang maksimal serta fasilitas terbaik untuk pengalaman spiritual yang mendalam. Selain itu, kami juga menghadirkan paket wisata religi dan edukatif yang dirancang khusus untuk memenuhi kebutuhan perjalanan Anda dengan layanan berkualitas dan harga kompetitif.</p>',
        ]);

        SettingBanner::create([
            'title' => 'Umrah Nyaman, Ibadah Khusyuk',
            'subtitle' => 'Wujudkan impian suci ke Baitullah dengan perjalanan Umrah yang nyaman, aman, dan penuh berkah. Dengan bimbingan profesional serta fasilitas terbaik, kami memastikan setiap jemaah mendapatkan pengalaman ibadah yang khusyuk dan berkesan.',
            'image' => 'setting/banner//1740904282_1.png',
            'url' => 'https://www.torkata.com/umrah',
        ]);

        SettingBanner::create([
            'title' => 'Ayo Liburan ke Negeri Bunga Sakura',
            'subtitle' => 'Jelajahi keindahan Jepang dengan perjalanan yang nyaman, aman, dan penuh pengalaman tak terlupakan. Nikmati budaya yang kaya, pemandangan menakjubkan, serta kuliner autentik dalam setiap destinasi yang kami tawarkan.',
            'image' => 'setting/banner//1740904288_2.png',
            'url' => 'https://www.torkata.com/tour',
        ]);

        SettingBanner::create([
            'title' => 'Banner Ke 3',
            'subtitle' => 'Contoh Banner Ke tiga, ukuran bannernya adalah 1880 X 1252',
            'image' => 'setting/banner//1740904295_3.png',
            'url' => 'https://www.torkata.com/tour',
        ]);

        NewsCategory::create([
            'name' => 'Berita Umrah',
            'slug' => 'berita-umrah',
            'description' => 'Kumpulan berita terbaru seputar perjalanan umrah, tips ibadah, dan informasi terkini seputar kegiatan umrah.',
        ]);

        NewsCategory::create([
            'name' => 'Berita Wisata',
            'slug' => 'berita-wisata',
            'description' => 'Kumpulan berita terbaru seputar destinasi wisata, tips perjalanan, dan informasi terkini seputar kegiatan wisata.',
        ]);

        NewsCategory::create([
            'name' => 'Berita Edukasi',
            'slug' => 'berita-edukasi',
            'description' => 'Kumpulan berita terbaru seputar pendidikan, informasi, dan tips edukasi terkini.',
        ]);

        News::create([
            'title' => 'Tren Perjalanan Umrah Mulai Menggeliat',
            'slug' => 'tren-perjalanan-umrah-mulai-menggeliat',
            'content' => '<p>Pasca pandemi Covid-19 terjadi tren kenaikan jumlah jamaah yang mengurus visa umrah. Saat Ramadhan menjadi pilihan bagi jamaah untuk menjalani ibadah umrah tersebut.</p><p>Tren kenaikan ini terlihat dari data yang dikumpulkan oleh Litbang Kompas dari sejumlah sumber yang sebagian besar memang berasal dari komunitas biro perjalanan atau travel tour yang memberikan layanan ibadah haji dan umrah di Indonesia.</p><p>Dalam sepuluh tahun terakhir, data menunjukkan tren peningkatan jumlah jamaah umrah dari Indonesia yang bisa dilihat dari jumlah pengajuan visa umrah ke Kedutaan Arab Saudi.</p><p>Dari data sepuluh tahun terakhir tersebut, menjelang era pandemi Covid-19, yakni periode 2018-2019 tercatat menjadi tahun paling besar jumlah jamaah umrahnya.</p><p>Di periode 2018-2019 yang bertepatan dengan tahun 1439 Hijriah tersebut, jumlah jamaah umrah mencapai 1.005.806. Angka ini melonjak 12,4 persen dari periode tahun sebelumnya (2017-2018).</p><p>Namun, ketika memasuki awal pandemi, sebelum ada kebijakan peniadaan ibadah haji dan umrah dari pemerintah Arab Saudi, jumlah jamaah umrah sudah turun drastis di angka 97.465, yakni di periode 2019-2020 atau bertepatan dengan 1440 Hijriah. Angka tersebut tercatat berkurang hingga 90,3 persen dibandingkan periode 2018-2019.</p><p><br></p>',
            'thumbnail' => 'news/20250309043454_tren-perjalanan-umrah-mulai-menggeliat.png',
            'news_category_id' => 1,
            'user_id' => 1,
            'status' => 'published',
            'meta_title' => 'Tren Perjalanan Umrah Mulai Menggeliat',
            'meta_description' => 'Pasca pandemi Covid-19 terjadi tren kenaikan jumlah jamaah yang mengurus visa umrah. Saat Ramadhan menjadi pilihan bagi jamaah untuk menjalani ibadah umrah tersebut.',
            'meta_keywords' => 'umrah, tren, visa, jamaah',
        ]);

        News::create([
            'title' => 'Perjalanan Umrah di Torkata Umrah: Menyediakan Pengalaman Ibadah yang Nyaman dan Berkesan',
            'slug' => 'perjalanan-umrah-di-torkata-umrah-menyediakan-pengalaman-ibadah-yang-nyaman-dan-berkesan',
            'content' => '<p>Torkata Umrah, agen perjalanan umrah yang terpercaya, kembali hadir dengan berbagai paket umrah yang menawarkan pengalaman ibadah yang nyaman dan berkesan bagi jamaah. Sebagai perusahaan yang berfokus pada pelayanan maksimal untuk para jamaah, Torkata Umrah telah menetapkan standar baru dalam perjalanan umrah, mengutamakan kenyamanan, kepraktisan, dan kualitas ibadah.</p><p><strong>Paket Umrah yang Fleksibel dan Beragam</strong></p><p>Torkata Umrah menawarkan berbagai pilihan paket perjalanan yang dapat disesuaikan dengan kebutuhan dan anggaran setiap jamaah. Salah satu paket unggulan mereka adalah <strong>Paket Umrah 12 Hari</strong>, yang dirancang khusus bagi jamaah yang ingin menjalankan ibadah dengan durasi yang lebih lama namun tetap mengutamakan kenyamanan dan kelancaran perjalanan. Paket ini mencakup perjalanan ke dua kota suci, Mekkah dan Madinah, dengan berbagai fasilitas dan layanan terbaik yang memudahkan jamaah menjalani ibadah mereka.</p><p>Paket ini termasuk akomodasi di hotel-hotel berbintang yang terletak sangat dekat dengan Masjidil Haram dan Masjid Nabawi, sehingga memudahkan jamaah dalam menjalankan ibadah seperti tawaf, sa\'i, dan shalat berjamaah. Selain itu, Torkata Umrah juga menyediakan transportasi yang nyaman dan aman untuk perjalanan jamaah dari satu tempat ke tempat lainnya, baik di Mekkah maupun Madinah.</p><p><strong>Bimbingan Ibadah Profesional dan Terpercaya</strong></p><p>Untuk memastikan ibadah jamaah berjalan dengan lancar, Torkata Umrah menyediakan pembimbing ibadah yang sudah berpengalaman dan ahli dalam melaksanakan umrah. Pembimbing ibadah ini akan memberikan penjelasan yang jelas tentang tata cara ibadah yang benar, serta memberikan bimbingan sepanjang perjalanan untuk membantu jamaah menghindari kesalahan dalam pelaksanaan ibadah.</p><p>Selain itu, Torkata Umrah juga menawarkan program pelatihan ibadah sebelum keberangkatan agar jamaah dapat mempersiapkan diri dengan baik dan memahami dengan jelas setiap langkah yang harus dilakukan selama ibadah umrah.</p><p><strong>Pelayanan Terbaik untuk Kenyamanan Jamaah</strong></p><p>Torkata Umrah sangat memperhatikan kenyamanan jamaah. Untuk itu, mereka menyediakan berbagai fasilitas seperti asuransi perjalanan, layanan pelanggan yang siap membantu 24 jam, dan makanan halal yang terjamin kualitasnya. Semua kebutuhan jamaah, mulai dari penginapan, transportasi, hingga kebutuhan logistik lainnya, telah disiapkan dengan detail agar jamaah dapat menjalankan ibadah tanpa gangguan.</p><p>Selain itu, Torkata Umrah juga menawarkan layanan VIP bagi jamaah yang menginginkan pengalaman lebih eksklusif selama perjalanan umrah. Dengan fasilitas yang lebih lengkap dan layanan khusus, pengalaman ibadah menjadi lebih istimewa dan menyentuh.</p><p><strong>Inovasi dan Teknologi untuk Memudahkan Jamaah</strong></p><p>Torkata Umrah memahami pentingnya kemudahan dalam mengakses informasi terkait perjalanan umrah. Oleh karena itu, mereka menyediakan aplikasi mobile dan situs web yang memungkinkan jamaah untuk mengakses berbagai informasi penting, seperti jadwal keberangkatan, pembaruan perjalanan, serta informasi seputar destinasi yang akan dikunjungi. Jamaah juga bisa menghubungi customer service kapan saja untuk mendapatkan bantuan atau informasi lebih lanjut.</p><p><strong>Pendaftaran dan Informasi Lengkap</strong></p><p>Pendaftaran untuk paket umrah di Torkata Umrah sangat mudah dan dapat dilakukan melalui website resmi mereka. Selain itu, bagi jamaah yang membutuhkan informasi lebih lanjut, customer service siap membantu memberikan penjelasan tentang prosedur pendaftaran, dokumen yang dibutuhkan, serta harga dan fasilitas yang ditawarkan.</p><p>Torkata Umrah berkomitmen untuk membantu jamaah merasakan perjalanan umrah yang tidak hanya menguntungkan secara spiritual, tetapi juga memberikan kenyamanan dan kepuasan selama perjalanan. Dengan pelayanan yang tulus dan pengalaman ibadah yang mendalam, Torkata Umrah memastikan setiap jamaah dapat merasakan kedamaian batin yang luar biasa di Tanah Suci.</p>',
            'thumbnail' => 'news/20250309043918_perjalanan-umrah-di-torkata-umrah-menyediakan-pengalaman-ibadah-yang-nyaman-dan-berkesan.jpg',
            'news_category_id' => 1,
            'user_id' => 1,
            'status' => 'published',
            'meta_title' => 'Perjalanan Umrah di Torkata Umrah: Menyediakan Pengalaman Ibadah yang Nyaman dan Berkesan',
            'meta_description' => 'Torkata Umrah, agen perjalanan umrah yang terpercaya, kembali hadir dengan berbagai paket umrah yang menawarkan pengalaman ibadah yang nyaman dan berkesan bagi jamaah.',
            'meta_keywords' => 'umrah, torkata, perjalanan, ibadah',
        ]);

        News::create([
            'title' => 'Tips Aman dan Nyaman Saat Melakukan Perjalanan Umrah',
            'slug' => 'tips-aman-dan-nyaman-saat-melakukan-perjalanan-umrah',
            'content' => '<p>Perjalanan umrah adalah momen yang sangat dinanti-nantikan oleh umat Islam. Namun, perjalanan ini juga memerlukan persiapan yang matang agar jamaah dapat menjalankan ibadah dengan tenang dan khusyuk. Berikut adalah beberapa tips aman dan nyaman saat melakukan perjalanan umrah:</p><p><strong>1. Persiapkan Dokumen dengan Baik</strong></p><p>Persiapkan dokumen-dokumen yang diperlukan untuk perjalanan umrah, seperti paspor, visa, tiket pesawat, dan dokumen lainnya. Pastikan semua dokumen tersebut sudah lengkap dan masih berlaku untuk menghindari masalah di kemudian hari.</p><p><strong>2. Bawa Perlengkapan yang Dibutuhkan</strong></p><p>Bawa perlengkapan ibadah umrah yang diperlukan, seperti pakaian ihram, sajadah, mukena, dan perlengkapan lainnya. Pastikan juga untuk membawa obat-obatan pribadi dan perlengkapan kesehatan yang diperlukan.</p><p><strong>3. Ikuti Protokol Kesehatan</strong></p><p>Saat ini, pandemi Covid-19 masih berlangsung, sehingga penting untuk tetap mematuhi protokol kesehatan yang berlaku. Gunakan masker, jaga jarak, dan cuci tangan secara teratur untuk mencegah penularan virus.</p><p><strong>4. Patuhi Aturan dan Tata Tertib</strong></p><p>Selama perjalanan umrah, patuhi aturan dan tata tertib yang berlaku di Tanah Suci. Ikuti petunjuk dari pembimbing ibadah dan petugas yang bertugas untuk menjaga ketertiban dan keamanan selama perjalanan.</p><p><strong>5.
            Jaga Kesehatan dan Kebugaran</strong></p><p>Perjalanan umrah membutuhkan fisik yang kuat dan kesehatan yang prima. Jaga kesehatan dan kebugaran dengan makan makanan bergizi, minum air yang cukup, dan istirahat yang cukup selama perjalanan.</p><p><strong>6. Tetap Tenang dan Sabar</strong></p><p>Perjalanan umrah mungkin akan menghadapi berbagai tantangan dan hambatan. Tetap tenang dan sabar dalam menghadapi setiap situasi, dan percayakan segala urusan kepada Allah SWT.</p><p>Dengan mempersiapkan diri dengan baik dan mengikuti tips-tips di atas, diharapkan perjalanan umrah Anda akan berjalan dengan lancar dan penuh berkah. Semoga ibadah umrah Anda diterima oleh Allah SWT dan menjadi pengalaman spiritual yang mendalam.</p>',
            'thumbnail' => 'setting/banner//1740904295_3.png',
            'news_category_id' => 1,
            'user_id' => 1,
            'status' => 'published',
            'meta_title' => 'Tips Aman dan Nyaman Saat Melakukan Perjalanan Umrah',
            'meta_description' => 'Perjalanan umrah adalah momen yang sangat dinanti-nantikan oleh umat Islam. Namun, perjalanan ini juga memerlukan persiapan yang matang agar jamaah dapat menjalankan ibadah dengan tenang dan khusyuk.',
            'meta_keywords' => 'umrah, tips, aman, nyaman',
        ]);

        News::create([
            'title' => 'Destinasi Wisata Terbaik di Jepang yang Wajib Dikunjungi',
            'slug' => 'destinasi-wisata-terbaik-di-jepang-yang-wajib-dikunjungi',
            'content' => '<p>Jepang adalah salah satu destinasi wisata terpopuler di dunia yang menawarkan berbagai atraksi menarik dan budaya yang kaya. Dari kota-kota modern hingga pedesaan yang indah, Jepang memiliki banyak tempat yang patut dikunjungi. Berikut adalah beberapa destinasi wisata terbaik di Jepang yang wajib Anda kunjungi:</p><p><strong>1. Tokyo</strong></p><p>Sebagai ibu kota Jepang, Tokyo adalah kota yang penuh dengan kehidupan dan kegiatan. Di sini Anda dapat menikmati berbagai atr
            aksi seperti Menara Tokyo, Kuil Sensoji, dan Taman Ueno. Jangan lupa untuk mencoba makanan khas Jepang di restoran-restoran terkenal di kota ini.</p><p><strong>2. Kyoto</strong></p><p>Kyoto adalah kota yang kaya akan sejarah dan budaya Jepang. Di sini Anda dapat mengunjungi Kuil Kinkakuji, Kuil Kiyomizu-dera, dan Istana Nijo. Jangan lewatkan pula untuk mengunjungi Hutan Bambu Arashiyama yang indah.</p><p><strong>3. Osaka</strong></p><p>Osaka adalah kota yang terkenal dengan
            kehidupan malamnya yang ramai dan makanan lezatnya. Di sini Anda dapat mengunjungi Istana Osaka, Universal Studios Japan, dan Kuil Sumiyoshi Taisha.</p><p><strong>4. Hokkaido</strong></p><p>Hokkaido adalah pulau terbesar di Jepang yang terkenal dengan alamnya yang indah. Di sini Anda dapat menikmati pemandangan gunung berapi, danau, dan taman nasional yang menakjubkan. Jangan lewatkan pula untuk mencoba makanan laut segar di kota-kota pesisir Hokkaido.</p><p
            ><strong>5. Okinawa</strong></p><p>Okinawa adalah pulau tropis di Jepang yang terkenal dengan pantainya yang indah dan kehidupan lautnya yang kaya. Di sini Anda dapat melakukan berbagai aktivitas seperti menyelam, snorkeling, dan bersantai di pantai-pantai yang eksotis.</p><p><strong>6. Hiroshima</strong></p><p>Hiroshima adalah kota yang terkenal dengan sejarahnya yang tragis. Di sini Anda dapat mengunjungi Taman Memorial Perdamaian Hiroshima, Istana Hiroshima, dan Pulau Miyajima yang indah.</p><p>Itulah beberapa destinasi wisata terbaik di Jepang yang wajib Anda kunjungi. Dengan keindahan alamnya, kekayaan budayanya, dan keramahan penduduknya, Jepang akan memberikan pengalaman wisata yang tak terlupakan bagi Anda.</p>',
            'thumbnail' => 'setting/banner//1740904295_3.png',
            'news_category_id' => 2,
            'user_id' => 1,
            'status' => 'published',
            'meta_title' => 'Destinasi Wisata Terbaik di Jepang yang Wajib Dikunjungi',
            'meta_description' => 'Jepang adalah salah satu destinasi wisata terpopuler di dunia yang menawarkan berbagai atraksi menarik dan budaya yang kaya. Dari kota-kota modern hingga pedesaan yang indah, Jepang memiliki banyak tempat yang patut dikunjungi.',
            'meta_keywords' => 'jepang, wisata, destinasi, terbaik',
        ]);

        NewsComment::create([
            'news_id' => 1,
            'name' => 'Fajri Rinaldi Chan',
            'email' => 'fajri@gariskode.com',
            'comment' => 'Artikel yang sangat menarik, terima kasih atas informasinya.',
            'status' => 'approved',
        ]);



        UmrahPackage::create([
            'banner' => 'umrah/banner/1741407706.jpg',
            'name' => 'Paket Umrah Reguler 12 Hari',
            'slug' => 'paket-umrah-reguler-12-hari',
            'description' => '<p>Paket Umrah 12 Hari kami dirancang untuk memberikan pengalaman ibadah yang nyaman, khusyuk, dan penuh berkah. Dengan keberangkatan yang telah dijadwalkan, perjalanan ini mencakup kunjungan ke kota suci Makkah dan Madinah, serta ziarah ke berbagai tempat bersejarah seperti Masjid Nabawi, Raudhah, Jabal Nur, Jabal Rahmah, dan lainnya. Selama 12 hari, jamaah akan mendapatkan fasilitas terbaik, termasuk tiket pesawat pulang-pergi, akomodasi hotel yang nyaman dan dekat dengan Masjidil Haram serta Masjid Nabawi, transportasi full AC, makan tiga kali sehari dengan menu khas Nusantara, serta perlengkapan umrah lengkap.</p><p>Selain itu, paket ini juga dilengkapi dengan bimbingan ibadah dari ustadz berpengalaman yang akan mendampingi jamaah dalam setiap tahapan perjalanan spiritual ini. Jamaah juga akan memperoleh visa umrah resmi, asuransi perjalanan, serta air zamzam 5 liter sebagai oleh-oleh dari Tanah Suci. Dengan pelayanan yang ramah, profesional, serta harga yang kompetitif, kami berkomitmen untuk memastikan perjalanan umrah Anda menjadi pengalaman yang penuh berkah dan tak terlupakan. Segera bergabung bersama kami dan wujudkan impian suci Anda menuju Baitullah!</p><p><br></p><p><br></p>',
            'price_start' => 32000000,
            'days' => 12,
            'facilities' => '<ul><li>Hotel Bintang 5</li><li>Transportasi</li><li>dll</li></ul>',
            'exclude' => '<ul><li>Pembuatan Visa</li><li>dll</li></ul>',
            'status' => 'enabled',
            'meta_title' => 'Paket Umrah Reguler 12 Hari',
            'meta_description' => 'Paket Umrah 12 Hari kami dirancang untuk memberikan pengalaman ibadah yang nyaman, khusyuk, dan penuh berkah. Dengan keberangkatan yang telah dijadwalkan, perja...',
            'meta_keywords' => 'umrah, reguler, 12 hari',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 1,
            'day' => 'Hari ke-1',
            'description' => '<p>Keberangkatan dari Indonesia menuju Tanah Suci dengan penerbangan langsung. Setibanya di Jeddah, jamaah akan dijemput oleh tim kami dan langsung menuju Makkah untuk melaksanakan ibadah umrah.</p>',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 1,
            'day' => 'Hari ke-2',
            'description' => '<p>Setelah sarapan pagi, jamaah akan melaksanakan ibadah umrah di Masjidil Haram. Setelah itu, jamaah akan kembali ke hotel untuk beristirahat dan makan siang. Di sore hari, jamaah akan melaksanakan ziarah ke Jabal Nur, Jabal Rahmah, dan tempat-tempat bersejarah lainnya.</p>',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 1,
            'day' => 'Hari ke-3',
            'description' => '<p>Setelah sarapan pagi, jamaah akan melaksanakan ibadah umrah di Masjidil Haram. Setelah itu, jamaah akan kembali ke hotel untuk beristirahat dan makan siang. Di sore hari, jamaah akan melaksanakan ziarah ke Jabal Nur, Jabal Rahmah, dan tempat-tempat bersejarah lainnya.</p>',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 1,
            'day' => 'Hari ke-4',
            'description' => '<p>Setelah sarapan pagi, jamaah akan melaksanakan ibadah umrah di Masjidil Haram. Setelah itu, jamaah akan kembali ke hotel untuk beristirahat dan makan siang. Di sore hari, jamaah akan melaksanakan ziarah ke Jabal Nur, Jabal Rahmah, dan tempat-tempat bersejarah lainnya.</p>',
        ]);

        UmrahPackage::create([
            'banner' => 'umrah/banner/1741407706.jpg',
            'name' => 'Paket Umrah Private 20 Hari',
            'slug' => 'paket-umrah-private-20-hari',
            'description' => '<p>Paket Umrah Private 12 Hari kami dirancang untuk memberikan pengalaman ibadah yang nyaman, khusyuk, dan penuh berkah. Dengan keberangkatan yang telah dijadwalkan, perjalanan ini mencakup kunjungan ke kota suci Makkah dan Madinah, serta ziarah ke berbagai tempat bersejarah seperti Masjid Nabawi, Raudhah, Jabal Nur, Jabal Rahmah, dan lainnya. Selama 12 hari, jamaah akan mendapatkan fasilitas terbaik, termasuk tiket pesawat pulang-pergi, akomodasi hotel yang nyaman dan dekat dengan Masjidil Haram serta Masjid Nabawi, transportasi full AC, makan tiga kali sehari dengan menu khas Nusantara, serta perlengkapan umrah lengkap.</p><p>Selain itu, paket ini juga dilengkapi dengan bimbingan ibadah dari ustadz berpengalaman yang akan mendampingi jamaah dalam setiap tahapan perjalanan spiritual ini. Jamaah juga akan memperoleh visa umrah resmi, asuransi perjalanan, serta air zamzam 5 liter sebagai oleh-oleh dari Tanah Suci. Dengan pelayanan yang ramah, profesional, serta harga yang kompetitif, kami berkomitmen untuk memastikan perjalanan umrah Anda menjadi pengalaman yang penuh berkah dan tak terlupakan. Segera bergabung bersama kami dan wujudkan impian suci Anda menuju Baitullah!</p><p><br></p><p><br></p>',
            'price_start' => 50000000,
            'days' => 20,
            'facilities' => '<ul><li>Hotel Bintang 5</li><li>Transportasi</li><li>dll</li></ul>',
            'exclude' => '<ul><li>Pembuatan Visa</li><li>dll</li></ul>',
            'status' => 'enabled',
            'meta_title' => 'Paket Umrah Private 20 Hari',
            'meta_description' => 'Paket Umrah Private 20 Hari kami dirancang untuk memberikan pengalaman ibadah yang nyaman, khusyuk, dan penuh berkah. Dengan keberangkatan yang telah dijadwalkan, perja...',
            'meta_keywords' => 'umrah, private, 20 hari',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 2,
            'day' => 'Hari ke-1',
            'description' => '<p>Keberangkatan dari Indonesia menuju Tanah Suci dengan penerbangan langsung. Setibanya di Jeddah, jamaah akan dijemput oleh tim kami dan langsung menuju Makkah untuk melaksanakan ibadah umrah.</p>',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 2,
            'day' => 'Hari ke-2',
            'description' => '<p>Setelah sarapan pagi, jamaah akan melaksanakan ibadah umrah di Masjidil Haram. Setelah itu, jamaah akan kembali ke hotel untuk beristirahat dan makan siang. Di sore hari, jamaah akan melaksanakan ziarah ke Jabal Nur, Jabal Rahmah, dan tempat-tempat bersejarah lainnya.</p>',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 2,
            'day' => 'Hari ke-3',
            'description' => '<p>Setelah sarapan pagi, jamaah akan melaksanakan ibadah umrah di Masjidil Haram. Setelah itu, jamaah akan kembali ke hotel untuk beristirahat dan makan siang. Di sore hari, jamaah akan melaksanakan ziarah ke Jabal Nur, Jabal Rahmah, dan tempat-tempat bersejarah lainnya.</p>',
        ]);

        UmrahPackageItinerary::create([
            'umrah_package_id' => 2,
            'day' => 'Hari ke-4',
            'description' => '<p>Setelah sarapan pagi, jamaah akan melaksanakan ibadah umrah di Masjidil Haram. Setelah itu, jamaah akan kembali ke hotel untuk beristirahat dan makan siang. Di sore hari, jamaah akan melaksanakan ziarah ke Jabal Nur, Jabal Rahmah, dan tempat-tempat bersejarah lainnya.</p>',
        ]);


        Testimonial::create([
            'name' => 'Dr.eng. Fajri Rinaldi Chan, S.Pd., M.Kom',
            'position' => 'Software Engineer',
            'company' => 'Gariskode',
            'content' => 'Torkata Umrah adalah agen perjalanan terpercaya yang menyediakan layanan umrah dan paket wisata halal ke berbagai destinasi. Dengan komitmen tinggi terhadap kenyamanan dan kepuasan pelanggan, Torkata Umrah menawarkan perjalanan yang aman, nyaman, dan berkes
            an, didukung oleh tim profesional yang berpengalaman.',
            'status' => true,
        ]);

        Testimonial::create([
            'name' => 'Fulan bin Fulan',
            'position' => 'Pengusaha',
            'company' => 'PT. Fulan Jaya',
            'content' => 'Saya sangat puas dengan pelayanan yang diberikan oleh Torkata Umrah. Mereka sangat profesional, ramah, dan selalu siap membantu. Perjalanan umrah saya menjadi lebih berkesan dan nyaman berkat Torkata Umrah. Terima kasih Torkata Umrah!',
            'status' => true,
        ]);

        Testimonial::create([
            'name' => 'Fulanah binti Fulan',
            'position' => 'Dosen',
            'company' => 'Universitas Indonesia',
            'content' => 'Satu kata untuk Torkata Umrah, luar biasa! Saya sangat puas dengan pelayanan yang diberikan oleh Torkata Umrah. Mereka sangat profesional, ramah, dan selalu siap membantu. Perjalanan umrah saya menjadi lebih berkesan dan nyaman berkat Torkata Umrah. Terima kasih Torkata Umrah!',
            'status' => true,
        ]);

    }
}
