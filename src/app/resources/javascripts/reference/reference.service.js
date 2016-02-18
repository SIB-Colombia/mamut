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
			address: '',
			edition: '',
			institution: '',
			editors:[],
			keywords:[],
			doi: '',
			isbn: '',
			issn: '',
			link: ''
		};

		this.addTo = function(referenceList, reference){
			var idx = referenceList.indexOf(reference);
			if(idx === -1){
				referenceList.push(reference);
			}
		};

		this.deleteFrom = function(referenceList, reference){
			var index = referenceList.indexOf(reference);
			referenceList.splice(index,1);
		};
	};
});


