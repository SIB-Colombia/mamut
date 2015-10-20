'use strict';

angular.module('app.controllers.invasiveness',[])
.controller('InvasivenessCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','invasivenessFactory', function($scope,referenceFactory,ancillaryDataFactory,invasivenessFactory) {
	
	var invasivenessFactory = new invasivenessFactory();
	$scope.invasivenessAtomizedType = invasivenessFactory.invasivenessAtomizedType;
	$scope.formData.invasiveness = invasivenessFactory.invasiveness;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origI = angular.copy($scope.invasivenessAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);
	
	$scope.addInvasiveness = function(list, invasiveness) {
		invasivenessFactory.add(list, invasiveness);
		//Reset the scope variable
		$scope.invasivenessAtomizedType = origI;
		origI = angular.copy($scope.invasivenessAtomizedType);
		$('input:checkbox').removeAttr('checked');
	};

	$scope.removeInvasivenessAtomized= function(list,invasiveness){
		invasivenessFactory.delete(list,invasiveness);	
	};

	$scope.editInvasivenessAtomized = function(list,invasiveness) {
		$scope.invasivenessAtomizedType = angular.copy(invasiveness);
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