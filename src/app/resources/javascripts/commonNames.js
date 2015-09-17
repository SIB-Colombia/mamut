'use strict';

formApp.controller("commonNameController", function($scope){
	$scope.commonName = {
		name: '',
		language: [],
		usedIn: '',
		usedBy: '',
		ancillaryData: []
	};
	$scope.formData.commonNameAtomized = [];

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
	$scope.addCommonNamesAtomized = function(commonNameAtomized, commonName) {
		if (commonName.name != '') {
			commonNameAtomized.splice(0, 0, {
				name: commonName.name,
				language: commonName.language,
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
					distributionUnstructured: commonName.usedIn,
					ancillaryData: []
				},
				usedBy: commonName.usedBy,
				ancillaryData: commonName.ancillaryData
			});
			$scope.commonName = {
				name: '',
				language: [],
				usedIn: '',
				usedBy: '',
				ancillaryData: []
			};
		}
	};

	//DELETE
	$scope.removeCommonNamesAtomized = function(commonName) {
		$scope.formData.commonNameAtomized.splice(commonName, 1);
	};
});