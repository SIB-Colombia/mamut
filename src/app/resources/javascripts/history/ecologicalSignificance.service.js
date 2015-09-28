'use strict';

angular.module('app.services.ecologicalSignificance',[])
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