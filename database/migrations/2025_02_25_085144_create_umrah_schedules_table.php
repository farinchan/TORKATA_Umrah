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
        Schema::create('umrah_schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('umrah_package_id')->constrained('umrah_packages')->onDelete('cascade');
            $table->enum('package_type', ['quad', 'triple', 'double']);
            $table->string('date');
            $table->string('quota');
            $table->string('price');
            $table->string('hotel')->nullable();
            $table->string('hotel_rating')->nullable();
            $table->string('flight')->nullable();
            $table->timestamps();

            $table->index(['umrah_package_id', 'package_type', 'date']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('umrah_schedules');
    }
};
