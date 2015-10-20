'use strict';

angular.module('app.services.threatStatus',[])
.factory('threatStatusFactory', function(){
	return function() {
		this.threatStatusClass = {
			threatStatusAtomized: {
				threatCategory: '',
				authority: [],
				appliesTo: {
					country: '',
					stateProvince: '',
					county: '',
					municipality: '',
					locality: ''
				},
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