'use strict';

angular.module('app.routes',['pascalprecht.translate','ngSanitize','ngCookies'])
.config(function($translateProvider) {
	$translateProvider.useStaticFilesLoader({
		prefix: '/../../i18n/',
		suffix: '.json'
	});
	$translateProvider.useLocalStorage();
	$translateProvider.preferredLanguage('es_CO');
	$translateProvider.useSanitizeValueStrategy('sanitizeParameters');
});

