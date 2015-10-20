'use strict';

angular.module('app.controllers.migratory',[])
.controller('MigratoryCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','migratoryFactory', function($scope,referenceFactory,ancillaryDataFactory,migratoryFactory) {
	
	var migratoryFactory = new migratoryFactory();
	$scope.migratoryAtomizedType = migratoryFactory.migratoryAtomizedType;
	$scope.formData.migratory = migratoryFactory.migratory;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origMA = angular.copy($scope.migratoryAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addMigratoryAtomizedType = function(list,migratoryAtomizedType){
		migratoryFactory.add(list,migratoryAtomizedType);
		$scope.migratoryAtomizedType = origMA;
		origMA = angular.copy($scope.migratoryAtomizedType);
	};

	$scope.removeMigratoryAtomized = function(list,migratoryAtomized){
		migratoryFactory.delete(list,migratoryAtomized);
	};

	$scope.editMigratoryAtomized = function(list,migratoryAtomized) {
		$scope.migratoryAtomizedType = angular.copy(migratoryAtomized);
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