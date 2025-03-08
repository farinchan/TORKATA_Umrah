<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function index()
    {
        $data = [
            'title' => 'Tour',
            'breadcrumbs' => [
                [
                    'name' => 'Home',
                    'link' => route('home')
                ],
                [
                    'name' => 'Tour',
                    'link' => route('tour.index')
                ]
            ],
        ];

        return view('front.pages.tour.index', $data);
    }
}
