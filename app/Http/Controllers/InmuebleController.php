<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Inmueble;

class inmuebleController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function index(){
    	return view('inmueble.index');
    }

    public function create(){
    	return view('inmueble.create');
    }

    public function store(Request $request){
       $inmueble = new Inmueble();
        $inmueble->tipo=request('tipo');
        $inmueble->idInmobiliaria= request('idInmobiliaria');
        $inmueble->metrosCuadrados= request('metrosCuadrados');
        $inmueble->calle=request('calle');
        $inmueble->numero= request('numero');
        $inmueble->localidad=request('localidad');
        $inmueble->srcMap = explode('"', request('srcMap'))[1];
        if(request('departamento')){
        	$inmueble->departamento=request('departamento');
        }else{
        	$inmueble->departamento=0;
        }
        if(request('piso')){
        	$inmueble->piso= request('piso');
        }else{
        	$inmueble->piso=0;
        }
        if(request('dormitorios')){
        	$inmueble->dormitorios= request('dormitorios');
        }else{
        	$inmueble->dormitorios=0;
        }
   	 	if(request('banos')){
        	$inmueble->banos= request('banos');
   	 	}else{
   	 		$inmueble->banos=0;
   	 	}
        $inmueble->detalles=request('detalles');
        if(request('monedaVenta')){
            $inmueble->monedaVenta=request('monedaVenta');
            $inmueble->valorVenta= str_replace(".", "", request('valorVenta') );
        }else{
            $inmueble->monedaVenta="ARS";
            $inmueble->valorVenta=0;
        }
        if(request('monedaAlquiler')){
            $inmueble->monedaAlquiler=request('monedaAlquiler');
            $inmueble->valorAlquiler= str_replace(".", "", request('valorAlquiler') );
        }else{
            $inmueble->monedaAlquiler="ARS";
            $inmueble->valorAlquiler=0;
        }

        try { 
            $inmueble->save();

            /*##########################CARGA DE RECURSOS###############################*/
            //Si la inmobiliaria no tiene su directorio, entonces lo crea
            if(! is_dir("images/inmuebles/".$inmueble["idInmobiliaria"]) ){
                mkdir("images/inmuebles/".$inmueble["idInmobiliaria"]);
            }
            //Luego genero una nueva ruta para el inmueble específico y creo su carpeta
            $target_path = "images/inmuebles/".$inmueble["idInmobiliaria"]."/".$inmueble->created_at->format('dmyHisv')."/";
            mkdir( $target_path, TRUE);


            //Cargo la lista de imágenes que no deben ser cargadas
            $noUpload = explode(";", request('listaBorrados'));
            
            //Guardo las imágenes que no se encuentren en la lista
            $countfiles = count($_FILES['file']['name']);
             for($i=0;$i<$countfiles;$i++){
               $filename = $_FILES['file']['name'][$i];
               if (!in_array($filename, $noUpload)) {
                    move_uploaded_file($_FILES['file']['tmp_name'][$i],$target_path.'/'.$filename);
                }
             }
             print("<script>alert('Cargado exitosamente')</script>");
            /*#########################FIN DE CARGA DE RECURSOS#############################*/
        } catch(\Illuminate\Database\QueryException $ex){  
            print("<script>alert('No se pudo cargar')</script>");
        }
     return view('inmueble.show', ['inmueble'=>$inmueble]);
    }

    public function edit($id){
        $inmueble = Inmueble::find($id);
        return view('inmueble.edit', ['inmueble'=>$inmueble]);
    }

    public function update(Request $request, $id){
        $inmueble = Inmueble::findOrFail($id);
        $inmueble->tipo=$request->get('tipo');
        $inmueble->idInmobiliaria= $request->get('idInmobiliaria');
        $inmueble->metrosCuadrados= $request->get('metrosCuadrados');
        $inmueble->calle=$request->get('calle');
        $inmueble->numero= $request->get('numero');
        $inmueble->localidad=$request->get('localidad');
        $inmueble->srcMap = explode('"', $request->get('srcMap'))[1];
        if($request->get('departamento')){
            $inmueble->departamento=$request->get('departamento');
        }else{
            $inmueble->departamento=0;
        }
        if($request->get('piso')){
            $inmueble->piso= $request->get('piso');
        }else{
            $inmueble->piso=0;
        }
        if($request->get('dormitorios')){
            $inmueble->dormitorios= $request->get('dormitorios');
        }else{
            $inmueble->dormitorios=0;
        }
        if($request->get('banos')){
            $inmueble->banos= $request->get('banos');
        }else{
            $inmueble->banos=0;
        }
        $inmueble->detalles=$request->get('detalles');
        if($request->get('monedaVenta')){
            $inmueble->monedaVenta=$request->get('monedaVenta');
            $inmueble->valorVenta= str_replace(".", "", $request->get('valorVenta') );
        }else{
            $inmueble->monedaVenta="ARS";
            $inmueble->valorVenta=0;
        }
        if($request->get('monedaAlquiler')){
            $inmueble->monedaAlquiler=$request->get('monedaAlquiler');
            $inmueble->valorAlquiler= str_replace(".", "", $request->get('valorAlquiler') );
        }else{
            $inmueble->monedaAlquiler="ARS";
            $inmueble->valorAlquiler=0;
        }
        try { 
            $inmueble->update();
             print("<script>alert('Cambios realizados correctamente')</script>");
        } catch(\Illuminate\Database\QueryException $ex){  
            print("<script>alert('No se pudo cargar')</script>");
        }
     return view('inmueble.show', ['inmueble'=>$inmueble]);
    }

    public function show($id){
        $inmueble = Inmueble::find($id);
        return view('inmueble.show', ['inmueble'=>$inmueble]);;
    }

    public function destroy($id){
        //DB::table('inmuebles')->where('id',$id)->delete();
        $inmueble = Inmueble::findOrFail($id);
        $inmueble->delete();
        return redirect('/inmuebles');
    }
}
