'use strict';

angular.module('app.controllers.use',[])
.controller('UsesCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','usesFactory', function($scope,referenceFactory,ancillaryDataFactory,usesFactory) {
	
	var usesFactory = new usesFactory();
	$scope.usesAtomizedType = usesFactory.usesAtomizedType;
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origUA = angular.copy($scope.usesAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addUse = function(){
		if($scope.formData.usesManagementAndConservation.usesAtomized.length > 0 ){
			console.log('enviar cambios');
		}
	};

	$scope.addUsesAtomized = function(list, usesAtomized) {
		usesFactory.add(list, usesAtomized);
		//Reset the scope variable
		$scope.usesAtomizedType = origUA;
		origUA = angular.copy($scope.usesAtomizedType);
	};

	$scope.removeUsesAtomized = function(list,usesAtomized){
		usesFactory.delete(list, usesAtomized);
	};

	$scope.editUsesAtomized = function(list,usesAtomized){
		$scope.usesAtomizedType =  angular.copy(usesAtomized);
	};

	$scope.cancelUsesAtomized = function(list,usesAtomized){
		$scope.usesAtomizedType =  angular.copy(origUA);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryUse').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryUse').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryUse').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceUse').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceUse').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceUse').collapse("hide");
	};
}]);