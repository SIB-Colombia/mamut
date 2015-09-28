'use strict';

angular.module('app.controllers.molecularData',[])
.controller('MolecularDataCtrl', ['$scope', function($scope) {
	$scope.molecularDataAtomizedType = {
		
	};
	$scope.formData.molecularData = {
		
	};

	$scope.addMolecularDataAtomizedType = function(molecularDataAtomizedType, molecular) {
		if (molecular.measurementOrFact.measurementType !== '') {
			molecularDataAtomizedType.push(molecular);
			$scope.molecularDataAtomizedType = {
				measurementOrFact: {
					measurementID: '',
					measurementType: '',
					measurementValue: '',
					measurementAccuracy: '',
					measurementUnit: '',
					measurementDeterminedDate: '',
					measurementDeterminedBy: [],
					measurementMethod: '',
					measurementRemarks: '',
					relatedTo: ''
				},
				relatedTo: '',
				ancillaryData: []
			};

		}
	};
}]);