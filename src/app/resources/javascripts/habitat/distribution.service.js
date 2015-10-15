'use strict';

angular.module('app.services.distribution',[])
.service('distributionService', function(){

	var distributionOpt2;
	var distributionClass;

	distributionOpt2 = {
		country: '',
		stateProvince: '',
		county: '',
		municipality: '',
		locality: '',
		ancillaryData: []
	};

	distributionClass = {
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

	distributionClass.add = function(list,distributionClass){
		list.push(distributionClass);
	};

	distributionClass.delete = function(list,distributionClass){
		var index = list.indexOf(distributionClass);
		list.splice(index,1);
	};

	distributionOpt2.add = function(list,opt2){
		list.push(opt2);
	};

	distributionOpt2.delete = function(list,opt2){
		var index = list.indexOf(opt2);
		list.splice(index,1);
	};
	
	
	return {
		distributionOpt2 : distributionOpt2,
		distributionClass : distributionClass
	};	
});