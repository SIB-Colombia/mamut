'use strict';

angular.module('app.controllers.moreInformation',[])
.controller('MoreInformationCtrl', ['$scope', function($scope) {
	
	//ADD
	$scope.addMoreInformation = function() {
		if ($scope.formData.moreInformation !== '') {
			console.log('enviar cambios');
		}
	};
}]);