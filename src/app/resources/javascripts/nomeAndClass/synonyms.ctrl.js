'use strict';

angular.module('app.controllers.synonmy',[])
.controller("SynonmyCtrl", ['$scope', 'referenceFactory', 'ancillaryDataFactory', 'synonmyFactory', function($scope ,referenceFactory,ancillaryDataFactory,synonmyFactory){
	//synonmy
	var synonmyFactory = new synonmyFactory();
	$scope.synonmy = synonmyFactory.synonmy;

	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;

	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;

	//synonyms vector for FormData
	$scope.formData.synonymsAtomized = [];

	//reset variables
	var origS = angular.copy($scope.synonmy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);


	//ADD
	$scope.addSynonymsAtomized = function(synonymsAtomized, synonmy) {
		if (synonmy.canonicalName !== '') {
			synonmyFactory.add(synonymsAtomized, synonmy);
			//Reset the scope variable
			$scope.synonmy = origS;
			origS = angular.copy($scope.synonmy);
		}
	};

	//DELETE
	$scope.removeSynonymsAtomized = function(synonymsAtomized, synonmy) {
		synonmyFactory.delete(synonymsAtomized, synonmy);
	};

	//EDIT
	$scope.editSynonymsAtomized = function(synonymsAtomized, synonmy) {
		$scope.synonmy = angular.copy(synonmy);
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
			$scope.isCollapsed_1 = true;
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);	
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};
}]);