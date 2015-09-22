'use strict';

angular.module('app.controllers')
.controller('FindLanguageNameCrtl', ['$scope', function($scope) {
	$scope.findLanguageName = function(languageIso) {
		if (languageIso !== undefined && languageIso !== '') {
			for (var d = 0, len = $scope.idiomas.length; d < len; d += 1) {
				if ($scope.idiomas[d].ISO === languageIso) {
					return $scope.idiomas[d].Idioma;
				}
			}
		}
	};
}]);