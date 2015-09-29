'use strict';

angular.module('app.controllers.commonName',[])
.controller('CommonNameCtrl', ['$scope','referenceService', 'ancillaryDataService', 'commonNameService', function($scope,referenceService,ancillaryDataService,commonNameService) {
	//Common Name element
	$scope.commonName = commonNameService;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	//comon name vector for FormData
	$scope.formData.commonNameAtomized = [];
	
	//reset variables
	var origCN = angular.copy($scope.commonName);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);


	//ADD
	$scope.addCommonNamesAtomized = function(commonNameAtomized, commonName) {
		if (commonName.name !== '') {
			commonNameService.add(commonNameAtomized, commonName);
			//Reset the scope variable
			$scope.commonName = origCN;
			origCN = angular.copy($scope.commonName);
		}
	};

	//DELETE
	$scope.removeCommonNamesAtomized = function(commonNameAtomized, commonName) {
		commonNameService.delete(commonNameAtomized, commonName);
	};

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
}]);