'use strict';

angular.module('app.controllers.identificationKeys',[])
.controller('IdentificationKeysCtrl', ['$scope','ReferenceFactory','AncillaryDataFactory','IdentificationKeysFactory', function($scope,ReferenceFactory,AncillaryDataFactory,IdentificationKeysFactory) {
	//identificationKeys
	var identificationKeysFactoryLocal = new IdentificationKeysFactory();
	$scope.formData.identificationKeys = identificationKeysFactoryLocal.identificationKeys;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//reset variables
	var origR = angular.copy($scope.referenceSN);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addIdentificationKeys = function(){
		if($scope.formData.identificationKeys.keys !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryIdentificationKeys').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryIdentificationKeys').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryIdentificationKeys').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceIdentificationKeys').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceIdentificationKeys').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceIdentificationKeys').collapse("hide");
	};
}]);