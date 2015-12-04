'use strict';

angular.module('app.controllers.form',[])
.controller('formController', ['$scope', '$http', '$rootScope', '$routeParams', '$resource', 'DirectThreatsFactory', 'LegislationFactory', 'PopulationBiologyFactory', 'TerritoryFactory', 'HabitatsFactory', 'AnnualCycleFactory', 'BehaviorFactory',
	'DispersalFactory','EcologicalSignificanceFactory', 'EnvironmentalEnvelopeFactory', 'FeedingFactory', 'InteractionsFactory', 'LifeCycleFactory', 'LifeFormFactory', 'MigratoryFactory', 'MolecularDataFactory',
	'ReproductionFactory','InvasivenessFactory','TaxonRecordNameFactory','FullDescriptionFactory','IdentificationKeysFactory','ManagementAndConservationAtomizedFactory',
	function($scope, $http, $rootScope, $routeParams, $resource , DirectThreatsFactory, LegislationFactory, PopulationBiologyFactory, TerritoryFactory, HabitatsFactory, AnnualCycleFactory,BehaviorFactory,DispersalFactory,EcologicalSignificanceFactory,
		EnvironmentalEnvelopeFactory,FeedingFactory,InteractionsFactory,LifeCycleFactory,LifeFormFactory,MigratoryFactory,MolecularDataFactory,ReproductionFactory,InvasivenessFactory,TaxonRecordNameFactory,FullDescriptionFactory,IdentificationKeysFactory,ManagementAndConservationAtomizedFactory) {

	//Factories
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
			
	if($scope.formDataGet!==undefined){
		$scope.formData = $scope.formDataGet
	} else{
		//New general Form
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

	}

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

	if($scope.lenguajes!==undefined){
		if ($scope.lenguajes.event !== undefined) {
			$scope.event = $scope.lenguajes.event;
		}
		if ($scope.lenguajes.purposes !== undefined) {
			$scope.purposes = $scope.lenguajes.purposes;
		}
		if ($scope.lenguajes.dispersalType !== undefined) {
			$scope.dispersalType = $scope.lenguajes.dispersalType;
		}
		if ($scope.lenguajes.structureDispersed !== undefined) {
			$scope.structureDispersed = $scope.lenguajes.structureDispersed;
		}
		if ($scope.lenguajes.distance !== undefined) {
			$scope.distance = $scope.lenguajes.distance;
		}
		if ($scope.lenguajes.behaviors !== undefined) {
			$scope.behaviors = $scope.lenguajes.behaviors;
		}
		if ($scope.lenguajes.interactionSpeciesType !== undefined) {
			$scope.interactionSpeciesType = $scope.lenguajes.interactionSpeciesType;
		}
		if ($scope.lenguajes.molecularDatas !== undefined) {
			$scope.molecularDatas = $scope.lenguajes.molecularDatas;
		}
		if ($scope.lenguajes.migratoryCauses !== undefined) {
			$scope.migratoryCauses = $scope.lenguajes.migratoryCauses;
		}
		if ($scope.lenguajes.migratoryPatterns !== undefined) {
			$scope.migratoryPatterns = $scope.lenguajes.migratoryPatterns;
		}
		if ($scope.lenguajes.ecologicalSignificances !== undefined) {
			$scope.ecologicalSignificances = $scope.lenguajes.ecologicalSignificances;
		}
		if ($scope.lenguajes.environmentalEnvelopes !== undefined) {
			$scope.environmentalEnvelopes = $scope.lenguajes.environmentalEnvelopes;
		}
		if ($scope.lenguajes.origin !== undefined) {
			$scope.origin = $scope.lenguajes.origin;
		}
		if ($scope.lenguajes.presence !== undefined) {
			$scope.presence = $scope.lenguajes.presence;
		}
		if ($scope.lenguajes.persistence !== undefined) {
			$scope.persistence = $scope.lenguajes.persistence;
		}
		if ($scope.lenguajes.distribution !== undefined) {
			$scope.distribution = $scope.lenguajes.distribution;
		}
		if ($scope.lenguajes.harmful !== undefined) {
			$scope.harmful = $scope.lenguajes.harmful;
		}
		if ($scope.lenguajes.abundance !== undefined) {
			$scope.abundance = $scope.lenguajes.abundance;
		}
		if ($scope.lenguajes.trend !== undefined) {
			$scope.trend = $scope.lenguajes.trend;
		}
		if ($scope.lenguajes.rateOfSpread !== undefined) {
			$scope.rateOfSpread = $scope.lenguajes.rateOfSpread;
		}
		if ($scope.lenguajes.regulatoryListing !== undefined) {
			$scope.regulatoryListing = $scope.lenguajes.regulatoryListing;
		}
		if ($scope.lenguajes.localityType !== undefined) {
			$scope.localityType = $scope.lenguajes.localityType;
		}
		if ($scope.lenguajes.locationStandard !== undefined) {
			$scope.locationStandard = $scope.lenguajes.locationStandard;
		}
		if ($scope.lenguajes.publicationDatePrecision !== undefined) {
			$scope.publicationDatePrecision = $scope.lenguajes.publicationDatePrecision;
		}
		if ($scope.lenguajes.habitat !== undefined) {
			$scope.habitat = $scope.lenguajes.habitat;
		}
		if ($scope.lenguajes.distributionScope !== undefined) {
			$scope.distributionScope = $scope.lenguajes.distributionScope;
		}
		if ($scope.lenguajes.extentOfOccurrence !== undefined) {
			$scope.extentOfOccurrence = $scope.lenguajes.extentOfOccurrence;
		}
		if ($scope.lenguajes.areaOfOccupancy !== undefined) {
			$scope.areaOfOccupancy = $scope.lenguajes.areaOfOccupancy;
		}
		if ($scope.lenguajes.region !== undefined) {
			$scope.region = $scope.lenguajes.region;
		}
		if ($scope.lenguajes.mortalityRate !== undefined) {
			$scope.mortalityRate = $scope.lenguajes.mortalityRate;
		}
		if ($scope.lenguajes.birthRate !== undefined) {
			$scope.birthRate = $scope.lenguajes.birthRate;
		}
		if ($scope.lenguajes.avaregeDensity !== undefined) {
			$scope.avaregeDensity = $scope.lenguajes.avaregeDensity;
		}
		if ($scope.lenguajes.populationGrowthRate !== undefined) {
			$scope.populationGrowthRate = $scope.lenguajes.populationGrowthRate;
		}
		if ($scope.lenguajes.threatCategory !== undefined) {
			$scope.threatCategory = $scope.lenguajes.threatCategory;
		}
		if ($scope.lenguajes.authority !== undefined) {
			$scope.authority = $scope.lenguajes.authority;
		}
		if ($scope.lenguajes.directThreats !== undefined) {
			$scope.directThreats = $scope.lenguajes.directThreats;
		}
		if ($scope.lenguajes.legislationProtection !== undefined) {
			$scope.legislationProtection = $scope.lenguajes.legislationProtection;
		}
		if ($scope.lenguajes.legislationStatus !== undefined) {
			$scope.legislationStatus = $scope.lenguajes.legislationStatus;
		}
		if ($scope.lenguajes.legislationType !== undefined) {
			$scope.legislationType = $scope.lenguajes.legislationType;
		}
		if ($scope.lenguajes.legislationNorm !== undefined) {
			$scope.legislationNorm = $scope.lenguajes.legislationNorm;
		}
		if ($scope.lenguajes.partUsed !== undefined) {
			$scope.partUsed = $scope.lenguajes.partUsed;
		}
		if ($scope.lenguajes.useTypeAtomized !== undefined) {
			$scope.useTypeAtomized = $scope.lenguajes.useTypeAtomized;
		}
		if ($scope.lenguajes.managementType !== undefined) {
			$scope.managementType = $scope.lenguajes.managementType;
		}
		if ($scope.lenguajes.managementAction !== undefined) {
			$scope.managementAction = $scope.lenguajes.managementAction;
		}
		if ($scope.lenguajes.reference_type !== undefined) {
			$scope.reference_type = $scope.lenguajes.reference_type;
		}
		if ($scope.lenguajes.apendiceCITES !== undefined) {
			$scope.apendiceCITES = $scope.lenguajes.apendiceCITES;
		}
	}
		//Variables


		
		$scope.selectedAttr = [];
		$scope.date = new Date();
		
		$scope.saveFile = function(){
			if($scope.formData._id!==undefined){
				var id = $scope.formData._id;
				delete $scope.formData["_id"];

				var req = {
					 method: 'PUT',
					 url: 'http://192.168.205.12:3000/update-record/'+id,
					 headers: {
					   'Content-Type': 'application/JSON'
					 },
					 data: $scope.formData
				};

				$http(req).then(function (response) {
		           if(response.data.message==='Record update!'){
		           		alert('Felicitaciones, su ficha se ha actualizado exitosamente!!!');
		           }
		        });	
		   	}else{
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

			}
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