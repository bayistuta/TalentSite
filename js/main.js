var config;

config = {
    baseUrl: "../js/",
    paths: {
        "jquery": "vendor/jquery/jquery-1.9.1.min",
        "jquery-ui": "vendor/jquery.ui/jquery-ui.min",
        "selectBox": "vendor/jquery.selectBoxIt/jquery.selectBoxIt.min",
        "bootstrap": "vendor/bootstrap/bootstrap.min",
        "gallery": "vendor/blueimp-gallery/js/bootstrap-image-gallery.min",
        "angular": "vendor/AngularJS/angular.min",
        "angular-route": "vendor/AngularJS/angular-route.min",
        "angular-cookie": "vendor/AngularJS/angular-cookies.min",
        "domReady": "vendor/RequireJS/domReady",
        "app": "app/app"
    },
    shim: {
        "jquery": {
            exports: "jquery"
        },
        "angular": {
            exports: "angular"
        },
        "angular-route": {
            deps: ["angular"]
        },
        "angular-cookie": {
            deps: ["angular"]
        },
        "bootstrap": {
            deps: ["jquery"]
        },
        "gallery": {
            deps: ["bootstrap"]
        },
        "jquery-ui":{
            deps: ["jquery"],
            exports: "jQuery.ui"
        },
        "selectBox": {
            deps: ["jquery-ui"]
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
};

requirejs.config(config);

//load js libraries for page
require(["jquery", "bootstrap","angular","angular-route","app"],function($){
    angular.bootstrap(document,["talentSiteApp"]);
});
