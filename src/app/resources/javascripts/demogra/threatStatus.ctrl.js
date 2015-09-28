'use strict';

angular.module('app.controllers.threatStatus',[])
.controller('ThreatStatusCtrl', ['$scope', function($scope) {
	$scope.threatStatusClass = {
		
	};
	$scope.formData.threatStatus = [];

	$scope.addThreatStatusClass = function(threatStatusClass) {
		if (threatStatusClass.threatStatusAtomized.threatCategory !== '') {
			$scope.formData.threatStatus.push(threatStatusClass);
			$scope.threatStatusClass = '';
		}
	};
}]);