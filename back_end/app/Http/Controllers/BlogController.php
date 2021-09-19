<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BlogController extends Controller
{
    public function getAllBlogs() {
        return DB::collection('blogs')->paginate(5);
    }

    public function getAllUserBlogs() {
        $user = Auth::user();
        return $user->getAllUserBlogs()->get();
    }

    public function addBlog(Request $request) {
        Blog::addBlog($request);
    }

    public function updateBlog(Request $request) {
        Blog::updateBlog($request);
    }

    public function deleteBlog(Request $request) {
        Blog::deleteBlog($request);
    }
}
