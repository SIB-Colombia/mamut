'use strict';

angular.module('app.controllers.lifeCycle',[])
.controller('LifeCycleCtrl', ['$scope', 'referenceService', 'ancillaryDataService','lifeCycleService', function($scope,referenceService,ancillaryDataService,lifeCycleService) {
	$scope.formData.lifeCycle = lifeCycleService;
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

	$scope.removeLifeCycleAtomized= function(list,lifeCycleAtomized){
		lifeCycleService.delete(list,lifeCycleAtomized);	
	};
}]);