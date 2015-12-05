'use strict';

angular.module('app.services.commonName',[])
.factory('CommonNameFactory', function(){
	return function() {
		this.commonName = {
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

		this.add = function(commonNameAtomized, commonName){
			commonNameAtomized.push(commonName);
		};

		this.delete = function(commonNameAtomized, commonName){
			var index = commonNameAtomized.indexOf(commonName);
			commonNameAtomized.splice(index,1);
		};
	};
});