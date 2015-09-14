'use strict';

// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router','ui.bootstrap','ngFileUpload', 'angularModalService'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

				// route to show our basic form (/form)
				.state('form', {
						url: '/form',
						templateUrl: 'form.html',
						controller: 'formController'
				})

				// nested states
				// each of these sections will have their own view
				// url will be nested (/form/profile)
				.state('form.metaData', {
						url: '/metaData',
						templateUrl: 'metaData.html'
				})

				// url will be /form/interests
				.state('form.baseElem', {
						url: '/baseElem',
						templateUrl: 'baseElem.html'
				})

				// url will be /form/payment
				.state('form.recordMeta', {
						url: '/recordMeta',
						templateUrl: 'recordMeta.html'
				})
				.state('form.nomeAndClass', {
						url: '/nomeAndClass',
						templateUrl: 'nomeAndClass.html'
				})

				// url will be /form/interests
				.state('form.taxoDesc', {
						url: '/taxoDesc',
						templateUrl: 'taxoDesc.html'
				})

				// url will be /form/payment
				.state('form.history', {
						url: '/history',
						templateUrl: 'history.html'
				})
				.state('form.invasiveness', {
						url: '/invasiveness',
						templateUrl: 'invasiveness.html'
				})

				// url will be /form/interests
				.state('form.habitat', {
						url: '/habitat',
						templateUrl: 'habitat.html'
				})

				// url will be /form/payment
				.state('form.demogra', {
						url: '/demogra',
						templateUrl: 'demogra.html'
				})
				.state('form.uses', {
						url: '/uses',
						templateUrl: 'uses.html'
				})

				// url will be /form/interests
				.state('form.references', {
						url: '/references',
						templateUrl: 'references.html'
				})

				// url will be /form/payment
				.state('form.ancillary', {
						url: '/ancillary',
						templateUrl: 'ancillary.html'
				});

		// catch all route
		// send users to the form page
		$urlRouterProvider.otherwise('/form/baseElem');
})
.controller('CollapseDemoCtrl', ['$scope', function($scope) {
		$scope.isCollapsed = true;
		$scope.isCollapsed_1 = true;
}])
.controller('UploadFile', ['$scope', 'Upload', function($scope, Upload) {
		 $scope.$watch('files', function () {
				$scope.upload($scope.files);
		});
		$scope.log = '';

		$scope.upload = function (files) {
				if (files && files.length) {
						for (var i = 0; i < files.length; i++) {
								var file = files[i];
								Upload.upload({
										url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
										fields: {
												'username': $scope.username
										},
										file: file
								}).progress(function (evt) {
										var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
										$scope.log = 'progress: ' + progressPercentage + '% ' +
																evt.config.file.name + '\n' + $scope.log;
								}).success(function (data, status, headers, config) {
										$scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
										$scope.$apply();
								});
						}
				}
		};
}])

.controller('checkBoxController',['$scope', function ($scope) {
	$scope.employees=[{name:'John', age:25, gender:'boy'},
			 {name:'Jessie', age:30, gender:'girl'},
			 {name:'Johanna', age:28, gender:'girl'},
			 {name:'Joy', age:15, gender:'girl'},
			 {name:'Mary', age:28, gender:'girl'},
			 {name:'Peter', age:95, gender:'boy'},
			 {name:'Sebastian', age:50, gender:'boy'},
			 {name:'Erika', age:27, gender:'girl'},
			 {name:'Patrick', age:40, gender:'boy'},
			 {name:'Samantha', age:60, gender:'girl'}];
	// toggle selection for a given employee by name
	$scope.toggleSelection = function toggleSelection(selection, employeeName) {
		 var idx = selection.indexOf(employeeName);
		 // is currently selected
		 if (idx > -1) {
			 selection.splice(idx, 1);
		 }
		 // is newly selected
		 else {
			 selection.push(employeeName);
		 }
	 };
}])

// our controller for the form
// =============================================================================
.controller('formController', function($scope, $http, ModalService) {

		$scope.colors = [{name: 'black',shade: 'dark'},{name: 'white',shade: 'light'},{name: 'red',shade: 'dark'},{name: 'blue',        shade: 'dark'},{name: 'yellow', shade: 'light'}
		];

		$scope.selectedColors = [$scope.colors[1],$scope.colors[3]];

		$scope.doCustom=function() {
				$('#myselection').select2();
		};


		$scope.date = new Date();
		$scope.basesElements='';
		$scope.language='';
		$scope.version={major:'',minor:'',modifier:'',dataIssued:'',preferredFlag:''};
		$scope.synonmy = {rank:'' ,canonicalName:'', canonicalAuthorship:'', publishedln:{identifier:'',datatype:'',source:''}, synonymStatus:'',ancillaryData:[]};
		$scope.commonName = {name:'',language:[],usedIn:'',usedBy:'',ancillaryData:[]};
		$scope.hierarchy = {classification:'',recommended:'',kingdom:'',phylum:'',classHierarchy:'',order:'',family:'',genus:'',subGenus:'',taxonRank:'',specificEpithet:'',infraspecificEpithet:'',higherClassification:'',parentTaxon:'',ancillaryData:[]};
		$scope.author = {name:'',role:''};
		$scope.measurementOrFact = {measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''};

		// we will store all of our form data in this object
		$scope.formData = {};
		$scope.formData.revisiones=[];
		$scope.formData.taxonRecordName={scientificName:{attributes:{id:'',isAnamorphic:'',nomenclaturalCode:''},simple:'',rank:'',canonicalName:{simple:'',uninomial:'',genus:{ref:'',linkType:''},epithet:{infragenericEpithet:'',specificEpithet:'',infraspecificEpithet:''}},canonicalAuthorship:{simple:'',authorship:{simple:'',year:[],authors:[]}},specialAuthorship:{basionymAuthorship:{simple:'',year:[],authors:[]},combinationAuthorship:[]},publishedln:{identifier:'',datatype:'',source:''},year:'',microReference:'',typificacion:{simple:'', typeVoucherEntity:{voucherReference:[],lectotypePublicationVoucher:[],lectotypeMicroReferenceVoucher:[],typeOfType:''}},typeNameEntity:{nameReference:{identifier:'',datatype:'',source:''},lectotypePublication:{identifier:'',datatype:'',source:''},lectotypeMicroReference:{identifier:'',datatype:'',source:''}},spellingCorrentionOf:[],basionym:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},basedOn:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},conservedAgainst:[],laterHomonymOf:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},sanctioned:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},replacementNameFor:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},publicationStatus:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},providerLink:'',providerSpecificData:{anyOne:[],anyTwo:''},ancillaryData:[]}};
		$scope.formData.synonymsAtomized=[];
		$scope.formData.commonNameAtomized = [];
		$scope.formData.hierarchy=[];


		$scope.formData.uses=[];
		$scope.formData.references=[];
		$scope.formData.identificationKeys={keys:[],ancillaryData:[]};
		$scope.formData.fullDescription={fullDescriptionAtomized:{measurementOrFact:[],ancillaryData:[]},fullDescriptionUnstructured:'',ancillaryData:[]};
		$scope.formData.lifeForm={lifeFormAtomized:{measurementOrFact:[],ancillaryData:[]},lifeFormUnstructured:'',ancillaryData:[]};
		$scope.formData.lifeCycle={lifeCycleAtomized:{measurementOrFact:[],ancillaryData:[]},lifeCycleUnstructured:'',ancillaryData:[]};
		$scope.formData.reproduction={reproductionAtomized:{measurementOrFact:[],ancillaryData:[]},reproductionUnstructured:'',ancillaryData:[]};
		$scope.formData.annualCycle={annualCycleAtomized:{measurementOrFact:[],ancillaryData:[]},annualCycleUnstructured:'',ancillaryData:[]};
		$scope.formData.feeding={feedingAtomized:{measurementOrFact:[],ancillaryData:[]},feedingUnstructured:'',ancillaryData:[]};
		$scope.formData.dispersal={dispersalAtomized:{measurementOrFact:[],ancillaryData:[]},dispersalUnstructured:'',ancillaryData:[]};
		$scope.formData.behavior={behaviorAtomized:{measurementOrFact:[],ancillaryData:[]},behaviorUnstructured:'',ancillaryData:[]};
		$scope.formData.interactions={interactionsAtomized:{measurementOrFact:[],ancillaryData:[]},interactionsUnstructured:'',ancillaryData:[]};
		$scope.formData.molecularData={molecularDataAtomized:{measurementOrFact:[],ancillaryData:[]},molecularDataUnstructured:'',ancillaryData:[]};
		$scope.formData.migratory={migratoryAtomized:{measurementOrFact:[],ancillaryData:[]},migratoryUnstructured:'',ancillaryData:[]};
		$scope.formData.ecologicalSignificance={ecologicalSignificanceAtomized:{measurementOrFact:[],ancillaryData:[]},ecologicalSignificanceUnstructured:'',ancillaryData:[]};
		$scope.formData.environmentalEnvelope={environmentalEnvelopeAtomized:{measurementOrFact:[],ancillaryData:[]},environmentalEnvelopeUnstructured:'',ancillaryData:[]};
		$scope.formData.invasiveness={invasivenessAtomized:{measurementOrFact:[],ancillaryData:[]},invasivenessUnstructured:'',ancillaryData:[]};
		$scope.formData.habitats={habitatsAtomized:{measurementOrFact:[],ancillaryData:[]},habitatsUnstructured:'',ancillaryData:[]};
		$scope.formData.distribution={distributionScope:{type:'',ancillaryData:[]},temporalCoverage:{startDate:'',endDate:''},distributionAtomized:{measurementOrFact:[],ancillaryData:[]},distributionUnstructured:'',ancillaryData:[]};
		$scope.formData.endemicAtomized={measurementOrFact:[],ancillaryData:[]};
		$scope.formData.territory={territoryAtomized:{measurementOrFact:[],ancillaryData:[]},territoryUnstructured:'',ancillaryData:[]};
		$scope.formData.populationBiology={populationBiologyAtomized:{measurementOrFact:[],ancillaryData:[]},populationBiologyUnstructured:'',ancillaryData:[]};
		$scope.formData.threatStatus={threatStatusAtomized:{measurementOrFact:[],ancillaryData:[]},threatStatusUnstructured:'',ancillaryData:[]};
		$scope.formData.directThreats={directThreatsAtomized:{measurementOrFact:[],ancillaryData:[]},directThreatsUnstructured:'',ancillaryData:[]};
		$scope.formData.legislation={legislationAtomized:{measurementOrFact:[],ancillaryData:[]},legislationUnstructured:'',ancillaryData:[]};
		$scope.formData.managementAndConservation={managementAndConservationAtomized:{measurementOrFact:[],ancillaryData:[]},managementAndConservationUnstructured:'',ancillaryData:[]};
		$scope.formData.ancillaryData=[];
		//$scope.formData.dataset={alternateIdentifier:[], title:[], creator:'',metadataProvider:[],associatedParty:'',pubDate:'',language:'',abstract:'',keyworset:'',additionalInfo:'',intellectialRights:'',distribution:'',coverage:'',purpose:'',contact:[],methods:'',project:''};

		// function to process the form
		$scope.processForm = function() {
				alert('awesome!');
		};

		$scope.addRevision = function(revisiones) {
			revisiones.push({associatedParty:{firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''}, pubDate: '', created: ''});
		};

		$scope.removeRevision = function() {
				var lastItem = $scope.formData.revisiones.length-1;
				$scope.formData.revisiones.splice(lastItem);
		};

		$scope.addReferenceDirec = function(reference) {
			reference.push({identifier:'',datatype:'',source:''});
		};

		$scope.removeReferenceDirec = function() {
				var lastItem = $scope.formData.references.length-1;
				$scope.formData.references.splice(lastItem);
		};

		$scope.getTaxonInformation= function(taxonName) {
				var keyValue = '';
				$.ajax({
						url: 'http://api.gbif.org/v1/species?name='+taxonName+'&limit=1',
						dataType: 'JSONP',
						jsonpCallback: 'callback',
						type: 'GET',
						success: function (data) {
								if(data.results.length > 0){
										$scope.$apply(function(){
												//drop old information
												$scope.formData.synonymsAtomized=[];
												$scope.formData.commonNameAtomized = [];
												$scope.formData.hierarchy=[];
												//taxonRecordName
												$scope.formData.taxonRecordName.scientificName.simple = (data.results[0].scientificName!=undefined)?data.results[0].scientificName:'';
												$scope.formData.taxonRecordName.scientificName.rank = (data.results[0].rank!=undefined)?data.results[0].rank:'';
												$scope.formData.taxonRecordName.scientificName.canonicalName.simple = (data.results[0].canonicalName!=undefined)?data.results[0].canonicalName:'';
												$scope.formData.taxonRecordName.scientificName.canonicalAuthorship.simple = (data.results[0].authorship!=undefined)?data.results[0].authorship:'';
												$scope.formData.taxonRecordName.scientificName.publishedln.simple = (data.results[0].publishedIn!=undefined)?data.results[0].publishedIn:'';
												//hierarchy
												$scope.formData.hierarchy.push({classification:'',recommended:'',kingdom:(data.results[0].kingdom!=undefined)?data.results[0].kingdom:'',phylum:(data.results[0].phylum!=undefined)?data.results[0].phylum:'',classHierarchy:(data.results[0].class!=undefined)?data.results[0].class:'',order:(data.results[0].order!=undefined)?data.results[0].order:'',family:(data.results[0].family!=undefined)?data.results[0].family:'',genus:(data.results[0].genus!=undefined)?data.results[0].genus:'',subGenus:'',taxonRank:(data.results[0].rank!=undefined)?data.results[0].rank:'',specificEpithet:'',infraspecificEpithet:'',higherClassification:'',parentTaxon:(data.results[0].parent!=undefined)?data.results[0].parent:'',ancillaryData:[{identifier:'',dataType:'',mimeType:'', agent:[{firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''}], created:$scope.date ,modified:$scope.date,title:'',license:'',rights:'',rigthsHolder:'',bibliographicCitation:'',audience:[],source:(data.results[0].accordingTo!=undefined)?data.results[0].accordingTo:'',subject:[],description:'',mediaURL:[],thumbnailURL:'',location:'',geoPoint:'',reference:[],additionalInformation:'',dataObject:''}]});
												//key for synonyms and commonNames
												switch(angular.lowercase(data.results[0].rank)){
														case 'kingdom':
																keyValue = data.results[0].kingdomKey;
																break;
														case 'phylum':
																keyValue = data.results[0].phylumKey;
																break;
														case 'class':
																keyValue = data.results[0].classKey;
																break;
														case 'order':
																keyValue = data.results[0].orderKey;
																break;
														case 'family':
																keyValue = data.results[0].familyKey;
																break;
														case 'genus':
																keyValue = data.results[0].genusKey;
																break;
														case 'species':
																keyValue = data.results[0].speciesKey;
																break;
														default:
																keyValue = '';
												}
												//synonyms and commonNames
												if(keyValue!=''){
													 $.ajax({
																url: 'http://api.gbif.org/v1/species/'+keyValue+'/synonyms',
																dataType: 'JSONP',
																jsonpCallback: 'callback',
																type: 'GET',
																success: function (data_1) {
																		if(data_1.results.length > 0){
																				$scope.$apply(function(){
																						for (i = 0; i<data_1.results.length;i++){
																								$scope.formData.synonymsAtomized.push({synonymName:{attributes:{id:'',isAnamorphic:'',nomenclaturalCode:''},simple:(data_1.results[i].scientificName!=undefined)?data_1.results[i].scientificName:'',rank:(data_1.results[i].rank!=undefined)?data_1.results[i].rank:'',canonicalName:{simple:(data_1.results[i].canonicalName!=undefined)?data_1.results[i].canonicalName:'',uninomial:'',genus:{ref:'',linkType:''},epithet:{infragenericEpithet:'',specificEpithet:'',infraspecificEpithet:''}},canonicalAuthorship: {simple:(data_1.results[i].authorship!=undefined)?data_1.results[i].authorship:'',authorship:{simple:'',year:[],authors:[]}},specialAuthorship:{basionymAuthorship:{simple:'',year:[],authors:[]},combinationAuthorship:[]},publishedln:{identifier:'',datatype:'',source:(data_1.results[i].publishedIn!=undefined)?data_1.results[i].publishedIn:''},year:'',microReference:'',typificacion:{simple:'', typeVoucherEntity:{voucherReference:[],lectotypePublicationVoucher:[],lectotypeMicroReferenceVoucher:[],typeOfType:''},typeNameEntity:{nameReference:{identifier:'',datatype:'',source:''},lectotypePublication:{identifier:'',datatype:'',source:''},lectotypeMicroReference:{identifier:'',datatype:'',source:''}}},spellingCorrentionOf:[],basionym:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},basedOn:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},conservedAgainst:[],laterHomonymOf:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},sanctioned:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},replacementNameFor:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},publicationStatus:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},providerLink:'',providerSpecificData:{anyOne:[],anyTwo:''}},synonymStatus:(data_1.results[i].nomenclaturalStatus!=undefined && data_1.results[i].nomenclaturalStatus!="[]")?data_1.results[i].nomenclaturalStatus:'',ancillaryData:[]});
																						}
																				});
																	 }
																},
																error: function (xhr, ajaxOptions, thrownError) {
																		console.log("Status: " + xhr.status);
																		console.log("Message: " + thrownError);
																}
														});

														$.ajax({
																url: 'http://api.gbif.org/v1/species/'+keyValue+'/vernacularNames',
																dataType: 'JSONP',
																jsonpCallback: 'callback',
																type: 'GET',
																success: function (data_1) {
																		if(data_1.results.length > 0){
																				$scope.$apply(function(){
																						for (i = 0; i<data_1.results.length;i++){
																								$scope.formData.commonNameAtomized.push({name:(data_1.results[i].vernacularName!=undefined)?data_1.results[i].vernacularName:'',language:(data_1.results[i].language!=undefined)?data_1.results[i].language:'',usedIn:{distributionScope:{type:'',ancillaryData:[]},temporalCoverage:{startDate:'',endDate:''},distributionAtomizedBranch:[],distributionUnstructured:(data_1.results[i].area!=undefined)?data_1.results[i].area:'',ancillaryData:[]}, usedBy:'',ancillaryData:[]});
																								console.log($scope.formData.commonNameAtomized);
																						}
																				});
																	 }
																},
																error: function (xhr, ajaxOptions, thrownError) {
																		console.log("Status: " + xhr.status);
																		console.log("Message: " + thrownError);
																}
														});
												}
										});
							 }
						},
						error: function (xhr, ajaxOptions, thrownError) {
								console.log("Status: " + xhr.status);
								console.log("Message: " + thrownError);
						}
				});
			};

		$scope.addSynonymsAtomized = function(synonymsAtomized,synonmy) {
				synonymsAtomized.push({synonymName:{attributes:{id:'',isAnamorphic:'',nomenclaturalCode:''},simple:'',rank:synonmy.rank,canonicalName:{simple:synonmy.canonicalName,uninomial:'',genus:{ref:'',linkType:''},epithet:{infragenericEpithet:'',specificEpithet:'',infraspecificEpithet:''}},canonicalAuthorship: {simple:synonmy.canonicalAuthorship,authorship:{simple:'',year:[],authors:[]}},specialAuthorship:{basionymAuthorship:{simple:'',year:[],authors:[]},combinationAuthorship:[]},publishedln:synonmy.publishedln, year:'',microReference:'',typificacion:{simple:'', typeVoucherEntity:{voucherReference:[],lectotypePublicationVoucher:[],lectotypeMicroReferenceVoucher:[],typeOfType:''},typeNameEntity:{nameReference:{identifier:'',datatype:'',source:''},lectotypePublication:{identifier:'',datatype:'',source:''},lectotypeMicroReference:{identifier:'',datatype:'',source:''}}},spellingCorrentionOf:[],basionym:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},basedOn:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},conservedAgainst:[],laterHomonymOf:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},sanctioned:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},replacementNameFor:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},publicationStatus:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},providerLink:'',providerSpecificData:{anyOne:[],anyTwo:''}},synonymStatus:synonmy.synonymStatus,ancillaryData:synonmy.ancillaryData});
				$scope.synonmy = {rank:'' ,canonicalName:'', canonicalAuthorship:'', publishedln:'', synonymStatus:'',ancillaryData:[]};
		};

		$scope.removeSynonymsAtomized = function() {
				var lastItem = $scope.formData.synonymsAtomized.length-1;
				$scope.formData.synonymsAtomized.splice(lastItem);
		};

		$scope.addCommonNamesAtomized = function(commonNameAtomized,commonName) {
				commonNameAtomized.push({name:commonName.name,language:commonName.language,usedIn:{distributionScope:{type:'',ancillaryData:[]},temporalCoverage:{startDate:'',endDate:''},distributionAtomizedBranch:[],distributionUnstructured:commonName.usedIn,ancillaryData:[]}, usedBy:commonName.usedBy,ancillaryData:commonName.ancillaryData});
				$scope.commonName = {name:'',language:[],usedIn:'',usedBy:'',ancillaryData:[]};
		};

		$scope.removeCommonNamesAtomized = function() {
				var lastItem = $scope.formData.commonNameAtomized.length-1;
				$scope.formData.commonNameAtomized.splice(lastItem);
		};

		$scope.addHierarchy = function(hierarchy,hier) {
				hierarchy.push(hier);
				$scope.hierarchy = {classification:'',recommended:'',kingdom:'',phylum:'',classHierarchy:'',order:'',family:'',genus:'',subGenus:'',taxonRank:'',specificEpithet:'',infraspecificEpithet:'',higherClassification:'',parentTaxon:'',ancillaryData:[]};

		};

		$scope.removeHierarchy = function() {
				var lastItem = $scope.formData.hierarchy.length-1;
				$scope.formData.hierarchy.splice(lastItem);
		};

		$scope.addMeasurementOrFact = function(measurementOrFact,measurement){
				measurementOrFact.push({measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''});
				$scope.measurementOrFact = {measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''};
		};

		$scope.addYear = function(years,year){
				years.push(year);
		};

		$scope.addAuthor = function(authors,author){
				//authors.push(name:author.name,role:author.role);
				$scope.author={name:'',role:''};
		};

		$scope.addAncillaryData = function(ancillaryData) {
				if(ancillaryData==undefined){
						ancillaryData=[];
				}
				ancillaryData.push({identifier:'',dataType:'',mimeType:'', agent:[{firstName:'ddd',lastName:'ddd',organisation:'ddd',position:'ddd',address:'ddd',phone:'dd',email:'ddd',role:'ddd',homepage:'ddd'}], created:$scope.date ,modified:$scope.date,title:'',license:'',rights:'',rigthsHolder:'',bibliographicCitation:'',audience:[],source:'',subject:[],description:'',mediaURL:[],thumbnailURL:'',location:'',geoPoint:'',reference:[],additionalInformation:'',dataObject:''});
		};

		$scope.addReference = function(reference) {
				if(reference==undefined){
						reference=[];
				}
				reference.push({identifier:'',datatype:'',source:''});
				$scope.formData.references.push({identifier:'',datatype:'',source:''});
		};

		$scope.addAgent = function(agent) {
				if(agent==undefined){
						agent=[];
				}
				agent.push({firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''});
		};

		 $scope.addDistribution = function(distribution) {
				distribution.push();
		};

		$scope.removeDistribution = function() {
				var lastItem = $scope.formData.distribution.length-1;
				$scope.formData.distribution.splice(lastItem);
		};
		$scope.addThreatStatus = function(threatStatus) {
				threatStatus.push();
		};

		$scope.removeThreatStatus = function() {
				var lastItem = $scope.formData.threatStatus.length-1;
				$scope.formData.threatStatus.splice(lastItem);
		};

		$scope.addUses = function(uses) {
				uses.push({measurementOrFact:[],ancillaryData:[]});
		};

		$scope.removeUses = function() {
				var lastItem = $scope.formData.uses.length-1;
				$scope.formData.uses.splice(lastItem);
		};
});
