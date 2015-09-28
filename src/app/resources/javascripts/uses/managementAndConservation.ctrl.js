'use strict';

angular.module('app.controllers.managementAndConservation',[])
.controller('ManagementAndConservationCtrl', ['$scope', function($scope) {
	$scope.managementAndConservationAtomizedType = {
		
	};
	$scope.formData.usesManagementAndConservation = {
		
	};

	$scope.addManagementAndConservation = function(managementAndConservation) {
		$scope.formData.usesManagementAndConservation.managementAndConservationAtomized.push(managementAndConservation);
		$scope.managementAndConservationAtomizedType = {
			type: '',
			objective: '',
			managementPlan: '',
			actions: [],
			humanAndEnvironmentalrelevanc: '',
			ancillaryData: []
		};
	};
}]);