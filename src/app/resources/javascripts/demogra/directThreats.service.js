'use strict';

angular.module('app.services.directThreats',[])
.factory('DirectThreatsFactory', function(){
	return function() {
		this.directThreats = {
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
	};
});