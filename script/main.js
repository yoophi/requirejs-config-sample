requirejs.config({
    "baseUrl": "/",
    "paths": {
        'config': '/script/config.js?noext',
        'jquery': "/bower_components/jquery/dist/jquery"

    },
    "shim": {
        "jquery": {
            exports: '$'
        }
    }
});

requirejs(['config', 'jquery'], function (config, $) {
    console.log(config.foo);
    console.log($().jquery);
});