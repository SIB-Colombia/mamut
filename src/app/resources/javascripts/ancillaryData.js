'use strict';

formApp.factory('ancillaryDataFactory', function(){
	var AncillaryData = function (){
		this.identifier='';
		this.dataType='';
		this.mimeType='';
		this.agent=[];
		this.created='';
		this.modified='';
		this.license='';
		this.rights='';
		this.rigthsHolder='';
		this.bibliographicCitation='';
		this.audience=[];
		this.source='';
		this.subject=[];
		this.description='';
		this.mediaURL=[];
		this.thumbnailURL='';
		this.location='';
		this.geoPoint='';
		this.reference=[];
		this.additionalInformation='';
		this.dataObject='';
	};
	
	AncillaryData.prototype = {
		addAncillaryData: function addAncillaryData(ancillaryDataList, ancillary){
			if (ancillary.source !== '') {
				ancillaryDataList.push(ancillary);
				ancillary = '';
			}
		},
		removeAncillaryData: function removeAncillaryData(ancillaryDataList, ancillary){
			var index = ancillaryDataList.indexOf(ancillary);
			ancillaryDataList.splice(index);
		}
	};
 	return AncillaryData;
});