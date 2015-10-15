'use strict';

angular.module('app.services.endemic',[])
.service('endemicService', function(){

	var endemicAtomizedType;

	endemicAtomizedType = {
		endemicTo: [],
		endemicIn: '',
		ancillaryData: []
	};

	endemicAtomizedType.add = function(list,endemicAtomized){
		list.push(endemicAtomized);
	};

	endemicAtomizedType.delete = function(list,endemicAtomized){
		var index = list.indexOf(endemicAtomized);
		list.splice(index,1);
	};	
	return 	endemicAtomizedType;
});