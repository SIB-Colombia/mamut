'use strict';

angular.module('app.controllers.environmentalEnvelope',[])
.controller('EnvironmentalEnvelopeCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','environmentalEnvelopeFactory', function($scope,referenceFactory,ancillaryDataFactory,environmentalEnvelopeFactory) {
	
	var environmentalEnvelopeFactory = new environmentalEnvelopeFactory();
	$scope.formData.environmentalEnvelope = environmentalEnvelopeFactory.environmentalEnvelope;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addEnvironmentalEnvelope = function(){
		if($scope.formData.environmentalEnvelope.environmentalEnvelopeUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.removeEnvironmentalEnvelopeAtomized= function(list,environmentalEnvelopeAtomized){
		environmentalEnvelopeFactory.delete(list,environmentalEnvelopeAtomized);	
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryEnvironmentalEnvelope').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryEnvironmentalEnvelope').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryEnvironmentalEnvelope').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceEnvironmentalEnvelope').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceEnvironmentalEnvelope').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceEnvironmentalEnvelope').collapse("hide");
	};
}]);