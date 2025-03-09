<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AgentController extends Controller
{
    public function index()
    {
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
            'agents' => User::role('agen')->take(10)->get(),

        ];

        return view('front.pages.agent.index', $data);
    }

    public function show($id)
    {
        $agent = User::role('agen')->findOrFail($id);

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
            'agent' => $agent
        ];

        return view('front.pages.agent.show', $data);
    }
}
