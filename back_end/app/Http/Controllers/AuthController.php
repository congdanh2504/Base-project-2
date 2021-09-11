<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Google_Client;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use DB;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function user() {
        return Auth::user();
    }

    public function logout(Request $request) {
        $cookie = cookie('jwt', null, 0);
        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }

    public function login(Request $request) {
        $users = DB::collection('users')->skip(2)->take(2)->get();
        error_log(json_encode($users));
        $input = $request->only('email', 'password');
        $token = null;

        if (!$token = JWTAuth::attempt($input)) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid Email or Password',
            ], 401);
        }

        return response()->json([
            'status' => true,
            'token' => $token,
            'user' => Auth::user()
        ]);
    }

    public function register(Request $request) {
        try {
            $validator = Validator::make($request->all(), [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255'],
                'password' => ['required', 'string', 'min:8'],
                'repassword' => ['required', 'same:password']
            ]);
           
            if ($validator->fails()) {
                return response([$validator->getMessageBag()], Response::HTTP_BAD_REQUEST);   
            } else {
                $email = $request->input('email');
                $user = User::where('email', '=', $email)->first();    
                if ($user != null){
                    return response(['message' => 'Email already exists'], Response::HTTP_CONFLICT);   
                }  
                else {
                    User::create([
                        'name' => $request->input('name'),
                        'email' => $request->input('email'),
                        'password' => Hash::make($request->input('password'))
                    ]);
                    return response(['message' => 'Success'], Response::HTTP_OK);   
                }
            }
        } catch (Exception $e) {
            return response(['message' => $e], Response::HTTP_BAD_REQUEST);   
        }
    }

    public function loginWithGG(Request $request) { 
        $idToken = $request->input('id_token');
        $client = new Google_Client(['client_id' => env('CLIENT_ID')]);
        $payload = $client->verifyIdToken($idToken);
        if ($payload) {
            $email = $payload['email'];
            $name = $payload['name'];
            $user = User::where('email', '=', $email)->first();
            if (!$user){
                User::create([
                    'name' => $name,
                    'email' => $email,
                    'password' => Hash::make(env('SECRET_PASS_FOR_GGLOGIN')),
                ]);
            } 

            if(!$token = JWTAuth::attempt(['email' => $email,'password' => env('SECRET_PASS_FOR_GGLOGIN')])) {
                return response([
                    'message' => 'Invalid',
                ], Response::HTTP_UNAUTHORIZED);
            }
    
            return response()->json([
                'status' => true,
                'token' => $token,
                'user' => Auth::user()
            ]);

        } else {
            return response(['message' => 'Error'], Response::HTTP_BAD_REQUEST);   
        }
    }
}
