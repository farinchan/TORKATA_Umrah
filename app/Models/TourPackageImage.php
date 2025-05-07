<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TourPackageImage extends Model
{
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function tourPackage()
    {
        return $this->belongsTo(TourPackage::class);
    }
    public function getImageUrlAttribute()
    {
        return asset('storage/' . $this->image);
    }
    public function getImagePathAttribute()
    {
        return storage_path('app/public/' . $this->image);
    }
    
}
