'use strict';

angular.module('app.services',[])
.service('lifeCycleService', function(){
	var lifeCycle;

	lifeCycle = {
		lifeCycleAtomized: [],
		ancillaryDataA: [],
		lifeCycleUnstructured: '',
		ancillaryData: []
	};
	
	return lifeCycle;
});