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


	//ADD
	$scope.addHierarchy = function(hierarchy, hier) {
		if (!(JSON.stringify(hier) === JSON.stringify(origH))){
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
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			var insert = true;
			angular.forEach($scope.formData.ancillaryData, function(ancillary) {
			    if(ancillaryData.source!==null && ancillaryData.source === ancillary.source){
			    	angular.forEach(ancillary.reference, function(reference) {
						angular.forEach(ancillaryData.reference, function(reference_anci) {
							if(reference.source!==null && reference.source === reference_anci.source){
								insert = false;
							}
						});
					});
				}
			});

			if(insert){
				ancillaryDataFactoryLocal.addTo($scope.formData.ancillaryData,ancillaryData);
				angular.forEach(ancillaryData.reference, function(reference) {
					referenceFactoryLocal.addTo($scope.formData.references,reference);
				});
			}

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}else{
			alert("La fuente debe ser diligenciada");
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
	}

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceHierarchy').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceHierarchy').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceHierarchy').collapse("hide");
	};
}]);
