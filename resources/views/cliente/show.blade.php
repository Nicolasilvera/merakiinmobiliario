@extends('layouts.cliente')
@section('content')
	<input id="idInmueble" name="idInmueble" value=<?php echo $inmueble->id;?> hidden/>
    <div id="show"></div>
@endsection
