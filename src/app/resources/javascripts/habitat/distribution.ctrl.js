'use strict';

angular.module('app.controllers.distribution',[])
.controller('DistributionCtrl', ['$scope','ReferenceFactory', 'AncillaryDataFactory','DistributionFactory',function($scope,ReferenceFactory,AncillaryDataFactory,DistributionFactory) {
	
	var distributionFactoryLocal = new DistributionFactory();
	$scope.distributionOpt2 = distributionFactoryLocal.distributionOpt2;
	$scope.distributionClass = distributionFactoryLocal.distributionClass;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	
	//Local variables for reset objects
	var origDO = angular.copy($scope.distributionOpt2);
	var origDC = angular.copy($scope.distributionClass);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	//list of lincese
	$scope.lincese_list = angular.copy($scope.lenguajes.licences);

	//list of proveedores de contenido
	$scope.prov_contenido = angular.copy($scope.lenguajes.provContenido);

	// This will be binded using the ps-open attribute
	$scope.checked = false; 

	$scope.slide = function(){
	    $scope.checked = !$scope.checked;
	};

	$scope.addDistributionOpt2 = function(distributionClass, opt2) {
		if (JSON.stringify(opt2) !== JSON.stringify(origDO)){
			if(opt2.stateProvince === 'TODOS'){
				angular.forEach($scope.ubicacion, function(attr) {
					if (attr.countryName === opt2.country) {
						angular.forEach(attr.departments, function(attr2) {
							if(attr2.departmentName!=='TODOS'){
								var opdDepa = {
									country: attr.countryName,
									stateProvince: attr2.departmentName,
									county: '',
									municipality: '',
									locality: '',
									ancillaryData: []
								};
								distributionFactoryLocal.addOpt2(distributionClass, opdDepa);
							}
						});
					}
				});
			}else{
				distributionFactoryLocal.addOpt2(distributionClass, opt2);
			}
			
			//Reset the scope variable
			$scope.distributionOpt2 = origDO;
			origDO = angular.copy($scope.distributionOpt2);
		}
	};

	$scope.editDistributionOpt2 = function(list,opt2) {
		$scope.distributionOpt2 = angular.copy(opt2);
	};
	$scope.removeDistributionOpt2 = function(distributionClass, opt2) {
		distributionFactoryLocal.deleteOpt2(distributionClass, opt2);
	};

	$scope.addDistribution = function(list, distributionClass) {
		if (JSON.stringify(distributionClass) !== JSON.stringify(origDC)){
			distributionFactoryLocal.addClass(list, distributionClass);
			//Reset the scope variable
			$scope.distributionClass = origDC;
			origDC = angular.copy($scope.distributionClass);
			angular.forEach($scope.lenguajes.distributionScope, function(item) {
				item.checked = false;

			});
		}
	};

	$scope.removeDistribution = function(list,distribution) {
		distributionFactoryLocal.deleteClass(list, distribution);
	};

	$scope.editDistribution = function(list,distribution) {
		$scope.distributionClass = angular.copy(distribution);
		angular.forEach($scope.lenguajes.distributionScope, function(item) {
			if(item.name===distribution.distributionScope.type){
				item.checked = true;
			}

		});
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.license !== ''){
			var license = document.getElementById("ancillaryData.license");
			if(license !== undefined && license!==null){
				ancillaryData.license = license.value;
				license.parentNode.removeChild(license);
			}
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData);
			//Add all local reference to general reference vector
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryLocal.addTo($scope.formData.references,reference);
			});

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$scope.resetLicenseList(license,$scope.lincese_list);

			$('#ancillaryDistribution').collapse("hide");
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
					item.checked = false;
					if(item.nombre==='Otra' && !checked_almost_one){
					 	if(document.getElementById('ancillaryData.license') === null){
							item.checked = true;
							var input = document.createElement("input");
				            input.type = "text";
				            input.id = "ancillaryData.license";
				            input.value = ancillaryData.license;
				            document.getElementById("ManualLicenseDistribution").appendChild(input);
						}else{
							var license = document.getElementById("ancillaryData.license");
							license.value = ancillaryData.license;
						}
					}
				}
            }
         });
		$('#ancillaryDistribution').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		var license = document.getElementById("ancillaryData.license");
		$scope.resetLicenseList(license,$scope.lincese_list);
		$('#ancillaryDistribution').collapse("hide");
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
