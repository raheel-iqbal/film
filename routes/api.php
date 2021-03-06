<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\FilmController;

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

Route::post('/register', [RegisterController::class, 'index']);
Route::post('/login', [LoginController::class, 'index']);

Route::middleware('auth:sanctum')->group(function() {

    Route::get('/logout', [LogoutController::class, 'index']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/films', [FilmController::class, 'index']);
    Route::post('/add-films', [FilmController::class, 'store']);

});
