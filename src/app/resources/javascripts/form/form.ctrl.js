'use strict';

angular.module('app.controllers.form',[])
.controller('formController', ['$scope', '$http', '$rootScope', '$routeParams', '$resource', '$location', 'DirectThreatsFactory', 'LegislationFactory', 'PopulationBiologyFactory', 'TerritoryFactory', 'HabitatsFactory', 'AnnualCycleFactory', 'BehaviorFactory',
	'DispersalFactory','EcologicalSignificanceFactory', 'EnvironmentalEnvelopeFactory', 'FeedingFactory', 'InteractionsFactory', 'LifeCycleFactory', 'LifeFormFactory', 'MigratoryFactory', 'MolecularDataFactory',
	'ReproductionFactory','InvasivenessFactory','TaxonRecordNameFactory','FullDescriptionFactory','IdentificationKeysFactory','ManagementAndConservationAtomizedFactory',
	function($scope, $http, $rootScope, $routeParams, $resource , $location, DirectThreatsFactory, LegislationFactory, PopulationBiologyFactory, TerritoryFactory, HabitatsFactory, AnnualCycleFactory,BehaviorFactory,DispersalFactory,EcologicalSignificanceFactory,
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
		           		document.location.href = "/";
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
		           		document.location.href = "/";
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
		if(reference.title!==undefined&&reference.source===''){
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
			volume = ' y ' + reference.volume + '. ';
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
				ref += authors
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
		if(reference.title!==undefined&&reference.source===''){
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
			volume = ' y ' + reference.volume + '. ';
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
				ref += authors
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
