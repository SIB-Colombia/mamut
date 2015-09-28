'use strict';

angular.module('app.services.distribution',[])
.service('distributionService', function(){

	var distributionOpt2;
	var distributionClass;

	distributionOpt2 = {
		country: '',
		stateProvince: '',
		county: '',
		municipality: '',
		locality: '',
		ancillaryData: []
	};

	distributionClass = {
		distributionScope: {
			type: '',
			ancillaryData: []
		},
		temporalCoverage: {
			startDate: '',
			endDate: ''
		},
		distributionAtomized: [],
		distributionUnstructured: '',
		ancillaryData: []
	};
	
	return {
		distributionOpt2 : distributionOpt2,
		distributionClass : distributionClass
	};	
});