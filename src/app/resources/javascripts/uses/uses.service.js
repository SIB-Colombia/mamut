'use strict';

angular.module('app.services',[])
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
	
	return usesAtomizedType;
});