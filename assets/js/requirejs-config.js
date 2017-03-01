require.config({
    baseUrl: "/assets/js",
    paths: {
        bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap",
        jquery: "../../bower_components/jquery/dist/jquery",
        backbone: "../../bower_components/backbone/backbone",
        underscore: "../../bower_components/underscore/underscore",
        requirejs: "../../bower_components/requirejs/require",
        text: "../../bower_components/text/text",
        marked: "../../bower_components/marked/lib/marked"
    },
    shim: {
        bootstrap: {
            deps: [
                "jquery"
            ]
        }
    },
    packages: [

    ]
});

// Загружаем наше приложение (главный скрипт)
require( [ "app" ] );