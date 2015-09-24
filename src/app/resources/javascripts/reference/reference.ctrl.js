'use strict';

angular.module('app.controllers')
.controller('ReferenceCrtl', ['$scope', 'referenceService', function($scope, referenceService) {

	$scope.reference = referenceService;
	$scope.formData.references = [];
	//$scope.reference = referenceService.reference;

	$scope.addReference = function (referenceList, reference){
		if (reference.source !== '') {
			referenceService.addTo(referenceList, reference);
			$scope.reference = '';
		}
	};

	$scope.removeReference = function (referenceList, reference){
		referenceService.deleteFrom(referenceList,reference);
	};
}]);
