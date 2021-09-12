<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\User;

class Blog extends Model
{
    use HasFactory;
    protected $collection = 'blogs';
    protected $fillable = [
        'userID',
        'name',
        'html',
        'imageAddress',
        'blogID'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'userID');
    }
}
