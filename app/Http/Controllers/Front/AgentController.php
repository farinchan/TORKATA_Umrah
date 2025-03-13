<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\SettingWebsite;
use App\Models\User;
use Illuminate\Http\Request;

class AgentController extends Controller
{
    public function index()
    {
        $setting_web = SettingWebsite::first();
        $data = [
            'title' => 'Agen Resmi Kami',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'agen',
                    'link' => route('agent.index')
                ]
            ],
            'meta' => [
                'title' => 'Agen | ' . $setting_web->name,
                'description' => 'Daftar agen resmi kami yang tersebar di Sumatera Barat dan sekitarnya. Kami memiliki agen-agen terpercaya yang siap membantu Anda dalam merencanakan perjalanan umrah dan haji dengan layanan terbaik. Setiap agen kami telah terlatih dan berpengalaman dalam memberikan informasi dan pelayanan yang Anda butuhkan untuk perjalanan ibadah Anda. Temukan agen terdekat di wilayah Anda dan dapatkan penawaran paket umrah dan Tour yang sesuai dengan kebutuhan Anda.',
                'keywords' => $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah', 'paket haji', 'paket wisata', 'agen', 'agen resmi',
                'favicon' => $setting_web->favicon
            ],
            'agents' => User::role('agen')->take(10)->get(),

        ];

        return view('front.pages.agent.index', $data);
    }

    public function show($id)
    {
        $agent = User::role('agen')->findOrFail($id);

        $setting_web = SettingWebsite::first();
        $data = [
            'title' => $agent->name,
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'agen',
                    'link' => route('agent.index')
                ],
                [
                    'name' => 'Detail Agen',
                    'link' => route('agent.show', $agent->id)
                ]
            ],
            'meta' => [
                'title' => 'Agen' . $agent->name . ' | ' . $setting_web->name,
                'description' => 'Detail agen resmi kami ' . $agent->name . '. Kami memiliki agen-agen terpercaya yang siap membantu Anda dalam merencanakan perjalanan umrah dan haji dengan layanan terbaik. Setiap agen kami telah terlatih dan berpengalaman dalam memberikan informasi dan pelayanan yang Anda butuhkan untuk perjalanan ibadah Anda. Temukan agen terdekat di wilayah Anda dan dapatkan penawaran paket umrah dan Tour yang sesuai dengan kebutuhan Anda.',
                'keywords' => $setting_web->name, 'home', 'umrah',  'travel', 'tour', 'islam', 'muslim', 'paket umrah', 'paket haji', 'paket wisata', 'agen', 'agen resmi',
                'favicon' => $agent->photo??$setting_web->favicon
            ],
            'agent' => $agent
        ];

        return view('front.pages.agent.show', $data);
    }
}
