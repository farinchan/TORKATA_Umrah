<?php

namespace Database\Seeders;

use App\Models\SettingBanner;
use App\Models\SettingWebsite;
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

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        SettingWebsite::create([
            'name' => 'Torkata Umrah, Tour & Travel',
            'logo' => 'logo.png',
            'favicon' => 'favicon.png',
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
    }
}
