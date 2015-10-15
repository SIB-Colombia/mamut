'use strict';

angular.module('app.controllers.habitat',[])
.controller('HabitatsCtrl', ['$scope','referenceService', 'ancillaryDataService','habitatsService', function($scope,referenceService,ancillaryDataService,habitatsService) {
	
	//habitat
	$scope.formData.habitat = habitatsService;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;

	//Local variables for reset objects
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

	$scope.removeHabitatAtomized= function(list,habitatAtomized){
		habitatsService.delete(list,habitatAtomized);	
	};
}]);