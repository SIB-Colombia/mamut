'use strict';

angular.module('app.services.use',[])
.service('usesService', function(){
	var usesAtomizedType;

	usesAtomizedType = {
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
	
	usesAtomizedType.add = function(list,usesAtomizedType){
		list.push(usesAtomizedType);
	};

	usesAtomizedType.delete = function(list,usesAtomizedType){
		var index = list.indexOf(usesAtomizedType);
		list.splice(index,1);
	};	
	
	return usesAtomizedType;
});