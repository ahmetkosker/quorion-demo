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

Route::get('/', '\App\Http\Controllers\HomeController@index')->name('home');

Route::get('/add', [\App\Http\Controllers\HomeController::class, 'addProduct']);

Route::post('/save', '\App\Http\Controllers\HomeController@saveProduct');