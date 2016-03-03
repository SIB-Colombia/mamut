'use strict';

angular.module('app.services.behavior',[])
.factory('BehaviorFactory', function(){
	return function() {
		this.behavior = {
			behaviorAtomized: [],
			behaviorUnstructured: '',
			ancillaryData: []
		};
		this.delete = function(list,behaviorAtomized){
			var index = list.indexOf(behaviorAtomized);
			list.splice(index,1);
		};
	};
});