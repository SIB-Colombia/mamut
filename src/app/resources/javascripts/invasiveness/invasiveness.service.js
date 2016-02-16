'use strict';

angular.module('app.services.invasiveness',[])
.factory('InvasivenessFactory', function(){
	return function() {
		this.invasivenessAtomizedType = {
			origin: '',
			presence: '',
			persistence: '',
			distribution: [],
			harmful: '',
			modified: '',
			startValidateDate: '',
			endValidateDate: '',
			countryCode: 'Colombia',
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
			target: '',
			mechanism: '',
			ancillaryData: []
		};

		this.invasiveness = {
			invasivenessAtomized: [],
			invasivenessUnstructured: '',
			ancillaryData: []
		};
		
		this.add = function(list, invasivenessAtomizedType){
			list.push(invasivenessAtomizedType);
		};

		this.delete = function(list,invasivenessAtomizedType){
			var index = list.indexOf(invasivenessAtomizedType);
			list.splice(index,1);
		};

	};
});