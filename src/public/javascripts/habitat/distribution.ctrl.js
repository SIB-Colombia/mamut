'use strict';

angular.module('app.controllers.distribution',[])
.controller('DistributionCtrl', ['$scope','$http','ReferenceFactory', 'AncillaryDataFactory','DistributionFactory',function($scope,$http,ReferenceFactory,AncillaryDataFactory,DistributionFactory) {
	
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

	//to edit
	$scope.index_distributionOpt = '';
	$scope.index_distribution = '';
	$scope.index_ancillary = '';
	$scope.index_reference = '';

	$scope.slide = function(){
	    $scope.checked = !$scope.checked;
	};

	$scope.addDistributionDB = function(){
		var req_1 = {
			method: 'POST',
			url: 'http://192.168.205.17:8080/fichas/'+$scope.formData._id+'/distribution/',
			headers: {
			  'Content-Type': 'application/JSON'
			},
			data: { "id_user" : "01",
				"distribution":$scope.formData.distribution

			}
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
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
				if($scope.index_distributionOpt !== ''){
					distributionClass[$scope.index_distributionOpt] = angular.copy(opt2);
				}else{
					distributionFactoryLocal.addOpt2(distributionClass, opt2);
				}
			}
			
			//Reset the scope variable
			$scope.distributionOpt2 = origDO;
			origDO = angular.copy($scope.distributionOpt2);
			$scope.index_distributionOpt = '';
		}
	};

	$scope.editDistributionOpt2 = function(list,opt2,index) {
		$scope.index_distributionOpt = index;
		$scope.distributionOpt2 = angular.copy(opt2);
	};
	$scope.removeDistributionOpt2 = function(distributionClass, opt2) {
		distributionFactoryLocal.deleteOpt2(distributionClass, opt2);
	};

	$scope.addDistribution = function(list, distributionClass) {
		if (JSON.stringify(distributionClass) !== JSON.stringify(origDC)){
			if($scope.index_distribution !== ''){
				list[$scope.index_distribution] = angular.copy(distributionClass);
			}else{
				distributionFactoryLocal.addClass(list, distributionClass);
			}
			
			//Reset the scope variable
			$scope.distributionClass = origDC;
			origDC = angular.copy($scope.distributionClass);
			angular.forEach($scope.lenguajes.distributionScope, function(item) {
				item.checked = false;

			});
			$scope.index_distribution = '';
		}
	};

	$scope.removeDistribution = function(list,distribution) {
		distributionFactoryLocal.deleteClass(list, distribution);
	};

	$scope.editDistribution = function(list,distribution,index) {
		$scope.index_distribution = index;
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
			}
			//if index is different to '' then replace the item because is an edit option
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData,$scope.index_ancillary);

			//Add all local reference to general reference vector
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryLocal.addTo($scope.formData.references,reference);
			});

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$scope.resetLicenseList(license,$scope.lincese_list);
			$scope.index_ancillary='';

			$('#ancillaryDistribution').collapse("hide");
		}else{
			alert("La licencia debe ser seleccionada");
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData,index) {
		$scope.index_ancillary = index;
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
		$scope.index_ancillary='';
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
			//if index is different to '' then replace the item because is an edit option
			referenceFactoryLocal.addTo(referenceList,reference,$scope.index_reference);
			
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$scope.checked = !$scope.checked;
			$scope.index_reference = '';
		}else{
			alert("El tipo de referencia debe ser seleccionado");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference,index) {
		$scope.reference = angular.copy(reference);
		$scope.checked = !$scope.checked;
		$scope.index_reference = index;
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
		$scope.index_reference = '';
	};
}]);
