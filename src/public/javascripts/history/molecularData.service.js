'use strict';

angular.module('app.services.molecularData',[])
.factory('MolecularDataFactory', function(){
	return function() {
		this.molecularDataAtomizedType = {
			measurementOrFact: {
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
		};

		this.molecularData = {
			molecularDataAtomized: [],
			molecularDataUnstructured: '',
			ancillaryData: []
		};
		this.add = function(molecularDataAtomizedType, molecular){
			molecularDataAtomizedType.push(molecular);
		};
		this.delete = function(list,molecularDataAtomizedType){
			var index = list.indexOf(molecularDataAtomizedType);
			list.splice(index,1);
		};
	};
});