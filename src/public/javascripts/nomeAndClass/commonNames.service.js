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

		this.add = function(commonNamesAtomized, commonName){
			commonNamesAtomized.push(commonName);
		};

		this.delete = function(commonNamesAtomized, commonName){
			var index = commonNamesAtomized.indexOf(commonName);
			commonNamesAtomized.splice(index,1);
		};
	};
});