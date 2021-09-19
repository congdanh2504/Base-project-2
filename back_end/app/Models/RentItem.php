<?php

namespace App\Models;

use App\Http\Controllers\ImageController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use App\Models\User;
use Illuminate\Http\Request;

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

    public static function addRentItem(Request $request) {
        $userID = $request->input('userID');
        $price = $request->input('price');
        $type = $request->input('type');
        $name = $request->input('name');
        $images = $request->input('imagesAddress');
        $imagesAddress = ImageController::saveImages($images);
        $address = $request->input('address');
        $province = $request->input('province');
        $description = $request->input('description');
        $people = $request->input('people');
        $rate = $request->input('rate');
        $area = $request->input('area');
        RentItem::create([
            'userID' => $userID,
            'price'=> $price,
            'type' => $type,
            'name' => $name,
            'imagesAddress' => $imagesAddress,
            'address' => $address,
            'province' => $province,
            'description' => $description,
            'people' => $people,
            'rate' => $rate,
            'area' => $area
        ]);
    }

    public static function updateRentItem(Request $request) {
        $price = $request->input('price');
        $type = $request->input('type');
        $name = $request->input('name');
        $images = $request->input('imagesAddress');
        $imagesAddress = ImageController::saveImages($images);
        $address = $request->input('address');
        $province = $request->input('province');
        $description = $request->input('description');
        $people = $request->input('people');
        $rate = $request->input('rate');
        $area = $request->input('area');
        $id = $request->input('id');
        RentItem::where('id', $id)
        ->update([
            'price'=> $price,
            'type' => $type,
            'name' => $name,
            'imagesAddress' => $imagesAddress,
            'address' => $address,
            'province' => $province,
            'description' => $description,
            'people' => $people,
            'rate' => $rate,
            'area' => $area
        ]);
    }

    public static function deleteRentItem(Request $request) {
        $id = $request->input('id');
        RentItem::where('id', $id)->delete();
    }
}
