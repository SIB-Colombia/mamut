'use strict';

angular.module('app.services.synonmy',[])
.factory('SynonmyFactory', function(){
	return function() {
		this.synonmy = {
			synonymName: {
				attributes: {
					id: '',
					isAnamorphic: '',
					nomenclaturalCode: ''
				},
				simple: '',
				rank: '',
				canonicalName: {
					simple: '',
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
					simple: '',
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
			        source: ''
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
			synonymStatus: '',
			ancillaryData: []
		};

		this.add = function(synonymsAtomized, synonmy){
			synonymsAtomized.push(synonmy);
		};

		this.delete = function(synonymsAtomized, synonmy){
			var index = synonymsAtomized.indexOf(synonmy);
			synonymsAtomized.splice(index,1);
		};
	};
});