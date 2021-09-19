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
        RentItem::addRentItem($request);
    }

    public function updateRentItem(Request $request) {
        RentItem::updateRentItem($request);
    }

    public function deleteRentItem(Request $request) {
        RentItem::deleteRentItem($request);
    }
}
