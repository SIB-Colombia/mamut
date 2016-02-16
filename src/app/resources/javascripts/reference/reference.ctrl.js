'use strict';

angular.module('app.controllers.reference',[])
.controller('ReferenceCrtl', ['$scope', 'ReferenceFactory', function($scope, ReferenceFactory){

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	$scope.update = false;
	$scope.OriginalReferenceIndex = -1;
	
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
		if($scope.update){
			if ($scope.OriginalReferenceIndex !== -1) {
			    referenceList[$scope.OriginalReferenceIndex] = angular.copy(reference);
			    $scope.reference = origR;
				origR = angular.copy($scope.reference);
			}
		}else{ 
			if(JSON.stringify(reference) !== JSON.stringify(origR)){
				referenceFactoryLocal.addTo(referenceList, reference);
				$scope.reference = origR;
				origR = angular.copy($scope.reference);
			}
		}
		$scope.checked = !$scope.checked;
	};

	$scope.removeReference = function (referenceList, reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$scope.update =true;
		$scope.OriginalReferenceIndex = referenceList.indexOf(reference);
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
	};
}]);
