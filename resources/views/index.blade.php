<!doctype html>
<html ng-app="app">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>PM Legal</title>

    <meta name="theme-color" content="#0690B7">

    <link rel="manifest" href="{!! base_uri(url('/')) !!}/manifest.json">

    <base href="{!! base_uri(url('/')) !!}/">

    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '{!! base_uri(url('/')) !!}/unsupported-browser'</script>
    <![endif]-->

    <style><?php require(public_path("css/critical.css")) ?></style>

</head>
<body>
    <app-shell>
        <div id="app-shell-header">

        </div>
        <div id="app-shell-content"></div>
    </app-shell>


    <app-root></app-root>


    <script>
	var basePath = "{!! base_uri(url('/')) !!}";
	var baseAPIUrl = "{!! base_uri(url('/')) !!}/api/";
    (function(){
        var link = document.createElement("link");
        link.href = "{!! base_uri(url('/')) !!}{!! elixir('css/final.css') !!}";
        link.type = "text/css";
        link.rel = "stylesheet";
        document.body.appendChild(link);
    })();
    </script>

    <script src="{!! base_uri(url('/')) !!}{!! elixir('js/final.js') !!}" async></script>

</body>
</html>
