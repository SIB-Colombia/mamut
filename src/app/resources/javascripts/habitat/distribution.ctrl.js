'use strict';

angular.module('app.controllers.distribution',[])
.controller('DistributionCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','DistributionFactory',function($scope,ReferenceFactory,AncillaryDataFactory,DistributionFactory) {
	
	var distributionFactoryLocal = new DistributionFactory();
	$scope.distributionOpt2 = distributionFactoryLocal.distributionOpt2;
	$scope.distributionClass = distributionFactoryLocal.distributionClass;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origDO = angular.copy($scope.distributionOpt2);
	var origDC = angular.copy($scope.distributionClass);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addDistributionOpt2 = function(distributionClass, opt2) {
		if (opt2.country !== undefined) {
			distributionFactoryLocal.addOpt2(distributionClass, opt2);
			//Reset the scope variable
			$scope.distributionOpt2 = origDO;
			origDO = angular.copy($scope.distributionOpt2);
		}
	};

	$scope.removeDistributionOpt2 = function(distributionClass, opt2) {
		distributionFactoryLocal.deleteOpt2(distributionClass, opt2);
	};

	$scope.addDistribution = function(list, distributionClass) {
		if (distributionClass.distributionScope.type !== undefined) {
			distributionFactoryLocal.addClass(list, distributionClass);
			//Reset the scope variable
			$scope.distributionClass = origDC;
			origDC = angular.copy($scope.distributionClass);
			$('input:checkbox').removeAttr('checked');
		}
	};

	$scope.removeDistribution = function(list,distribution) {
		distributionFactoryLocal.deleteClass(list, distribution);
	};

	$scope.editDistribution = function(list,distribution) {
		$scope.distributionClass = angular.copy(distribution);
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
			$('#ancillaryDistribution').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryDistribution').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryDistribution').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceDistribution').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceDistribution').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceDistribution').collapse("hide");
	};
}]);