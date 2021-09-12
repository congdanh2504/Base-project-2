<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\RentItemController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register',[AuthController::class, 'register']);

Route::post('/login',[AuthController::class, 'login']);

Route::post('/logout',[AuthController::class, 'logout']);

Route::post('/loginWithGG',[AuthController::class, 'loginWithGG']);

Route::get('/rentItems', [RentItemController::class, 'getAllRentItems']);

Route::get('/blogItems', [BlogController::class, 'getAllBlogs']);

Route::middleware('auth.jwt')->group(function () {
    Route::get('/user',[AuthController::class, 'user']);

    Route::get('/userRentItems', [RentItemController::class, 'getAllUserRentItems']);

    Route::get('/userBlogItems', [BlogController::class, 'getAllUserBlogs']);

});




