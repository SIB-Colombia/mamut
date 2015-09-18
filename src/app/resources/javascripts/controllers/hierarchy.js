'use strict';

var hierarchyModule = angular.module('hierarchyModule',[]);

hierarchyModule.controller("hierarchyController", function($scope){	
	$scope.hierarchy = {
		classification: '',
		recommended: '',
		kingdom: '',
		phylum: '',
		classHierarchy: '',
		order: '',
		family: '',
		genus: '',
		subGenus: '',
		taxonRank: '',
		specificEpithet: '',
		infraspecificEpithet: '',
		higherClassification: '',
		parentTaxon: '',
		ancillaryData: []
	};
	$scope.formData.hierarchy = [];

	//Reference
	$scope.reference = {
		id: '',
		profile_id:'',
		group_id:'',
		created:'',
		last_modified:'',
		identifiers:[],
		abstract:'',
		tags:'',
		type: '',
		source: '',
		title:'',
		authors:[],
		year:'',
		volume:'',
		issue:'',
		pages:'',
		series:'',
		chapter:'',
		websites:'',
		accessed:'',
		publisher:'',
		city:'',
		edition:'',
		institution:'',
		editors:[],
		keywors:[],
		doi:'',
		isbn:'',
		issn:'',
		link:''
	};

	//Ancillary
	$scope.ancillaryData = {
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
		created: '',
		modified: '',
		license: '',
		rights: '',
		rigthsHolder: '',
		bibliographicCitation: '',
		audience: [],
		source: '',
		subject: [],
		description: '',
		mediaURL: [],
		thumbnailURL: '',
		location: '',
		geoPoint: '',
		reference: [],
		additionalInformation: '',
		dataObject: ''
	};

	//ADD
	$scope.addHierarchy = function(hierarchy, hier) {
		if (hier.kingdom !== '') {
			hierarchy.push(hier);
			$scope.hierarchy = {
				classification: '',
				recommended: '',
				kingdom: '',
				phylum: '',
				classHierarchy: '',
				order: '',
				family: '',
				genus: '',
				subGenus: '',
				taxonRank: '',
				specificEpithet: '',
				infraspecificEpithet: '',
				higherClassification: '',
				parentTaxon: '',
				ancillaryData: []
			};
		}
	};

	//DELETE
	$scope.removeHierarchy = function(hierarchy) {
		$scope.formData.hierarchy.splice(hierarchy,1);
	};
});