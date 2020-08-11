<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
use App\Inmueble;


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/logout', function(){
	return redirect('login')->with(Auth::logout());
});

Route::get('/cliente', function(){
	return view('cliente.index');
});

Route::get('/inmuebles/delete/{id}', function($id){
	Inmueble::destroy($id);
	return redirect('/inmuebles');
});

Route::resource('/inmuebles','inmuebleController');

Auth::routes();


Route::group(['prefix' => 'v1'], function () {
    Route::get('sendmail', 'MailController@sendmail');
});

//Contraseña gmail: lphiemptwlvxmcir
