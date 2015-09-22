'use strict';

angular.module('app.services',[])
.service('invasivenessService', function(){
	var invasivenessAtomizedType;
	var invasiveness;

	invasivenessAtomizedType = {
		origin: '',
		presence: '',
		persistence: '',
		distribution: [],
		harmful: '',
		modified: '',
		startValidateDate: '',
		endValidateDate: '',
		countryCode: '',
		stateProvince: '',
		county: '',
		localityName: '',
		language: '',
		citation: '',
		abundance: '',
		trend: '',
		rateOfSpread: '',
		regulatoryListing: '',
		memo: '',
		publicationDate: '',
		localityType: '',
		locationValue: '',
		publicationDatePrecision: '',
		whatImpact: '',
		vector: '',
		route: '',
		target: [],
		mechanism: [],
		ancillaryData: []
	};

	invasiveness = {
		invasivenessAtomized: [],
		invasivenessUnstructured: '',
		ancillaryData: []
	};
	
	return {
		invasivenessAtomizedType : invasivenessAtomizedType,
		invasiveness : invasiveness
	};
});