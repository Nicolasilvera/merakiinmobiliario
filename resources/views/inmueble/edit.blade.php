@extends('layouts.servidor')
@section('content')
    <form action="{{route('inmuebles.update', $inmueble->id)}}" id="form" method="POST">
        @method('PATCH')     
        @csrf
        <input
            type="number"
            id= "idInmobiliaria"
            name="idInmobiliaria"
            hidden
            value={{auth()->id()}}
        />
        <input id="idInmueble" name="idInmueble" value=<?php echo $inmueble->id;?> hidden/>
        <input id="userLogeado" type="number" value=<?php echo(auth()->id()) ?> hidden/>
        <div id="edit"></div>
    </form>
     <script type="text/javascript" src="/js/app.js"></script>
@endsection
