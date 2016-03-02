requirejs.config({
    "baseUrl": "/",
    "paths": {
        'config': '/script/config.js?noext',
        'jquery': "/bower_components/jquery/dist/jquery",
        'tinyMCE': "/bower_components/tinymce/tinymce"
    },
    "shim": {
        "jquery": {
            exports: '$'
        },
        "tinyMCE": {
            exports: 'tinyMCE',
            init: function () {
                this.tinyMCE.DOM.events.domLoaded = true;
                this.tinyMCE.baseURL = "/bower_components/tinymce/";// trailing slash important;
                return this.tinyMCE;
            }
        }
    }
});

requirejs(['tinyMCE'], function (tinyMCE) {
    console.log(tinyMCE);
    tinyMCE.init({selector: 'textarea'});
});