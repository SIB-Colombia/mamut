'use strict';

angular.module('app.services',[])
.service('threatStatusService', function(){

	var threatStatusClass;

	threatStatusClass = {
		threatStatusAtomized: {
			threatCategory: '',
			authority: [],
			aplliesTo: {
				country: '',
				stateProvince: '',
				county: '',
				municipality: '',
				locality: ''
			},
			ancillaryData: []
		},
		threatStatusUnstructured: '',
		ancillaryData: []
	};
	
	return threatStatusClass;
});