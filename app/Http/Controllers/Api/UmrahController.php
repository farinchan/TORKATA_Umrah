<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UmrahJamaah;
use App\Models\UmrahSchedule;
use Illuminate\Http\Request;

class UmrahController extends Controller
{
    public function getUmrahSchedule(Request $request)
    {
        $umrah_package_id = $request->umrah_package_id;
        $schedule = UmrahSchedule::where('umrah_package_id', $umrah_package_id)->get();
        return response()->json($schedule);
    }

    public function getUmrahScheduleInfo(Request $request)
    {
        $umrah_schedule_id = $request->umrah_schedule_id;
        $jamaah_quad = UmrahJamaah::where('umrah_schedule_id', $umrah_schedule_id)->where('package_type', 'quad')->count();
        $jamaah_triple = UmrahJamaah::where('umrah_schedule_id', $umrah_schedule_id)->where('package_type', 'triple')->count();
        $jamaah_double = UmrahJamaah::where('umrah_schedule_id', $umrah_schedule_id)->where('package_type', 'double')->count();
        $schedule = UmrahSchedule::with('UmrahJamaah')->find($umrah_schedule_id);
        return response()->json([
            'quad' => $jamaah_quad,
            'triple' => $jamaah_triple,
            'double' => $jamaah_double,
            'schedule' => $schedule
        ]);
    }
}
