'use strict';

angular.module('app.controllers.hierarchy',[])
.controller('HierarchyCtrl', ['$scope', 'ReferenceFactory', 'AncillaryDataFactory', 'HierarchyFactory',  function($scope,ReferenceFactory,AncillaryDataFactory,HierarchyFactory) {
	//hierarchy
	var hierarchyFactoryLocal = new HierarchyFactory();
	$scope.hierarchy = hierarchyFactoryLocal.hierarchy;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	

	//reset variables
	var origH = angular.copy($scope.hierarchy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.checked = false; // This will be binded using the ps-open attribute

	$scope.slide = function(){
	    $scope.checked = !$scope.checked;
	};
	//ADD
	$scope.addHierarchy = function(hierarchy, hier) {
		if (JSON.stringify(hier) !== JSON.stringify(origH)){
			hierarchyFactoryLocal.add(hierarchy, hier);
			//Reset the scope variable
			$scope.hierarchy = origH;
			origH = angular.copy($scope.hierarchy);
			$('#hierarchyForm').collapse("hide");
		}
	};

	//DELETE
	$scope.removeHierarchy = function(hierarchy, hier) {
		hierarchyFactoryLocal.delete(hierarchy, hier);
	};

	//EDIT
	$scope.editHierarchy = function(hierarchy, hier) {
		$scope.hierarchy = angular.copy(hier);
		$('#hierarchyForm').collapse("show");
	};

	//CANCEL
	$scope.cancelHierarchy = function() {
		$scope.hierarchy = angular.copy(origH);
		$('#hierarchyForm').collapse("hide");
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.license !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Add all local reference to general reference vector
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryLocal.addTo($scope.formData.references,reference);
			});

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}else{
			alert("La licencia debe ser seleccionada");
		}	
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.findAncillary = function(ancillaryData){
		angular.forEach($scope.formData.ancillaryData, function(ancillary) {
	        if(ancillaryData!==null && ancillaryData === ancillary.source){
				$scope.ancillaryData = angular.copy(ancillary);
			}
		});
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$scope.checked = !$scope.checked;
		}else{
			alert("El tipo de referencia debe ser seleccionado");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$scope.checked = !$scope.checked;
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
	};
}]);
