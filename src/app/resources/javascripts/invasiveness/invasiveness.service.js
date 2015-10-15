'use strict';

angular.module('app.services.invasiveness',[])
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
	
	invasiveness.add = function(list, invasivenessAtomizedType){
		list.push(invasivenessAtomizedType);
	};

	invasiveness.delete = function(list,invasivenessAtomizedType){
		var index = list.indexOf(invasivenessAtomizedType);
		list.splice(index,1);
	};

	return {
		invasivenessAtomizedType : invasivenessAtomizedType,
		invasiveness : invasiveness
	};
});