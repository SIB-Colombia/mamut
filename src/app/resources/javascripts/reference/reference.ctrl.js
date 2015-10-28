'use strict';

angular.module('app.controllers.reference',[])
.controller('ReferenceCrtl', ['$scope', 'referenceFactory', function($scope, referenceFactory){

	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	$scope.formData.references = [];
	var origR = angular.copy($scope.reference);

	$scope.addReferences = function(){
		if($scope.formData.references.length > 0){
			console.log('enviar');
		}
	};

	$scope.addReference = function (referenceList, reference){
		if (reference.source !== '') {
			referenceFactory.addTo(referenceList, reference);
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}
	};

	$scope.removeReference = function (referenceList, reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};

	$scope.cancelReference = function(referenceList,reference) {
		$scope.reference = angular.copy(origR);
	};
}]);
