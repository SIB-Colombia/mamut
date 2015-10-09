'use strict';

angular.module('app.controllers.environmentalEnvelope',[])
.controller('EnvironmentalEnvelopeCtrl', ['$scope','referenceService', 'ancillaryDataService','environmentalEnvelopeService', function($scope,referenceService,ancillaryDataService,environmentalEnvelopeService) {
	$scope.formData.environmentalEnvelope = environmentalEnvelopeService;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
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
	
	$scope.removeEnvironmentalEnvelopeAtomized= function(list,environmentalEnvelopeAtomized){
		environmentalEnvelopeService.delete(list,environmentalEnvelopeAtomized);	
	};

	
}]);