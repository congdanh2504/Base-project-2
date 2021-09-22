<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Auth\Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Model implements AuthenticatableContract, JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable, Authenticatable;

    protected $collection = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
        'imageAddress',
        'phoneNumber',
        'zaloURL',
        'facebookURL',
        'address'
    ];

    protected $hidden = [
        'password'
    ];

    public function getAllUserRentItems() {
        return $this->hasMany(RentItem::class, 'userID');
    }

    public function getAllUserBlogs() {
        return $this->hasMany(Blog::class, 'userID');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    
    public function getJWTCustomClaims()
    {
        return [];
    }

}
