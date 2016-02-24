'use strict';

angular.module('app.controllers.reference',[])
.controller('ReferenceCrtl', ['$scope', 'ReferenceFactory', function($scope, ReferenceFactory){

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	$scope.index_reference = '';
	
	var origR = angular.copy($scope.reference);

	$scope.checked = false; // This will be binded using the ps-open attribute

	$scope.slide = function(){
        $scope.checked = !$scope.checked;
    };

	$scope.addReferences = function(){
		if($scope.formData.references.length > 0){
			console.log('enviar');
		}
	};

	$scope.addReference = function (referenceList, reference){
		//if index is different to '' then replace the item because is an edit option
		referenceFactoryLocal.addTo(referenceList, reference, $scope.index_reference);
		
		$scope.reference = angular.copy(origR);
		origR = angular.copy($scope.reference);
		$scope.checked = !$scope.checked;
		$scope.index_reference = '';
	};

	$scope.removeReference = function (referenceList, reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference,index) {
		$scope.index_reference = index;
		$scope.reference = angular.copy(reference);
		$scope.checked = !$scope.checked;
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
		$scope.index_reference = '';
	};
}]);
