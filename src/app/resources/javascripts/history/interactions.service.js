'use strict';

angular.module('app.services.interactions',[])
.service('interactionsService', function(){
	var interactionsAtomizedType;
	var interactions;

	interactionsAtomizedType = {
		interactionSpecies: '',
		interactionSpeciesType: [],
		ancillaryData: []
	};

	interactions = {
		interactionsAtomized: [],
		interactionsUnstructured: '',
		ancillaryData: []
	};

	return {
		interactionsAtomizedType : interactionsAtomizedType,
		interactions : interactions
	};
});