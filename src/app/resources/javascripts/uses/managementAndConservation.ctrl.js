'use strict';

angular.module('app.controllers.managementAndConservation',[])
.controller('ManagementAndConservationCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','managementAndConservationAtomizedFactory', function($scope,referenceFactory,ancillaryDataFactory,managementAndConservationAtomizedFactory) {
	
	var managementAndConservationAtomizedFactory = new managementAndConservationAtomizedFactory();
	$scope.managementAndConservationAtomizedType = managementAndConservationAtomizedFactory.managementAndConservationAtomizedType;
	$scope.formData.usesManagementAndConservation = managementAndConservationAtomizedFactory.usesManagementAndConservation;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origMC = angular.copy($scope.managementAndConservationAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addManagementAndConservation = function(list, managementAndConservation) {
		managementAndConservationAtomizedFactory.add(list, managementAndConservation);
		//Reset the scope variable
		$scope.managementAndConservationAtomizedType = origMC;
		origMC = angular.copy($scope.managementAndConservationAtomizedType);
	};

	$scope.removeManagementAndConservation = function(list, managementAndConservation) {
		managementAndConservationAtomizedFactory.delete(list, managementAndConservation);
	};

	$scope.editManagementAndConservation = function(list, managementAndConservation) {
		$scope.managementAndConservationAtomizedType = angular.copy(managementAndConservation);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};
	
}]);