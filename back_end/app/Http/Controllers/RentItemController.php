<?php

namespace App\Http\Controllers;

use App\Models\RentItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RentItemController extends Controller
{
    public function getAllRentItems() {
        return RentItem::all();
    }

    public function getAllUserRentItems() {
        $user = Auth::user();
        return $user->getAllUserRentItems()->get();
    }
}
