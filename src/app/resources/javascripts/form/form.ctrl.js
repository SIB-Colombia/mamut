'use strict';

angular.module('app.controllers.form',[])
.controller('formController', ['$scope', '$http', '$rootScope', '$routeParams', '$resource', 'DirectThreatsFactory', 'LegislationFactory', 'PopulationBiologyFactory', 'TerritoryFactory', 'HabitatsFactory', 'AnnualCycleFactory', 'BehaviorFactory',
	'DispersalFactory','EcologicalSignificanceFactory', 'EnvironmentalEnvelopeFactory', 'FeedingFactory', 'InteractionsFactory', 'LifeCycleFactory', 'LifeFormFactory', 'MigratoryFactory', 'MolecularDataFactory',
	'ReproductionFactory','InvasivenessFactory','TaxonRecordNameFactory','FullDescriptionFactory','IdentificationKeysFactory','ManagementAndConservationAtomizedFactory',
	function($scope, $http, $rootScope, $routeParams, $resource , DirectThreatsFactory, LegislationFactory, PopulationBiologyFactory, TerritoryFactory, HabitatsFactory, AnnualCycleFactory,BehaviorFactory,DispersalFactory,EcologicalSignificanceFactory,
		EnvironmentalEnvelopeFactory,FeedingFactory,InteractionsFactory,LifeCycleFactory,LifeFormFactory,MigratoryFactory,MolecularDataFactory,ReproductionFactory,InvasivenessFactory,TaxonRecordNameFactory,FullDescriptionFactory,IdentificationKeysFactory,ManagementAndConservationAtomizedFactory) {

	//console.log($scope.formData);

	$scope.directThreatsFactoryLocal = new DirectThreatsFactory();
	$scope.legislationFactoryLocal = new LegislationFactory();
	$scope.populationBiologyFactoryLocal = new PopulationBiologyFactory();
	$scope.territoryFactoryLocal = new TerritoryFactory();
	$scope.habitatsFactoryLocal = new HabitatsFactory();
	$scope.annualCycleFactoryLocal = new AnnualCycleFactory();
	$scope.behaviorFactoryLocal = new BehaviorFactory();
	$scope.dispersalFactoryLocal = new DispersalFactory();
	$scope.ecologicalSignificanceFactoryLocal = new EcologicalSignificanceFactory();
	$scope.environmentalEnvelopeFactoryLocal = new EnvironmentalEnvelopeFactory();
	$scope.feedingFactoryLocal = new FeedingFactory();
	$scope.interactionsFactoryLocal = new InteractionsFactory();
	$scope.lifeCycleFactoryLocal = new LifeCycleFactory();
	$scope.lifeFormFactoryLocal = new LifeFormFactory();
	$scope.migratoryFactoryLocal = new MigratoryFactory();
	$scope.molecularDataFactoryLocal = new MolecularDataFactory();
	$scope.reproductionFactoryLocal = new ReproductionFactory();
	$scope.invasivenessFactoryLocal = new InvasivenessFactory();
	$scope.taxonRecordNameFactoryLocal = new TaxonRecordNameFactory();
	$scope.fullDescriptionFactoryLocal = new FullDescriptionFactory();
	$scope.identificationKeysFactoryLocal = new IdentificationKeysFactory();
	$scope.managementAndConservationAtomizedFactoryLocal = new ManagementAndConservationAtomizedFactory();

	//General Form
	$scope.formData = {
		ancillaryData : [],
		associatedParty : [],
		abstract : '',
		directThreats : $scope.directThreatsFactoryLocal.directThreats,
		legislation : $scope.legislationFactoryLocal.legislation,
		populationBiology : $scope.populationBiologyFactoryLocal.populationBiology,
		territory : $scope.territoryFactoryLocal.territory,
		threatStatus : [],
		distribution : [],
		endemicAtomized : [],
		habitat : $scope.habitatsFactoryLocal.habitat,
		annualCycle : $scope.annualCycleFactoryLocal.annualCycle,
		behavior : $scope.behaviorFactoryLocal.behavior,
		dispersal : $scope.dispersalFactoryLocal.dispersal,
		ecologicalSignificance : $scope.ecologicalSignificanceFactoryLocal.ecologicalSignificance,
		environmentalEnvelope  : $scope.environmentalEnvelopeFactoryLocal.environmentalEnvelope,
		feeding : $scope.feedingFactoryLocal.feeding,
		interactions : $scope.interactionsFactoryLocal.interactions,
		lifeCycle : $scope.lifeCycleFactoryLocal.lifeCycle,
		lifeForm : $scope.lifeFormFactoryLocal.lifeForm,
		migratory : $scope.migratoryFactoryLocal.migratory,
		molecularData : $scope.molecularDataFactoryLocal.molecularData,
		reproduction : $scope.reproductionFactoryLocal.reproduction,
		invasiveness : $scope.invasivenessFactoryLocal.invasiveness,
		commonNameAtomized : [],
		hierarchy : [],
		synonymsAtomized : [],
		taxonRecordName : $scope.taxonRecordNameFactoryLocal.taxonRecordName,
		references : [],
		briefDescription : '',
		fullDescription : $scope.fullDescriptionFactoryLocal.fullDescription,
		identificationKeys : $scope.identificationKeysFactoryLocal.identificationKeys,
		usesManagementAndConservation : $scope.managementAndConservationAtomizedFactoryLocal.usesManagementAndConservation
	};


	//console.log($scope.formData);
	
	
	/*oboe({
		url: 'http://s3.amazonaws.com/mutis/vocabularies/test/editorPrueba.json',
		method: 'GET'
	})
	.done(function(elements) {
		if(elements.abstract !== undefined){
			$scope.formData.abstract = elements.abstract;
		}
		if(elements.ancillaryData !== undefined){
			$scope.formData.ancillaryData = elements.ancillaryData;
		}
		if(elements.associatedParty !== undefined){
			$scope.formData.associatedParty = elements.associatedParty;
		}
		if(elements.behavior !== undefined){
			$scope.formData.behavior = elements.behavior;
		}
		if(elements.commonNameAtomized !== undefined){
			$scope.formData.commonNameAtomized = elements.commonNameAtomized;
		}
		if(elements.directThreats !== undefined){
			$scope.formData.directThreats = elements.directThreats;
		}
		if(elements.dispersal !== undefined){
			$scope.formData.dispersal = elements.dispersal;

			angular.forEach($scope.dispersalType, function(item) {
	            if(elements.dispersal.dispersalAtomized.type!==null && elements.dispersal.dispersalAtomized.type === item.name){
	  				item.checked = true;
				}
        	});

        	angular.forEach($scope.structureDispersed, function(item) {
	            if(elements.dispersal.dispersalAtomized.structureDispersed!==null && elements.dispersal.dispersalAtomized.structureDispersed === item.name){
	  				item.checked = true;
				}
        	});
		}
		if(elements.distribution !== undefined){
			$scope.formData.distribution = elements.distribution;
		}
		if(elements.ecologicalSignificance !== undefined){
			$scope.formData.ecologicalSignificance = elements.ecologicalSignificance;
		}
		if(elements.endemicAtomized !== undefined){
			$scope.formData.endemicAtomized = elements.endemicAtomized;
		}
		if(elements.environmentalEnvelope !== undefined){
			$scope.formData.environmentalEnvelope = elements.environmentalEnvelope;
		}
		if(elements.feeding !== undefined){
			$scope.formData.feeding = elements.feeding;
		}
		if(elements.fullDescription !== undefined){
			$scope.formData.fullDescription = elements.fullDescription;
		}
		if(elements.habitat !== undefined){
			$scope.formData.habitat = elements.habitat;
		}
		if(elements.hierarchy !== undefined){
			$scope.formData.hierarchy = elements.hierarchy;
		}
		if(elements.identificationKeys !== undefined){
			$scope.formData.identificationKeys = elements.identificationKeys;
		}
		if(elements.interactions !== undefined){
			$scope.formData.interactions = elements.interactions;
		}
		if(elements.invasiveness !== undefined){
			$scope.formData.invasiveness = elements.invasiveness;
		}
		if(elements.legislation !== undefined){
			$scope.formData.legislation = elements.legislation;
		}
		if(elements.lifeCycle !== undefined){
			$scope.formData.lifeCycle = elements.lifeCycle;
		}
		if(elements.lifeForm !== undefined){
			$scope.formData.lifeForm = elements.lifeForm;
		}
		if(elements.migratory !== undefined){
			$scope.formData.migratory = elements.migratory;
		}
		if(elements.molecularData !== undefined){
			$scope.formData.molecularData = elements.molecularData;
		}
		if(elements.populationBiology !== undefined){
			$scope.formData.populationBiology = elements.populationBiology;
		}
		if(elements.references !== undefined){
			$scope.formData.references = elements.references;
		}
		if(elements.reproduction !== undefined){
			$scope.formData.reproduction = elements.reproduction;
		}
		if(elements.synonymsAtomized !== undefined){
			$scope.formData.synonymsAtomized = elements.synonymsAtomized;
		}
		if(elements.taxonRecordName !== undefined){
			$scope.formData.taxonRecordName = elements.taxonRecordName;
		}
		if(elements.territory !== undefined){
			$scope.formData.territory = elements.territory;
		}
		if(elements.threatStatus !== undefined){
			$scope.formData.threatStatus = elements.threatStatus;
		}
		if(elements.usesManagementAndConservation !== undefined){
			$scope.formData.usesManagementAndConservation = elements.usesManagementAndConservation;
		}
	}).fail(function() {

		// we don't got it
	});*/

	$http.get('/resources/distribution.json')
		.then(function(res) {
			$scope.ubicacion = res.data;
		});

	//Special distributon for applies to in threat status
	$scope.ubicacion_appliesTo = [
		{"countryName": "Colombia","countryIso": "CO"},
		{"countryName": "Global","countryIso": "GLO"}
	];	

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
			if (things.apendiceCITES !== undefined) {
				$scope.apendiceCITES = things.apendiceCITES;
			}

		})
		.fail(function() {

			// we don't got it
		});

		//Variables


		
		$scope.selectedAttr = [];
		$scope.date = new Date();
		
		$scope.saveFile = function(){
			var req = {
				 method: 'POST',
				 url: 'http://apimamut.elasticbeanstalk.com/post-record',
				 headers: {
				   'Content-Type': 'application/JSON'
				 },
				 data: $scope.formData
			};

			$http(req).then(function (response) {
	           if(response.data.message==='Record created!'){
	           		alert('Felicitaciones, su ficha se ha guardado exitosamente!!!');
	           }
	        });
		};	
}])
.filter('split', function() {
	return function(input, splitChar, splitIndex) {
		// do some bounds checking here to ensure it has that index
		return input.split(splitChar)[splitIndex];
	};
})
.filter('references_translate', function() {
	return function(input,scope) {
		// do some bounds checking here to ensure it has that index
		angular.forEach(scope.reference_type, function(item) {
	        if(input!==null && input === item.original){
				input = item.view;
			}
		});
		return input;
	};
});