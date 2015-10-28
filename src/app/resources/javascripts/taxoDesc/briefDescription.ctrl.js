'use strict';

angular.module('app.controllers.briefDescription',[])
.controller('BriefDescriptionCtrl', ['$scope', function($scope) {
	$scope.formData.briefDescription = '';
	//ADD
	$scope.addBriefDescription = function() {
		if ($scope.formData.briefDescription !== '') {
			console.log('enviar cambios');
		}
	};
}]);