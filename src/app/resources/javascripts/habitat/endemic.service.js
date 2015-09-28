'use strict';

angular.module('app.services.endemic',[])
.service('endemicService', function(){

	var endemicAtomizedType;

	endemicAtomizedType = {
		endemicTo: [],
		endemicIn: '',
		ancillaryData: []
	};
	
	return endemicAtomizedType;
});