<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TourPackage extends Model
{
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function getBanner()
    {
        return $this->banner ? asset('storage/' . $this->banner) : asset('back/media/svg/files/blank-image.svg');
    }

    public function schedules()
    {
        return $this->hasMany(TourSchedule::class);
    }

    public function itineraries()
    {
        return $this->hasMany(TourPackageItinerary::class);
    }

    public function images()
    {
        return $this->hasMany(TourPackageImage::class);
    }


}
