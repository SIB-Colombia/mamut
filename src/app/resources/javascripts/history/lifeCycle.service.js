'use strict';

angular.module('app.services.lifeCycle',[])
.service('lifeCycleService', function(){
	var lifeCycle;

	lifeCycle = {
		lifeCycleAtomized: [],
		lifeCycleUnstructured: '',
		ancillaryData: []
	};

	lifeCycle.delete = function(list,lifeCycleAtomized){
		var index = list.indexOf(lifeCycleAtomized);
		list.splice(index,1);
	};
	
	return lifeCycle;
});