'use strict';

angular.module('app.services.ancillary',[])
.factory('ancillaryDataFactory', function(){
	return function() {
		this.ancillaryData = {
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
		};

		this.addTo = function(ancillaryDataList, ancillary){
			ancillaryDataList.push(ancillary);
		};

		this.deleteFrom = function(ancillaryDataList, ancillary){
			var index = ancillaryDataList.indexOf(ancillary);
			ancillaryDataList.splice(index,1);
		};
	};
});
