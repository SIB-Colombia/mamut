'use strict';

angular.module('app.controllers.distribution',[])
.controller('DistributionCtrl', ['$scope','referenceService', 'ancillaryDataService','distributionService',function($scope,referenceService,ancillaryDataService,distributionService) {
	$scope.distributionOpt2 = distributionService.distributionOpt2;
	$scope.distributionClass = distributionService.distributionClass;
	$scope.formData.distribution = [];
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;

	var origDO = angular.copy($scope.distributionOpt2);
	var origDC = angular.copy($scope.distributionClass);
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

	$scope.addDistributionOpt2 = function(distributionClass, opt2) {
		if (opt2.country !== undefined) {
			distributionClass.push(opt2);
			//Reset the scope variable
			$scope.distributionOpt2 = origDO;
			origDO = angular.copy($scope.distributionOpt2);
		}
	};

	$scope.addDistribution = function(distribution, distributionClass) {
		if (distributionClass.distributionScope.type !== undefined) {
			distribution.push(distributionClass);
			//Reset the scope variable
			$scope.distributionClass = origDC;
			origDC = angular.copy($scope.distributionClass);
			$('input:checkbox').removeAttr('checked');
		}
	};

	$scope.removeDistribution = function() {
		var lastItem = $scope.formData.distribution.length - 1;
		$scope.formData.distribution.splice(lastItem);
	};

}]);