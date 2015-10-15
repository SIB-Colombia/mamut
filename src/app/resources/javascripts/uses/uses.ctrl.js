'use strict';

angular.module('app.controllers.use',[])
.controller('UsesCtrl', ['$scope','referenceService', 'ancillaryDataService','usesService', function($scope,referenceService,ancillaryDataService,usesService) {
	$scope.usesAtomizedType = usesService;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	var origUA = angular.copy($scope.usesAtomizedType);
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

	$scope.addUsesAtomized = function(list, usesAtomized) {
		usesService.add(list, usesAtomized);
		//Reset the scope variable
		$scope.usesAtomizedType = origUA;
		origUA = angular.copy($scope.usesAtomizedType);
	};

	$scope.removeUsesAtomized = function(list,usesAtomized){
		usesService.delete(list, usesAtomized);
	};
}]);