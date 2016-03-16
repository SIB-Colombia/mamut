'use strict';

angular.module('app.services.annualCycle',[])
.factory('AnnualCycleFactory', function(){
	return function() {
		this.annualCycleAtomizedType = {
			Event: '',
			startTimeInterval: '',
			endTimeInterval: '',
			ancillaryData: []
		};

		this.annualCycles = {
			annualCycleAtomized: [],
			annualCycleUnstructured: '',
			ancillaryData: []
		};
		
		this.add = function(annualCycleAtomizedType, annualCycle){
			annualCycleAtomizedType.push(annualCycle);
		};
	};
});