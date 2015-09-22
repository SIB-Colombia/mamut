'use strict';

angular.module('app.services',[])
.service('lifeFormService', function(){
	var lifeForm;

	lifeForm = {
		lifeFormAtomized: [],
		ancillaryDataA: [],
		lifeFormUnstructured: '',
		ancillaryData: []
	};
	
	return lifeForm;
});