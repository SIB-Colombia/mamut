'use strict';

angular.module('app.services',[])
.service('endemicService', function(){

	var endemicAtomizedType;

	endemicAtomizedType = {
		endemicTo: [],
		endemicIn: '',
		ancillaryData: []
	};
	
	return endemicAtomizedType;
});