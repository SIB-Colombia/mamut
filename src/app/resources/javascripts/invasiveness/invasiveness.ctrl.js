'use strict';

angular.module('app.controllers')
.controller('InvasivenessCtrl', ['$scope', function($scope) {
	$scope.invasivenessAtomizedType = {
		
	};
	$scope.formData.invasiveness = {
		
	};

	$scope.addInvasiveness = function(invasiveness) {
		$scope.formData.invasiveness.invasivenessAtomized.push(invasiveness);
		$scope.invasivenessAtomizedType = '';
	};
}]);