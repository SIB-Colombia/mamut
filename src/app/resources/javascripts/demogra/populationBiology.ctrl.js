'use strict';

angular.module('app.controllers.populationBiology',[])
.controller('PopulationBiologyCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','populationBiologyFactory', function($scope,referenceFactory,ancillaryDataFactory,populationBiologyFactory) {
	
	var populationBiologyFactory = new populationBiologyFactory();
	$scope.populationBiologyAtomized = populationBiologyFactory.populationBiologyAtomized;
	$scope.formData.populationBiology = populationBiologyFactory.populationBiology;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origPBA = angular.copy($scope.populationBiologyAtomized);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addPopulationBiology = function(list, populationBiologyAtomized) {
		if (populationBiologyAtomized.region !== '') {
			populationBiologyFactory.add(list, populationBiologyAtomized);

			$scope.populationBiologyAtomized = origPBA;
			origPBA = angular.copy($scope.populationBiologyAtomized);
		}
	};
	$scope.removePopulation = function(list, populationBiologyAtomized) {
		populationBiologyFactory.delete(list, populationBiologyAtomized);
	};

	$scope.editPopulation = function(list, populationBiologyAtomized) {
		$scope.populationBiologyAtomized = angular.copy(populationBiologyAtomized);
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