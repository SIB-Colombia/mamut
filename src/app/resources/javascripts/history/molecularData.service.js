'use strict';

angular.module('app.services.molecularData',[])
.service('molecularDataService', function(){
	var molecularDataAtomizedType;
	var molecularData;

	molecularDataAtomizedType = {
		measurementOrFact: {
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
		relatedTo: '',
		ancillaryData: []
	};

	molecularData = {
		molecularDataAtomized: [],
		molecularDataUnstructured: '',
		ancillaryData: []
	};

	return {
		molecularDataAtomizedType : molecularDataAtomizedType,
		molecularData : molecularData
	};
});