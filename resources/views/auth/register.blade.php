@extends('layouts.cliente')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header w-100" style="text-align: center;"><h2>Registro</h2>
                    <small>¡Con tu registro podrás gestionar la publicación de los inmuebles que querés ofrecer, para poder poder contar con un universo amplio de potenciales clientes!</small></div>
                <div class="card-body" style="text-align: left;">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="off" placeholder={{ __('Usuario') }} autofocus>

                                @error('username')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="off" placeholder={{ __('Nombre') }} autofocus>
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        
                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required placeholder="Correo electrónico" autocomplete="email">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" placeholder={{ __('Contraseña') }} required autocomplete="off">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-8 offset-md-2">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="off" placeholder="Confirme su contraseña">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-2 ">
                                <button type="submit" class="btn btnCard w-100">
                                    {{ __('¡Registrarme!') }}
                                </button>
                            </div>
                        </div>
                         <div class="col-md-10 offset-md-1" style="text-align: center;">
                             <label style="padding: 0; color: darkgrey;">¿Ya tenés cuenta?  --> </label> 
                             <a href="login" style="color:cyan;"><u>¡Ingresá acá!</u></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
