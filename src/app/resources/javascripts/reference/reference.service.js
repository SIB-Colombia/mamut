'use strict';

angular.module('app.services.reference',[])
.factory('ReferenceFactory', function(){
	return function() {
		this.reference = {
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

		this.addTo = function(referenceList, reference){
			referenceList.push(reference);
		};

		this.deleteFrom = function(referenceList, reference){
			var index = referenceList.indexOf(reference);
			referenceList.splice(index,1);
		};
	};
});


