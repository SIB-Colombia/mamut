'use strict';

angular.module('app.controllers.identificationKeys',[])
.controller('IdentificationKeysCtrl', ['$scope','referenceService','ancillaryDataService','identificationKeysService', function($scope,referenceService,ancillaryDataService,identificationKeysService) {
	$scope.formData.identificationKeys = identificationKeysService;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	
	//reset variables
	var origR = angular.copy($scope.referenceSN);
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
}]);