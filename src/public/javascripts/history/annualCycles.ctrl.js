'use strict';

angular.module('app.controllers.annualCycle',[])
.controller('AnnualCyclesCtrl', ['$scope', 'ReferenceFactory', 'AncillaryDataFactory',function($scope,ReferenceFactory,AncillaryDataFactory) {
	
	$scope.annualCycleAtomizedType = $scope.annualCycleFactoryLocal.annualCycleAtomizedType;

	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;

	//list of lincese
	$scope.lincese_list = angular.copy($scope.lenguajes.licences);

	//list of proveedores de contenido
	$scope.prov_contenido = angular.copy($scope.lenguajes.provContenido);
	
	//Local variables for reset objects
	var origAU = angular.copy($scope.annualCycleAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.checked = false; // This will be binded using the ps-open attribute

	$scope.slide = function(){
	    $scope.checked = !$scope.checked;
	};
	
	$scope.addAnnualCycleAtomizedType = function(annualCycleAtomizedType, annualCycle) {
		if (JSON.stringify(annualCycleAtomizedType) !== JSON.stringify(origAU)){
			$scope.annualCycleFactoryLocal.add(annualCycleAtomizedType, annualCycle);
			$scope.annualCycleAtomizedType = origAU;
			origAU = angular.copy($scope.annualCycleAtomizedType);
		}
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.license !== ''){
			var license = document.getElementById("ancillaryData.license");
			if(license !== undefined && license!==null){
				ancillaryData.license = license.value;
				license.parentNode.removeChild(license);
			}
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			
			//Add all local reference to general reference vector
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryLocal.addTo($scope.formData.references,reference);
			});
			
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$scope.checked = !$scope.checked;
		}else{
			alert("El tipo de referencia debe ser seleccionado");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$scope.checked = !$scope.checked;
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
	};
}]);