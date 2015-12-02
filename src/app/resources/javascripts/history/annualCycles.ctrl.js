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
	
	//Local variables for reset objects
	var origAU = angular.copy($scope.annualCycleAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);
	
	$scope.addAnnualCycleAtomizedType = function(annualCycleAtomizedType, annualCycle) {
		if (!(JSON.stringify(annualCycleAtomizedType) === JSON.stringify(origAU))){
			$scope.annualCycleFactoryLocal.add(annualCycleAtomizedType, annualCycle);
			$scope.annualCycleAtomizedType = origAU;
			origAU = angular.copy($scope.annualCycleAtomizedType);
		}
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
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};
}]);