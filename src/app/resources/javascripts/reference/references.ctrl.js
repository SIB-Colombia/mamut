'use strict';

angular.module('app.controllers')
.controller('ReferenceCrtl', ['$scope', 'referenceService', function($scope, referenceService){
	$scope.reference = referenceService.reference;

	$scope.addReference = function(ReferenceList, reference){
		if (reference.type !== '') {
			ReferenceList.push(reference);
			reference = '';
		}
	};
	$scope.removeReference = function(ReferenceList, reference){
		var index = ReferenceList.indexOf(reference);
		ReferenceList.splice(index);
	};

	$scope.addReferenceDirec = function(reference) {
		$scope.formData.references.push(reference);
		$scope.reference = {
			identifier: '',
			datatype: '',
			source: ''
		};
	};

	$scope.removeReferenceDirec = function() {
		var lastItem = $scope.formData.references.length - 1;
		$scope.formData.references.splice(lastItem);
	};

	$scope.$apply();
}]);