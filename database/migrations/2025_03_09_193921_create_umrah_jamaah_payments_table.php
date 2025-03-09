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
        Schema::create('umrah_jamaah_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('umrah_jamaah_id')->constrained('umrah_jamaahs')->onDelete('cascade');
            $table->string('payment_method');
            $table->string('bank_name')->nullable();
            $table->string('account_number')->nullable();
            $table->string('account_name')->nullable();
            $table->string('amount');
            $table->string('proof')->nullable();
            $table->enum('type', ['dp', 'pelunasan']);
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->text('note')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('umrah_jamaah_payments');
    }
};
