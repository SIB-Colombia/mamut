'use strict';

angular.module('app.services.territory',[])
.factory('TerritoryFactory', function(){
	return function() {
		this.territory = {
			territoryAtomized: {
				extentOfOccurrence: '',
				areaOfOccupancy: ''
			},
			territoryUnstructured: '',
			ancillaryData: []
		};
	};
});