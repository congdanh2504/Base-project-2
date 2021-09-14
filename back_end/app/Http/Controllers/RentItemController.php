<?php

namespace App\Http\Controllers;

use App\Models\RentItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RentItemController extends Controller
{
    public function getAllRentItems() {
        return DB::collection('rentItems')->paginate(5);
    }

    public function getAllUserRentItems() {
        $user = Auth::user();
        return $user->getAllUserRentItems()->get();
    }

    public function addRentItem(Request $request) {
        $userID = $request->input('userID');
        $price = $request->input('price');
        $type = $request->input('type');
        $name = $request->input('name');
        $imagesAddress = $request->input('imagesAddress');
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
            'imagesAddress' => $imageAddress,
            'address' => $address,
            'province' => $province,
            'description' => $description,
            'people' => $people,
            'rate' => $rate,
            'area' => $area
        ]);
    }

    public function updateRentItem(Request $request) {
        $price = $request->input('price');
        $type = $request->input('type');
        $name = $request->input('name');
        $imagesAddress = $request->input('imagesAddress');
        $address = $request->input('address');
        $province = $request->input('province');
        $description = $request->input('description');
        $people = $request->input('people');
        $rate = $request->input('rate');
        $area = $request->input('area');
        RentItem::where('id', $id)
        ->update([
            'price'=> $price,
            'type' => $type,
            'name' => $name,
            'imagesAddress' => $imageAddress,
            'address' => $address,
            'province' => $province,
            'description' => $description,
            'people' => $people,
            'rate' => $rate,
            'area' => $area
        ]);
    }

    public function deleteRentItem(Request $request) {
        $id = $request->input('id');
        RentItem::where('id', $id)->delete();
    }
}
