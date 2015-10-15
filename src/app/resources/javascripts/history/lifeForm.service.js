'use strict';

angular.module('app.services.lifeForm',[])
.service('lifeFormService', function(){
	var lifeForm;

	lifeForm = {
		lifeFormAtomized: [],
		lifeFormUnstructured: '',
		ancillaryData: []
	};

	lifeForm.delete = function(list,lifeFormAtomized){
		var index = list.indexOf(lifeFormAtomized);
		list.splice(index,1);
	};
	
	return lifeForm;
});