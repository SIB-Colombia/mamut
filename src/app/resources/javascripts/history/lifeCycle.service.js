'use strict';

angular.module('app.services.lifeCycle',[])
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