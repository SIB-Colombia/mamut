'use strict';

angular.module('app.controllers.synonmy',[])
.controller("SynonmyCtrl", ['$scope', 'ReferenceFactory', 'AncillaryDataFactory', 'SynonmyFactory', function($scope ,ReferenceFactory,AncillaryDataFactory,SynonmyFactory){
	//synonmy
	var synonmyFactoryLocal = new SynonmyFactory();
	$scope.synonmy = synonmyFactoryLocal.synonmy;

	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;

	//reset variables
	var origS = angular.copy($scope.synonmy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);


	//ADD
	$scope.addSynonymsAtomized = function(synonymsAtomized, synonmy) {
		if (synonmy.canonicalName !== '') {
			synonmyFactoryLocal.add(synonymsAtomized, synonmy);
			//Reset the scope variable
			$scope.synonmy = origS;
			origS = angular.copy($scope.synonmy);
			$('#sysnonymForm').collapse("hide");
		}
	};

	//DELETE
	$scope.removeSynonymsAtomized = function(synonymsAtomized, synonmy) {
		synonmyFactoryLocal.delete(synonymsAtomized, synonmy);
	};

	//EDIT
	$scope.editSynonymsAtomized = function(synonymsAtomized, synonmy) {
		$scope.synonmy = angular.copy(synonmy);
		$('#sysnonymForm').collapse("show");
	};

	//CANCEL
	$scope.cancelSynonym = function() {
		$scope.synonmy = angular.copy(origS);
		$('#sysnonymForm').collapse("hide");
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
		}		
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$scope.isCollapsed_1 = true;
			$('#referenceSysnonym').collapse("hide");
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);	
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceSysnonym').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceSysnonym').collapse("hide");
	};
}]);