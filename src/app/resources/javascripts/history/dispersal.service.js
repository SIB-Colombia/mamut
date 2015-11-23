'use strict';

angular.module('app.services.dispersal',[])
.factory('DispersalFactory', function(){
	return function() {
		this.dispersal = {
			dispersalAtomized: {
				purpose: [],
				type: '',
				structureDispersed: '',
				distance: ''
			},
			dispersalUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,purpose){
			var index = list.indexOf(purpose);
			list.splice(index,1);
		};
	};
});