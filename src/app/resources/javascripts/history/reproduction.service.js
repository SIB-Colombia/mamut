'use strict';

angular.module('app.services.reproduction',[])
.factory('reproductionFactory', function(){
	return function() {
		this.reproduction = {
			reproductionAtomized: [],
			reproductionUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,reproductionAtomized){
			var index = list.indexOf(reproductionAtomized);
			list.splice(index,1);
		};
	};
});