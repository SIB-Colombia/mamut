'use strict';

angular.module('app.services.managementAndConservation',[])
.factory('ManagementAndConservationAtomizedFactory', function(){
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
			managementAndConservation : {
				managementAndConservationAtomized : [],
				managementAndConservationUnstructured : '',
				ancillaryData: []
			}
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