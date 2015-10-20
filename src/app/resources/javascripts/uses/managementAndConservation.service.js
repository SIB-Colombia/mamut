'use strict';

angular.module('app.services.managementAndConservation',[])
.factory('managementAndConservationAtomizedFactory', function(){
	return function() {
		this.managementAndConservationAtomizedType = {
			type: '',
			objective: '',
			managementPlan: '',
			actions: [],
			humanAndEnvironmentalrelevanc: '',
			ancillaryData: []
		};
		
		this.usesManagementAndConservation = {
			usesAtomized: [],
			managementAndConservationAtomized: [],
			managementAndConservationUnstructured: '',
			ancillaryData: []
		};

		this.add = function(list,managementAndConservationAtomizedType){
			list.push(managementAndConservationAtomizedType);
		};

		this.delete = function(list,managementAndConservationAtomizedType){
			var index = list.indexOf(managementAndConservationAtomizedType);
			list.splice(index,1);
		};
	};
});