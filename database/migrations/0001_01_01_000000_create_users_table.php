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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nik')->unique()->nullable();
            $table->string('photo')->nullable();
            $table->string('name');
            $table->string('birthplace')->nullable();
            $table->date('birthdate')->nullable();
            $table->enum('gender', ['laki-laki', 'perempuan'])->nullable();
            $table->string('address')->nullable();
            $table->enum('religion', ['islam', 'kristen', 'katolik', 'hindu', 'budha', 'konghucu'])->nullable();
            $table->string('occupation')->nullable();
            $table->string('phone')->nullable();
            $table->string('file_ktp')->nullable();
            $table->string('file_cv')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();

            //index
            $table->index(['name', 'email']);
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
