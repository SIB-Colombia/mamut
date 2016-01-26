'use strict';

angular.module('app.services.measurement',[])
.factory('MeasurementFactory', function(){
	return function() {
		this.measurement = {
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

		this.addMeasurementOrFactVector = function(measurementOrFact, measurement){
			measurementOrFact.push({'measurementOrFact':measurement.measurementOrFact,'ancillaryData':measurement.ancillaryData});
		};

		this.addMeasurementOrFact = function(measurementOrFact, measurement){
			measurementOrFact = {'measurementOrFact':measurement.measurementOrFact,'ancillaryData':measurement.ancillaryData};
		};
	};
});