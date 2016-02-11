'use strict';

angular.module('app.controllers.synonmy',[])
.controller("SynonmyCtrl", ['$scope', 'ReferenceFactory', 'AncillaryDataFactory', 'SynonmyFactory', function($scope ,ReferenceFactory,AncillaryDataFactory,SynonmyFactory){
	//synonmy
	var synonmyFactoryLocal = new SynonmyFactory();
	$scope.synonmy = synonmyFactoryLocal.synonmy;

	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;

	//reset variables
	var origS = angular.copy($scope.synonmy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	//list of lincese
	$scope.lincese_list = angular.copy($scope.lenguajes.licences);

	//list of proveedores de contenido
	$scope.prov_contenido = angular.copy($scope.lenguajes.provContenido);

	$scope.checked = false; // This will be binded using the ps-open attribute

	$scope.slide = function(){
	    $scope.checked = !$scope.checked
	}


	//ADD
	$scope.addSynonymsAtomized = function(synonymsAtomized, synonmy) {
		if (JSON.stringify(synonmy) !== JSON.stringify(origS)){
			synonmyFactoryLocal.add(synonymsAtomized, synonmy);
			//Reset the scope variable
			$scope.synonmy = origS;
			origS = angular.copy($scope.synonmy);
			$('#sysnonymForm').collapse("hide");
		}
	};

	//DELETE
	$scope.removeSynonymsAtomized = function(synonymsAtomized, synonmy) {
		synonmyFactoryLocal.delete(synonymsAtomized, synonmy);
	};

	//EDIT
	$scope.editSynonymsAtomized = function(synonymsAtomized, synonmy) {
		$scope.synonmy = angular.copy(synonmy);
		$('#sysnonymForm').collapse("show");
	};

	//CANCEL
	$scope.cancelSynonym = function() {
		$scope.synonmy = angular.copy(origS);
		$('#sysnonymForm').collapse("hide");
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.license !== ''){
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
		}else{
			alert("La licencia debe ser seleccionada");
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
				            document.getElementById("ManualLicenseLifeForm").appendChild(input);
						}else{
							var license = document.getElementById("ancillaryData.license");
							license.value = ancillaryData.license;
						}
					}
				}
            }
            
        });
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
			$scope.checked = !$scope.checked;
		}else{
			alert("El tipo de referencia debe ser seleccionado");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$scope.checked = !$scope.checked;
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
	};
}]);