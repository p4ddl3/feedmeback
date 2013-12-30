define(function(require){

	"use strict";

	var $ 			= require('jquery'),
		_			= require('underscore'),
		Backbone	= require('backbone'),
		tpl			= require('text!tpl/FeedbackForm.html'),

		template = _.template(tpl);

		return Backbone.View.extend({

			initialize: function(){
				this.render();
			},
			events:{
				"click #localstorage-button" : "localstore"
			},
			render: function(){
				this.$el.html(template());
				return this;
			},
			localstore: function(){
				var feedback = {
					cityName: 		$("#cityname").val(),
					placeName: 		$("#placename").val(),
					situation: 		$("#situation").val(),
					productBrand: 	$("#product-brand").val(),
					comment: 		$("#comment").val()
				};
				alert("local store " 	+ feedback.cityName+", "
										+ feedback.placeName+", "
										+ feedback.situation+", "
										+ feedback.productBrand+","
										+ feedback.comment

										);
			}
		});
});