'use strict';

angular.module('app.services.use',[])
.factory('usesFactory', function(){
	return function() {
		this.usesAtomizedType = {
			sourceOfInformation: {
				references: [],
				sourceOfInformationText: ''
			},
			useValue: '',
			partUsed: '',
			users: '',
			organisms: '',
			vernacularNameUseAnnotations: '',
			productionDetails: '',
			meansOfApplicationAdministration: '',
			seasonOfAvailabilityUse: '',
			conservationExplotationData: '',
			useTypeAtomized: '',
			economics: '',
			ratingPopularity: '',
			properties: '',
			potential: '',
			useNotes: '',
			ancillaryData: []
		};
		
		this.add = function(list,usesAtomizedType){
			list.push(usesAtomizedType);
		};

		this.delete = function(list,usesAtomizedType){
			var index = list.indexOf(usesAtomizedType);
			list.splice(index,1);
		};	
	};
});