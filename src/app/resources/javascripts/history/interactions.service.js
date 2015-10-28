'use strict';

angular.module('app.services.interactions',[])
.factory('InteractionsFactory', function(){
	return function() {
		this.interactionsAtomizedType = {
			interactionSpecies: '',
			interactionSpeciesType: [],
			ancillaryData: []
		};

		this.interactions = {
			interactionsAtomized: [],
			interactionsUnstructured: '',
			ancillaryData: []
		};

		this.add = function(list,interactionsAtomizedType){
			list.push(interactionsAtomizedType);
		};

		this.delete = function(list,interactionsAtomizedType){
			var index = list.indexOf(interactionsAtomizedType);
			list.splice(index,1);
		};
	};
});