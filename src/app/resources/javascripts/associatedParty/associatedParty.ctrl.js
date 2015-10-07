'use strict';

angular.module('app.controllers.associatedParty',[])
.controller('AssociatedPartyCtrl', ['$scope', 'associatedPartyService',  function($scope, associatedPartyService) {
	$scope.associatedParty = associatedPartyService;
	$scope.formData.associatedParty = [];

	$scope.addAssociatedParty = function(associatedParty) {
		$scope.formData.associatedParty.push(associatedParty);
		associatedParty = '';
	};

	
}]);