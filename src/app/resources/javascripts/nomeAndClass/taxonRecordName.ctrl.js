'use strict';

angular.module('app.controllers.taxonRecordName',[])
.controller('TaxonRecordNameCtrl', ['$scope', function($scope) {
	$scope.findLanguageName = function(languageIso){
        if(languageIso!== undefined && languageIso !== ''){
            for (var d = 0, len = $scope.idiomas.length; d < len; d += 1) {
                if ($scope.idiomas[d].ISO === languageIso) {
                    return $scope.idiomas[d].Idioma;
                }
            }
        }
    };  
    
	//Get Taxomic Information from GBIF
	$scope.getTaxonInformation = function(taxonName) {
		var keyValue = '';
		//drop old information
		$scope.formData.synonymsAtomized = [];
		$scope.formData.commonNameAtomized = [];
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
										$scope.formData.synonymsAtomized.push({
											synonymName: {
												attributes: {
													id: '',
													isAnamorphic: '',
													nomenclaturalCode: ''
												},
												simple: (data_1.results[i].scientificName !== undefined) ? data_1.results[i].scientificName : '',
												rank: (data_1.results[i].rank !== undefined) ? data_1.results[i].rank : '',
												canonicalName: {
													simple: (data_1.results[i].canonicalName !== undefined) ? data_1.results[i].canonicalName : '',
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
													simple: (data_1.results[i].authorship !== undefined) ? data_1.results[i].authorship : '',
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
													source: (data_1.results[i].publishedIn !== undefined) ? data_1.results[i].publishedIn : ''
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
											synonymStatus: (data_1.results[i].nomenclaturalStatus !== undefined && data_1.results[i].nomenclaturalStatus[0] !== undefined) ? data_1.results[i].nomenclaturalStatus : '',
											ancillaryData: []
										});
									}
								});
							}
						});
						$.getJSON('http://api.gbif.org/v1/species/' + keyValue + '/vernacularNames',function(data_1) {
							if (data_1.results.length > 0) {
								$scope.$apply(function() {
									for (var i = 0; i < data_1.results.length; i++) {
										$scope.formData.commonNameAtomized.push({
											name: (data_1.results[i].vernacularName !== undefined) ? data_1.results[i].vernacularName : '',
											language: (data_1.results[i].language !== undefined) ? $scope.findLanguageName(data_1.results[i].language) : '',
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
												distributionUnstructured: (data_1.results[i].area !== undefined) ? data_1.results[i].area : '',
												ancillaryData: []
											},
											usedBy: '',
											ancillaryData: []
										});
									}
								});
							}
						});
					}
				});
			}
		});
	};
}]);