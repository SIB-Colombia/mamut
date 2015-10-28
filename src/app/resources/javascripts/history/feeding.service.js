'use strict';

angular.module('app.services.feeding',[])
.factory('FeedingFactory', function(){
	return function() {
		this.thropic = {
			strategy: '',
			strategyRemarks: ''
		};

		this.feedingAtomizedType = {
			type: '',
			thropic: [],
			ancillaryData: []
		};

		this.feeding = {
			feedingAtomized: [],
			feedingUnstructured: '',
			ancillaryData: []
		};
		
		this.add = function(list, feedingAtomizedType){
			list.push(feedingAtomizedType);
		};

		this.delete = function(list,feedingAtomizedType){
			var index = list.indexOf(feedingAtomizedType);
			list.splice(index,1);
		};
	};
});