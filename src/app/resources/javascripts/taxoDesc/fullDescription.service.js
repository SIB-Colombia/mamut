'use strict';

angular.module('app.services',[])
.service('fullDescriptionService', function(){
	var fullDescription;

	fullDescription = {
		fullDescriptionAtomized: [],
		ancillaryDataA: [],
		fullDescriptionUnstructured: '',
		ancillaryData: []
	};
	
	return fullDescription;
});