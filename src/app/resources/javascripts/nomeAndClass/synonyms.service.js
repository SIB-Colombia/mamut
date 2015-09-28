'use strict';

angular.module('app.services.synonmy',[])
.service('synonmyService', function(){
	var synonmy;

	synonmy = {
		rank: '',
		canonicalName: '',
		canonicalAuthorship: '',
		publishedln: {
			identifier: '',
			datatype: '',
			source: ''
		},
		synonymStatus: '',
		ancillaryData: []
	};
	
	return synonmy;
});