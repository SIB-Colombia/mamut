'use strict';

angular.module('app.controllers.associatedParty',[])
.controller('AssociatedPartyCtrl', ['$scope', 'AssociatedPartyFactory',  function($scope, AssociatedPartyFactory) {
	
	var associatedPartyFactoryLocal = new AssociatedPartyFactory();
	$scope.associatedParty = associatedPartyFactoryLocal.associatedParty;

	var origAP = angular.copy($scope.associatedParty);

	$scope.addAssociated = function() {
		if($scope.formData.associatedParty.length > 0){
			console.log('enviar');
		}
	};

	$scope.addAssociatedParty = function(list, associatedParty) {
		if (JSON.stringify(associatedParty) !== JSON.stringify(origAP)){
			associatedPartyFactoryLocal.add(list, associatedParty);
			$scope.associatedParty = origAP;
			origAP = angular.copy($scope.associatedParty);
		}
	};

	$scope.removeAssociatedParty = function(list, associatedParty) {
		associatedPartyFactoryLocal.delete(list, associatedParty);
	};

	$scope.editAssociatedParty = function(list, associatedParty) {
		$scope.associatedParty = angular.copy(associatedParty);
	};

	$scope.cancelAssociatedParty = function() {
		$scope.associatedParty = angular.copy(origAP);
	};
	
}]);