'use strict';

angular.module('app.controllers')
.controller('AnnualCyclesCtrl', ['$scope', function($scope) {
	$scope.annualCycleAtomizedType = {
		
	};
	$scope.formData.annualCycle = {
		
	};

	$scope.addAnnualCycleAtomizedType = function(annualCycleAtomizedType, annualCycle) {
		if (annualCycle.Event !== '') {
			annualCycleAtomizedType.push(annualCycle);
			$scope.annualCycleAtomizedType = {
				Event: '',
				startTimeInterval: '',
				endTimeInterval: '',
				ancillaryData: []
			};
		}
	};
}]);