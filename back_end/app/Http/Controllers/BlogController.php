<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    public function getAllBlogs() {
        return Blog::all();
    }

    public function getAllUserBlogs() {
        $user = Auth::user();
        return $user->getAllUserBlogs()->get();
    }
}
