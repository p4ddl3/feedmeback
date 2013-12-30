define(function(require){

	"use strict";

	var $			= require('jquery'),
	Backbone 		= require('backbone'),



	Feedback = Backbone.Model.extend({
		urlRoot:'localhost/feedmeback-api/index.php/feedbacks'
	}),

	FeedbackCollection = Backbone.Collection.extend({
		model : Feedback,
		url:'localhost/feedmeback-api/index.php/feedbacks'
	});

	return {
		Feedback : Feedback,
		FeedbackCollection: FeedbackCollection
	};

});