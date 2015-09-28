'use strict';

angular.module('app.services.territory',[])
.service('territoryService', function(){

	var territory;

	territory = {
		territoryAtomized: {
			extentOfOccurrence: {
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
			areaOfOccupancy: [],
			ancillaryData: []
		},
		territoryUnstructured: '',
		ancillaryData: []
	};
	
	return territory;
});