'use strict';

angular.module('app.controllers.feeding',[])
.controller('FeedingCtrl', ['$scope','referenceFactory', 'ancillaryDataFactory','feedingFactory', function($scope,referenceFactory,ancillaryDataFactory,feedingFactory) {
	//feeding
	var feedingFactory = new feedingFactory();
	$scope.thropic = feedingFactory.thropic;
	$scope.feedingAtomizedType = feedingFactory.feedingAtomizedType;
	$scope.formData.feeding = feedingFactory.feeding;

	//Ancillary
	var ancillaryDataFactory = new ancillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactory.ancillaryData;
	
	//reference
	var referenceFactory = new referenceFactory();
	$scope.reference = referenceFactory.reference;

	var origFA = angular.copy($scope.feedingAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addFeedingAtomizedType = function(feeding, feedingAtomizedType) {
		if (feeding.type !== '') {
			feedingFactory.add(feeding,feedingAtomizedType);
			//Reset the scope variable
			$scope.feedingAtomizedType = origFA;
			origFA = angular.copy($scope.feedingAtomizedType);
			$('input:checkbox').removeAttr('checked');
		}
	};
	$scope.removeFeedingAtomizedType= function(list,feedingAtomizedType){
		feedingFactory.delete(list,feedingAtomizedType);	
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