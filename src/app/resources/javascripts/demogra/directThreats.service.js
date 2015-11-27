'use strict';

angular.module('app.services.directThreats',[])
.factory('DirectThreatsFactory', function(){
	return function() {
		this.directThreats = {
			directThreatsAtomized: {
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
			directThreatsUnstructured: '',
			ancillaryData: []
		};
	};
});