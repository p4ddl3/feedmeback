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
C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common
;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;
D:\Programmes\TortoiseSVN\bin;
D:\Programmes\graphviz\bin;
D:\Programmes\Python;D:\Programmes\Python\Scripts;
D:\Programmes\jdk1.7.0_25\bin;
D:\Programmes\jdk1.7.0_25\lib;
D:\Programmes\nodejs\;
C:\Program Files (x86)\MySQL\MySQL Utilities 1.3.5\;
D:\Simon\AppData\Roaming\npm;D:\Simon\Etudes\Java-libs\apache-ant-1.9.2\bin


