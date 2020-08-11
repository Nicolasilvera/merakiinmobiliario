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

Route::get('/skills','skillsController@index');

Route::get('/images/{inmobiliaria}/{inmueble}', function($inmobiliaria, $inmueble){
	$directorio = 'images/inmuebles/'.$inmobiliaria.'/'.$inmueble;
	$ficheros  = scandir($directorio);
 	$ficheros = array_slice($ficheros,2);	//Elimino '.' y '..'
	return json_encode($ficheros);//TENEMOS QUE HACER UN JSON PARA DEVOLVER LOS NOMBRES DE LAS IMÁGENES.
});

Route::get('/inmuebles', function(){
	$inmuebles= Inmueble::All();
    return response()->json($inmuebles,200);
});

Route::get('/inmueble/{id}', function($id){
	$inmueble= Inmueble::where('id',$id)->first();
	return response()->json($inmueble,200);
});


Route::get('/inmuebles/{id}', function($id){
	$cantidadUsuarios = Inmueble::count('idInmobiliaria');
	if(Inmueble::where('idInmobiliaria', $id)->exists()){
		$inmuebles= Inmueble::where('idInmobiliaria',$id)->get();		
	}else{
		$inmuebles= [];
	}
    return response()->json($inmuebles,200);
});

Route::get('/inmueble/{id}/{logeado}', function($id,$logeado){
	$inmueble= Inmueble::where('id',$id)->where('idInmobiliaria', $logeado)->first();
	return response()->json($inmueble,200);
});
