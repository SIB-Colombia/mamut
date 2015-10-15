'use strict';

angular.module('app.controllers.associatedParty',[])
.controller('AssociatedPartyCtrl', ['$scope', 'associatedPartyService',  function($scope, associatedPartyService) {
	$scope.associatedParty = associatedPartyService;
	$scope.formData.associatedParty = [];

	var origAP = angular.copy($scope.associatedParty);
	$scope.addAssociatedParty = function(list, associatedParty) {
		associatedPartyService.add(list, associatedParty);
		$scope.associatedParty = origAP;
		origAP = angular.copy($scope.associatedParty);
	};

	$scope.removeAssociatedParty = function(list, associatedParty) {
		associatedPartyService.delete(list, associatedParty);
	};
	
}]);