<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UmrahPackageImage extends Model
{
    protected $table = 'umrah_package_images';
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function umrahPackage()
    {
        return $this->belongsTo(UmrahPackage::class);
    }

    public function getImage()
    {
        return $this->image ? asset('storage/' . $this->image) : asset('back/media/svg/files/blank-image.svg');
    }
}
