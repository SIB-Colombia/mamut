'use strict';

angular.module('app.services.threatStatus',[])
.factory('ThreatStatusFactory', function(){
	return function() {
		this.threatStatusClass = {
			threatStatusAtomized: {
				threatCategory: {
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
				authority: [],
				appliesTo: {
					country: '',
					stateProvince: '',
					county: '',
					municipality: '',
					locality: ''
				},
				apendiceCITES: [],
				ancillaryData: []
			},
			threatStatusUnstructured: '',
			ancillaryData: []
		};
		
		this.add = function(list,threatStatusClass){
			list.push(threatStatusClass);
		};

		this.delete = function(list,threatStatusClass){
			var index = list.indexOf(threatStatusClass);
			list.splice(index,1);
		};
	};
});