'use strict';

angular.module('app.controllers.hierarchy',[])
.controller('HierarchyCtrl', ['$scope', 'referenceService', 'ancillaryDataService', 'hierarchyService', function($scope,referenceService,ancillaryDataService,hierarchyService) {
	
	$scope.hierarchy = hierarchyService;
	//reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	//hierarchy vector for FormData
	$scope.formData.hierarchy = [];

	//reset variables
	var origH = angular.copy($scope.hierarchy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);
	$scope.formData.hierarchy = [];

	//ADD
	$scope.addHierarchy = function(hierarchy, hier) {
		if (hier.kingdom !== '') {
			hierarchyService.add(hierarchy, hier);
			//Reset the scope variable
			$scope.hierarchy = origH;
			origH = angular.copy($scope.hierarchy);
		}
	};

	//DELETE
	$scope.removeHierarchy = function(hierarchy, hier) {
		hierarchyService.delete(hierarchy, hier);
	};

	//EDIT
	$scope.editHierarchy = function(hierarchy, hier) {
		$scope.hierarchy = angular.copy(hier);
		$scope.isCollapsed = false;
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataService.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}		
	};
	
	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
			ancillaryDataService.deleteFrom(ancillaryDataList,ancillaryData);
	};


	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceService.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$scope.isCollapsed_1 = true;
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceService.deleteFrom(referenceList,reference);	
	};
}]);