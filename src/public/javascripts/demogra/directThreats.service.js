'use strict';

angular.module('app.services.directThreats',[])
.factory('DirectThreatsFactory', function(){
	return function() {
		this.directThreats = {
			directThreatsAtomized: [],
			directThreatsUnstructured: '',
			ancillaryData: []
		};
		this.delete = function(list,directThreatsAtomized){
			var index = list.indexOf(directThreatsAtomized);
			list.splice(index,1);
		};
	};
});