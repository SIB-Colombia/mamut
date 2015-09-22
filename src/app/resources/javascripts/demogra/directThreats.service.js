'use strict';

angular.module('app.services',[])
.service('directThreatsService', function(){

	var directThreats;

	directThreats = {
		directThreatsAtomized: {
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
		directThreatsUnstructured: '',
		ancillaryData: []
	};
	
	return directThreats;
});