'use strict';

angular.module('app.services.identificationKeys',[])
.service('identificationKeysService', function(){
	var identificationKeys;

	identificationKeys = {
		keys: [],
		ancillaryData: []
	};
	
	return identificationKeys;
});