'use strict';

angular.module('app.controllers.interactions',[])
.controller('InteractionsCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','interactionsFactory', function($scope,referenceFactory,ancillaryDataFactory,interactionsFactory) {
	//interactions
	var interactionsFactory = new interactionsFactory();
	$scope.interactionsAtomizedType = interactionsFactory.interactionsAtomizedType;
	$scope.formData.interactions = interactionsFactory.interactions;

	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origIA = angular.copy($scope.interactionsAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addInteractionAtomizedType = function(list,interactionsAtomizedType){
		if(interactionsAtomizedType.interactionSpecies !== ''){
			interactionsFactory.add(list,interactionsAtomizedType);
			//Reset the scope variable
			$scope.interactionsAtomizedType = origIA;
			origIA = angular.copy($scope.interactionsAtomizedType);
		}
	};

	$scope.removeInteractionAtomizedType = function(list,interactionsAtomizedType){
		interactionsFactory.delete(list,interactionsAtomizedType);
	};

	$scope.removeInteractionSpeciesType = function(list,interactionSpeciesType){
		interactionsFactory.delete(list,interactionSpeciesType);
	};

	$scope.editInteractionAtomizedType = function(list,interactionsAtomizedType){
		$scope.interactionsAtomizedType = angular.copy(interactionsAtomizedType);
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