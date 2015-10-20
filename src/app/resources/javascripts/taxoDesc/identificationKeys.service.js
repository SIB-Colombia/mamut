'use strict';

angular.module('app.services.identificationKeys',[])
.factory('identificationKeysFactory', function(){
	return function() {
		this.identificationKeys = {
			keys: [],
			ancillaryData: []
		};
	};
});