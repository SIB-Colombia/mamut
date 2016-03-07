'use strict';

angular.module('app.services.ancillary',[])
.factory('AncillaryDataFactory', function(){
	return function() {
		this.ancillaryData = {
			identifier:'',
			dataType:'',
			mimeType:'',
			agent:[],
			created:'',
			modified:'',
			title:'',
			license:'Atribución - No Comercial - Compartir igual (CC BY-NC-SA 4.0)',
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

		this.addTo = function(ancillaryDataList, ancillary, index){
			//if index is different to '' then replace the item because is an edit option
			if(index!==''){
				ancillaryDataList[index] = angular.copy(ancillary);
			}else{
				ancillaryDataList.push(ancillary);
			}
		};

		this.deleteFrom = function(ancillaryDataList, ancillary){
			var index = ancillaryDataList.indexOf(ancillary);
			ancillaryDataList.splice(index,1);
		};
	};
});
