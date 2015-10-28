'use strict';

angular.module('app.controllers.endemic',[])
.controller('EndemicCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','EndemicFactory', function($scope,ReferenceFactory,AncillaryDataFactory,EndemicFactory) {
	
	var endemicFactoryLocal = new EndemicFactory();
	$scope.endemicTo = '';
	$scope.endemicAtomizedType = endemicFactoryLocal.endemicAtomizedType;
	$scope.formData.endemicAtomized = [];
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origEA = angular.copy($scope.endemicAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addEndemic = function(list, endemicAtomized) {
		if (endemicAtomized.endemicTo !== '') {
			endemicFactoryLocal.add(list, endemicAtomized);
			//Reset the scope variable
			$scope.endemicAtomizedType = origEA;
			origEA = angular.copy($scope.endemicAtomizedType);
		}
	};

	$scope.removeEndemic = function(list, endemicAtomized) {
		endemicFactoryLocal.delete(list, endemicAtomized);
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
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryEndemic').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
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
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceEndemic').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
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