define(function(requrire){
	"use strict";

	var $					= require('jquery'),
		_					= require('underscore'),
		Backbone			= require('backbone'),
		tpl					= require('text!tpl/Connection.html'),

		template = _.template(tpl);

		return Backbone.View.extend({

			events:{
				"click #connection" : "connect"
			},

			initialize: function(){
				this.render();
			},

			render: function(){
				this.$el.html(template());
				return this;
			},
			
			connect : function(){
				var credentials = { email:$("#connection-email-address").val(), password:$("#connection-password").val()};
				var remember_me = $("#connection-remember-me").val();
				 $.getJSON('http://feedmeback.alwaysdata.net/index.php?callback=?','method_name=connexion'+'&email='+credentials.email+'&password='+credentials.password,function(res){
    				if(res.content === "granted"){
    					window.location.href = "#home";
    				}else{
    					alert("Email/mot de passe incorrect");
    				}
					});
			}			
		});
});