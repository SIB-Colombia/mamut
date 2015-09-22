'use strict';

angular.module('app.services',[])
.service('identificationKeysService', function(){
	var identificationKeys;

	identificationKeys = {
		keys: [],
		ancillaryData: []
	};
	
	return identificationKeys;
});