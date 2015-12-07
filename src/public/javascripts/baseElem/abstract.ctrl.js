'use strict';

angular.module('app.controllers.abstract',[])
.controller('AbstractCtrl', ['$scope', function($scope) {
	//ADD
	$scope.addAbstract = function() {
		if ($scope.formData.abstract !== '') {
			console.log('enviar cambios');
		}
	};
}]);