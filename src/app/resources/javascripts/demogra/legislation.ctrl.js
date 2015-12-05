'use strict';

angular.module('app.controllers.legislation',[])
.controller('LegislationCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory',function($scope,ReferenceFactory,AncillaryDataFactory) {
	
	$scope.legislationAtomizedType = $scope.legislationFactoryLocal.legislationAtomizedType;

	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origLA = angular.copy($scope.legislationAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addLegislation = function(){
		if($scope.formData.legislation.legislationUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.addLegislationAtomized= function(list,legislationAtomized){
		if (JSON.stringify(legislationAtomized) !== JSON.stringify(origLA)){
			$scope.legislationFactoryLocal.add(list,legislationAtomized);
			//Reset the scope variable
			$scope.legislationAtomizedType = origLA;
			origLA = angular.copy($scope.legislationAtomizedType);
		}	
	};

	$scope.removeLegislationAtomized = function(list, legislationAtomized) {
		$scope.legislationFactoryLocal.delete(list,legislationAtomized);
	};

	$scope.editLegislationAtomized = function(list, legislationAtomized) {
		$scope.legislationAtomizedType = angular.copy(legislationAtomized);
	};
	$scope.cancelLegislationAtomized = function() {
		$scope.legislationAtomizedType = angular.copy(origLA);
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
			$('#ancillaryLegislation').collapse("hide");
		}else{
			alert("La fuente debe ser diligenciada");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryLegislation').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryLegislation').collapse("hide");
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
			$('#referenceLegislation').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceLegislation').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceLegislation').collapse("hide");
	};
}]);