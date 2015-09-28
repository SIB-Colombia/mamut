'use strict';

angular.module('app.controllers.use',[])
.controller('UsesCtrl', ['$scope', function($scope) {
	$scope.usesAtomizedType = {
		
	};

	$scope.addUsesAtomized = function(usesAtomized) {
		$scope.formData.usesManagementAndConservation.usesAtomized.push(usesAtomized);
		$scope.usesAtomizedType = {
			sourceOfInformation: {
				references: [],
				sourceOfInformationText: ''
			},
			useValue: '',
			partUsed: '',
			users: '',
			organisms: '',
			vernacularNameUseAnnotations: '',
			productionDetails: '',
			meansOfApplicationAdministration: '',
			seasonOfAvailabilityUse: '',
			conservationExplotationData: '',
			useTypeAtomized: '',
			economics: '',
			ratingPopularity: '',
			properties: '',
			potential: '',
			useNotes: '',
			ancillaryData: []
		};
	};
}]);