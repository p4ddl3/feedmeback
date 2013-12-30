require.config({

		    baseUrl: 'js/lib',

		    paths: {
		        app: '../app',
		        tpl: '../tpl'
		    },

		    shim: {
		        'backbone': {
		            deps: ['underscore', 'jquery'],
		            exports: 'Backbone'
		        },
		        'underscore': {
		            exports: '_'
		        }
		    }
});


require(['jquery', 'backbone'], function ($, Backbone) {
			$('body').html('<span>test</span>');
		    /*var router = new Router();

		    $("body").on("click", ".back-button", function (event) {
		        event.preventDefault();
		        window.history.back();
		    });
		    Backbone.history.start();*/
});