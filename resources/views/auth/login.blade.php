@extends('layouts.cliente')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h1>{{ __('Ingresar') }}</h1>
                    <h5 style="text-align: center; color:white">Sólo deberás loguearte si estás a cargo de una inmobiliaria</h5>
                    </small>
                </div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Correo electrónico" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required placeholder="Contraseña" autocomplete="off">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="col-md-12 form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                <label class="form-check-label" for="remember">
                                    {{ __('Recordar contraseña para sesiones futuras') }}
                                </label>
                        </div>
                        <button type="submit" class="btn btnCard">
                            {{ __('¡Ingresar!') }}
                        </button>
                        <br/><hr/>
                        <center class="col-md-12 row" style="text-align: center;">
                            <label class="col-12">Opciones adicionales</label>
                                <a href="register" class="btn btn-secondary col-5">¡Registrate acá!</a>
                            @if (Route::has('password.request'))
                                <a class="btn btn-secondary col-5 offset-2" href="{{ route('password.request') }}">
                                    {{ __('¿Olvidaste tu contraseña?') }}
                                </a>
                            @endif
                        </center>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
