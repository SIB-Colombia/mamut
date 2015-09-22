'use strict';

angular.module('app.services',[])
.service('hierarchyService', function(){
	var hierarchy;

	hierarchy = {
		classification: '',
		recommended: '',
		kingdom: '',
		phylum: '',
		classHierarchy: '',
		order: '',
		family: '',
		genus: '',
		subGenus: '',
		taxonRank: '',
		specificEpithet: '',
		infraspecificEpithet: '',
		higherClassification: '',
		parentTaxon: '',
		ancillaryData: []
	};
	
	return hierarchy;
});