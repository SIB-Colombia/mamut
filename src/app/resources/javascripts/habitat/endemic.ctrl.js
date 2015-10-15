'use strict';

angular.module('app.controllers.endemic',[])
.controller('EndemicCtrl', ['$scope','referenceService', 'ancillaryDataService','endemicService', function($scope,referenceService,ancillaryDataService,endemicService) {
	$scope.endemicTo = '';
	$scope.endemicAtomizedType = endemicService;
	$scope.formData.endemicAtomized = [];
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;

	var origEA = angular.copy($scope.endemicAtomizedType);
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

	$scope.addEndemic = function(list, endemicAtomized) {
		if (endemicAtomized.endemicTo !== '') {
			endemicService.add(list, endemicAtomized);
			//Reset the scope variable
			$scope.endemicAtomizedType = origEA;
			origEA = angular.copy($scope.endemicAtomizedType);
		}
	};

	$scope.removeEndemic = function(list, endemicAtomized) {
		endemicService.delete(list, endemicAtomized);
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
}]);