'use strict';

angular.module('app.controllers.feeding',[])
.controller('FeedingCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','FeedingFactory', function($scope,ReferenceFactory,AncillaryDataFactory,FeedingFactory) {
	//feeding
	var feedingFactoryLocal = new FeedingFactory();
	$scope.thropic = feedingFactoryLocal.thropic;
	$scope.feedingAtomizedType = feedingFactoryLocal.feedingAtomizedType;
	$scope.formData.feeding = feedingFactoryLocal.feeding;

	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;

	var origFA = angular.copy($scope.feedingAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addFeeding = function(){
		if($scope.formData.feeding.feedingUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.addFeedingAtomizedType = function(feeding, feedingAtomizedType) {
		if (feeding.type !== '') {
			feedingFactoryLocal.add(feeding,feedingAtomizedType);
			//Reset the scope variable
			$scope.feedingAtomizedType = origFA;
			origFA = angular.copy($scope.feedingAtomizedType);
			$('input:checkbox').removeAttr('checked');
		}
	};
	$scope.removeFeedingAtomizedType= function(list,feedingAtomizedType){
		feedingFactoryLocal.delete(list,feedingAtomizedType);	
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryFeeding').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryFeeding').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryFeeding').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceFeeding').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceFeeding').collapse("show");
	};
	
	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceFeeding').collapse("hide");
	};
}]);