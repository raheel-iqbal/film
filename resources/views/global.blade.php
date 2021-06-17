<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script>
        window.BASE_URL = "{{ url('/') }}";
        window.API_URL = "{{ url('/') }}/api/";
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js" defer></script>
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <style>
        .invalid-feedback {
            display: block !important;
        }
        .react-date-picker__wrapper {
            border: unset !important;
        }
    </style>

    <script defer>
        setTimeout(() => {
            let t1 = gsap.timeline();
            let t2 = gsap.timeline();
            let t3 = gsap.timeline();

            t1.to(".errCog1",
                {
                    transformOrigin:"50% 50%",
                    rotation:"+=360",
                    repeat:-1,
                    ease:Linear.easeNone,
                    duration:8
                });

            t2.to(".errCog2",
                {
                    transformOrigin:"50% 50%",
                    rotation:"-=360",
                    repeat:-1,
                    ease:Linear.easeNone,
                    duration:8
                });

            t3.fromTo(".wrong-para",
                {
                    opacity:0
                },
                {
                    opacity:1,
                    duration:1,
                    stagger:{
                        repeat:-1,
                        yoyo:true
                    }
                });
        }, 1000);
    </script>
</head>
<body>
<div id="app"></div>
</body>
</html>
