'use strict';

angular.module('app.services.commonName',[])
.service('commonNameService', function(){
	var commonName;

	commonName = {
		name: '',
		language: [],
		usedIn: '',
		usedBy: '',
		ancillaryData: []
	};
	
	return commonName;
});