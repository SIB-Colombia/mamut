'use strict';

angular.module('app.controllers.endemic',[])
.controller('EndemicCtrl', ['$scope', function($scope) {
	$scope.endemicTo = '';
	$scope.endemicAtomizedType = {
		
	};
	$scope.formData.endemicAtomized = [];

	$scope.addEndemic = function(endemicAtomized, endemic) {
		if (endemic.endemicTo !== '') {
			endemicAtomized.push(endemic);
			$scope.endemicAtomizedType = {
				endemicTo: [],
				endemicIn: '',
				ancillaryData: []
			};
		}
	};

	$scope.addEndemicTo = function(endemicAtomized, endemicTo) {
		if (endemicTo !== '') {
			endemicAtomized.push(endemicTo);
			$scope.endemicTo = '';
		}
	};
}]);