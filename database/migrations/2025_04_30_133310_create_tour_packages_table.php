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
        Schema::create('tour_packages', function (Blueprint $table) {
            $table->id();
            $table->string('banner')->nullable();
            $table->string('name');
            $table->string('slug')->unique();
            $table->integer('price_start')->nullable();
            $table->mediumText('description')->nullable();
            $table->integer('days');
            $table->mediumText('facilities')->nullable();
            $table->mediumText('exclude')->nullable();
            $table->string('file_brochure')->nullable();
            $table->enum('status', ['disabled', 'enabled'])->default('disabled');
            $table->string('meta_title')->nullable();
            $table->string('meta_description')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->softDeletes();
            $table->timestamps();
            $table->index(['name', 'slug', 'status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tour_packages');
    }
};
