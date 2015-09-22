'use strict';

angular.module('app.services',[])
.service('legislationService', function(){

	var legislationAtomizedType;
	var legislation;

	legislationAtomizedType = {
		legislationName: '',
		protectionLegalStatus: '',
		legislationRead: '',
		status: '',
		type: '',
		norm: '',
		aplliesTo: {
			country: '',
			stateProvince: '',
			county: '',
			municipality: '',
			locality: ''
		},
		ancillaryData: []
	};

	legislation = {
		legislationAtomized: [],
		legislationUnstructured: '',
		ancillaryData: []
	};

	
	return {
		legislationAtomizedType : legislationAtomizedType,
		legislation : legislation
	};
});