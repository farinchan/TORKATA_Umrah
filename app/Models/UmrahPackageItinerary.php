<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UmrahPackageItinerary extends Model
{
    protected $table = 'umrah_package_itineraries';
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function umrahPackage()
    {
        return $this->belongsTo(UmrahPackage::class);
    }
}
