<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function index(Request $request) {
        // Get user who requested the logout
        $user = request()->user(); //or Auth::user()
        // Revoke current user token
        $user->tokens()->where('id', $user->currentAccessToken()->id)->delete();
    }
}
