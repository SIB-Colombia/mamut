'use strict';

angular.module('app.controllers.invasiveness',[])
.controller('InvasivenessCtrl', ['$scope','referenceService', 'ancillaryDataService','invasivenessService', function($scope,referenceService,ancillaryDataService,invasivenessService) {
	$scope.invasivenessAtomizedType = invasivenessService.invasivenessAtomizedType;
	$scope.formData.invasiveness = invasivenessService.invasiveness;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	var origI = angular.copy($scope.invasivenessAtomizedType);
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
	$scope.addInvasiveness = function(list, invasiveness) {
		invasivenessService.invasiveness.add(list, invasiveness);
		//Reset the scope variable
		$scope.invasivenessAtomizedType = origI;
		origI = angular.copy($scope.invasivenessAtomizedType);
		$('input:checkbox').removeAttr('checked');
	};
	$scope.removeInvasivenessAtomized= function(list,invasiveness){
		invasivenessService.invasiveness.delete(list,invasiveness);	
	};
}]);