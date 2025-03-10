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
        Schema::create('umrah_jamaahs', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique()->nullable();
            $table->string('nik')->unique()->nullable();
            $table->string('photo')->nullable();
            $table->string('name');
            $table->string('birthplace')->nullable();
            $table->date('birthdate')->nullable();
            $table->enum('gender', ['laki-laki', 'perempuan'])->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('file_ktp')->nullable();
            $table->string('file_kk')->nullable();
            $table->string('file_paspor')->nullable();
            $table->foreignId('umrah_schedule_id')->constrained('umrah_schedules')->onDelete('cascade');
            $table->enum('package_type', ['quad', 'triple', 'double'])->nullable();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('umrah_jamaahs');
    }
};
