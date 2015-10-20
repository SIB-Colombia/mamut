'use strict';

angular.module('app.services.ecologicalSignificance',[])
.factory('ecologicalSignificanceFactory', function(){
	return function() {
		this.ecologicalSignificance = {
			ecologicalSignificanceAtomized: [],
			ancillaryDataA: [],
			ecologicalSignificanceUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,ecologicalSignificanceAtomized){
			var index = list.indexOf(ecologicalSignificanceAtomized);
			list.splice(index,1);
		};
	};
});