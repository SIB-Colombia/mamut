'use strict';

angular.module('app.controllers.endemic',[])
.controller('EndemicCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','endemicFactory', function($scope,referenceFactory,ancillaryDataFactory,endemicFactory) {
	
	var endemicFactory = new endemicFactory();
	$scope.endemicTo = '';
	$scope.endemicAtomizedType = endemicFactory.endemicAtomizedType;
	$scope.formData.endemicAtomized = [];
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origEA = angular.copy($scope.endemicAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addEndemic = function(list, endemicAtomized) {
		if (endemicAtomized.endemicTo !== '') {
			endemicFactory.add(list, endemicAtomized);
			//Reset the scope variable
			$scope.endemicAtomizedType = origEA;
			origEA = angular.copy($scope.endemicAtomizedType);
		}
	};

	$scope.removeEndemic = function(list, endemicAtomized) {
		endemicFactory.delete(list, endemicAtomized);
	};

	$scope.editEndemic = function(list, endemicAtomized) {
		$scope.endemicAtomizedType = angular.copy(endemicAtomized);
	};

	$scope.addEndemicTo = function(endemicAtomized, endemicTo) {
		if (endemicTo !== '') {
			endemicAtomized.push(endemicTo);
			$scope.endemicTo = '';
		}
	};

	$scope.removeEndemicTo = function(list, endemicTo) {
		var index = list.indexOf(endemicTo);
		list.splice(index,1);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryEndemic').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryEndemic').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryEndemic').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceEndemic').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceEndemic').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceEndemic').collapse("hide");
	};
}]);