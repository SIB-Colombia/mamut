'use strict';

angular.module('app.controllers.commonName',[])
.controller('CommonNameCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory', 'commonNameFactory', function($scope,referenceFactory,ancillaryDataFactory,commonNameFactory) {
	//Common Name element
	var commonNameFactory = new commonNameFactory();
	$scope.commonName = commonNameFactory.commonName;

	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;

	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;

	//comon name vector for FormData
	$scope.formData.commonNameAtomized = [];
	
	//reset variables
	var origCN = angular.copy($scope.commonName);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);


	//ADD
	$scope.addCommonNamesAtomized = function(commonNameAtomized, commonName) {
		if (commonName.name !== '') {
			commonNameFactory.add(commonNameAtomized, commonName);
			//Reset the scope variable
			$scope.commonName = origCN;
			origCN = angular.copy($scope.commonName);
			$('#commonNameForm').collapse("hide");
		}
	};

	//DELETE
	$scope.removeCommonNamesAtomized = function(commonNameAtomized, commonName) {
		commonNameFactory.delete(commonNameAtomized, commonName);
	};

	//EDIT
	$scope.editCommonNamesAtomized = function(commonNameAtomized, commonName) {
		$scope.commonName = angular.copy(commonName);
		$('#commonNameForm').collapse("show");
	};

	//CANCEL
	$scope.cancelCommonNamesAtomized = function() {
		$scope.commonName = angular.copy(origCN);
		$('#commonNameForm').collapse("hide");
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
			$('#referenceCommonName').collapse("hide");
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);	
	};
	
	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceCommonName').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceCommonName').collapse("hide");
	};
}]);