'use strict';

angular.module('app.controllers.managementAndConservation',[])
.controller('ManagementAndConservationCtrl', ['$scope','referenceService', 'ancillaryDataService','managementAndConservationAtomizedService', function($scope,referenceService,ancillaryDataService,managementAndConservationAtomizedService) {
	$scope.managementAndConservationAtomizedType = managementAndConservationAtomizedService.managementAndConservationAtomizedType;
	$scope.formData.usesManagementAndConservation = managementAndConservationAtomizedService.usesManagementAndConservation;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	var origMC = angular.copy($scope.managementAndConservationAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);
	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataService.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}		
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceService.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceService.deleteFrom(referenceList,reference);	
	};
	$scope.addManagementAndConservation = function(list, managementAndConservation) {
		managementAndConservationAtomizedService.managementAndConservationAtomizedType.add(list, managementAndConservation);
		//Reset the scope variable
		$scope.managementAndConservationAtomizedType = origMC;
		origMC = angular.copy($scope.managementAndConservationAtomizedType);
	};
	$scope.removeManagementAndConservation = function(list, managementAndConservation) {
		managementAndConservationAtomizedService.managementAndConservationAtomizedType.delete(list, managementAndConservation);
	};
	
}]);