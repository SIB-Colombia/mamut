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
		if (JSON.stringify(invasiveness) !== JSON.stringify(origI)){
			$scope.invasivenessFactoryLocal.add(list, invasiveness);
			//Reset the scope variable
			$scope.invasivenessAtomizedType = origI;
			origI = angular.copy($scope.invasivenessAtomizedType);
			$scope.UpdateCheckBoxes(invasiveness, false);
		}
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
				ancillaryDataFactoryUn.addTo($scope.formData.ancillaryData,ancillaryData);
				angular.forEach(ancillaryData.reference, function(reference) {
					var idx = $scope.formData.references.indexOf(reference);
					if(idx === -1){
						referenceFactoryUn.addTo($scope.formData.references,reference);
					}
				});
			}

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryInvasiveness').collapse("hide");
		}else{
			alert("La fuente debe ser diligenciada");
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

	$scope.findAncillary = function(ancillaryData){
		angular.forEach($scope.formData.ancillaryData, function(ancillary) {
	        if(ancillaryData!==null && ancillaryData === ancillary.source){
				$scope.ancillaryData = angular.copy(ancillary);
			}
		});
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
				ancillaryDataFactoryAto.addTo($scope.formData.ancillaryData,ancillaryData);
				angular.forEach(ancillaryData.reference, function(reference) {
					var idx = $scope.formData.references.indexOf(reference);
					if(idx === -1){
						referenceFactoryAto.addTo($scope.formData.references,reference);
					}
				});
			}

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$('#ancillaryInvasivenessAto').collapse("hide");
		}else{
			alert("La fuente debe ser diligenciada");
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

	$scope.findAncillaryAto = function(ancillaryData){
		angular.forEach($scope.formData.ancillaryData, function(ancillary) {
	        if(ancillaryData!==null && ancillaryData === ancillary.source){
				$scope.ancillaryData = angular.copy(ancillary);
			}
		});
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

	$scope.findAncillaryAto = function(ancillaryData){
		angular.forEach($scope.formData.ancillaryData, function(ancillary) {
	        if(ancillaryData!==null && ancillaryData === ancillary.source){
				$scope.ancillaryDataAto = angular.copy(ancillary);
			}
		});
	};

	$scope.UpdateCheckBoxes = function(invasiveness,state){
		angular.forEach($scope.lenguajes.origin, function(item) {
            if(invasiveness.origin!==null && invasiveness.origin === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.presence, function(item) {
            if(invasiveness.presence!==null && invasiveness.presence === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.persistence, function(item) {
            if(invasiveness.persistence!==null && invasiveness.persistence === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.distribution, function(item) {
        	angular.forEach(invasiveness.distribution, function(distribution) {
        		if(distribution!==null && distribution === item.name){
	  				item.checked = state;
				}
        	});
        });

        angular.forEach($scope.lenguajes.harmful, function(item) {
            if(invasiveness.harmful!==null && invasiveness.harmful === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.abundance, function(item) {
            if(invasiveness.abundance!==null && invasiveness.abundance === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.trend, function(item) {
            if(invasiveness.trend!==null && invasiveness.trend === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.rateOfSpread, function(item) {
            if(invasiveness.rateOfSpread!==null && invasiveness.rateOfSpread === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.regulatoryListing, function(item) {
            if(invasiveness.regulatoryListing!==null && invasiveness.regulatoryListing === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.localityType, function(item) {
            if(invasiveness.localityType!==null && invasiveness.localityType === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.locationStandard, function(item) {
            if(invasiveness.locationValue!==null && invasiveness.locationValue === item.name){
  				item.checked = state;
			}
        });

        angular.forEach($scope.lenguajes.publicationDatePrecision, function(item) {
            if(invasiveness.publicationDatePrecision!==null && invasiveness.publicationDatePrecision === item.name){
  				item.checked = state;
			}
        });
	};

}]);