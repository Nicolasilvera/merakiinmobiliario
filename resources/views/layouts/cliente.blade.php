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
        <div id="ClientHeader"></div>
        <div class="content">
            @yield('content')
        </div>
        <div id="WAButton"></div>
    </body>

    <script type="text/javascript" src="../js/app.js"></script>
</html>