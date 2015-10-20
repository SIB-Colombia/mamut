'use strict';

angular.module('app.controllers.use',[])
.controller('UsesCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','usesFactory', function($scope,referenceFactory,ancillaryDataFactory,usesFactory) {
	
	var usesFactory = new usesFactory();
	$scope.usesAtomizedType = usesFactory.usesAtomizedType;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origUA = angular.copy($scope.usesAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addUsesAtomized = function(list, usesAtomized) {
		usesFactory.add(list, usesAtomized);
		//Reset the scope variable
		$scope.usesAtomizedType = origUA;
		origUA = angular.copy($scope.usesAtomizedType);
	};

	$scope.removeUsesAtomized = function(list,usesAtomized){
		usesFactory.delete(list, usesAtomized);
	};

	$scope.editUsesAtomized = function(list,usesAtomized){
		$scope.usesAtomizedType =  angular.copy(usesAtomized);
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