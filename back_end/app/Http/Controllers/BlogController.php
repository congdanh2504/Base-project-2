<?php

namespace App\Http\Controllers;

use App\Models\Blog;
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

    public function updateBlog(Request $request) {
        $id = $request->input('id');
        $userID = $request->input('userID');
        $name = $request->input('name');
        $html = $request->input('html');
        $imageAddress = $request->input('imageAddress');
        $blogID = $request->input('blogID');
        Blog::where('id', $id)
            ->update([
                'name' => $name, 
                'html' => $html,
                'imageAddress' => $imageAddress
            ]);
    }

    public function deleteBlog(Request $request) {
        $id = $request->input('id');
        Blog::where('id', $id)->delete();
    }
}
