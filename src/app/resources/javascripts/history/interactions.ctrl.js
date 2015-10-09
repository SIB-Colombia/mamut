'use strict';

angular.module('app.controllers.interactions',[])
.controller('InteractionsCtrl', ['$scope','referenceService', 'ancillaryDataService','interactionsService', function($scope,referenceService,ancillaryDataService,interactionsService) {
	$scope.interactionsAtomizedType = interactionsService.interactionsAtomizedType;
	$scope.formData.interactions = interactionsService.interactions;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	var origIA = angular.copy($scope.interactionsAtomizedType);
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

	$scope.addInteractionAtomizedType = function(list,interactionsAtomizedType){
		if(interactionsAtomizedType.interactionSpecies !== ''){
			interactionsService.interactions.add(list,interactionsAtomizedType);
			//Reset the scope variable
			$scope.interactionsAtomizedType = origIA;
			origIA = angular.copy($scope.interactionsAtomizedType);
		}
	};

	$scope.removeInteractionAtomizedType = function(list,interactionsAtomizedType){
		interactionsService.interactions.delete(list,interactionsAtomizedType);
	};
}]);