'use strict';

angular.module('app.controllers.lifeCycle',[])
.controller('LifeCycleCtrl', ['$scope', 'referenceFactory', 'ancillaryDataFactory','lifeCycleFactory', function($scope,referenceFactory,ancillaryDataFactory,lifeCycleFactory) {
	//lifeCycle
	var lifeCycleFactory = new lifeCycleFactory();
	$scope.formData.lifeCycle = lifeCycleFactory.lifeCycle;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);
	

	$scope.removeLifeCycleAtomized= function(list,lifeCycleAtomized){
		lifeCycleFactory.delete(list,lifeCycleAtomized);	
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