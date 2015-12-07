'use strict';

angular.module('app.services.fullDescription',[])
.factory('FullDescriptionFactory', function(){
	return function() {
		this.fullDescription = {
			fullDescriptionAtomized: [],
			ancillaryDataA: [],
			fullDescriptionUnstructured: '',
			ancillaryData: []
		};

	};
});