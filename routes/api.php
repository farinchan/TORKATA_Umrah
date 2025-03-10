<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('booking/get-umrah-schedule', [App\Http\Controllers\Api\UmrahController::class, 'getUmrahSchedule'])->name('api.booking.get-umrah-schedule');
Route::post('booking/get-umrah-schedule/info', [App\Http\Controllers\Api\UmrahController::class, 'getUmrahScheduleInfo'])->name('api.booking.get-umrah-schedule-info');
