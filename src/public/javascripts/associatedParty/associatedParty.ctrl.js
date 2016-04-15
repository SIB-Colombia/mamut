'use strict';

angular.module('app.controllers.associatedParty',[])
.controller('AssociatedPartyCtrl', ['$scope', '$http', 'AssociatedPartyFactory',  function($scope, $http, AssociatedPartyFactory) {
	
	var associatedPartyFactoryLocal = new AssociatedPartyFactory();
	$scope.associatedParty = associatedPartyFactoryLocal.associatedParty;

	var origAP = angular.copy($scope.associatedParty);

	$scope.index_associated = '';

	$scope.addAssociated = function() {
		var req_1 = {
			 method: 'POST',
			 url: 'http://192.168.220.86:3000/fichas/'+$scope.formData._id+'/associated_party/',
			 headers: {
			   'Content-Type': 'application/JSON'
			 },
			 data: { "id_user" : "01",
			 		"associatedParty":$scope.formData.associatedParty

			 }
		};

		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};

	$scope.addAssociatedParty = function(list, associatedParty) {
		if (JSON.stringify(associatedParty) !== JSON.stringify(origAP)){
			if($scope.index_associated !==''){
				list[$scope.index_associated] = angular.copy(associatedParty);
			}else{
				associatedPartyFactoryLocal.add(list, associatedParty);
			}
			
			$scope.associatedParty = origAP;
			origAP = angular.copy($scope.associatedParty);
		}
	};

	$scope.removeAssociatedParty = function(list, associatedParty) {
		associatedPartyFactoryLocal.delete(list, associatedParty);
	};

	$scope.editAssociatedParty = function(list, associatedParty,index) {
		$scope.index_associated = index;
		$scope.associatedParty = angular.copy(associatedParty);
	};

	$scope.cancelAssociatedParty = function() {
		$scope.associatedParty = angular.copy(origAP);
		$scope.index_associated = '';
	};
	
}]);