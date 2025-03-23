<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Wallet;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable implements Wallet
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, HasWallet, softDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'nik',
        'photo',
        'name',
        'birthplace',
        'birthdate',
        'gender',
        'address',
        'religion',
        'occupation',
        'phone',
        'file_ktp',
        'file_cv',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getPhoto()
    {
        return $this->photo ? asset('storage/' . $this->photo) : "https://ui-avatars.com/api/?background=15365F&color=C3A356&size=128&name=" . $this->name;
    }

    public function news()
    {
        return $this->hasMany(News::class);
    }
}
