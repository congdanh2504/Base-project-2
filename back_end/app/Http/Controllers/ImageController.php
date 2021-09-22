<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Testing\File;

class ImageController extends Controller
{
    public static function saveImages($images) {
        $imagesAddress = array();
        foreach ($images as $image) {
            $imageAddress = ImageController::saveImage($image);
            array_push($imagesAddress, $imageAddress);
        } 
    }

    private static function deleteImage($imageAddress) {
        File::delete($imageAddress);
    }

    public static function saveImage($image) {
        $dir = '/images/';
        $image->store($dir, 'public'); 
        return "storage".$dir.$image->hashName();
    }
}
