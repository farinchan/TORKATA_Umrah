<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TourUser extends Model
{
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tourSchedule()
    {
        return $this->belongsTo(TourSchedule::class);
    }

    public function tourUserPayments()
    {
        return $this->hasMany(TourUserPayment::class);
    }

    public function getPhoto()
    {
        return $this->photo ? asset('storage/' . $this->photo) : "https://ui-avatars.com/api/?background=15365F&color=C3A356&size=128&name=" . $this->name;
    }
}
