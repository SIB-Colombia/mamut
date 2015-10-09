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

	interactions.add = function(list,interactionsAtomizedType){
		list.push(interactionsAtomizedType);
	};

	interactions.delete = function(list,interactionsAtomizedType){
		var index = list.indexOf(interactionsAtomizedType);
		list.splice(index,1);
	};

	return {
		interactionsAtomizedType : interactionsAtomizedType,
		interactions : interactions
	};
});