'use strict';

angular.module('app.controllers.reproduction',[])
.controller('ReproductionCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory', function($scope,ReferenceFactory,AncillaryDataFactory) {
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	//list of lincese
	$scope.lincese_list = angular.copy($scope.lenguajes.licences);

	$scope.addReproduction = function(){
		if($scope.formData.reproduction.reproductionUnstructured !== ''){
			console.log('enviar cambios');
		}
	};

	$scope.removeReproductionAtomized= function(list,reproductionAtomized){
		$scope.reproductionFactoryLocal.delete(list,reproductionAtomized);	
	};
	
	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.source !== ''){
			var license = document.getElementById("ancillaryData.license");
			if(license !== undefined && license!==null){
				ancillaryData.license = license.value;
				license.parentNode.removeChild(license);
			}
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
					var idx = $scope.formData.references.indexOf(reference);
					if(idx === -1){
						referenceFactoryLocal.addTo($scope.formData.references,reference);
					}
				});
			}

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);

			if(license !== undefined && license!==null){
				license.parentNode.removeChild(license);
			}

			angular.forEach($scope.lincese_list, function(item) {
  				item.checked = false;
       		});
			$('#ancillaryReproduction').collapse("hide");
		}else{
			alert("La fuente debe ser diligenciada");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		var checked_almost_one = false;
		angular.forEach($scope.lincese_list, function(item) {
            if(ancillaryData.license!==null){
            	if(ancillaryData.license === item.nombre){
  					item.checked = true;
  					checked_almost_one = true;
				}else{
					if(item.nombre==='Otra' && !checked_almost_one){
					 	if(document.getElementById('ancillaryData.license') === null){
							item.checked = true;
							var input = document.createElement("input");
				            input.type = "text";
				            input.id = "ancillaryData.license";
				            input.value = ancillaryData.license;
				            document.getElementById("ManualLicenseReproduction").appendChild(input);
						}else{
							var license = document.getElementById("ancillaryData.license");
							license.value = ancillaryData.license;
						}
					}
				}
            }
        });
		$('#ancillaryReproduction').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		angular.forEach($scope.lincese_list, function(item) {
			item.checked = false;
   		});
   		var license = document.getElementById("ancillaryData.license");
		if(license !== undefined && license!==null){
			license.parentNode.removeChild(license);
		}
		$('#ancillaryReproduction').collapse("hide");
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
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$('#referenceReproduction').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceReproduction').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceReproduction').collapse("hide");
	};
}]);