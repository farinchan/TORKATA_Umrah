<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('booking/get-umrah-schedule', [App\Http\Controllers\Api\UmrahController::class, 'getUmrahSchedule'])->name('api.booking.get-umrah-schedule');
Route::post('booking/get-umarah-schedule/info', [App\Http\Controllers\Api\UmrahController::class, 'getUmrahScheduleInfo'])->name('api.booking.get-umrah-schedule-info');

Route::post('booking/get-tour-schedule', [App\Http\Controllers\Api\TourController::class, 'getTourSchedule'])->name('api.booking.get-tour-schedule');
Route::post('booking/get-tour-schedule/info', [App\Http\Controllers\Api\TourController::class, 'getTourScheduleInfo'])->name('api.booking.get-tour-schedule-info');


Route::prefix('whatsapp-api')->name('api.whatsapp.')->group(function () {
    Route::get('/get-all-sessions', [App\Http\Controllers\Api\WhatsappController::class, 'getAllSessions'])->name('get-all-sessions');
    Route::get('/get-my-session', [App\Http\Controllers\Api\WhatsappController::class, 'getMySession'])->name('get-my-session');
    Route::post('/delete-session', [App\Http\Controllers\Api\WhatsappController::class, 'deleteSession'])->name('delete-session');
    Route::post('/send-message', [App\Http\Controllers\Api\WhatsappController::class, 'sendMessage'])->name('send-message');
    Route::post('/send-bulk-message', [App\Http\Controllers\Api\WhatsappController::class, 'sendBulkMessage'])->name('send-bulk-message');
    Route::post('/send-image', [App\Http\Controllers\Api\WhatsappController::class, 'sendImage'])->name('send-image');
});
