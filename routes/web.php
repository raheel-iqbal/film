<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/films');
});

Route::get('/films', function () {
    return view('global');
});

Route::get('/add-film', function () {
    return view('global');
});

Route::get('/login', function () {
    return view('global');
})->name('login');

Route::get('/register', function () {
    return view('global');
});

Route::get('/dashboard', function () {
    return view('global');
});
