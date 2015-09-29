'use strict';

angular.module('app.services.commonName',[])
.service('commonNameService', function(){
	var commonName;

	commonName = {
		name: '',
		language: '',
		usedIn: {
			distributionScope: {
				type: '',
				ancillaryData: []
			},
			temporalCoverage: {
				startDate: '',
				endDate: ''
			},
			distributionAtomizedBranch: [],
			distributionUnstructured: '',
			ancillaryData: []
		},
		usedBy: '',
		ancillaryData: []
	};

	commonName.add = function(commonNameAtomized, commonName){
		commonNameAtomized.push(commonName);
	};

	commonName.delete = function(commonNameAtomized, commonName){
		var index = commonNameAtomized.indexOf(commonName);
		commonNameAtomized.splice(index);
	};
	
	return commonName;
});