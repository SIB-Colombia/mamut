'use strict';

angular.module('app.services',[])
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