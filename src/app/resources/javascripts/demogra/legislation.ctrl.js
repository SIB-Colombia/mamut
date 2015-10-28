'use strict';

angular.module('app.controllers.legislation',[])
.controller('LegislationCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','legislationFactory', function($scope,referenceFactory,ancillaryDataFactory,legislationFactory) {
	
	var legislationFactory = new legislationFactory();
	$scope.legislationAtomizedType = legislationFactory.legislationAtomizedType;
	$scope.formData.legislation = legislationFactory.legislation;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
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
		if(legislationAtomized.legislationName !== ''){
			legislationFactory.add(list,legislationAtomized);
			//Reset the scope variable
			$scope.legislationAtomizedType = origLA;
			origLA = angular.copy($scope.legislationAtomizedType);
		}	
	};

	$scope.removeLegislation = function(list, legislationAtomized) {
		legislationFactory.delete(list,legislationAtomized);
	};

	$scope.editLegislation = function(list, legislationAtomized) {
		$scope.legislationAtomizedType = angular.copy(legislationAtomized);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryLegislation').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryLegislation').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryLegislation').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceLegislation').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
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