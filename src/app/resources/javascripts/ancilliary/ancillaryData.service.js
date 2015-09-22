'use strict';

angular.module('app.services',[])
.service('ancillaryDataService', function(){
	var ancillaryData;

	ancillaryData = {
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
	
	return ancillaryData;
});