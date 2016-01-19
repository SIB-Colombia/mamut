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

	$scope.addDistributionOpt2 = function(distributionClass, opt2) {
		if (JSON.stringify(opt2) !== JSON.stringify(origDO)){
			distributionFactoryLocal.addOpt2(distributionClass, opt2);
			//Reset the scope variable
			$scope.distributionOpt2 = origDO;
			origDO = angular.copy($scope.distributionOpt2);
		}
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
			$('input:checkbox').removeAttr('checked');
		}
	};

	$scope.removeDistribution = function(list,distribution) {
		distributionFactoryLocal.deleteClass(list, distribution);
	};

	$scope.editDistribution = function(list,distribution) {
		$scope.distributionClass = angular.copy(distribution);
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
			$('#ancillaryDistribution').collapse("hide");
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
		angular.forEach($scope.lincese_list, function(item) {
			item.checked = false;
   		});
   		var license = document.getElementById("ancillaryData.license");
		if(license !== undefined && license!==null){
			license.parentNode.removeChild(license);
		}
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
			$('#referenceDistribution').collapse("hide");
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$('#referenceDistribution').collapse("show");
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$('#referenceDistribution').collapse("hide");
	};
}]);
