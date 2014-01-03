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
				var remember_me = window.localStorage.getItem("remember_me");
				if(remember_me === null || remember_me === ""){
					this.render();
				}else{
					alert("connected as " + remember_me);
					window.location.href = "#home";
				}
				
			},

			render: function(){
				this.$el.html(template());
				return this;
			},
			
			connect : function(){
				var credentials = { email:$("#connection-email-address").val(), password:$("#connection-password").val()};
				var remember_me = document.getElementById("connection-remember-me").checked;
				if(remember_me === true){
					window.localStorage.setItem("remember_me", credentials.email);
					window.localStorage.setItem("user", credentials.email);
					alert('email saved');
				}else{
					window.localStorage.setItem("remember_me", null);
				}
				 $.getJSON('http://feedmeback.alwaysdata.net/index.php?callback=?','method_name=connexion'+'&email='+credentials.email+'&password='+credentials.password,function(res){
    				if(res.content === "granted"){
    					window.localStorage.setItem("user", credentials.email);
    					window.location.href = "#home";
    				}else{
    					alert("Email/mot de passe incorrect");
    				}
					});
			}			
		});
});