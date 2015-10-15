'use strict';

angular.module('app.services.managementAndConservation',[])
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

	managementAndConservationAtomizedType.add = function(list,managementAndConservationAtomizedType){
		list.push(managementAndConservationAtomizedType);
	};

	managementAndConservationAtomizedType.delete = function(list,managementAndConservationAtomizedType){
		var index = list.indexOf(managementAndConservationAtomizedType);
		list.splice(index,1);
	};

	return {
		managementAndConservationAtomizedType: managementAndConservationAtomizedType,
		usesManagementAndConservation : usesManagementAndConservation
	};
});