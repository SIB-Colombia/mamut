'use strict';

angular.module('app.controllers.annualCycle',[])
.controller('AnnualCyclesCtrl', ['$scope', 'referenceService', 'ancillaryDataService','annualCyclesService',function($scope,referenceService,ancillaryDataService,annualCyclesService) {
	$scope.annualCycleAtomizedType = annualCyclesService.annualCycleAtomizedType;
	$scope.formData.annualCycle = annualCyclesService.annualCycle;

	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	var origAU = angular.copy($scope.annualCycleAtomizedType);
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

	$scope.addAnnualCycleAtomizedType = function(annualCycleAtomizedType, annualCycle) {
		if (annualCycle.Event !== '') {
			annualCyclesService.annualCycleAtomizedType.add(annualCycleAtomizedType, annualCycle);
			$scope.annualCycleAtomizedType = origAU;
			origAU = angular.copy($scope.annualCycleAtomizedType);
		}
	};
}]);