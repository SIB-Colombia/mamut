'use strict';

angular.module('app.services.habitat',[])
.service('habitatsService', function(){
	var habitat;

	habitat = {
		habitatAtomized: [],
		ancillaryDataA: [],
		habitatUnstructured: '',
		ancillaryData: []
	};

	habitat.delete = function(list,habitatAtomized){
		var index = list.indexOf(habitatAtomized);
		list.splice(index,1);
	};
	
	return habitat;
});