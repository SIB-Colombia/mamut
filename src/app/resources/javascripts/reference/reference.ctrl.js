'use strict';

angular.module('app.controllers.reference',[])
.controller('ReferenceCrtl', ['$scope', 'ReferenceFactory', function($scope, ReferenceFactory){

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	var origR = angular.copy($scope.reference);

	$scope.addReferences = function(){
		if($scope.formData.references.length > 0){
			console.log('enviar');
		}
	};

	$scope.addReference = function (referenceList, reference){
		if (reference.source !== '') {
			referenceFactoryLocal.addTo(referenceList, reference);
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}
	};

	$scope.removeReference = function (referenceList, reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
	};
}]);
