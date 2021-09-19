<?php

namespace App\Http\Controllers;

use App\Models\RentItem;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use Google_Client;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;

class AuthController extends Controller
{
    public function user() {
        return Auth::user();
    }

    public function login(Request $request) {
        $input = $request->only('email', 'password');

        if (!$token = FacadesJWTAuth::attempt($input)) {
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
        $validator = $this->validateUser($request);     
        if ($validator->fails()) {
            return response([$validator->getMessageBag()], Response::HTTP_BAD_REQUEST);   
        } else {
            $email = $request->input('email');
            $name = $request->input('name');
            $password = $request->input('password');
            $user = User::where('email', '=', $email)->first();    
            if ($user != null){
                return response(['message' => 'Email already exists'], Response::HTTP_CONFLICT);   
            }  
            else {
                $this->createNewUser($name, $email, $password);
                return response(['message' => 'Success'], Response::HTTP_OK); 
            }
        }
    }

    public function validateUser(Request $request) {
        return Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8'],
            'repassword' => ['required', 'same:password']
        ]);
    }

    public function createNewUser($name, $email, $password) {
        User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($password),
            'imageAddress' => null,
            'phoneNumber' => null,
            'zaloURL' => null,
            'facebookURL' => null
        ]);  
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
                $this->createNewUser($name, $email, env('SECRET_PASS_FOR_GGLOGIN'));
            } 

            if(!$token = FacadesJWTAuth::attempt(['email' => $email,'password' => env('SECRET_PASS_FOR_GGLOGIN')])) {
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

    public function updateProfile(Request $request) {
        $id = $request->input('id');
        $name = $request->input('name');
        $image = $request->file('imageAddress');
        $imageAddress = ImageController::saveImage($image);
        $phoneNumber = $request->input('phoneNumber');
        $zaloURL = $request->input('zaloURL');
        $facebookURL = $request->input('facebookURL');
        User::where('id', $id)
        ->update([
            'name' => $name,
            'imageAddress' => $imageAddress,
            'phoneNumber' => $phoneNumber,
            'zaloURL' => $zaloURL,
            'facebookURL' => $facebookURL
        ]);
    }
}
