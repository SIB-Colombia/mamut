'use strict';

angular.module('app.services',[])
.service('annualCyclesService', function(){
	var annualCycleAtomizedType;
	var annualCycle;

	annualCycleAtomizedType = {
		Event: '',
		startTimeInterval: '',
		endTimeInterval: '',
		ancillaryData: []
	};

	annualCycle = {
		annualCycleAtomized: [],
		annualCycleUnstructured: '',
		ancillaryData: []
	};
	
	return {
		annualCycleAtomizedType : annualCycleAtomizedType,
		annualCycle : annualCycle
	};
});