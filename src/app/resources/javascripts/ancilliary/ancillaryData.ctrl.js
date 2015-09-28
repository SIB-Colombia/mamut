'use strict';

angular.module('app.controllers.ancillary',[])
.controller('AncillaryDataCtrl', ['$scope', 'ancillaryDataService', function($scope, ancillaryDataService){
	
	$scope.ancillaryData = ancillaryDataService;
	$scope.formData.ancillaryData = [];
	//$scope.reference = referenceService.reference;

	$scope.addAncillaryData = function addAncillaryData(ancillaryDataList, ancillary){
		if (ancillary.source !== '') {
			ancillaryDataService.addTo(ancillaryDataList, ancillary);
			$scope.ancillaryData = '';
		}
	};

	$scope.removeAncillaryData = function removeAncillaryData(ancillaryDataList, ancillary){
		ancillaryDataService.deleteFrom(ancillaryDataList,ancillary)
	};
}]);