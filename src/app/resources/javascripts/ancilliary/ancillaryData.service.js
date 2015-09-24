'use strict';

angular.module('app.services',[])
.service('ancillaryDataService', function(){

	var ancillaryData = {
		identifier:'',
		dataType:'',
		mimeType:'',
		agent:[],
		created:'',
		modified:'',
		license:'',
		rights:'',
		rigthsHolder:'',
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

	ancillaryData.addTo = function(ancillaryDataList, ancillary){
		ancillaryDataList.push(ancillary);
	};

	ancillaryData.deleteFrom = function(ancillaryDataList, ancillary){
		var index = ancillaryDataList.indexOf(ancillary);
		ancillaryDataList.splice(index);
	};

	
	return ancillaryData;
});