'use strict';

angular.module('app.services.endemic',[])
.factory('endemicFactory', function(){
	return function() {
		this.endemicAtomizedType = {
			endemicTo: [],
			endemicIn: '',
			ancillaryData: []
		};

		this.add = function(list,endemicAtomized){
			list.push(endemicAtomized);
		};

		this.delete = function(list,endemicAtomized){
			var index = list.indexOf(endemicAtomized);
			list.splice(index,1);
		};	
	};
});