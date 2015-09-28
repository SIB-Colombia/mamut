'use strict';

angular.module('app.services.habitat',[])
.service('habitatsService', function(){

	var habitat;

	habitat = {
		habitatsAtomized: [],
		ancillaryDataA: [],
		habitatsUnstructured: '',
		ancillaryData: []
	};
	
	return habitat;
});