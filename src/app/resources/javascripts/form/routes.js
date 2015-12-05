'use strict';

angular.module('app.routes',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		// route to show our basic form (/form)
		.state('form', {
			url: '/form',
			templateUrl: 'form.html',
			controller: 'formController'
		})

		// nested states
		// each of these sections will have their own view
		// url will be nested (/form/metaData)
		.state('form.metaData', {
			url: '/metaData',
			templateUrl: 'form/metaData.html'
		})

		// url will be /form/baseElem
		.state('form.baseElem', {
			url: '/baseElem',
			templateUrl: 'form/baseElem.html'
		})

		// url will be /form/recordMeta
		.state('form.recordMeta', {
			url: '/recordMeta',
			templateUrl: 'form/recordMeta.html'
		})

		// url will be /form/nomeAndClass
		.state('form.nomeAndClass', {
			url: '/nomeAndClass',
			templateUrl: 'form/nomeAndClass.html'
		})

		// url will be /form/taxoDesc
		.state('form.taxoDesc', {
			url: '/taxoDesc',
			templateUrl: 'form/taxoDesc.html'
		})

		// url will be /form/history
		.state('form.history', {
			url: '/history',
			templateUrl: 'form/history.html'
		})

		// url will be /form/historyC
		.state('form.historyC', {
			url: '/historyC',
			templateUrl: 'form/historyC.html'
		})

		// url will be /form/invasiveness
		.state('form.invasiveness', {
			url: '/invasiveness',
			templateUrl: 'form/invasiveness.html'
		})

		// url will be /form/habitat
		.state('form.habitat', {
			url: '/habitat',
			templateUrl: 'form/habitat.html'
		})

		// url will be /form/demogra
		.state('form.demogra', {
			url: '/demogra',
			templateUrl: 'form/demogra.html'
		})

		// url will be /form/uses
		.state('form.uses', {
			url: '/uses',
			templateUrl: 'form/uses.html'
		})

		// url will be /form/references
		.state('form.references', {
			url: '/references',
			templateUrl: 'form/references.html'
		})

		// url will be /form/ancillary
		.state('form.ancillary', {
			url: '/ancillary',
			templateUrl: 'form/ancillary.html'
		})

		// url will be /form/associatedParty
		.state('form.associatedParty', {
			url: '/associatedParty',
			templateUrl: 'form/associatedParty.html'
		});

		// catch all route
		// send users to the form page
		$urlRouterProvider.otherwise('/form/nomeAndClass');
});