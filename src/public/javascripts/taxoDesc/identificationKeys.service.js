'use strict';

angular.module('app.services.identificationKeys',[])
.factory('IdentificationKeysFactory', function(){
	return function() {
		this.identificationKeys = {
			keys: [],
			ancillaryData: []
		};
	};
});