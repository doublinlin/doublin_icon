<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Doublin Icon</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ url('favicon/favicon.ico') }}" type="image/x-icon" />
    <link rel="apple-touch-icon" sizes="180x180" href="{{ url('favicon/apple-touch-icon.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ url('favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('favicon/favicon-16x16.png') }}">
    <!-- <link rel="manifest" href="{{ url('favicon/site.webmanifest') }}"> -->

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- script -->
    <script src="{{ asset('js/app.js') }}" defer></script>

</head>
<body>
    <div id="app" class="wrapper">
        <div id="loading">
            <Loading/>
        </div>
        
        <div id="header">
            <Header/>
        </div>

        <main class="py-4">
            @yield('content')
        </main>

        <div id="footer">
            <Footer/>
        </div>
    </div>
</body>
</html>
