'use strict';

angular.module('app.controllers.use',[])
.controller('UsesCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','UsesFactory', function($scope,ReferenceFactory,AncillaryDataFactory,UsesFactory) {
	
	var usesFactoryLocal = new UsesFactory();
	$scope.usesAtomizedType = usesFactoryLocal.usesAtomizedType;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
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
		usesFactoryLocal.add(list, usesAtomized);
		//Reset the scope variable
		$scope.usesAtomizedType = origUA;
		origUA = angular.copy($scope.usesAtomizedType);
	};

	$scope.removeUsesAtomized = function(list,usesAtomized){
		usesFactoryLocal.delete(list, usesAtomized);
	};

	$scope.editUsesAtomized = function(list,usesAtomized){
		$scope.usesAtomizedType =  angular.copy(usesAtomized);
	};

	$scope.cancelUsesAtomized = function(){
		$scope.usesAtomizedType =  angular.copy(origUA);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryUse').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
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
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceUse').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
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