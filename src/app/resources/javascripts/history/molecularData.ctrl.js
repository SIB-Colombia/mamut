'use strict';

angular.module('app.controllers.molecularData',[])
.controller('MolecularDataCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory', function($scope,ReferenceFactory,AncillaryDataFactory) {
	
	$scope.molecularDataAtomizedType = $scope.molecularDataFactoryLocal.molecularDataAtomizedType;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origMD = angular.copy($scope.molecularDataAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addMolecularData = function(){
		if($scope.formData.molecularData.molecularDataUnstructured.length > 0){
			console.log('enviar cambios');
		}
	};
	$scope.addMolecularDataAtomizedType = function(molecularDataAtomizedType, molecular) {
		if (molecular.measurementOrFact.measurementType !== '') {
			$scope.molecularDataFactoryLocal.add(molecularDataAtomizedType, molecular);
			$scope.molecularDataAtomizedType = origMD;
			origMD = angular.copy($scope.molecularDataAtomizedType);

		}
	};

	$scope.removeMolecularDataAtomizedType= function(molecular,molecularDataAtomizedType){
		$scope.molecularDataFactoryLocal.delete(molecular,molecularDataAtomizedType);	
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			ancillaryDataFactoryLocal.addTo($scope.formData.ancillaryData,ancillaryData);
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryLocal.addTo($scope.formData.references,reference);
			});
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryMolecular').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryMolecular').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryMolecular').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceMolecular').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceMolecular').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceMolecular').collapse("hide");
	};
}]);