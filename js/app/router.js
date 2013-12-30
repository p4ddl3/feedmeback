define(function (require) {

    "use strict";

    var $               = require('jquery'),
        Backbone        = require('backbone'),
        PageSlider      = require('app/utils/pageslider'),
        ConnectionView  = require('app/views/connection'),

        slider = new PageSlider($('body')),

        connectionView = new ConnectionView();

    return Backbone.Router.extend({

        routes: {
            "": "connectionPage",
            "home": "home",
            "feedbackForm": "feedbackForm"
        },
        connectionPage: function(){
            alert("connectionView");
            connectionView.delegateEvents();
            slider.slidePage(connectionView.$el);
        },
        home: function(){
            require(["app/views/Home"], function(HomeView){
                slider.slidePage(new HomeView().$el);
            });
        },
        feedbackForm: function(){
            require(["app/views/FeedbackForm"], function(FeedbackFormView){
                slider.slidePage(new FeedbackFormView().$el);
            });
        }
    });

});