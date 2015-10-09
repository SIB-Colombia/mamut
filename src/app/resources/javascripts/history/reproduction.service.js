'use strict';

angular.module('app.services.reproduction',[])
.service('reproductionService', function(){
	var reproduction;

	reproduction = {
		reproductionAtomized: [],
		reproductionUnstructured: '',
		ancillaryData: []
	};

	reproduction.delete = function(list,reproductionAtomized){
		var index = list.indexOf(reproductionAtomized);
		list.splice(index,1);
	};
	
	return reproduction;
});