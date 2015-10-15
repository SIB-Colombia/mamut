'use strict';

angular.module('app.services.threatStatus',[])
.service('threatStatusService', function(){

	var threatStatusClass;

	threatStatusClass = {
		threatStatusAtomized: {
			threatCategory: '',
			authority: [],
			appliesTo: {
				country: '',
				stateProvince: '',
				county: '',
				municipality: '',
				locality: ''
			},
			ancillaryData: []
		},
		threatStatusUnstructured: '',
		ancillaryData: []
	};
	
	threatStatusClass.add = function(list,threatStatusClass){
		list.push(threatStatusClass);
	};

	threatStatusClass.delete = function(list,threatStatusClass){
		var index = list.indexOf(threatStatusClass);
		list.splice(index,1);
	};
	
	return threatStatusClass;
});