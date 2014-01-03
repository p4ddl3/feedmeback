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
				"click #localstorage-button" : "localstore",
				"click #takePhoto" : "takePhoto",
				"click #getPhotoFromLibrary" : "takePhoto"
			},
			render: function(){
				this.$el.html(template());
				return this;
			},
			localstore: function(){
				var feedback = {
					cityName: 		$("#cityname").val(),
					placeName: 		$("#placename").val(),
					comment: 		$("#comment").val(),
					placeType: 		document.getElementById("place-type").checked===true?"ALI":"CHR",
					like: 			document.getElementById("like").checked===false?"like":"dislike",
					date: 			new Date()
				};
				feedback.situation = this.getSituations();
				feedback.productBrand = this.getBrand();
				feedback.user = window.localStorage.getItem("user");

				if(feedback.situation != null && feedback.productBrand != null){

				alert(					"cityname: "+		feedback.cityName+", "
										+ "\nplace: "+		feedback.placeName+", "
										+ "\nsituation: "+	feedback.situation+", "
										+ "\nbrand: "+		feedback.productBrand+","
										+ "\ncomment: "+	feedback.comment+","
										+"\nlike: "+		feedback.like+", "
										+"\nplace: "+		feedback.placeType+","
										+"\nuser: "+ 		feedback.user+","
										+"\ndate: "+ 		feedback.date
										);

			$.getJSON('http://feedmeback.alwaysdata.net/index.php?callback=?',
																'method_name=addfeedback'+
																'&cityName='		+feedback.cityName+
																'&placeName='		+feedback.placeName+
																'&situation='		+feedback.situation+
																'&productBrand='	+feedback.productBrand+
																'&comment='			+feedback.comment+
																'&like='			+feedback.like+
																'&placeType='		+feedback.placeType+
																'&authorEmail='		+feedback.user+
																'&date='			+feedback.date,
																function(res){
    				if(res.content === "stored"){
    					alert("Feedback enregistré");
    					window.location.href = "#home";
    				}
					});
				}else{
					alert("Vous devez remplir tous les champs !");
				}

			},
			getSituations: function(){
				var checkBoxes = document.getElementsByName("situation");
				var checkBoxesChecked = [];
				for(var i=0; i < checkBoxes.length; i++){
					if(checkBoxes[i].checked){
						checkBoxesChecked.push(checkBoxes[i].value);
					}
				}
				return checkBoxesChecked.length>0?checkBoxesChecked:null;
			},

			getBrand: function(){
				var radio = document.getElementsByName("brand");
				var radioChecked = null;
				for(var i=0; i < radio.length; i++){
					if(radio[i].checked){
						radioChecked = (radio[i].value);
					}
				}
				return radioChecked;
			},
			takePhoto: function(event) {
				var sourceType = $(event.target).data('source');
			    event.preventDefault();
			    if (!navigator.camera) {
			        alert("Camera API not supported" + sourceType, "Error");
			        return;
			    }
			    var options =   {   quality: 50,
			                        destinationType: Camera.DestinationType.DATA_URL,
			                        sourceType: sourceType,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
			                        encodingType: 0     // 0=JPG 1=PNG
			                    };
			 
			    navigator.camera.getPicture(
			        function(imageData) {
			            alert("ok!");
			        },
			        function() {
			            alert("pas ok :/");
			        },
			        options);
			 
			    return false;
			}

		});
});