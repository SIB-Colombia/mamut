'use strict';

angular.module('app.controllers')
.controller('PopulationBiologyCtrl', ['$scope', function($scope) {
	$scope.populationBiologyAtomized = {
		
	};
	$scope.formData.populationBiology = {
		
	};


	$scope.addPopulationBiology = function(populationBiologyAtomized) {
		if (populationBiologyAtomized.region !== '') {
			$scope.formData.populationBiology.populationBiologyAtomized.push(populationBiologyAtomized);
			$scope.populationBiologyAtomized = '';
		}
	};
}]);