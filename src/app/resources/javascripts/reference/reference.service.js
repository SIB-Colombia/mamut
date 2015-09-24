'use strict';

angular.module('app.services')
.service('referenceService', function(){

	var reference = {
		id: '',
		profile_id: '',
		group_id: '',
		created: '',
		last_modified: '',
		identifiers:[],
		abstract: '',
		tags: '',
		type: '',
		source: '',
		title: '',
		authors:[],
		year: '',
		volume: '',
		issue: '',
		pages: '',
		series: '',
		chapter: '',
		websites: '',
		accessed: '',
		publisher: '',
		city: '',
		edition: '',
		institution: '',
		editors:[],
		keywors:[],
		doi: '',
		isbn: '',
		issn: '',
		link: ''
	};

	ancillaryData.addTo = function(referenceList, reference){
		referenceList.push(reference);
	};

	ancillaryData.deleteFrom = function(referenceList, reference){
		var index = referenceList.indexOf(reference);
		referenceList.splice(index);
	};


	return reference;
});
