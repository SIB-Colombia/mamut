'use strict';

angular.module('app.controllers.threatStatus',[])
.controller('ThreatStatusCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','ThreatStatusFactory', function($scope,ReferenceFactory,AncillaryDataFactory,ThreatStatusFactory) {
	
	var threatStatusFactoryLocal = new ThreatStatusFactory();
	$scope.threatStatusClass = threatStatusFactoryLocal.threatStatusClass;
	$scope.formData.threatStatus = [];
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origTSC =  angular.copy($scope.threatStatusClass);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addThreatStatus = function(){
		if($scope.threatStatusClass.threatStatusUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.addThreatStatusClass = function(list, threatStatusClass) {
		if (threatStatusClass.threatStatusAtomized.threatCategory !== '') {
			threatStatusFactoryLocal.add(list, threatStatusClass);
			//Reset the scope variable
			$scope.threatStatusClass = origTSC;
			origTSC = angular.copy($scope.threatStatusClass);
			$('input:checkbox').removeAttr('checked');
		}
	};

	$scope.removeThreatStatus = function(list, threatStatusClass) {
		threatStatusFactoryLocal.delete(list, threatStatusClass);
	};

	$scope.editThreatStatus = function(list, threatStatusClass) {
		$scope.threatStatusClass = angular.copy(threatStatusClass);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryThreat').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryThreat').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryThreat').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceThreat').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceThreat').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceThreat').collapse("hide");
	};
}]);