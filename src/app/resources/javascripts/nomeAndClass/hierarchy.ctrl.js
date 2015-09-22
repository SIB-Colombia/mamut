'use strict';

angular.module('app.controllers')
.controller('HierarchyCtrl', ['$scope', function($scope) {
	$scope.hierarchy = {
		
	};
	$scope.formData.hierarchy = [];

	//Reference
	$scope.reference = {
		
	};

	//Ancillary
	$scope.ancillaryData = {
		
	};

	//ADD
	$scope.addHierarchy = function(hierarchy, hier) {
		if (hier.kingdom !== '') {
			hierarchy.push(hier);
			$scope.hierarchy = '';
		}
	};

	//DELETE
	$scope.removeHierarchy = function(hierarchy) {
		$scope.formData.hierarchy.splice(hierarchy,1);
	};
}]);