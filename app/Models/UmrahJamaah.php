<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UmrahJamaah extends Model
{
    protected $table = 'umrah_jamaahs';
    protected $guarded = ['id', 'created_at', 'updated_at'];


    public function umrahSchedule()
    {
        return $this->belongsTo(UmrahSchedule::class);
    }

    public function umrahJamaahPayments()
    {
        return $this->hasMany(UmrahJamaahPayment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
