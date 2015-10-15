'use strict';

angular.module('app.controllers.feeding',[])
.controller('FeedingCtrl', ['$scope','referenceService', 'ancillaryDataService','feedingService', function($scope,referenceService,ancillaryDataService,feedingService) {
	$scope.thropic = feedingService.thropic;
	$scope.feedingAtomizedType = feedingService.feedingAtomizedType;
	$scope.formData.feeding = feedingService.feeding;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;

	var origFA = angular.copy($scope.feedingAtomizedType);
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
	
	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataService.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.removeReference = function(referenceList,reference){
		referenceService.deleteFrom(referenceList,reference);	
	};

	$scope.addFeedingAtomizedType = function(feeding, feedingAtomizedType) {
		if (feeding.type !== '') {
			feedingService.feeding.add(feeding,feedingAtomizedType);
			//Reset the scope variable
			$scope.feedingAtomizedType = origFA;
			origFA = angular.copy($scope.feedingAtomizedType);
			$('input:checkbox').removeAttr('checked');
		}
	};
	$scope.removeFeedingAtomizedType= function(list,feedingAtomizedType){
		feedingService.feeding.delete(list,feedingAtomizedType);	
	};
	
}]);