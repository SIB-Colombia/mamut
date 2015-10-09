'use strict';

angular.module('app.services.molecularData',[])
.service('molecularDataService', function(){
	var molecularDataAtomizedType;
	var molecularData;

	molecularDataAtomizedType = {
		measurementOrFact: {
			measurementOrFact : {
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
			ancillaryData : {
				identifier:'',
				dataType:'',
				mimeType:'',
				agent:[],
				created:'',
				modified:'',
				license:'',
				rights:'',
				rightsHolder:'',
				bibliographicCitation:'',
				audience:[],
				source:'',
				subject:[],
				description:'',
				mediaURL:[],
				thumbnailURL:'',
				location:'',
				geoPoint:'',
				reference:[],
				additionalInformation:'',
				dataObject:''
			}
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