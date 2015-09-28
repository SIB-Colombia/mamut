'use strict';

angular.module('app.services.behavior',[])
.service('behaviorService', function(){
	var behavior;

	behavior = {
		behaviorAtomized: {
			measurementID: '',
			measurementType: '',
			measurementValue: '',
			measurementAccuracy: '',
			measurementUnit: '',
			measurementDeterminedDate: '',
			measurementDeterminedBy: [],
			measurementMethod: '',
			measurementRemarks: '',
			relatedTo: ''
		},
		ancillaryDataA: [],
		behaviorUnstructured: '',
		ancillaryData: []
	};
	
	return behavior;
});