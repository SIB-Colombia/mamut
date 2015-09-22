'use strict';

angular.module('app.services',[])
.service('ecologicalSignificanceService', function(){
	var ecologicalSignificance;

	ecologicalSignificance = {
		ecologicalSignificanceAtomized: [],
		ancillaryDataA: [],
		ecologicalSignificanceUnstructured: '',
		ancillaryData: []
	};
	
	return ecologicalSignificance;
});