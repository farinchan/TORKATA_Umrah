<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Gallery extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function album()
    {
        return $this->belongsTo(GalleryAlbum::class, 'gallery_album_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getFoto()
    {
        return $this->foto ? Storage::url($this->foto) : asset('images/default.png');
    }

    public function getVideo()
    {
        return str_replace('watch?v=', 'embed/', $this->video);
    }
}
