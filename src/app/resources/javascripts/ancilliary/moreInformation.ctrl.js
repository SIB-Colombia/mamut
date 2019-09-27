'use strict';

angular.module('app.controllers.moreInformation',[])
.controller('MoreInformationCtrl', ['$scope', '$http', function($scope,$http) {
	
	//ADD
	$scope.addMoreInformation = function() {
		var req_1 = {
			method: 'POST',
			url: 'http://51.38.179.153:3002/fichas/'+$scope.formData._id+'/more_information/',
			headers: {
			  'Content-Type': 'application/JSON'
			},
			data: { "id_user" : $scope.useremail,
				"moreInformation":$scope.formData.moreInformation

			}
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};
}]);
