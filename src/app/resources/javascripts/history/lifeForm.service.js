'use strict';

angular.module('app.services.lifeForm',[])
.service('lifeFormService', function(){
	var lifeForm;

	var lifeFormAtomized;

	lifeForm = {
		lifeFormAtomized: [],
		lifeFormUnstructured: '',
		ancillaryData: []
	};

	lifeFormAtomized = {
		measurementOrFact:'',
		ancillaryData:''
	};

	lifeForm.delete = function(list,lifeFormAtomized){
		var index = list.indexOf(lifeFormAtomized);
		list.splice(index,1);
	};
	
	return lifeForm;
});