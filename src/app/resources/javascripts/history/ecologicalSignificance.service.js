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

	ecologicalSignificance.delete = function(list,ecologicalSignificanceAtomized){
		var index = list.indexOf(ecologicalSignificanceAtomized);
		list.splice(index,1);
	};
	
	return ecologicalSignificance;
});