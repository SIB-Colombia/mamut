'use strict';

angular.module('app.controllers.abstract',[])
.controller('AbstractCtrl', ['$scope', '$http', function($scope, $http) {
	//ADD
	$scope.addAbstract = function() {
		var req_1 = {
			method: 'POST',
			url: 'http://51.38.179.153:3002/fichas/'+$scope.formData._id+'/abstract/',
			headers: {
			  'Content-Type': 'application/JSON'
			},
			data: { "id_user" : $scope.useremail,
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
