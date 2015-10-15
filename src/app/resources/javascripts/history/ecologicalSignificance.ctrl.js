'use strict';

angular.module('app.controllers.ecologicalSignificance',[])
.controller('EcologicalSignificanceCtrl', ['$scope','referenceService', 'ancillaryDataService','ecologicalSignificanceService', function($scope,referenceService,ancillaryDataService,ecologicalSignificanceService) {
	$scope.formData.ecologicalSignificance = ecologicalSignificanceService;
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
	
	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataService.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.removeReference = function(referenceList,reference){
		referenceService.deleteFrom(referenceList,reference);	
	};

	$scope.removeEcologicalSignificanceAtomized= function(list,ecologicalSignificanceAtomized){
		ecologicalSignificanceService.delete(list,ecologicalSignificanceAtomized);	
	};
}]);