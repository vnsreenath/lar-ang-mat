<?php

namespace App\Http\Controllers\Auth;

use Auth;
use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'username'    => 'required',
            'password' => 'required|min:3',
        ]);

        $credentials = $request->only('username', 'password');

        try {
            // verify the credentials and create a token for the user
            $userData = User::where('USERID','=',$credentials['username'])
                      ->where('password', '=', DB::raw("hashbytes('SHA1','".$credentials['password']."')"))
                      ->first();
					  
            if (count($userData) == 0 || !$token = JWTAuth::fromUser($userData) ) {
                return response()->error('Invalid credentials', 401);
            }
			Auth::login($userData);
            
        } catch (\JWTException $e) {
            return response()->error('Could not create token', 500);
        }

        $user = Auth::user();

        return response()->success(compact('user', 'token'));
    }

    public function register(Request $request)
    {
        // TO DO
        $this->validate($request, [
            'name'       => 'required|min:3',
            'username'      => 'required|unique:users',
            'password'   => 'required|min:8',
        ]);

        $user = new User;
        $user->name = trim($request->name);
        $user->username = trim(strtolower($request->username));
        $user->password = bcrypt($request->password);
        $user->save();

        $token = JWTAuth::fromUser($user);

        return response()->success(compact('user', 'token'));
    }

    public function logout(Request $request)
    {
      if (Auth::check()) {
        Auth::logout();
        return response()->success();
      }else{
        return response()->error('unauthorized', 401);
      }
    }
}
