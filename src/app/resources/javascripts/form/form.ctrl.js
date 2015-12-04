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
		$scope.formData = $scope.formDataGet;
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
		if ($scope.lenguajes.distance !== undefined) {
			$scope.distance = $scope.lenguajes.distance;
		}
		if ($scope.lenguajes.partUsed !== undefined) {
			$scope.partUsed = $scope.lenguajes.partUsed;
		}
	}
		//Variables


		
		$scope.selectedAttr = [];
		$scope.date = new Date();
		
		$scope.saveFile = function(){
			if($scope.formData._id!==undefined){
				var id = $scope.formData._id;
	
				var req = {
					 method: 'PUT',
					 url: 'http://apimamut.elasticbeanstalk.com/update-record/'+id,
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
				var req_1 = {
					 method: 'POST',
					 url: 'http://apimamut.elasticbeanstalk.com/post-record',
					 headers: {
					   'Content-Type': 'application/JSON'
					 },
					 data: $scope.formData
				};

				$http(req_1).then(function (response) {
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
		angular.forEach(scope.lenguajes.reference_type, function(item) {
	        if(input!==null && input === item.original){
				input = item.view;
			}
		});
		return input;
	};
});