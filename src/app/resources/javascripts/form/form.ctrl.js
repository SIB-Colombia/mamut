'use strict';

angular.module('app.controllers.form',[])
.controller('formController', ['$scope', '$http', function($scope, $http) {

	$http.get('/resources/distribution.json')
		.then(function(res) {
			$scope.ubicacion = res.data;
		});

	$http.get('/resources/language.json')
		.then(function(res) {
			$scope.idiomas = res.data;
		});

	oboe({
			url: 'http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json',
			method: 'GET'
		})
		.done(function(things) {
			if (things.lifeForms !== undefined) {
				$scope.lifeForms = things.lifeForms;
			}
			if (things.lifeCycles !== undefined) {
				$scope.lifeCycles = things.lifeCycles;
			}
			if (things.reproduction !== undefined) {
				$scope.reproduction = things.reproduction;
			}
			if (things.event !== undefined) {
				$scope.event = things.event;
			}
			if (things.primaryDietSource !== undefined) {
				$scope.primaryDietSource = things.primaryDietSource;
			}
			if (things.strategies !== undefined) {
				$scope.strategies = things.strategies;
			}
			if (things.purposes !== undefined) {
				$scope.purposes = things.purposes;
			}
			if (things.dispersalType !== undefined) {
				$scope.dispersalType = things.dispersalType;
			}
			if (things.structureDispersed !== undefined) {
				$scope.structureDispersed = things.structureDispersed;
			}
			if (things.distance !== undefined) {
				$scope.distance = things.distance;
			}
			if (things.behaviors !== undefined) {
				$scope.behaviors = things.behaviors;
			}
			if (things.interactionSpeciesType !== undefined) {
				$scope.interactionSpeciesType = things.interactionSpeciesType;
			}
			if (things.molecularDatas !== undefined) {
				$scope.molecularDatas = things.molecularDatas;
			}
			if (things.migratoryCauses !== undefined) {
				$scope.migratoryCauses = things.migratoryCauses;
			}
			if (things.migratoryPatterns !== undefined) {
				$scope.migratoryPatterns = things.migratoryPatterns;
			}
			if (things.ecologicalSignificances !== undefined) {
				$scope.ecologicalSignificances = things.ecologicalSignificances;
			}
			if (things.environmentalEnvelopes !== undefined) {
				$scope.environmentalEnvelopes = things.environmentalEnvelopes;
			}
			if (things.origin !== undefined) {
				$scope.origin = things.origin;
			}
			if (things.presence !== undefined) {
				$scope.presence = things.presence;
			}
			if (things.persistence !== undefined) {
				$scope.persistence = things.persistence;
			}
			if (things.distribution !== undefined) {
				$scope.distribution = things.distribution;
			}
			if (things.harmful !== undefined) {
				$scope.harmful = things.harmful;
			}
			if (things.abundance !== undefined) {
				$scope.abundance = things.abundance;
			}
			if (things.trend !== undefined) {
				$scope.trend = things.trend;
			}
			if (things.rateOfSpread !== undefined) {
				$scope.rateOfSpread = things.rateOfSpread;
			}
			if (things.regulatoryListing !== undefined) {
				$scope.regulatoryListing = things.regulatoryListing;
			}
			if (things.localityType !== undefined) {
				$scope.localityType = things.localityType;
			}
			if (things.locationStandard !== undefined) {
				$scope.locationStandard = things.locationStandard;
			}
			if (things.publicationDatePrecision !== undefined) {
				$scope.publicationDatePrecision = things.publicationDatePrecision;
			}
			if (things.habitat !== undefined) {
				$scope.habitat = things.habitat;
			}
			if (things.distributionScope !== undefined) {
				$scope.distributionScope = things.distributionScope;
			}
			if (things.extentOfOccurrence !== undefined) {
				$scope.extentOfOccurrence = things.extentOfOccurrence;
			}
			if (things.areaOfOccupancy !== undefined) {
				$scope.areaOfOccupancy = things.areaOfOccupancy;
			}
			if (things.region !== undefined) {
				$scope.region = things.region;
			}
			if (things.mortalityRate !== undefined) {
				$scope.mortalityRate = things.mortalityRate;
			}
			if (things.birthRate !== undefined) {
				$scope.birthRate = things.birthRate;
			}
			if (things.avaregeDensity !== undefined) {
				$scope.avaregeDensity = things.avaregeDensity;
			}
			if (things.populationGrowthRate !== undefined) {
				$scope.populationGrowthRate = things.populationGrowthRate;
			}
			if (things.threatCategory !== undefined) {
				$scope.threatCategory = things.threatCategory;
			}
			if (things.authority !== undefined) {
				$scope.authority = things.authority;
			}
			if (things.directThreats !== undefined) {
				$scope.directThreats = things.directThreats;
			}
			if (things.legislationProtection !== undefined) {
				$scope.legislationProtection = things.legislationProtection;
			}
			if (things.legislationStatus !== undefined) {
				$scope.legislationStatus = things.legislationStatus;
			}
			if (things.legislationType !== undefined) {
				$scope.legislationType = things.legislationType;
			}
			if (things.legislationNorm !== undefined) {
				$scope.legislationNorm = things.legislationNorm;
			}
			if (things.partUsed !== undefined) {
				$scope.partUsed = things.partUsed;
			}
			if (things.useTypeAtomized !== undefined) {
				$scope.useTypeAtomized = things.useTypeAtomized;
			}
			if (things.managementType !== undefined) {
				$scope.managementType = things.managementType;
			}
			if (things.managementAction !== undefined) {
				$scope.managementAction = things.managementAction;
			}
			if (things.reference_type !== undefined) {
				$scope.reference_type = things.reference_type;
			}

		})
		.fail(function() {

			// we don't got it
		});

		//Variables

		//General Form
		$scope.formData = {};
		
		$scope.selectedAttr = [];
		$scope.date = new Date();	
}]);