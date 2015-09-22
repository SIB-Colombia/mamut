'use strict';

angular.module('app.services',[])
.service('dispersalService', function(){
	var dispersal;

	dispersal = {
		dispersalAtomized: {
			purpose: [],
			type: '',
			structureDispersed: '',
			distance: {
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
			}
		},
		ancillaryDataA: [],
		dispersalUnstructured: '',
		ancillaryData: []
	};
	
	return dispersal;
});