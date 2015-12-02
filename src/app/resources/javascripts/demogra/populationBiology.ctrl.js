'use strict';

angular.module('app.controllers.populationBiology',[])
.controller('PopulationBiologyCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory',function($scope,ReferenceFactory,AncillaryDataFactory) {
	
	$scope.populationBiologyAtomized = $scope.populationBiologyFactoryLocal.populationBiologyAtomized;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origPBA = angular.copy($scope.populationBiologyAtomized);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addPopulationBiology = function(){
		if($scope.formData.populationBiology.populationBiologyUnstructured !== ''){
			console.log('enviar cambios');
		}
	};
	
	$scope.addPopulationBiologyAtomized = function(list, populationBiologyAtomized) {
		if (!(JSON.stringify(populationBiologyAtomized) === JSON.stringify(origPBA))){
			$scope.populationBiologyFactoryLocal.add(list, populationBiologyAtomized);

			$scope.populationBiologyAtomized = origPBA;
			origPBA = angular.copy($scope.populationBiologyAtomized);
		}
	};
	$scope.removePopulation = function(list, populationBiologyAtomized) {
		$scope.populationBiologyFactoryLocal.delete(list, populationBiologyAtomized);
	};

	$scope.editPopulation = function(list, populationBiologyAtomized) {
		$scope.populationBiologyAtomized = angular.copy(populationBiologyAtomized);
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
			$('#ancillaryPopulation').collapse("hide");
		}else{
			alert("La fuente debe ser diligenciada");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryPopulation').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryPopulation').collapse("hide");
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
			$('#referencePopulation').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referencePopulation').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referencePopulation').collapse("hide");
	};
}]);