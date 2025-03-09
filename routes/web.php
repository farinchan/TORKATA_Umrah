<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Back\DashboardController as BackDashboardController;
use App\Http\Controllers\Back\NewsController as BackNewsController;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/login', [LoginController::class, 'loginProcess'])->name('login.process');
Route::get('/logout', [LoginController::class, 'logout'])->name('logout');

Route::prefix('umrah')->name('umrah.')->group(function () {
    Route::get('/', [App\Http\Controllers\Front\UmrahController::class, 'index'])->name('index');
    Route::get('/{slug}', [App\Http\Controllers\Front\UmrahController::class, 'show'])->name('show');
});

Route::prefix('tour')->name('tour.')->group(function () {
    Route::get('/', [App\Http\Controllers\Front\TourController::class, 'index'])->name('index');
});

Route::prefix('news')->name('news.')->group(function () {
    Route::get('/', [App\Http\Controllers\Front\NewsController::class, 'index'])->name('index');
    Route::get('/{slug}', [App\Http\Controllers\Front\NewsController::class, 'show'])->name('show');
    Route::post('/{slug}', [App\Http\Controllers\Front\NewsController::class, 'comment'])->name('comment');

    Route::get('/category/{slug}', [App\Http\Controllers\Front\NewsController::class, 'category'])->name('category');
});

Route::prefix('agent')->name('agent.')->group(function () {
    Route::get('/', [App\Http\Controllers\Front\AgentController::class, 'index'])->name('index');
    Route::get('/{id}', [App\Http\Controllers\Front\AgentController::class, 'show'])->name('show');
});

Route::prefix('contact')->name('contact.')->group(function () {
    Route::get('/', [App\Http\Controllers\Front\ContactController::class, 'index'])->name('index');
    Route::post('/', [App\Http\Controllers\Front\ContactController::class, 'store'])->name('store');
});

Route::prefix('back')->name('back.')->middleware('auth')->group(function () {
    Route::prefix('dashboard')->name('dashboard.')->group(function () {
        Route::get('/', [BackDashboardController::class, 'index'])->name('index');
    });

    Route::prefix('news')->name('news.')->group(function () {
        Route::get('/category', [BackNewsController::class, 'category'])->name('category');
        Route::post('/category', [BackNewsController::class, 'categoryStore'])->name('category.store');
        Route::put('/category/edit/{id}', [BackNewsController::class, 'categoryUpdate'])->name('category.update');
        Route::delete('/category/delete/{id}', [BackNewsController::class, 'categoryDestroy'])->name('category.destroy');

        Route::get('/', [BackNewsController::class, 'index'])->name('index');
        Route::get('/create', [BackNewsController::class, 'create'])->name('create');
        Route::post('/create', [BackNewsController::class, 'store'])->name('store');
        Route::get('/edit/{id}', [BackNewsController::class, 'edit'])->name('edit');
        Route::put('/edit/{id}', [BackNewsController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [BackNewsController::class, 'destroy'])->name('destroy');

        Route::get('/comment', [BackNewsController::class, 'comment'])->name('comment');
        Route::post('/comment/spam/{id}', [BackNewsController::class, 'commentSpam'])->name('comment.spam');
    });

    Route::prefix('gallery')->name('gallery.')->group(function () {
        Route::get('/album', [App\Http\Controllers\Back\GalleryController::class, 'album'])->name('album');
        Route::post('/album', [App\Http\Controllers\Back\GalleryController::class, 'albumStore'])->name('album.store');
        Route::put('/album/{id}', [App\Http\Controllers\Back\GalleryController::class, 'albumUpdate'])->name('album.update');
        Route::delete('/album/{id}', [App\Http\Controllers\Back\GalleryController::class, 'albumDestroy'])->name('album.destroy');

        Route::get('/', [App\Http\Controllers\Back\GalleryController::class, 'index'])->name('index');
        Route::post('/create', [App\Http\Controllers\Back\GalleryController::class, 'store'])->name('store');
        Route::put('/edit/{id}', [App\Http\Controllers\Back\GalleryController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [App\Http\Controllers\Back\GalleryController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('testimonial')->name('testimonial.')->group(function () {
        Route::get('/', [App\Http\Controllers\Back\TestimonialController::class, 'index'])->name('index');
        Route::post('/create', [App\Http\Controllers\Back\TestimonialController::class, 'store'])->name('store');
        Route::put('/edit/{id}', [App\Http\Controllers\Back\TestimonialController::class, 'update'])->name('update');
        Route::delete('/delete/{id}', [App\Http\Controllers\Back\TestimonialController::class, 'destroy'])->name('destroy');
        Route::put('/status', [App\Http\Controllers\Back\TestimonialController::class, 'changeStatus'])->name('status');
    });

    Route::prefix('umrah')->name('umrah.')->group(function () {

        Route::prefix('package')->name('package.')->group(function () {
            Route::get('/', [App\Http\Controllers\Back\UmrahController::class, 'umrahPackageIIndex'])->name('index');
            Route::get('/create', [App\Http\Controllers\Back\UmrahController::class, 'umrahPackageCreate'])->name('create');
            Route::post('/create', [App\Http\Controllers\Back\UmrahController::class, 'umrahPackageStore'])->name('store');
            Route::get('/edit/{id}', [App\Http\Controllers\Back\UmrahController::class, 'umrahPackageEdit'])->name('edit');
            Route::put('/edit/{id}', [App\Http\Controllers\Back\UmrahController::class, 'umrahPackageUpdate'])->name('update');
            Route::delete('/delete/{id}', [App\Http\Controllers\Back\UmrahController::class, 'umrahPackageDestroy'])->name('destroy');
        });

        Route::prefix('schedule')->name('schedule.')->group(function () {
            Route::get('/', [App\Http\Controllers\Back\UmrahController::class, 'umrahScheduleIndex'])->name('index');
            Route::post('/create', [App\Http\Controllers\Back\UmrahController::class, 'umrahScheduleStore'])->name('store');
            Route::get('/{id}/setting', [App\Http\Controllers\Back\UmrahController::class, 'umrahScheduleSetting'])->name('setting');
            Route::put('/{id}/setting', [App\Http\Controllers\Back\UmrahController::class, 'umrahScheduleUpdate'])->name('update');
            Route::delete('/delete/{id}', [App\Http\Controllers\Back\UmrahController::class, 'umrahScheduleDestroy'])->name('destroy');
        });
    });

    Route::prefix("booking")->name("booking.")->group(function () {
        Route::prefix("umrah")->name("umrah.")->group(function () {
            Route::get("/", [App\Http\Controllers\Back\BookingController::class, "umrahIndex"])->name("index");
        });
    });

    Route::prefix('message')->name('message.')->group(function () {
        Route::get('/', [App\Http\Controllers\Back\MessageController::class, 'index'])->name('index');
        Route::delete('/{id}', [App\Http\Controllers\Back\MessageController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('user')->name('user.')->group(function () {
        Route::get('/', [App\Http\Controllers\Back\UserController::class, 'index'])->name('index');
        Route::get('/create', [App\Http\Controllers\Back\UserController::class, 'create'])->name('create');
        Route::post('/create', [App\Http\Controllers\Back\UserController::class, 'store'])->name('store');
        Route::get('/{id}/edit', [App\Http\Controllers\Back\UserController::class, 'edit'])->name('edit');
        Route::put('/{id}/edit', [App\Http\Controllers\Back\UserController::class, 'update'])->name('update');
        Route::delete('/{id}/delete', [App\Http\Controllers\Back\UserController::class, 'delete'])->name('delete');
    });

    Route::prefix('setting')->name('setting.')->group(function () {
        Route::get('/website', [App\Http\Controllers\back\SettingController::class, 'website'])->name('website');
        Route::put('/website', [App\Http\Controllers\back\SettingController::class, 'websiteUpdate'])->name('website.update');
        Route::put('/website/info', [App\Http\Controllers\back\SettingController::class, 'informationUpdate'])->name('website.info');

        Route::get('/banner', [App\Http\Controllers\back\SettingController::class, 'banner'])->name('banner');
        Route::put('/banner/{id}/update', [App\Http\Controllers\back\SettingController::class, 'bannerUpdate'])->name('banner-update');
    });
});
