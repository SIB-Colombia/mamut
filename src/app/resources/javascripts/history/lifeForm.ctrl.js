'use strict';

angular.module('app.controllers.lifeForm',[])
.controller('LifeFormCtrl', ['$scope','referenceService', 'ancillaryDataService','lifeFormService', function($scope,referenceService,ancillaryDataService,lifeFormService) {
	
	//LifeForm
	$scope.formData.lifeForm = lifeFormService;
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
	
	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataService.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.removeReference = function(referenceList,reference){
		referenceService.deleteFrom(referenceList,reference);	
	};

	$scope.removeLifeFormAtomized= function(list,lifeFormAtomized){
		lifeFormService.delete(list,lifeFormAtomized);	
	};
}]);