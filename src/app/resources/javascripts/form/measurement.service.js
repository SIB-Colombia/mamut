'use strict';

angular.module('app.services.measurement',[])
.service('measurementService', function(){
	
	var measurementOrFact = {
		//Metodo de inicialización
		init: function(){
			this.measurementOrFact.measurementID = '';
			this.measurementOrFact.measurementType = '';
			this.measurementOrFact.measurementValue = '';
			this.measurementOrFact.measurementAccuracy = '';
			this.measurementOrFact.measurementUnit = '';
			this.measurementOrFact.measurementDeterminedDate = '';
			this.measurementOrFact.measurementDeterminedBy = [];
			this.measurementOrFact.measurementMethod = '';
			this.measurementOrFact.measurementRemarks = '';
			this.measurementOrFact.relatedTo = '';
			this.ancillaryData.identifier = '';
			this.ancillaryData.dataType = '';
			this.ancillaryData.mimeType = '';
			this.ancillaryData.agent = [];
			this.ancillaryData.created = '';
			this.ancillaryData.modified = '';
			this.ancillaryData.license = '';
			this.ancillaryData.rights = '';
			this.ancillaryData.rightsHolder = '';
			this.ancillaryData.bibliographicCitation = '';
			this.ancillaryData.audience = [];
			this.ancillaryData.source = '';
			this.ancillaryData.subject = []
			this.ancillaryData.description = '';
			this.ancillaryData.mediaURL = [];
			this.ancillaryData.thumbnailURL = '';
			this.ancillaryData.location = '';
			this.ancillaryData.geoPoint = '';
			this.ancillaryData.reference = [];
			this.ancillaryData.additionalInformation = '';
			this.ancillaryData.dataObject = '';
			return(this);
		},	

		//Propiedades.
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
	};

	/*measurementOrFact = {
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
	};*/

	return measurementOrFact;
});