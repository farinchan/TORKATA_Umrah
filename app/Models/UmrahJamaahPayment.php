<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UmrahJamaahPayment extends Model
{
    protected $table = 'umrah_jamaah_payments';
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function umrahJamaah()
    {
        return $this->belongsTo(UmrahJamaah::class);
    }
}
