'use strict';

angular.module('app.services.legislation',[])
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
		appliesTo: {
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

	legislation.add = function(list,legislationAtomizedType){
		list.push(legislationAtomizedType);
	};

	legislation.delete = function(list,legislationAtomizedType){
		var index = list.indexOf(legislationAtomizedType);
		list.splice(index,1);
	};
	
	return {
		legislationAtomizedType : legislationAtomizedType,
		legislation : legislation
	};
});