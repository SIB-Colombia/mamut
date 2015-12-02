'use strict';

angular.module('app.controllers.interactions',[])
.controller('InteractionsCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory', function($scope,ReferenceFactory,AncillaryDataFactory) {
	//interactions
	$scope.interactionsAtomizedType = $scope.interactionsFactoryLocal.interactionsAtomizedType;

	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origIA = angular.copy($scope.interactionsAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addInteraction = function(){
		if($scope.formData.interactions.interactionsUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.addInteractionAtomizedType = function(list,interactionsAtomizedType){
		if (!(JSON.stringify(interactionsAtomizedType) === JSON.stringify(origIA))){
			$scope.interactionsFactoryLocal.add(list,interactionsAtomizedType);
			//Reset the scope variable
			$scope.interactionsAtomizedType = origIA;
			origIA = angular.copy($scope.interactionsAtomizedType);
		}
	};

	$scope.removeInteractionAtomizedType = function(list,interactionsAtomizedType){
		$scope.interactionsFactoryLocal.delete(list,interactionsAtomizedType);
	};

	$scope.removeInteractionSpeciesType = function(list,interactionSpeciesType){
		$scope.interactionsFactoryLocal.delete(list,interactionSpeciesType);
	};

	$scope.editInteractionAtomizedType = function(list,interactionsAtomizedType){
		$scope.interactionsAtomizedType = angular.copy(interactionsAtomizedType);
	};

	$scope.cancelInteractionAtomizedType = function() {
		$scope.interactionsAtomizedType = angular.copy(origIA);
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
			$('#ancillaryInteraction').collapse("hide");
		}else{
			alert("La fuente debe ser diligenciada");
		}	
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryInteraction').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryInteraction').collapse("hide");
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
			$('#referenceInteraction').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceInteraction').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceInteraction').collapse("hide");
	};
}]);