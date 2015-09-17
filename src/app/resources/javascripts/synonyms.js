'use strict';

formApp.controller("synonmyController", function($scope, referenceFactory, ancillaryDataFactory){
	$scope.synonmy = {
		rank: '',
		canonicalName: '',
		canonicalAuthorship: '',
		publishedln: {
			identifier: '',
			datatype: '',
			source: ''
		},
		synonymStatus: '',
		ancillaryData: []
	};

	$scope.formData.synonymsAtomized = [];

	$scope.reference = new referenceFactory();

	//Ancillary
	$scope.ancillaryData = new ancillaryDataFactory();

	//ADD
	$scope.addSynonymsAtomized = function(synonymsAtomized, synonmy) {
		if (synonmy.canonicalName !== '') {
			synonymsAtomized.push({
				synonymName: {
					attributes: {
						id: '',
						isAnamorphic: '',
						nomenclaturalCode: ''
					},
					simple: '',
					rank: synonmy.rank,
					canonicalName: {
						simple: synonmy.canonicalName,
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
						simple: synonmy.canonicalAuthorship,
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
					publishedln: synonmy.publishedln,
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
				synonymStatus: synonmy.synonymStatus,
				ancillaryData: synonmy.ancillaryData
			});
			$scope.synonmy = {
				rank: '',
				canonicalName: '',
				canonicalAuthorship: '',
				publishedln: '',
				synonymStatus: '',
				ancillaryData: []
			};
		}
	};

	//DELETE
	$scope.removeSynonymsAtomized = function(synonmy) {
		$scope.formData.synonymsAtomized.splice(synonmy,1);
	};

	/*$scope.addReference = function(references, reference){
		$scope.reference.addReference(references, reference);
		$scope.reference = '';
	};*/
});