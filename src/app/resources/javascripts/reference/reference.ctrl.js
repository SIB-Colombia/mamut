'use strict';

angular.module('app.controllers.reference',[])
.controller('ReferenceCrtl', ['$scope', 'referenceService', function($scope, referenceService){

	
	$scope.formData.references = [];
	$scope.reference = referenceService;

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
