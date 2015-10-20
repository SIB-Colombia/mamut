'use strict';

angular.module('app.controllers.threatStatus',[])
.controller('ThreatStatusCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','threatStatusFactory', function($scope,referenceFactory,ancillaryDataFactory,threatStatusFactory) {
	
	var threatStatusFactory= new threatStatusFactory();
	$scope.threatStatusClass = threatStatusFactory.threatStatusClass;
	$scope.formData.threatStatus = [];
	
	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;
	
	//Local variables for reset objects
	var origTSC =  angular.copy($scope.threatStatusClass);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addThreatStatusClass = function(list, threatStatusClass) {
		//if (threatStatusClass.threatStatusAtomized.threatCategory !== '') {
			threatStatusFactory.add(list, threatStatusClass);
			//Reset the scope variable
			$scope.threatStatusClass = origTSC;
			origTSC = angular.copy($scope.threatStatusClass);
		//}
	};

	$scope.removeThreatStatus = function(list, threatStatusClass) {
		threatStatusFactory.delete(list, threatStatusClass);
	};

	$scope.editThreatStatus = function(list, threatStatusClass) {
		$scope.threatStatusClass = angular.copy(threatStatusClass);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactory.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactory.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactory.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactory.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
	};
}]);