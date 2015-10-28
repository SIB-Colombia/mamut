'use strict';

angular.module('app.services.legislation',[])
.factory('LegislationFactory', function(){
	return function() {
		this.legislationAtomizedType = {
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

		this.legislation = {
			legislationAtomized: [],
			legislationUnstructured: '',
			ancillaryData: []
		};

		this.add = function(list,legislationAtomizedType){
			list.push(legislationAtomizedType);
		};

		this.delete = function(list,legislationAtomizedType){
			var index = list.indexOf(legislationAtomizedType);
			list.splice(index,1);
		};
	};
});