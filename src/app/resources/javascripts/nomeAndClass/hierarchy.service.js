'use strict';

angular.module('app.services.hierarchy',[])
.factory('HierarchyFactory', function(){
	return function() {
		this.hierarchy = {
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

		this.add = function(hierarchy, hier){
			hierarchy.push(hier);
		};

		this.delete = function(hierarchy, hier){
			var index = hierarchy.indexOf(hier);
			hierarchy.splice(index,1);
		};
	};
});