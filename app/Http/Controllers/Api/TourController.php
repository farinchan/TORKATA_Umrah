<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TourSchedule;
use App\Models\TourUser;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function getTourSchedule(Request $request)
    {
        $tour_package_id = $request->tour_package_id;
        $schedule = TourSchedule::where('tour_package_id', $tour_package_id)->get();
        return response()->json($schedule);
    }

    public function getTourScheduleInfo(Request $request)
    {
        $tour_schedule_id = $request->tour_schedule_id;
        $schedule = TourSchedule::with('TourUser')->find($tour_schedule_id);
        return response()->json([
            'schedule' => $schedule
        ]);
    }
}
