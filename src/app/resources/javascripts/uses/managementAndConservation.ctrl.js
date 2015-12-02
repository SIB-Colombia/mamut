'use strict';

angular.module('app.controllers.managementAndConservation',[])
.controller('ManagementAndConservationCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory', function($scope,ReferenceFactory,AncillaryDataFactory) {
	
	$scope.managementAndConservationAtomizedType = $scope.managementAndConservationAtomizedFactoryLocal.managementAndConservationAtomizedType;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origMC = angular.copy($scope.managementAndConservationAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addManagement = function(){
		if($scope.formData.usesManagementAndConservation.managementAndConservationAtomized.length !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.addManagementAndConservation = function(list, managementAndConservation) {
		if (!(JSON.stringify(managementAndConservation) === JSON.stringify(origMC))){
			$scope.managementAndConservationAtomizedFactoryLocal.add(list, managementAndConservation);
			//Reset the scope variable
			$scope.managementAndConservationAtomizedType = origMC;
			origMC = angular.copy($scope.managementAndConservationAtomizedType);
		}
	};

	$scope.removeManagementAndConservation = function(list, managementAndConservation) {
		$scope.managementAndConservationAtomizedFactoryLocal.delete(list, managementAndConservation);
	};

	$scope.editManagementAndConservation = function(list, managementAndConservation) {
		$scope.managementAndConservationAtomizedType = angular.copy(managementAndConservation);
	};

	$scope.cancelManagementAndConservation = function() {
		$scope.managementAndConservationAtomizedType = angular.copy(origMC);
	};

	$scope.removeAction = function(list, action) {
		var index = list.indexOf(action);
		list.splice(index,1);
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
			$('#ancillaryManagement').collapse("hide");
		}else{
			alert("La fuente debe ser diligenciada");
		}	
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryManagement').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryManagement').collapse("hide");
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
			$('#referenceManagement').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceManagement').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceManagement').collapse("hide");
	};
	
}]);