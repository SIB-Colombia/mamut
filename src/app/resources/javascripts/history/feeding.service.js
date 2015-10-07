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
	
	feedingAtomizedType.add = function(feeding, feedingAtomizedType){
		feeding.push(feedingAtomizedType);
	};
	return {
		thropic : thropic,
		feedingAtomizedType : feedingAtomizedType,
		feeding : feeding
	};
});