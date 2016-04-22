'use strict';

angular.module('app.controllers.form',[])
.controller('formController', ['$scope', '$http', '$rootScope', '$routeParams', '$resource', '$location', 'DirectThreatsFactory', 'LegislationFactory', 
	'PopulationBiologyFactory', 'TerritoryFactory', 'HabitatsFactory', 'AnnualCycleFactory', 'BehaviorFactory',	'DispersalFactory','EcologicalSignificanceFactory', 
	'EnvironmentalEnvelopeFactory', 'FeedingFactory', 'InteractionsFactory', 'LifeCycleFactory', 'LifeFormFactory', 'MigratoryFactory', 'MolecularDataFactory',
	'ReproductionFactory','InvasivenessFactory','TaxonRecordNameFactory','FullDescriptionFactory','IdentificationKeysFactory','ManagementAndConservationAtomizedFactory',
	function($scope, $http, $rootScope, $routeParams, $resource , $location, DirectThreatsFactory, LegislationFactory, 
		PopulationBiologyFactory, TerritoryFactory, HabitatsFactory, AnnualCycleFactory,BehaviorFactory,DispersalFactory,EcologicalSignificanceFactory,
		EnvironmentalEnvelopeFactory,FeedingFactory,InteractionsFactory,LifeCycleFactory,LifeFormFactory,MigratoryFactory,MolecularDataFactory,
		ReproductionFactory,InvasivenessFactory,TaxonRecordNameFactory,FullDescriptionFactory,IdentificationKeysFactory,ManagementAndConservationAtomizedFactory) {

	//Factories
	$scope.annualCycleFactoryLocal = new AnnualCycleFactory();
	$scope.behaviorFactoryLocal = new BehaviorFactory();
	$scope.directThreatsFactoryLocal = new DirectThreatsFactory();
	$scope.dispersalFactoryLocal = new DispersalFactory();
	$scope.ecologicalSignificanceFactoryLocal = new EcologicalSignificanceFactory();
	$scope.environmentalEnvelopeFactoryLocal = new EnvironmentalEnvelopeFactory();
	$scope.feedingFactoryLocal = new FeedingFactory();
	$scope.fullDescriptionFactoryLocal = new FullDescriptionFactory();
	$scope.habitatsFactoryLocal = new HabitatsFactory();
	$scope.identificationKeysFactoryLocal = new IdentificationKeysFactory();
	$scope.interactionsFactoryLocal = new InteractionsFactory();
	$scope.invasivenessFactoryLocal = new InvasivenessFactory();
	$scope.legislationFactoryLocal = new LegislationFactory();
	$scope.lifeCycleFactoryLocal = new LifeCycleFactory();
	$scope.lifeFormFactoryLocal = new LifeFormFactory();
	$scope.managementAndConservationAtomizedFactoryLocal = new ManagementAndConservationAtomizedFactory();
	$scope.migratoryFactoryLocal = new MigratoryFactory();
	$scope.molecularDataFactoryLocal = new MolecularDataFactory();
	$scope.populationBiologyFactoryLocal = new PopulationBiologyFactory();
	$scope.reproductionFactoryLocal = new ReproductionFactory();
	$scope.taxonRecordNameFactoryLocal = new TaxonRecordNameFactory();
	$scope.territoryFactoryLocal = new TerritoryFactory();
	//Initial formData

	$scope.roleAdministrador = false;
	angular.forEach($scope.roles, function(rol){
		if(rol==='administrator'){
			$scope.roleAdministrador = true;
		}
	});

	$scope.formData = {
		taxonRecordName : $scope.taxonRecordNameFactoryLocal.taxonRecordName,
		hierarchy : [],
		abstract : '',
		synonymsAtomized : [],
		commonNamesAtomized : [],
		fullDescription : $scope.fullDescriptionFactoryLocal.fullDescription,
		identificationKeys : $scope.identificationKeysFactoryLocal.identificationKeys,
		lifeForm : $scope.lifeFormFactoryLocal.lifeForm,
		lifeCycle : $scope.lifeCycleFactoryLocal.lifeCycle,
		reproduction : $scope.reproductionFactoryLocal.reproduction,
		feeding : $scope.feedingFactoryLocal.feeding,
		dispersal : $scope.dispersalFactoryLocal.dispersal,
		behavior : $scope.behaviorFactoryLocal.behavior,
		interactions : $scope.interactionsFactoryLocal.interactions,
		molecularData : $scope.molecularDataFactoryLocal.molecularData,
		migratory : $scope.migratoryFactoryLocal.migratory,
		ecologicalSignificance : $scope.ecologicalSignificanceFactoryLocal.ecologicalSignificance,
		environmentalEnvelope  : $scope.environmentalEnvelopeFactoryLocal.environmentalEnvelope,
		invasiveness : $scope.invasivenessFactoryLocal.invasiveness,
		habitats : $scope.habitatsFactoryLocal.habitats,
		distribution : [],
		endemicAtomized : [],
		territory : $scope.territoryFactoryLocal.territory,
		populationBiology : $scope.populationBiologyFactoryLocal.populationBiology,
		threatStatus : [],
		directThreats : $scope.directThreatsFactoryLocal.directThreats,
		legislation : $scope.legislationFactoryLocal.legislation,
		usesManagementAndConservation : $scope.managementAndConservationAtomizedFactoryLocal.usesManagementAndConservation,
		associatedParty : [],
		references : [],
		ancillaryData : [],
		moreInformation : '',
		annualCycles : $scope.annualCycleFactoryLocal.annualCycles,
		briefDescription : ''
	};
	if($scope.formDataGet!==undefined){
		if($scope.formDataGet._id!==undefined){
			$scope.formData._id = $scope.formDataGet._id;
		}
		//$scope.formData = $scope.formDataGet;
		if($scope.formDataGet.taxonRecordName!==undefined){
			$scope.formData.taxonRecordName = $scope.formDataGet.taxonRecordName;
		}
		if($scope.formDataGet.hierarchy!==undefined){
			$scope.formData.hierarchy = $scope.formDataGet.hierarchy;
		}
		if($scope.formDataGet.abstract!==undefined){
			$scope.formData.abstract = $scope.formDataGet.abstract;
		}
		if($scope.formDataGet.synonymsAtomized!==undefined){
			$scope.formData.synonymsAtomized = $scope.formDataGet.synonymsAtomized;
		}
		if($scope.formDataGet.commonNamesAtomized!==undefined){
			$scope.formData.commonNamesAtomized = $scope.formDataGet.commonNamesAtomized;
		}
		if($scope.formDataGet.commonNameAtomized!==undefined){
			$scope.formData.commonNamesAtomized = $scope.formDataGet.commonNameAtomized;
		}
		if($scope.formDataGet.fullDescription!==undefined){
			$scope.formData.fullDescription = $scope.formDataGet.fullDescription;
		}
		if($scope.formDataGet.identificationKeys!==undefined){
			$scope.formData.identificationKeys = $scope.formDataGet.identificationKeys;
		}
		if($scope.formDataGet.lifeForm!==undefined){
			$scope.formData.lifeForm = $scope.formDataGet.lifeForm;
		}
		if($scope.formDataGet.lifeCycle!==undefined){
			$scope.formData.lifeCycle = $scope.formDataGet.lifeCycle;
		}
		if($scope.formDataGet.reproduction!==undefined){
			$scope.formData.reproduction = $scope.formDataGet.reproduction;
		}
		if($scope.formDataGet.feeding!==undefined){
			$scope.formData.feeding = $scope.formDataGet.feeding;
		}
		if($scope.formDataGet.dispersal!==undefined){
			$scope.formData.dispersal = $scope.formDataGet.dispersal;
			if($scope.formData.dispersal.dispersalAtomized!==undefined){
				angular.forEach($scope.lenguajes.dispersalType, function(item) {
		            if($scope.formData.dispersal.dispersalAtomized.type!==null && $scope.formData.dispersal.dispersalAtomized.type === item.name){
		  				item.checked = true;
					}
		        });

		        angular.forEach($scope.lenguajes.structureDispersed, function(item) {
		            if($scope.formData.dispersal.dispersalAtomized.structureDispersed!==null && $scope.formData.dispersal.dispersalAtomized.structureDispersed === item.name){
		  				item.checked = true;
					}
		        });
			}
		}
		if($scope.formDataGet.behavior!==undefined){
			$scope.formData.behavior = $scope.formDataGet.behavior;
		}
		if($scope.formDataGet.interactions!==undefined){
			$scope.formData.interactions = $scope.formDataGet.interactions;
		}
		if($scope.formDataGet.molecularData!==undefined){
			$scope.formData.molecularData = $scope.formDataGet.molecularData;
		}
		if($scope.formDataGet.migratory!==undefined){
			$scope.formData.migratory = $scope.formDataGet.migratory;
		}
		if($scope.formDataGet.ecologicalSignificance!==undefined){
			$scope.formData.ecologicalSignificance = $scope.formDataGet.ecologicalSignificance;
		}
		if($scope.formDataGet.environmentalEnvelope!==undefined){
			$scope.formData.environmentalEnvelope = $scope.formDataGet.environmentalEnvelope;
		}
		if($scope.formDataGet.invasiveness!==undefined){
			$scope.formData.invasiveness = $scope.formDataGet.invasiveness;
		}
		if($scope.formDataGet.habitats!==undefined){
			$scope.formData.habitats = $scope.formDataGet.habitats;
		}
		if($scope.formDataGet.habitat!==undefined){
			$scope.formData.habitats = $scope.formDataGet.habitat;
		}
		if($scope.formDataGet.distribution!==undefined){
			$scope.formData.distribution = $scope.formDataGet.distribution;
		}
		if($scope.formDataGet.endemicAtomized!==undefined){
			$scope.formData.endemicAtomized = $scope.formDataGet.endemicAtomized;
		}
		if($scope.formDataGet.territory!==undefined){
			$scope.formData.territory = $scope.formDataGet.territory;
		}
		if($scope.formDataGet.populationBiology!==undefined){
			$scope.formData.populationBiology = $scope.formDataGet.populationBiology;
		}
		if($scope.formDataGet.threatStatus!==undefined){
			$scope.formData.threatStatus = $scope.formDataGet.threatStatus;
		}
		if($scope.formDataGet.directThreats!==undefined){
			$scope.formData.directThreats = $scope.formDataGet.directThreats;
		}
		if($scope.formDataGet.legislation!==undefined){
			$scope.formData.legislation = $scope.formDataGet.legislation;
		}
		if($scope.formDataGet.invasiveness!==undefined){
			$scope.formData.invasiveness = $scope.formDataGet.invasiveness;
		}
		if($scope.formDataGet.usesManagementAndConservation!==undefined){
			$scope.formData.usesManagementAndConservation = $scope.formDataGet.usesManagementAndConservation;
		}
		if($scope.formDataGet.associatedParty!==undefined){
			$scope.formData.associatedParty = $scope.formDataGet.associatedParty;
		}
		if($scope.formDataGet.references!==undefined){
			$scope.formData.references = $scope.formDataGet.references;
		}
		if($scope.formDataGet.ancillaryData!==undefined){
			$scope.formData.ancillaryData = $scope.formDataGet.ancillaryData;
		}
		if($scope.formDataGet.moreInformation!==undefined){
			$scope.formData.moreInformation = $scope.formDataGet.moreInformation;
		}
		if($scope.formDataGet.annualCycle!==undefined){
			$scope.formData.annualCycles = $scope.formDataGet.annualCycle;
		}
		if($scope.formDataGet.annualCycles!==undefined){
			$scope.formData.annualCycles = $scope.formDataGet.annualCycles;
		}
		if($scope.formDataGet.briefDescription!==undefined){
			$scope.formData.briefDescription = $scope.formDataGet.briefDescription;
		}
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
		$scope.selectedAttr_2 = [];
		$scope.selectedAttr_3 = [];
		$scope.date = new Date();


		$scope.resetLicenseList = function(license,lincese_list) {
			if(license !== undefined && license!==null){
				license.parentNode.removeChild(license);
			}
			
			angular.forEach(lincese_list, function(item) {
				if(item.nombre ==='Atribución - No Comercial - Compartir igual (CC BY-NC-SA 4.0)'){
					item.checked = true;
				}else{
					item.checked = false;
				}
			});
		};

		$scope.saveFile = function(){
			if($scope.formData._id===undefined){
				if($scope.formData.taxonRecordName.scientificName.simple!==undefined && $scope.formData.taxonRecordName.scientificName.simple!==''){
					$scope.formData.creation_date = new Date();
					var req_1 = {
						 method: 'POST',
						 url: 'http://apichigui-env.us-east-1.elasticbeanstalk.com/fichas',
						 headers: {
						   'Content-Type': 'application/JSON'
						 },
						 data: { "id_user" : "01",
						 		"taxonRecordName":$scope.formData.taxonRecordName

						 }
					};

					$http(req_1).then(function (response) {
						if(response.status === 200){
							$scope.formData._id = response.data["_id"];
							alert('Su ficha se ha creado correctamente');
						}
			        });
				}
			}
		};

		$('#btnNext').click(function(){
			$('.nav-pills.nav-stacked.col-md-2 > .active').next('li').find('a').trigger('click');
		});
}])
.filter('empty_vectors', function() {
	return function(object) {
		// do some bounds checking here to ensure it has that index
        if(object.length===0 ){
			object = '';
		}

		return object;
	};
})
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
})
.filter('references_format', function() {
	return function(reference) {
		//referencia general
		var ref = '';
		//autores
		var authors='';
		reference.authors = [].concat(reference.authors);
		if(reference.authors.length === 1){
			authors += reference.authors;
		}else if(reference.authors.length === 2){
			authors += reference.authors[0] + ' & ' +  reference.authors[1];
		}else if(reference.authors.length === 3){
			authors += reference.authors[0] + ' , ' +  reference.authors[1]+ ' & ' +  reference.authors[2];
		}else{
			authors += reference.authors[0] + ' et al. ';
		}

		//editores
		var editors='';
		reference.editors = [].concat(reference.editors);
		if(reference.editors.length === 1){
			editors += reference.editors + ' (ed.)';
		}else if(reference.editors.length === 2){
			editors += reference.editors[0] + ' & ' +  reference.editors[1] + ' (eds.)' ;
		}else if(reference.editors.length === 3){
			editors += reference.editors[0] + ' , ' +  reference.editors[1]+ ' & ' +  reference.editors[2]+ ' (eds.)';
		}else{
			editors += reference.editors[0] + 'et al. (eds.)';
		}

		//año
		var year = '';
		if(reference.year!==undefined&&reference.year!==''){
			year = ' (' + reference.year + '). ';
		}else{
			year = '(S.F.)';
		}

		//titulo
		var title = '';
		if(reference.title!==undefined&&reference.title!==''){
			title = reference.title + '. ';
		}

		//serie
		var serie ='';
		if(reference.series!==undefined&&reference.series!==''){
			serie = reference.series;
		}

		//capitulo
		var chapter ='';
		if(reference.chapter!==undefined&&reference.chapter!==''){
			chapter = reference.chapter;
		}

		//volumen
		var volume = '';
		if(reference.volume!==undefined&&reference.volume!==''){
			volume = ' Vol. ' + reference.volume + '. ';
		}

		//paginas
		var pages = '';
		if(reference.pages!==undefined&&reference.pages!==''){
			pages = reference.pages + '. ';
		}

		//edicion
		var edition = '';
		if(reference.edition!==undefined&&reference.edition!==''){
			edition = reference.edition + '. ';
		}

		//ciudad
		var city = '';
		if(reference.address!==undefined&&reference.address!==''){
			city = reference.address + ': ';
		}

		//publicador
		var publisher = '';
		if(reference.publisher!==undefined&&reference.publisher!==''){
			publisher = reference.publisher + '. ';
		}

		//urk
		var url = '';
		if(reference.link!==undefined&&reference.link!==''){
			url = 'Disponible en: '+ reference.link;
		}

		//doi
		var doi = '';
		if(reference.doi!==undefined&&reference.doi!==''){
			doi = 'Disponible en: '+ reference.doi;
		}

		//last data accessed
		var date_accessed = '';
		if(reference.accessed!==undefined&&reference.accessed!==''){
			date_accessed = '[ Consultado' + reference.accessed + '].';
		}

		//isbn
		var isbn = '';
		if(reference.isbn!==undefined&&reference.isbn!==''){
			isbn = reference.isbn;
		}

		//issn
		var issn = '';
		if(reference.issn!==undefined&&reference.issn!==''){
			issn = reference.issn;
		}

		//fuente
		var source = '';
		if(reference.source!==undefined&&reference.source!==''){
			source = reference.source + '. ';
		}

		//isntitucion
		var institution = '';
		if(reference.institution!==undefined&&reference.institution!==''){
			institution = reference.institution + '. ';
		}

		switch(reference.type){
			case 'book':
				ref += authors;
				if(authors === ''){
					ref += editors;
				}
				ref += year + title + serie + volume + edition+ city + publisher + url + doi + date_accessed  + isbn;
				
				break;
			case 'miscellany':
				ref += authors+ year + title +  institution + city + url + doi + date_accessed ;
				break;
			case 'book_section':
				ref += authors+ year + title + 'En: '+ editors + source + serie + chapter + volume + edition+ city + publisher + url + doi + date_accessed  + isbn;
				break;
			case 'article':
				ref += authors+ year + title +  source + volume + 'p.'+ pages + url + doi + date_accessed  + issn;
				break;
			case 'thesis':
				ref += authors+ year + title +  institution + city + 'p.'+pages + url + doi + date_accessed ;
				break;
			case 'report':
				ref += authors+ year + title +  institution + city + 'p.'+pages + url + doi + date_accessed ;
				break;
			case 'working_paper':
				ref += authors+ year + title +  institution + city + 'p.'+pages + url + doi + date_accessed ;
				break;
			case 'conference_proceedings':
				ref += authors+ year + title +  source + institution + city + publisher +pages + url + doi + date_accessed ;
				break;
			default:
				break;
		}
		return ref;
	};
})
.filter('references_format_without_url', function() {
	return function(reference) {
		//referencia general
		var ref = '';
		//autores
		var authors='';
		reference.authors = [].concat(reference.authors);
		if(reference.authors.length === 1){
			authors += reference.authors;
		}else if(reference.authors.length === 2){
			authors += reference.authors[0] + ' & ' +  reference.authors[1];
		}else if(reference.authors.length === 3){
			authors += reference.authors[0] + ' , ' +  reference.authors[1]+ ' & ' +  reference.authors[2];
		}else{
			authors += reference.authors[0] + ' et al. ';
		}

		//editores
		var editors='';
		reference.editors = [].concat(reference.editors);
		if(reference.editors.length === 1){
			editors += reference.editors + ' (ed.)';
		}else if(reference.editors.length === 2){
			editors += reference.editors[0] + ' & ' +  reference.editors[1] + ' (eds.)' ;
		}else if(reference.editors.length === 3){
			editors += reference.editors[0] + ' , ' +  reference.editors[1]+ ' & ' +  reference.editors[2]+ ' (eds.)';
		}else{
			editors += reference.editors[0] + 'et al. (eds.)';
		}

		//año
		var year = '';
		if(reference.year!==undefined&&reference.year!==''){
			year = ' (' + reference.year + '). ';
		}else{
			year = '(S.F.)';
		}

		//titulo
		var title = '';
		if(reference.title!==undefined&&reference.title!==''){
			title = reference.title + '. ';
		}

		//serie
		var serie ='';
		if(reference.series!==undefined&&reference.series!==''){
			serie = reference.series;
		}

		//capitulo
		var chapter ='';
		if(reference.chapter!==undefined&&reference.chapter!==''){
			chapter = reference.chapter;
		}

		//volumen
		var volume = '';
		if(reference.volume!==undefined&&reference.volume!==''){
			volume = ' Vol. ' + reference.volume + '. ';
		}

		//paginas
		var pages = '';
		if(reference.pages!==undefined&&reference.pages!==''){
			pages = reference.pages + '. ';
		}

		//edicion
		var edition = '';
		if(reference.edition!==undefined&&reference.edition!==''){
			edition = reference.edition + '. ';
		}

		//ciudad
		var city = '';
		if(reference.address!==undefined&&reference.address!==''){
			city = reference.address + ': ';
		}

		//publicador
		var publisher = '';
		if(reference.publisher!==undefined&&reference.publisher!==''){
			publisher = reference.publisher + '. ';
		}

		//last data accessed
		var date_accessed = '';
		if(reference.accessed!==undefined&&reference.accessed!==''){
			date_accessed = '[ Consultado' + reference.accessed + '].';
		}

		//isbn
		var isbn = '';
		if(reference.isbn!==undefined&&reference.isbn!==''){
			isbn = reference.isbn;
		}

		//issn
		var issn = '';
		if(reference.issn!==undefined&&reference.issn!==''){
			issn = reference.issn;
		}

		//fuente
		var source = '';
		if(reference.source!==undefined&&reference.source!==''){
			source = reference.source + '. ';
		}

		//isntitucion
		var institution = '';
		if(reference.institution!==undefined&&reference.institution!==''){
			institution = reference.institution + '. ';
		}

		switch(reference.type){
			case 'book':
				ref += authors;
				if(authors === ''){
					ref += editors;
				}
				ref += year + title + serie + volume + edition+ city + publisher + date_accessed  + isbn;
				
				break;
			case 'miscellany':
				ref += authors+ year + title +  institution + city + date_accessed ;
				break;
			case 'book_section':
				ref += authors+ year + title + 'En: '+ editors + source + serie + chapter + volume + edition+ city + publisher + date_accessed  + isbn;
				break;
			case 'article':
				ref += authors+ year + title +  source + volume + 'p.'+ pages + date_accessed  + issn;
				break;
			case 'thesis':
				ref += authors+ year + title +  institution + city + 'p.'+pages + date_accessed ;
				break;
			case 'report':
				ref += authors+ year + title +  institution + city + 'p.'+pages + date_accessed ;
				break;
			case 'working_paper':
				ref += authors+ year + title +  institution + city + 'p.'+pages + date_accessed ;
				break;
			case 'conference_proceedings':
				ref += authors+ year + title +  source + institution + city + publisher +pages + date_accessed ;
				break;
			default:
				break;
		}
		return ref;
	};
});
