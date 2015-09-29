'use strict';

// create our angular app and inject ngAnimate and ui-router
// =======================================================================================
angular.module('formApp', 
	['ng', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ui.directives','ui.filters', 'ui.router','ui.bootstrap','ngAnimate','ngFileUpload', 'angularModalService', 
	'app.controllers.form','app.controllers.checkBox', 'app.controllers.collapse','app.controllers.findLanguageName','app.controllers.measurement','app.routes','app.routes.translate',
	'app.controllers.reference' ,'app.services.reference',
	'app.controllers.ancillary' ,'app.services.ancillary',
	'app.controllers.commonName' ,'app.services.commonName',
	'app.controllers.synonmy' ,'app.services.synonmy',
	'app.controllers.hierarchy' ,'app.services.hierarchy'
	]);
