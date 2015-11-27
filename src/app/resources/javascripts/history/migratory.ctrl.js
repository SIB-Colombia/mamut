'use strict';

angular.module('app.controllers.migratory',[])
.controller('MigratoryCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory', function($scope,ReferenceFactory,AncillaryDataFactory) {
	
	$scope.migratoryAtomizedType = $scope.migratoryFactoryLocal.migratoryAtomizedType;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origMA = angular.copy($scope.migratoryAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addMigratory = function(){
		if($scope.formData.migratory.migratoryAtomized !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.addMigratoryAtomizedType = function(list,migratoryAtomizedType){
		$scope.migratoryFactoryLocal.add(list,migratoryAtomizedType);
		$scope.migratoryAtomizedType = origMA;
		origMA = angular.copy($scope.migratoryAtomizedType);
	};

	$scope.removeMigratoryAtomized = function(list,migratoryAtomized){
		$scope.migratoryFactoryLocal.delete(list,migratoryAtomized);
	};

	$scope.editMigratoryAtomized = function(list,migratoryAtomized) {
		$scope.migratoryAtomizedType = angular.copy(migratoryAtomized);
	};

	$scope.cancelMigratoryAtomized = function() {
		$scope.migratoryAtomizedType = angular.copy(origMA);
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
			$('#ancillaryMigratory').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryMigratory').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryMigratory').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceMigratory').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceMigratory').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceMigratory').collapse("hide");
	};
}]);