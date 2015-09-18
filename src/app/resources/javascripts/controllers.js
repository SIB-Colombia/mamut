define(['jquery', 'angular', 'controllers/reference', 'angularSanitize'], function ($, angular) {
	'use strict';
	/* Controllers */		
	return angular.module('editor.controllers', ['ngSanitize'])
		// Home site records of species wall controller
		.controller('ReferenceCrtl', ['$scope', '$injector', function($scope, $injector) {
			require(['controllers/reference'], function() {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
				// Furthermore we need to pass on the $scope as it's unique to this controller
				$injector.invoke(this, {'$scope': $scope});
			});
		}]);
});