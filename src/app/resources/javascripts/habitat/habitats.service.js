'use strict';

angular.module('app.services.habitat',[])
.factory('habitatsFactory', function(){
	return function() {
		this.habitat = {
			habitatAtomized: [],
			ancillaryDataA: [],
			habitatUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,habitatAtomized){
			var index = list.indexOf(habitatAtomized);
			list.splice(index,1);
		};
	};
});