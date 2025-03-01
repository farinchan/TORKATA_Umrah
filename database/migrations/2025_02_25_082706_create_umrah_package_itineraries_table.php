<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('umrah_package_itineraries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('umrah_package_id')->constrained('umrah_packages')->onDelete('cascade');
            $table->string('day')->nullable();
            $table->mediumText('description')->nullable();
            $table->timestamps();

            $table->index(['umrah_package_id', 'day']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('umrah_package_itineraries');
    }
};
