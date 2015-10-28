'use strict';

angular.module('app.controllers.abstract',[])
.controller('AbstractCtrl', ['$scope', function($scope) {
	$scope.formData.abstract = '';
	//ADD
	$scope.addAbstract = function() {
		if ($scope.formData.abstract !== '') {
			console.log('enviar cambios');
		}
	};
}]);