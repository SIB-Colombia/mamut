'use strict';

angular.module('app.services.territory',[])
.factory('territoryFactory', function(){
	return function() {
		this.territory = {
			territoryAtomized: {
				extentOfOccurrence: {
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
				areaOfOccupancy: [],
				ancillaryData: []
			},
			territoryUnstructured: '',
			ancillaryData: []
		};
	};
});