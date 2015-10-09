'use strict';

angular.module('app.controllers.migratory',[])
.controller('MigratoryCtrl', ['$scope','referenceService', 'ancillaryDataService','migratoryService', function($scope,referenceService,ancillaryDataService,migratoryService) {
	$scope.migratoryAtomizedType = migratoryService.migratoryAtomizedType;
	$scope.formData.migratory = migratoryService.migratory;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;

	var origMA = angular.copy($scope.migratoryAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);
	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataService.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}		
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceService.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceService.deleteFrom(referenceList,reference);	
	};

	$scope.addMigratoryAtomizedType = function(list,migratoryAtomizedType){
		migratoryService.migratory.add(list,migratoryAtomizedType);
		$scope.migratoryAtomizedType = origMA;
		origMA = angular.copy($scope.migratoryAtomizedType);
	};

	$scope.removeMigratoryAtomized = function(list,migratoryAtomized){
		migratoryService.migratory.delete(list,migratoryAtomized);
	};
}]);