'use strict';

angular.module('app.services.fullDescription',[])
.factory('fullDescriptionFactory', function(){
	return function() {
		this.fullDescription = {
			fullDescriptionAtomized: [],
			ancillaryDataA: [],
			fullDescriptionUnstructured: '',
			ancillaryData: []
		};

	};
});