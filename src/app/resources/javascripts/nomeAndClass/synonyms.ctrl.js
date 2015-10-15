'use strict';

angular.module('app.controllers.synonmy',[])
.controller("SynonmyCtrl", ['$scope', 'referenceService', 'ancillaryDataService', 'synonmyService', function($scope ,referenceService,ancillaryDataService,synonmyService){
	//synonmy
	$scope.synonmy = synonmyService;
	//Reference
	$scope.reference = referenceService;
	//Ancillary
	$scope.ancillaryData = ancillaryDataService;
	//synonyms vector for FormData
	$scope.formData.synonymsAtomized = [];

	//reset variables
	var origS = angular.copy($scope.synonmy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);


	//ADD
	$scope.addSynonymsAtomized = function(synonymsAtomized, synonmy) {
		if (synonmy.canonicalName !== '') {
			synonmyService.add(synonymsAtomized, synonmy);
			//Reset the scope variable
			$scope.synonmy = origS;
			origS = angular.copy($scope.synonmy);
		}
	};

	//DELETE
	$scope.removeSynonymsAtomized = function(synonymsAtomized, synonmy) {
		synonmyService.delete(synonymsAtomized, synonmy);
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataService.addTo(ancillaryDataList,ancillaryData);
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
		}		
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
			ancillaryDataService.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			reference.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$scope.isCollapsed_1 = true;
		}	
	};

	$scope.removeReference = function(referenceList,reference){
		referenceService.deleteFrom(referenceList,reference);	
	};
}]);