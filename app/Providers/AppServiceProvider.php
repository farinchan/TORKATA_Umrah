<?php

namespace App\Providers;

use App\Models\UmrahJamaah;
use App\Models\UmrahJamaahPayment;
use App\Observers\BookingUmrahObserver;
use App\Observers\PaymentUmrahVerificationObserver;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $loader = \Illuminate\Foundation\AliasLoader::getInstance();
        $loader->alias('Debugbar', \Barryvdh\Debugbar\Facades\Debugbar::class);

        Blade::directive('money', function ($amount) {
            return "<?php echo 'Rp ' . number_format($amount, 0, ',', '.'); ?>";
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        UmrahJamaah::observe(BookingUmrahObserver::class);
        UmrahJamaahPayment::observe(PaymentUmrahVerificationObserver::class);
    }
}
