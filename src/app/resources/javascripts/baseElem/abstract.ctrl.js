'use strict';

angular.module('app.controllers.abstract',[])
.controller('AbstractCtrl', ['$scope', '$http', function($scope, $http) {
	//ADD
	$scope.addAbstract = function() {
		var req_1 = {
			method: 'POST',
			url: 'http://192.168.220.86:3000/fichas/'+$scope.formData._id+'/abstract/',
			headers: {
			  'Content-Type': 'application/JSON'
			},
			data: { "id_user" : "01",
				"abstract":$scope.formData.abstract
			}
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};
}]);