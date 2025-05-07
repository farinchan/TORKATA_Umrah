<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TourFinance extends Model
{
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function tourSchedule()
    {
        return $this->belongsTo(TourSchedule::class);
    }
}
