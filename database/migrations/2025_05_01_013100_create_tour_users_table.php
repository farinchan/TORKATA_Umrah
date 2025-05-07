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
        Schema::create('tour_users', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('nik')->nullable();
            $table->string('photo')->nullable();
            $table->string('name');
            $table->string('birthplace')->nullable();
            $table->date('birthdate')->nullable();
            $table->enum('gender', ['laki-laki', 'perempuan'])->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('file_ktp')->nullable();
            $table->string('passport')->nullable();
            $table->foreignId('tour_schedule_id')->constrained('tour_schedules')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->integer('discount')->default(0);
            $table->timestamps();

            $table->index(['user_id', 'name', 'nik', 'passport']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_users');
    }
};
