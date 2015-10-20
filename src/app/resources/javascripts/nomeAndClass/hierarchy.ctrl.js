'use strict';

angular.module('app.controllers.hierarchy',[])
.controller('HierarchyCtrl', ['$scope', 'referenceFactory', 'ancillaryDataFactory', 'hierarchyFactory',  function($scope,referenceFactory,ancillaryDataFactory,hierarchyFactory) {
	//hierarchy
	var hierarchyFactory = new hierarchyFactory();
	$scope.hierarchy = hierarchyFactory.hierarchy;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//hierarchy vector for FormData
	$scope.formData.hierarchy = [];

	//reset variables
	var origH = angular.copy($scope.hierarchy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);


	//ADD
	$scope.addHierarchy = function(hierarchy, hier) {
		if (hier.kingdom !== '') {
			hierarchyFactory.add(hierarchy, hier);
			//Reset the scope variable
			$scope.hierarchy = origH;
			origH = angular.copy($scope.hierarchy);
		}
	};

	//DELETE
	$scope.removeHierarchy = function(hierarchy, hier) {
		hierarchyFactory.delete(hierarchy, hier);
	};

	//EDIT
	$scope.editHierarchy = function(hierarchy, hier) {
		$scope.hierarchy = angular.copy(hier);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};
}]);
