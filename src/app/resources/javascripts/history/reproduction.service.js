'use strict';

angular.module('app.services',[])
.service('reproductionService', function(){
	var reproduction;

	reproduction = {
		reproductionAtomized: [],
		ancillaryDataA: [],
		reproductionUnstructured: '',
		ancillaryData: []
	};
	
	return reproduction;
});