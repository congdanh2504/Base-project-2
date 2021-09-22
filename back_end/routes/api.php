<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\RentItemController;
use App\Http\Controllers\AdminController;
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
//authentication
Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);

Route::post('/logout', [AuthController::class, 'logout']);

Route::post('/loginWithGG',[AuthController::class, 'loginWithGG']);

Route::get('/rentItems', [RentItemController::class, 'getAllRentItems']);

Route::get('/blogs', [BlogController::class, 'getAllBlogs']);

Route::middleware('auth.jwt')->group(function () {

    Route::get('/user',[AuthController::class, 'user']);

    Route::middleware('adminAuth')->group(function () { 
        
        Route::get('/getAllUsers', [AdminController::class, 'getAllUsers']);

    }); 

    Route::post('/updateProfile', [AuthController::class, 'updateProfile']);

    Route::get('/userRentItems', [RentItemController::class, 'getAllUserRentItems']);

    Route::get('/userBlogItems', [BlogController::class, 'getAllUserBlogs']);

    Route::post('/addRentItem', [RentItemController::class, 'addRentItem']);

    Route::delete('/deleteRentItem' , [RentItemController::class, 'deleteRentItem']);

    Route::patch('/updateRentItem', [RentItemController::class, 'updateRentItem']);

    Route::post('/addBlog', [BlogController::class, 'addBlog']);

    Route::delete('/deleteBlog', [BlogController::class, 'deleteBlog']);

    Route::patch('/updateBlog', [BlogController::class, 'updateBlog']);
});




