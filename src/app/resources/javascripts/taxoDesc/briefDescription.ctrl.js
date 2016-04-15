'use strict';

angular.module('app.controllers.briefDescription',[])
.controller('BriefDescriptionCtrl', ['$scope', '$http', function($scope, $http) {
	//ADD
	$scope.addBriefDescription = function() {
		var req_1 = {
			 method: 'POST',
			 url: 'http://192.168.220.86:3000/fichas/'+$scope.formData._id+'/brief_description/',
			 headers: {
			   'Content-Type': 'application/JSON'
			 },
			 data: { "id_user" : "01",
			 		"briefDescription":$scope.formData.briefDescription

			 }
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};
}]);