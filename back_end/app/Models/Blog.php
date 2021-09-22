<?php

namespace App\Models;

use App\Http\Controllers\ImageController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\User;
use Illuminate\Http\Request;

class Blog extends Model
{
    use HasFactory;
    protected $collection = 'blogs';
    protected $fillable = [
        'userID',
        'name',
        'html',
        'imageAddress'
    ];

    public function user() {
        return $this->belongsTo(User::class, 'userID');
    }

    public static function addBlog(Request $request) {
        $userID = $request->input('userID');
        $name = $request->input('name');
        $html = $request->input('html');
        $imageAddress = $request->input('imageAddress');
        Blog::create([
            'userID' => $userID,
            'name' => $name,
            'html' => $html,
            'imageAddress' => $imageAddress,
        ]);
    }

    public static function updateBlog(Request $request) {
        $id = $request->input('id');
        $name = $request->input('name');
        $html = $request->input('html');
        $image = $request->file('imageAddress');
        $imageAddress = ImageController::saveImage($image);
        Blog::where('id', $id)
            ->update([
                'name' => $name, 
                'html' => $html,
                'imageAddress' => $imageAddress
            ]);
    }

    public static function deleteBlog(Request $request) {
        $id = $request->input('id');
        Blog::where('id', $id)->delete();
    }
}
