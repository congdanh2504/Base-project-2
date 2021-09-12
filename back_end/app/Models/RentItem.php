<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\User;

class RentItem extends Model
{
    use HasFactory;
    protected $collection = 'rentItems';
    protected $fillable = [
        'userID',
        'price',
        'type',
        'name',
        'imagesAddress',
        'address',
        'province',
        'description',
        'people',
        'rate',
        'area'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'userID');
    }
}
