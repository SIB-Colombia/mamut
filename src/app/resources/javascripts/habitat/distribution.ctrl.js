'use strict';

angular.module('app.controllers')
.controller('DistributionCtrl', ['$scope', function($scope) {
	$scope.distributionOpt2 = {
		
	};
	$scope.distributionClass = {
		
	};
	$scope.formData.distribution = [];

	$scope.addDistributionOpt2 = function(distribution, opt2) {
		if (opt2.country !== undefined) {
			distribution.push(opt2);
			$scope.distributionOpt2 = {
				country: '',
				stateProvince: '',
				county: '',
				municipality: '',
				locality: ''
			};
		}
	};

	$scope.removeDistribution = function() {
		var lastItem = $scope.formData.distribution.length - 1;
		$scope.formData.distribution.splice(lastItem);
	};

}]);