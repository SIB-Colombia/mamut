'use strict';

angular.module('app.services.distribution',[])
.factory('DistributionFactory', function(){
	return function() {
		this.distributionOpt2 = {
			country: '',
			stateProvince: '',
			county: '',
			municipality: '',
			locality: '',
			ancillaryData: []
		};

		this.distributionClass = {
			distributionScope: {
				type: '',
				ancillaryData: []
			},
			temporalCoverage: {
				startDate: '',
				endDate: ''
			},
			distributionAtomized: [],
			distributionUnstructured: '',
			ancillaryData: []
		};

		this.addClass = function(list,distributionClass){
			list.push(distributionClass);
		};

		this.deleteClass = function(list,distributionClass){
			var index = list.indexOf(distributionClass);
			list.splice(index,1);
		};

		this.addOpt2 = function(list,opt2){
			list.push(opt2);
		};

		this.deleteOpt2 = function(list,opt2){
			var index = list.indexOf(opt2);
			list.splice(index,1);
		};
	
	};
});