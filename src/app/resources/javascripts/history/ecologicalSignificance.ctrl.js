'use strict';

angular.module('app.controllers.ecologicalSignificance',[])
.controller('EcologicalSignificanceCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','ecologicalSignificanceFactory', function($scope,referenceFactory,ancillaryDataFactory,ecologicalSignificanceFactory) {
	
	var ecologicalSignificanceFactory = new ecologicalSignificanceFactory();
	$scope.formData.ecologicalSignificance = ecologicalSignificanceFactory.ecologicalSignificance;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addEcologicalSignificance = function(){
		if($scope.formData.ecologicalSignificance.ecologicalSignificanceUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.removeEcologicalSignificanceAtomized= function(list,ecologicalSignificanceAtomized){
		ecologicalSignificanceFactory.delete(list,ecologicalSignificanceAtomized);	
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryEcologicalSignificance').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryEcologicalSignificance').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryEcologicalSignificance').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceEcologicalSignificance').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceEcologicalSignificance').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceEcologicalSignificance').collapse("hide");
	};
}]);