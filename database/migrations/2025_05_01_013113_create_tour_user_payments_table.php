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
        Schema::create('tour_user_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tour_user_id')->constrained('tour_users')->onDelete('cascade');
            $table->enum('payment_method', ['transfer', 'cash', 'qr', 'credit_card']);
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

            $table->index(['tour_user_id', 'payment_method', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_user_payments');
    }
};
