'use strict';

angular.module('app.controllers')
.controller('AncillaryDataCtrl', ['$scope', 'ancillaryDataService', 'referenceService', function($scope, ancillaryDataService, referenceService) {
	$scope.ancillaryData = ancillaryDataService.ancillaryData;
	$scope.reference = referenceService.reference;

	$scope.addAncillaryData = function addAncillaryData(ancillaryDataList, ancillary){
		if (ancillary.source !== '') {
			ancillaryDataList.push(ancillary);
			ancillary = '';
		}
	};

	$scope.removeAncillaryData = function removeAncillaryData(ancillaryDataList, ancillary){
		var index = ancillaryDataList.indexOf(ancillary);
		ancillaryDataList.splice(index);
	};
}]);