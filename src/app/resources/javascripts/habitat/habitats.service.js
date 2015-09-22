'use strict';

angular.module('app.services',[])
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