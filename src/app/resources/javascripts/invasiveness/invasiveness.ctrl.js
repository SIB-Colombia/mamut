'use strict';

angular.module('app.controllers.invasiveness',[])
.controller('InvasivenessCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory', function($scope,ReferenceFactory,AncillaryDataFactory) {

	$scope.invasivenessAtomizedType = $scope.invasivenessFactoryLocal.invasivenessAtomizedType;

	//Ancillary
	var ancillaryDataFactoryUn = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryUn.ancillaryData;
	
	//reference unstructure
	var referenceFactoryUn = new ReferenceFactory();
	$scope.reference = referenceFactoryUn.reference;

	//reference ato
	var referenceFactoryAto = new ReferenceFactory();
	$scope.referenceAto = referenceFactoryAto.reference;

	//Ancillary
	var ancillaryDataFactoryAto = new AncillaryDataFactory();
	$scope.ancillaryDataAto = ancillaryDataFactoryAto.ancillaryData;
	
	//Local variables for reset objects
	var origI = angular.copy($scope.invasivenessAtomizedType);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	$scope.addInvasiveness = function(){
		if($scope.formData.invasiveness.invasivenessUnstructured !== ''){
			console.log('enviar cambios');
		}
	};
	
	$scope.addInvasivenessAtomizedType = function(list, invasiveness) {
		$scope.invasivenessFactoryLocal.add(list, invasiveness);
		//Reset the scope variable
		$scope.invasivenessAtomizedType = origI;
		origI = angular.copy($scope.invasivenessAtomizedType);
		$scope.UpdateCheckBoxes(invasiveness, false);
	};

	$scope.removeInvasivenessAtomized= function(list,invasiveness){
		$scope.invasivenessFactoryLocal.delete(list,invasiveness);	
	};

	$scope.editInvasivenessAtomized = function(list,invasiveness) {
		$scope.invasivenessAtomizedType = angular.copy(invasiveness);
		$scope.UpdateCheckBoxes(invasiveness, true);		
	};

	$scope.cancelInvasivenessAtomizedType = function(invasiveness) {
		$scope.invasivenessAtomizedType = angular.copy(origI);
		$scope.UpdateCheckBoxes(invasiveness,false);

	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryUn.addTo(ancillaryDataList,ancillaryData);
			ancillaryDataFactoryUn.addTo($scope.formData.ancillaryData,ancillaryData);
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryUn.addTo($scope.formData.references,reference);
			});
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryInvasiveness').collapse("hide");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryUn.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$('#ancillaryInvasiveness').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		$('#ancillaryInvasiveness').collapse("hide");
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryUn.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceInvasiveness').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryUn.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceInvasiveness').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceInvasiveness').collapse("hide");
	};

	//Atomized fields
	$scope.addAncillaryDataAto = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			ancillaryDataFactoryAto.addTo(ancillaryDataList,ancillaryData);
			ancillaryDataFactoryAto.addTo($scope.formData.ancillaryData,ancillaryData);
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryAto.addTo($scope.formData.references,reference);
			});
			//Reset the scope variable
			$scope.ancillaryDataAto = origAD;
			origAD = angular.copy($scope.ancillaryDataAto);
			$('#ancillaryInvasivenessAto').collapse("hide");
		}
	};

	$scope.editAncillaryDataAto = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryDataAto = angular.copy(ancillaryData);
		$('#ancillaryInvasivenessAto').collapse("show");
	};

	$scope.cancelAncillaryDataAto = function() {
		$scope.ancillaryDataAto = angular.copy(origAD);
		$('#ancillaryInvasivenessAto').collapse("hide");
	};

	$scope.addReferenceAto = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryAto.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.referenceAto = origR;
			origR = angular.copy($scope.referenceAto);
			$('#referenceInvasivenessAto').collapse("hide");
		}
	};

	$scope.editReferenceAto = function(referenceList,reference) {
		$scope.referenceAto = angular.copy(reference);
		$('#referenceInvasivenessAto').collapse("show");
	};

	$scope.cancelReferenceAto = function() {
		$scope.referenceAto = angular.copy(origR);
		$('#referenceInvasivenessAto').collapse("hide");
	};

	$scope.UpdateCheckBoxes = function(invasiveness,state){
		angular.forEach($scope.origin, function(item) {
            if(invasiveness.origin!==null && invasiveness.origin === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.presence, function(item) {
            if(invasiveness.presence!==null && invasiveness.presence === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.persistence, function(item) {
            if(invasiveness.persistence!==null && invasiveness.persistence === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.distribution, function(item) {
        	angular.forEach(invasiveness.distribution, function(distribution) {
        		if(distribution!==null && distribution === item.name){
	  				item.checked = state;
				}
        	});
        });

        angular.forEach($scope.harmful, function(item) {
            if(invasiveness.harmful!==null && invasiveness.harmful === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.abundance, function(item) {
            if(invasiveness.abundance!==null && invasiveness.abundance === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.trend, function(item) {
            if(invasiveness.trend!==null && invasiveness.trend === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.rateOfSpread, function(item) {
            if(invasiveness.rateOfSpread!==null && invasiveness.rateOfSpread === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.regulatoryListing, function(item) {
            if(invasiveness.regulatoryListing!==null && invasiveness.regulatoryListing === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.localityType, function(item) {
            if(invasiveness.localityType!==null && invasiveness.localityType === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.locationStandard, function(item) {
            if(invasiveness.locationValue!==null && invasiveness.locationValue === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.publicationDatePrecision, function(item) {
            if(invasiveness.publicationDatePrecision!==null && invasiveness.publicationDatePrecision === item.name){
  				item.checked = state;
			}
        });
	};

}]);