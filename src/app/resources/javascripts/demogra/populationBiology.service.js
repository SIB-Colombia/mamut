'use strict';

angular.module('app.services.populationBiology',[])
.factory('PopulationBiologyFactory', function(){
	return function() {
		this.populationBiologyAtomized = {
			region: '',
			abundanceData: '',
			densityData: '',
			patternDistribution: '',
			size: '',
			sexRatio: '',
			fecundity: '',
			mortalityRate: '',
			birthRate: '',
			numberIndividualsPerObservation: '',
			averageDensity: '',
			populationTrend: '',
			recruitment: '',
			populationGrowthRate: '',
			emigration: '',
			immigration: '',
			descriptionLifeStages: '',
			proportionIndividualsPerStageLife: '',
			carryingCapacity: '',
			ancillaryData: []
		};

		this.populationBiology = {
			populationBiologyAtomized: [],
			populationBiologyUnstructured: '',
			ancillaryData: []
		};
		this.add = function(list, populationBiologyAtomized){
			list.push(populationBiologyAtomized);
		};

		this.delete = function(list, populationBiologyAtomized){
			var index = list.indexOf(populationBiologyAtomized);
			list.splice(index,1);
		};
	};
});