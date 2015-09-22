'use strict';

angular.module('app.services',[])
.service('managementAndConservationAtomizedService', function(){
	var managementAndConservationAtomizedType;
	var usesManagementAndConservation;

	managementAndConservationAtomizedType = {
		type: '',
		objective: '',
		managementPlan: '',
		actions: [],
		humanAndEnvironmentalrelevanc: '',
		ancillaryData: []
	};
	
	usesManagementAndConservation = {
		usesAtomized: [],
		managementAndConservationAtomized: [],
		managementAndConservationUnstructured: '',
		ancillaryData: []
	};

	return {
		managementAndConservationAtomizedType: managementAndConservationAtomizedType,
		usesManagementAndConservation : usesManagementAndConservation
	};
});