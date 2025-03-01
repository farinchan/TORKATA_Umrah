<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UmrahPackage extends Model
{
    protected $table = 'umrah_packages';
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function itineraries()
    {
        return $this->hasMany(UmrahPackageItinerary::class);
    }

    public function getBanner()
    {
        return $this->banner ? asset('storage/' . $this->banner) : asset('back/media/svg/files/blank-image.svg');
    }

    public function images()
    {
        return $this->hasMany(UmrahPackageImage::class);
    }
}
