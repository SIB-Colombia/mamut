'use strict';

angular.module('app.controllers.annualCycle',[])
.controller('AnnualCyclesCtrl', ['$scope', 'referenceFactory', 'ancillaryDataFactory','annualCycleFactory',function($scope,referenceFactory,ancillaryDataFactory,annualCycleFactory) {
	
	var annualCycleFactory = new annualCycleFactory();
	$scope.annualCycleAtomizedType = annualCycleFactory.annualCycleAtomizedType;
	$scope.formData.annualCycle = annualCycleFactory.annualCycle;

	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origAU = angular.copy($scope.annualCycleAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);
	
	$scope.addAnnualCycleAtomizedType = function(annualCycleAtomizedType, annualCycle) {
		if (annualCycle.Event !== '') {
			annualCyclesService.annualCycleAtomizedType.add(annualCycleAtomizedType, annualCycle);
			$scope.annualCycleAtomizedType = origAU;
			origAU = angular.copy($scope.annualCycleAtomizedType);
		}
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
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};
}]);