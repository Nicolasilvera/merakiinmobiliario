<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <link rel="icon" href="/images/minilogo.png" type="image/gif" sizes="16x16">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Gestor de Inmueble</title>
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/custom.css">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <!-- Styles -->
    </head>
    <body>
        <input id="logeado" name="logeado" value=<?php echo(auth()->user()['username']);?> hidden />
        <div id="AdminHeader"></div>
        <div class="content">
            @yield('content')
        </div>
        <div id="WAButton"></div>
    </body>

    <!--SECCIÓN JQUERY-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
      $("#logout").click(function(){
        var logout = confirm("¿Seguro que desea cerrar su sesión?");
        if (logout == true) {
           location.href = "/logout";
        }
      });
      $("#deletingInmueble").click(function(){
        var eliminar = confirm("¿Seguro que desea cerrar eliminar éste Inmueble");
        if (eliminar == true) {
           location.href = "/inmuebles/delete/"+document.getElementById('idInmueble').value;
        }
      });
    });
    </script>

    <!--Incluir componentes de app.js-->
    <script type="text/javascript" src="../js/app.js"></script>
</html>