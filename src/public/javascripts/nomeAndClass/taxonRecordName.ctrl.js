'use strict';

angular.module('app.controllers.taxonRecordName',[])
.controller('TaxonRecordNameCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.findLanguageName = function(languageIso){
        if(languageIso!== undefined && languageIso !== ''){
            for (var d = 0, len = $scope.idiomas.length; d < len; d += 1) {
            	if(languageIso.length===3){
            		if ($scope.idiomas[d].ISO === languageIso) {
	                    return $scope.idiomas[d].Idioma;
	                }
            	}else{
            		var languageIso2 = languageIso.toLowerCase();
            		if ($scope.idiomas[d].alpha2 === languageIso2) {
	                    return $scope.idiomas[d].Idioma;
	                }
            	}
            }
        }
    };  
    
	//Get Taxomic Information from GBIF
	$scope.getTaxonInformation = function(taxonName) {
		var keyValue = '';
		//drop old information
		$scope.formData.synonymsAtomized = [];
		$scope.formData.commonNamesAtomized = [];
		$scope.formData.hierarchy = [];
		$scope.formData.taxonRecordName.scientificName.simple =  taxonName; 
		$scope.formData.taxonRecordName.scientificName.rank =  '';
		$scope.formData.taxonRecordName.scientificName.canonicalName.simple =  '';
		$scope.formData.taxonRecordName.scientificName.canonicalAuthorship.simple =  '';
		$scope.formData.taxonRecordName.scientificName.publishedln.simple = '';
		

		$.ajaxSetup({
		    beforeSend: function(xhr) {
		        xhr.setRequestHeader('Accept-Language', 'en-US,en;q=0.8,es;q=0.6');
		    }
		});

		$.getJSON('http://api.gbif.org/v1/species?name=' + taxonName + '&limit=1',function( data ) {
  			if (data.results.length > 0) {
				$scope.$apply(function() {
					//taxonRecordName
					$scope.formData.taxonRecordName.scientificName.simple = (data.results[0].scientificName !== undefined) ? data.results[0].scientificName : '';
					$scope.formData.taxonRecordName.scientificName.rank = (data.results[0].rank !== undefined) ? data.results[0].rank : '';
					$scope.formData.taxonRecordName.scientificName.canonicalName.simple = (data.results[0].canonicalName !== undefined) ? data.results[0].canonicalName : '';
					$scope.formData.taxonRecordName.scientificName.canonicalAuthorship.simple = (data.results[0].authorship !== undefined) ? data.results[0].authorship : '';
					$scope.formData.taxonRecordName.scientificName.publishedln.simple = (data.results[0].publishedIn !== undefined) ? data.results[0].publishedIn : '';

					if($scope.formData.taxonRecordName.scientificName.simple!==undefined && $scope.formData.taxonRecordName.scientificName.simple!==''){
						$scope.formData.creation_date = new Date();
						var req_1 = {
							 method: 'POST',
							 url: 'http://167.114.113.179:3000/fichas/',
							 headers: {
							   'Content-Type': 'application/JSON'
							 },
							 data: { "id_user" : $scope.useremail,
							 		"taxonRecordName":$scope.formData.taxonRecordName

							 }
						};


						$http(req_1).then(function (response) {
							if(response.status === 200){
								$scope.formData._id = response.data["id_record"];
								alert('Su ficha se ha creado correctamente');
								if($scope.formData._id!==undefined){
									//hierarchy
									$scope.formData.hierarchy.push({
										classification: '',
										recommended: '',
										kingdom: (data.results[0].kingdom !== undefined) ? data.results[0].kingdom : '',
										phylum: (data.results[0].phylum !== undefined) ? data.results[0].phylum : '',
										classHierarchy: (data.results[0].class !== undefined) ? data.results[0].class : '',
										order: (data.results[0].order !== undefined) ? data.results[0].order : '',
										family: (data.results[0].family !== undefined) ? data.results[0].family : '',
										genus: (data.results[0].genus !== undefined) ? data.results[0].genus : '',
										subGenus: '',
										taxonRank: (data.results[0].rank !== undefined) ? data.results[0].rank : '',
										specificEpithet: '',
										infraspecificEpithet: '',
										higherClassification: '',
										parentTaxon: (data.results[0].parent !== undefined) ? data.results[0].parent : '',
										ancillaryData: [{
											identifier: '',
											dataType: '',
											mimeType: '',
											agent: [{
												firstName: '',
												lastName: '',
												organisation: '',
												position: '',
												address: '',
												phone: '',
												email: '',
												role: '',
												homepage: ''
											}],
											created: $scope.date,
											modified: $scope.date,
											title: '',
											license: '',
											rights: '',
											rigthsHolder: '',
											bibliographicCitation: '',
											audience: [],
											source: (data.results[0].accordingTo !== undefined) ? data.results[0].accordingTo : '',
											subject: [],
											description: '',
											mediaURL: [],
											thumbnailURL: '',
											location: '',
											geoPoint: '',
											reference: [],
											additionalInformation: '',
											dataObject: ''
										}]
									});

									$scope.saveHierarchy();

									//key for synonyms and commonNames
									switch (angular.lowercase(data.results[0].rank)) {
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
									if (keyValue !== '') {
										$.getJSON('http://api.gbif.org/v1/species/' + keyValue + '/synonyms',function(data_1) {
											if (data_1.results.length > 0) {
												$scope.$apply(function() {
													for (var i = 0; i < data_1.results.length; i++) {
														$scope.insertSynonym((data_1.results[i].scientificName !== undefined) ? data_1.results[i].scientificName : '',(data_1.results[i].rank !== undefined) ? data_1.results[i].rank : '',(data_1.results[i].canonicalName !== undefined) ? data_1.results[i].canonicalName : '',(data_1.results[i].authorship !== undefined) ? data_1.results[i].authorship : '',(data_1.results[i].publishedIn !== undefined) ? data_1.results[i].publishedIn : '',(data_1.results[i].nomenclaturalStatus !== undefined && data_1.results[i].nomenclaturalStatus[0] !== undefined) ? data_1.results[i].nomenclaturalStatus : '');
													}
												});
												$scope.saveSynonyms();
											}
										});
										$.getJSON('http://api.gbif.org/v1/species/' + keyValue + '/vernacularNames',function(data_1) {
											if (data_1.results.length > 0) {
												$scope.$apply(function() {
													for (var i = 0; i < data_1.results.length; i++) {
														$scope.insertCommonName((data_1.results[i].vernacularName !== undefined) ? data_1.results[i].vernacularName : '',(data_1.results[i].language !== undefined) ? $scope.findLanguageName(data_1.results[i].language) : '',(data_1.results[i].area !== undefined) ? data_1.results[i].area : '');
													}
													
												});
												$scope.saveCommonNames();
											}
										});
										$.ajax({
											url : 'http://api.speciesplus.net/api/v1/taxon_concepts.json?name='+taxonName,
											headers: {
												'X-Authentication-Token' : 'xl3tUZ6wEEzQmqMSXra5Awtt'
											}
										}).done(function(data){
											var cites = [];
											if(data.taxon_concepts[0].cites_listings!==undefined&&data.taxon_concepts[0].cites_listings.length>0){
												for (var i = 0; i < data.taxon_concepts[0].cites_listings.length; i++) {
													var appendix = data.taxon_concepts[0].cites_listings[i].appendix;
													if(appendix==='I'){
														cites.push("Apéndice I");
													}else if(appendix==='II'){
														cites.push("Apéndice II");
													}else{
														cites.push("Apéndice III");
													}
												}
												$scope.formData.threatStatus.push({
													threatStatusAtomized: {
														threatCategory: {
															measurementID: '',
															measurementType: '',
															measurementValue: '',
															measurementAccuracy: '',
															measurementUnit: '',
															measurementDeterminedDate: '',
															measurementDeterminedBy: [],
															measurementMethod: '',
															measurementRemarks: '',
															relatedTo: ''
														},
														authority: [],
														appliesTo: {
															country: '',
															stateProvince: '',
															county: '',
															municipality: '',
															locality: ''
														},
														apendiceCITES: cites,
														ancillaryData: []
													},
													threatStatusUnstructured: '',
													ancillaryData: []
												});
												var req_1 = {
													method: 'POST',
													url: 'http://167.114.113.179:3000/fichas/'+$scope.formData._id+'/threat_status/',
													headers: {
													  'Content-Type': 'application/JSON'
													},
													data: { "id_user" : $scope.useremail,
														"threatStatus":$scope.formData.threatStatus

													}
												};
												$http(req_1).then(function (response) {
													if(response.status===200){
														alert("Amenazas directas guardadas satisfactoriamente!");
													}
										        });
											}
											
											if(data.taxon_concepts[0].synonyms!==undefined){
												for(var i = 0; i < data.taxon_concepts[0].synonyms.length; i++){
													var synonym_full_name = data.taxon_concepts[0].synonyms[i].full_name;
													$scope.insertSynonym(synonym_full_name,data.taxon_concepts[0].synonyms[i].rank,synonym_full_name,data.taxon_concepts[0].synonyms[i].author_year,'CITES','');
												}
												$scope.saveSynonyms();
											}

											if(data.taxon_concepts[0].common_names!==undefined){
												for(var i = 0; i < data.taxon_concepts[0].common_names.length; i++){
													var common_name = data.taxon_concepts[0].common_names[i].name;
													$scope.insertCommonName(common_name,$scope.findLanguageName(data.taxon_concepts[0].common_names[i].language),'');
												}
												$scope.saveCommonNames();
											}
				
										});			
									}	
								}
							}
				        });
					}
				});
			}
		});
	};

	$scope.saveHierarchy = function(){
		if($scope.formData.hierarchy.length > 0){
			var req_1 = {
				 method: 'POST',
				 url: 'http://167.114.113.179:3000/fichas/'+$scope.formData._id+'/hierarchy/',
				 headers: {
				   'Content-Type': 'application/JSON'
				 },
				 data: { "id_user" : $scope.useremail,
				 		"hierarchy":$scope.formData.hierarchy

				 }
			};
			$http(req_1).then(function (response) {
				if(response.status===200){
					alert("Taxonomia guardada satisfactoriamente!");
				}
	        });
		}
	};

	$scope.saveCommonNames = function(){
		if($scope.formData.commonNamesAtomized.length > 0){
			var req_1 = {
				 method: 'POST',
				 url: 'http://167.114.113.179:3000/fichas/'+$scope.formData._id+'/common_names_atomized/',
				 headers: {
				   'Content-Type': 'application/JSON'
				 },
				 data: { "id_user" : $scope.useremail,
				 		"commonNamesAtomized":$scope.formData.commonNamesAtomized

				 }
			};

			$http(req_1).then(function (response) {
				if(response.status===200){
					alert("Nombres comunes guardados satisfactoriamente!");
				}
	        });
		}
	};

	$scope.saveSynonyms = function(){
		if($scope.formData.synonymsAtomized.length > 0){
			var req_1 = {
				 method: 'POST',
				 url: 'http://167.114.113.179:3000/fichas/'+$scope.formData._id+'/synonyms_atomized/',
				 headers: {
				   'Content-Type': 'application/JSON'
				 },
				 data: { "id_user" : $scope.useremail,
				 		"synonymsAtomized":$scope.formData.synonymsAtomized

				 }
			};

			$http(req_1).then(function (response) {
				if(response.status===200){
					alert("Sinonimos guardados satisfactoriamente!");
				}
	        });
		}
	};

	$scope.insertCommonName = function(name,language,distributionUnstructured){
		$scope.formData.commonNamesAtomized.push({
			name: name,
			language: language,
			usedIn: {
				distributionScope: {
					type: '',
					ancillaryData: []
				},
				temporalCoverage: {
					startDate: '',
					endDate: ''
				},
				distributionAtomizedBranch: [],
				distributionUnstructured: distributionUnstructured,
				ancillaryData: []
			},
			usedBy: '',
			ancillaryData: []
		});
	};

	$scope.insertSynonym = function(synonym_name,rank,canonicalName,canonicalAuthorship,publishedln,synonymStatus){
		$scope.formData.synonymsAtomized.push({
			synonymName: {
				attributes: {
					id: '',
					isAnamorphic: '',
					nomenclaturalCode: ''
				},
				simple: synonym_name,
				rank: rank,
				canonicalName: {
					simple: canonicalName,
					uninomial: '',
					genus: {
						ref: '',
						linkType: ''
					},
					epithet: {
						infragenericEpithet: '',
						specificEpithet: '',
						infraspecificEpithet: ''
					}
				},
				canonicalAuthorship: {
					simple: canonicalAuthorship,
					authorship: {
						simple: '',
						year: [],
						authors: []
					}
				},
				specialAuthorship: {
					basionymAuthorship: {
						simple: '',
						year: [],
						authors: []
					},
					combinationAuthorship: []
				},
				publishedln: {
					identifier: '',
					datatype: '',
					source: publishedln
				},
				year: '',
				microReference: '',
				typificacion: {
					simple: '',
					typeVoucherEntity: {
						voucherReference: [],
						lectotypePublicationVoucher: [],
						lectotypeMicroReferenceVoucher: [],
						typeOfType: ''
					},
					typeNameEntity: {
						nameReference: {
							identifier: '',
							datatype: '',
							source: ''
						},
						lectotypePublication: {
							identifier: '',
							datatype: '',
							source: ''
						},
						lectotypeMicroReference: {
							identifier: '',
							datatype: '',
							source: ''
						}
					}
				},
				spellingCorrentionOf: [],
				basionym: {
					ruleConsidered: '',
					note: '',
					reletedName: {
						identifier: '',
						datatype: '',
						source: ''
					},
					publishedln: {
						identifier: '',
						datatype: '',
						source: ''
					},
					microReference: ''
				},
				basedOn: {
					ruleConsidered: '',
					note: '',
					reletedName: {
						identifier: '',
						datatype: '',
						source: ''
					},
					publishedln: {
						identifier: '',
						datatype: '',
						source: ''
					},
					microReference: ''
				},
				conservedAgainst: [],
				laterHomonymOf: {
					ruleConsidered: '',
					note: '',
					reletedName: {
						identifier: '',
						datatype: '',
						source: ''
					},
					publishedln: {
						identifier: '',
						datatype: '',
						source: ''
					},
					microReference: ''
				},
				sanctioned: {
					ruleConsidered: '',
					note: '',
					reletedName: {
						identifier: '',
						datatype: '',
						source: ''
					},
					publishedln: {
						identifier: '',
						datatype: '',
						source: ''
					},
					microReference: ''
				},
				replacementNameFor: {
					ruleConsidered: '',
					note: '',
					reletedName: {
						identifier: '',
						datatype: '',
						source: ''
					},
					publishedln: {
						identifier: '',
						datatype: '',
						source: ''
					},
					microReference: ''
				},
				publicationStatus: {
					ruleConsidered: '',
					note: '',
					reletedName: {
						identifier: '',
						datatype: '',
						source: ''
					},
					publishedln: {
						identifier: '',
						datatype: '',
						source: ''
					},
					microReference: ''
				},
				providerLink: '',
				providerSpecificData: {
					anyOne: [],
					anyTwo: ''
				}
			},
			synonymStatus: synonymStatus,
			ancillaryData: []
		});
	};
}]);
