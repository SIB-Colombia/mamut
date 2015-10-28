'use strict';

angular.module('app.controllers.ecologicalSignificance',[])
.controller('EcologicalSignificanceCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','EcologicalSignificanceFactory', function($scope,ReferenceFactory,AncillaryDataFactory,EcologicalSignificanceFactory) {
	
	var ecologicalSignificanceFactoryLocal = new EcologicalSignificanceFactory();
	$scope.formData.ecologicalSignificance = ecologicalSignificanceFactoryLocal.ecologicalSignificance;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addEcologicalSignificance = function(){
		if($scope.formData.ecologicalSignificance.ecologicalSignificanceUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.removeEcologicalSignificanceAtomized= function(list,ecologicalSignificanceAtomized){
		ecologicalSignificanceFactoryLocal.delete(list,ecologicalSignificanceAtomized);	
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryEcologicalSignificance').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
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
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceEcologicalSignificance').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
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