<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = ['photo', 'name', 'position', 'company', 'content', 'status'];

    public function getPhoto()
    {
        return $this->photo ? asset('storage/' . $this->photo) : "https://ui-avatars.com/api/?background=A58672&color=fff&size=128&name=" . $this->name;
    }
}
