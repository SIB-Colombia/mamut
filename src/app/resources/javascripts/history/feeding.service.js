'use strict';

angular.module('app.services.feeding',[])
.service('feedingService', function(){
	var thropic;
	var feedingAtomizedType;
	var feeding;

	thropic = {
		strategy: '',
		strategyRemarks: ''
	};

	feedingAtomizedType = {
		type: '',
		thropic: [],
		ancillaryData: []
	};

	feeding = {
		feedingAtomized: [],
		feedingUnstructured: '',
		ancillaryData: []
	};
	
	feeding.add = function(list, feedingAtomizedType){
		list.push(feedingAtomizedType);
	};

	feeding.delete = function(list,feedingAtomizedType){
		var index = list.indexOf(feedingAtomizedType);
		list.splice(index,1);
	};
	return {
		thropic : thropic,
		feedingAtomizedType : feedingAtomizedType,
		feeding : feeding
	};
});