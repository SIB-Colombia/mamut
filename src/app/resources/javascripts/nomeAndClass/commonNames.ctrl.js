'use strict';

angular.module('app.controllers.commonName',[])
.controller('CommonNameCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory', 'CommonNameFactory', function($scope,ReferenceFactory,AncillaryDataFactory,CommonNameFactory) {
	//Common Name element
	var commonNameFactoryLocal = new CommonNameFactory();
	$scope.commonName = commonNameFactoryLocal.commonName;

	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;

	//reset variables
	var origCN = angular.copy($scope.commonName);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);


	//ADD
	$scope.addCommonNamesAtomized = function(commonNameAtomized, commonName) {
		if (!(JSON.stringify(commonName) === JSON.stringify(origCN))){
			commonNameFactoryLocal.add(commonNameAtomized, commonName);
			//Reset the scope variable
			$scope.commonName = origCN;
			origCN = angular.copy($scope.commonName);
			$('#commonNameForm').collapse("hide");
		}
	};

	//DELETE
	$scope.removeCommonNamesAtomized = function(commonNameAtomized, commonName) {
		commonNameFactoryLocal.delete(commonNameAtomized, commonName);
	};

	//EDIT
	$scope.editCommonNamesAtomized = function(commonNameAtomized, commonName) {
		$scope.commonName = angular.copy(commonName);
		$('#commonNameForm').collapse("show");
	};

	//CANCEL
	$scope.cancelCommonNamesAtomized = function() {
		$scope.commonName = angular.copy(origCN);
		$('#commonNameForm').collapse("hide");
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			var insert = true;
			angular.forEach($scope.formData.ancillaryData, function(ancillary) {
			    if(ancillaryData.source!==null && ancillaryData.source === ancillary.source){
			    	angular.forEach(ancillary.reference, function(reference) {
						angular.forEach(ancillaryData.reference, function(reference_anci) {
							if(reference.source!==null && reference.source === reference_anci.source){
								insert = false;
							}
						});
					});
				}
			});

			if(insert){
				ancillaryDataFactoryLocal.addTo($scope.formData.ancillaryData,ancillaryData);
				angular.forEach(ancillaryData.reference, function(reference) {
					referenceFactoryLocal.addTo($scope.formData.references,reference);
				});
			}

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}else{
			alert("La fuente debe ser diligenciada");
		}		
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
	};

	$scope.findAncillary = function(ancillaryData){
		angular.forEach($scope.formData.ancillaryData, function(ancillary) {
	        if(ancillaryData!==null && ancillaryData === ancillary.source){
				$scope.ancillaryData = angular.copy(ancillary);
			}
		});
	}

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceCommonName').collapse("hide");
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);	
	};
	
	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceCommonName').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceCommonName').collapse("hide");
	};
}]);