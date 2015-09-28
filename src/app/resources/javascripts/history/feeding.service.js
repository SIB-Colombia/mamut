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
	
	return {
		thropic : thropic,
		feedingAtomizedType : feedingAtomizedType,
		feeding : feeding
	};
});