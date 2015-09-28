'use strict';

angular.module('app.controllers.commonName',[])
.controller('CommonNameCtrl', ['$scope', function($scope) {
	$scope.commonName = {
		
	};
	$scope.formData.commonNameAtomized = [];

	//Reference
	$scope.reference = {
		
	};

	//Ancillary
	$scope.ancillaryData = {
		
	};

	//ADD
	$scope.addCommonNamesAtomized = function(commonNameAtomized, commonName) {
		if (commonName.name !== '') {
			commonNameAtomized.splice(0, 0, {
				name: commonName.name,
				language: commonName.language,
				usedIn: {
					distributionScope: {
						type: '',
						ancillaryData: []
					},
					temporalCoverage: {
						startDate: '',
						endDate: ''
					},
					distributionAtomizedBranch: [],
					distributionUnstructured: commonName.usedIn,
					ancillaryData: []
				},
				usedBy: commonName.usedBy,
				ancillaryData: commonName.ancillaryData
			});
			$scope.commonName = '';
		}
	};

	//DELETE
	$scope.removeCommonNamesAtomized = function(commonName) {
		$scope.formData.commonNameAtomized.splice(commonName, 1);
	};
}]);