'use strict';

angular.module('app.controllers.invasiveness',[])
.controller('InvasivenessCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','InvasivenessFactory', function($scope,ReferenceFactory,AncillaryDataFactory,InvasivenessFactory) {
	
	var invasivenessFactoryLocal = new InvasivenessFactory();
	$scope.invasivenessAtomizedType = invasivenessFactoryLocal.invasivenessAtomizedType;
	$scope.formData.invasiveness = invasivenessFactoryLocal.invasiveness;
	
	//Ancillary
	var ancillaryDataFactoryUn = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryUn.ancillaryData;
	
	//reference unstructure
	var referenceFactoryUn = new ReferenceFactory();
	$scope.reference = referenceFactoryUn.reference;

	//reference ato
	var referenceFactoryAto = new ReferenceFactory();
	$scope.referenceAto = referenceFactoryAto.reference;

	//Ancillary
	var ancillaryDataFactoryAto = new AncillaryDataFactory();
	$scope.ancillaryDataAto = ancillaryDataFactoryAto.ancillaryData;
	
	//Local variables for reset objects
	var origI = angular.copy($scope.invasivenessAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addInvasiveness = function(){
		if($scope.formData.invasiveness.invasivenessUnstructured !== ''){
			console.log('enviar cambios');
		}
	};
	
	$scope.addInvasivenessAtomizedType = function(list, invasiveness) {
		invasivenessFactoryLocal.add(list, invasiveness);
		//Reset the scope variable
		$scope.invasivenessAtomizedType = origI;
		origI = angular.copy($scope.invasivenessAtomizedType);
		$('input:checkbox').removeAttr('checked');
	};

	$scope.removeInvasivenessAtomized= function(list,invasiveness){
		invasivenessFactoryLocal.delete(list,invasiveness);	
	};

	$scope.editInvasivenessAtomized = function(list,invasiveness) {
		$scope.invasivenessAtomizedType = angular.copy(invasiveness);
		angular.forEach($scope.origin, function(item) {

            if(invasiveness.origin!==null && invasiveness.origin === item.name){
            	console.log($scope.ori);
				item.checked = true;
			}
        });
		
	};

	$scope.cancelInvasivenessAtomizedType = function() {
		$scope.invasivenessAtomizedType = angular.copy(origI);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryUn.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryInvasiveness').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryUn.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryInvasiveness').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryInvasiveness').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryUn.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceInvasiveness').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryUn.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceInvasiveness').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceInvasiveness').collapse("hide");
	};

	//Atomized fields
	$scope.addAncillaryDataAto = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			referenceFactoryAto.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryDataAto = origAD;
			origAD = angular.copy($scope.ancillaryDataAto);
			$('#ancillaryInvasivenessAto').collapse("hide");
		}
	};

	$scope.editAncillaryDataAto = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryDataAto = angular.copy(ancillaryData);
		$('#ancillaryInvasivenessAto').collapse("show");
	};

	$scope.cancelAncillaryDataAto = function() {
		$scope.ancillaryDataAto = angular.copy(origAD);
		$('#ancillaryInvasivenessAto').collapse("hide");
	};

	$scope.addReferenceAto = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryAto.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.referenceAto = origR;
			origR = angular.copy($scope.referenceAto);
			$('#referenceInvasivenessAto').collapse("hide");
		}
	};

	$scope.editReferenceAto = function(referenceList,reference) {
		$scope.referenceAto = angular.copy(reference);
		$('#referenceInvasivenessAto').collapse("show");
	};

	$scope.cancelReferenceAto = function() {
		$scope.referenceAto = angular.copy(origR);
		$('#referenceInvasivenessAto').collapse("hide");
	};

}]);