'use strict';

angular.module('app.controllers')
.controller('FeedingCtrl', ['$scope', function($scope) {
	$scope.thropic = {
		
	};
	$scope.feedingAtomizedType = {
		
	};
	$scope.formData.feeding = {
		
	};

	$scope.addFeedingAtomizedType = function(feedingAtomizedType, feeding) {
		if (feeding.type !== '') {
			feedingAtomizedType.push(feeding);
			$scope.feedingAtomizedType = {
				type: '',
				thropic: [],
				ancillaryData: []
			};
		}
	};

	$scope.addThropic = function(thropics, thropic) {
		if (thropic !== '') {
			thropics.push(thropic);
			$scope.thropic = {
				strategy: '',
				strategyRemarks: ''
			};
		}
	};

}]);