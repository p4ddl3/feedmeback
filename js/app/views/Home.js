define(function(require){

	    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        FeedbackListView 	= require('app/views/FeedbackList'),
        tpl                 = require('text!tpl/Home.html'),
        models				= require('app/models/feedback'),

        template = _.template(tpl);

        return Backbone.View.extend({
        	initialize : function(){
        		this.render();
        	},

        	render: function(){
        		this.$el.html(template());
        		return this;
        	}
        });

});