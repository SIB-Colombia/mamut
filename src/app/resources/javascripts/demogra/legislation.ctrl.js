'use strict';

angular.module('app.controllers.legislation',[])
.controller('LegislationCtrl', ['$scope','referenceService', 'ancillaryDataService','legislationService', function($scope,referenceService,ancillaryDataService,legislationService) {
	$scope.legislationAtomizedType = legislationService.legislationAtomizedType;
	$scope.formData.legislation = legislationService.legislation;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	var origLA = angular.copy($scope.legislationAtomizedType);
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

	$scope.addLegislationAtomized= function(list,legislationAtomized){
		if(legislationAtomized.legislationName !== ''){
			legislationService.legislation.add(list,legislationAtomized);
			//Reset the scope variable
			$scope.legislationAtomizedType = origLA;
			origLA = angular.copy($scope.legislationAtomizedType);
		}	
	};
	$scope.removeLegislation = function(list, legislationAtomized) {
		legislationService.legislation.delete(list,legislationAtomized);
	};
}]);