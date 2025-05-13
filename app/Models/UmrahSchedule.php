<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UmrahSchedule extends Model
{
    protected $table = 'umrah_schedules';
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function umrahPackage()
    {
        return $this->belongsTo(UmrahPackage::class);
    }

    public function UmrahJamaah()
    {
        return $this->hasMany(UmrahJamaah::class);
    }

    public function jamaah()
    {
        return $this->hasMany(UmrahJamaah::class);
    }

    public function getLowestQuadPrice()
    {
        return $this->min('quad_price');
    }
}
