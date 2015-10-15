'use strict';

angular.module('app.controllers.threatStatus',[])
.controller('ThreatStatusCtrl', ['$scope','referenceService', 'ancillaryDataService','threatStatusService', function($scope,referenceService,ancillaryDataService,threatStatusService) {
	
	$scope.threatStatusClass = threatStatusService;
	
	$scope.formData.threatStatus = [];
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	var origTSC =  angular.copy($scope.threatStatusClass);
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

	$scope.addThreatStatusClass = function(list, threatStatusClass) {
		if (threatStatusClass.threatStatusAtomized.threatCategory !== '') {
			threatStatusService.add(list, threatStatusClass);
			//Reset the scope variable
			$scope.threatStatusClass = origTSC;
			origTSC = angular.copy($scope.threatStatusClass);
		}
	};
	$scope.removeThreatStatus = function(list, threatStatusClass) {
		threatStatusService.delete(list, threatStatusClass);
	};
}]);