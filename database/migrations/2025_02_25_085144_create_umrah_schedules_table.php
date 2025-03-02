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
            $table->string('name');
            $table->string('quad_price')->nullable();
            $table->string('triple_quota')->nullable();
            $table->string('triple_price')->nullable();
            $table->string('double_quota')->nullable();
            $table->string('double_price')->nullable();
            $table->date('departure')->nullable();
            $table->string('hotel_makka')->nullable();
            $table->string('hotel_madinah')->nullable();
            $table->string('airline')->nullable();
            $table->enum('status', ['aktif', 'finished'])->default('aktif');
            $table->timestamps();

            $table->index(['umrah_package_id', 'departure']);
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
