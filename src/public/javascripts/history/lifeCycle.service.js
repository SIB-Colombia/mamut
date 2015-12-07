'use strict';

angular.module('app.services.lifeCycle',[])
.factory('LifeCycleFactory', function(){
	return function() {
		this.lifeCycle = {
			lifeCycleAtomized: [],
			lifeCycleUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,lifeCycleAtomized){
			var index = list.indexOf(lifeCycleAtomized);
			list.splice(index,1);
		};
	};
});