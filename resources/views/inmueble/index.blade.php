@extends('layouts.servidor')
@section('content')
    <div id="index"></div>
    <input id="userLogeado" type="number" value=<?php echo(auth()->id()) ?> hidden/>
@endsection
