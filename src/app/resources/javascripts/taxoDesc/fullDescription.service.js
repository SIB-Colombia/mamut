'use strict';

angular.module('app.services.fullDescription',[])
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