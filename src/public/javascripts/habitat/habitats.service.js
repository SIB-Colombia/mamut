'use strict';

angular.module('app.services.habitat',[])
.factory('HabitatsFactory', function(){
	return function() {
		this.habitats = {
			habitatAtomized: [],
			habitatUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,habitatAtomized){
			var index = list.indexOf(habitatAtomized);
			list.splice(index,1);
		};
	};
});