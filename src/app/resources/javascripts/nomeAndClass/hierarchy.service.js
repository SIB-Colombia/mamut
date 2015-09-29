'use strict';

angular.module('app.services.hierarchy',[])
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
	hierarchy.add = function(hierarchy, hier){
		hierarchy.push(hier);
	};

	hierarchy.delete = function(hierarchy, hier){
		var index = hierarchy.indexOf(hier);
		hierarchy.splice(index);
	};
	return hierarchy;
});