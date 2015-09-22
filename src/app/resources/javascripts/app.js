'use strict';

// create our angular app and inject ngAnimate and ui-router
// =======================================================================================
angular.module('formApp', 
	['ng', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ui.directives','ui.filters', 'ui.router','ui.bootstrap','ngAnimate','ngFileUpload', 'angularModalService', 'app.controllers','app.routes','app.services']);
