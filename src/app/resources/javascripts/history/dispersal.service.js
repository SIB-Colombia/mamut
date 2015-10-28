'use strict';

angular.module('app.services.dispersal',[])
.factory('DispersalFactory', function(){
	return function() {
		this.dispersal = {
			dispersalAtomized: {
				purpose: [],
				type: '',
				structureDispersed: '',
				distance: {
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
				}
			},
			dispersalUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,purpose){
			var index = list.indexOf(purpose);
			list.splice(index,1);
		};
	};
});