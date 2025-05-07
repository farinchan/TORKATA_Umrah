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
        Schema::create('tour_schedules', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tour_package_id')->constrained('tour_packages')->onDelete('cascade');
            $table->string('name');
            $table->date('departure')->nullable();
            $table->string('airline')->nullable();
            $table->integer('quota')->nullable();
            $table->integer('price')->nullable();
            $table->string('hotel')->nullable();
            $table->enum('status', ['aktif', 'berakhir'])->default('aktif');
            $table->timestamps();

            $table->index(['tour_package_id', 'name', 'departure']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_schedules');
    }
};
