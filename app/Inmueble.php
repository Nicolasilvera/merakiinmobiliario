<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inmueble extends Model
{
    public $timestamps = true;
	protected $primaryKey = 'id';
	
    protected $fillable = [
    'idInmobiliaria',
    'tipo',
    'calle',
    'numero',
    'piso',
    'departamento',
    'dormitorios',
    'metrosCuadrados',
    'banos',
    'detalles',
    'localidad',
    'srcMap',
    'monedaAlquiler',
    'monedaVenta',
    'valorAlquiler',
    'valorVenta'
	];
}
