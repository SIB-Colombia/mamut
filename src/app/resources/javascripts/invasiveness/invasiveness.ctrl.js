'use strict';

angular.module('app.controllers.invasiveness',[])
.controller('InvasivenessCtrl', ['$scope','$http','ReferenceFactory', 'AncillaryDataFactory', function($scope,$http,ReferenceFactory,AncillaryDataFactory) {

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

	//list of lincese
	$scope.lincese_list = angular.copy($scope.lenguajes.licences);
	$scope.lincese_list_ato = angular.copy($scope.lenguajes.licences);

	//list of proveedores de contenido
	$scope.prov_contenido = angular.copy($scope.lenguajes.provContenido);
	$scope.prov_contenido_ato = angular.copy($scope.lenguajes.provContenido);

	// This will be binded using the ps-open attribute
	$scope.checked = false;

	//to edit
	$scope.index_invasiveness = '';
	$scope.index_ancillary = '';
	$scope.index_reference = ''; 
	$scope.index_ancillary_ato = '';
	$scope.index_reference_ato = ''; 

	$scope.slide = function(){
	    $scope.checked = !$scope.checked;
	};

	$scope.checked_ato = false; // This will be binded using the ps-open attribute

	$scope.slide_ato = function(){
	    $scope.checked_ato = !$scope.checked_ato;
	};

	$scope.addInvasiveness = function(){
		var req_1 = {
			method: 'POST',
			url: 'http://192.168.220.86:3000/fichas/'+$scope.formData._id+'/invasiveness/',
			headers: {
			  'Content-Type': 'application/JSON'
			},
			data: { "id_user" : "01",
				"invasiveness":$scope.formData.invasiveness

			}
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });		
	};
	
	$scope.addInvasivenessAtomizedType = function(list, invasiveness) {
		if (JSON.stringify(invasiveness) !== JSON.stringify(origI)){
			if($scope.index_invasiveness !== ''){
				list[$scope.index_invasiveness] = angular.copy(invasiveness);
			}else{
				$scope.invasivenessFactoryLocal.add(list, invasiveness);
			}
			
			//Reset the scope variable
			$scope.invasivenessAtomizedType = origI;
			origI = angular.copy($scope.invasivenessAtomizedType);
			$scope.UpdateCheckBoxes(invasiveness, false);
			$scope.index_invasiveness = '';
		}
	};

	$scope.removeInvasivenessAtomized= function(list,invasiveness){
		$scope.invasivenessFactoryLocal.delete(list,invasiveness);	
	};

	$scope.editInvasivenessAtomized = function(list,invasiveness,index) {
		$scope.index_invasiveness = index;
		$scope.invasivenessAtomizedType = angular.copy(invasiveness);
		$scope.UpdateCheckBoxes(invasiveness, true);		
	};

	$scope.cancelInvasivenessAtomizedType = function(invasiveness) {
		$scope.invasivenessAtomizedType = angular.copy(origI);
		$scope.UpdateCheckBoxes(invasiveness,false);
		$scope.index_invasiveness = '';
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.license !== ''){
			var license = document.getElementById("ancillaryData.license");
			if(license !== undefined && license!==null){
				ancillaryData.license = license.value;
			}
			//if index is different to '' then replace the item because is an edit option
			ancillaryDataFactoryUn.addTo(ancillaryDataList,ancillaryData,$scope.index_ancillary);

			//Add all local reference to general reference vector
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryUn.addTo($scope.formData.references,reference);
			});

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$scope.resetLicenseList(license,$scope.lincese_list);
			$scope.index_ancillary='';
			$('#ancillaryInvasiveness').collapse("hide");
		}else{
			alert("La licencia debe ser seleccionada");
		}	
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryUn.deleteFrom(ancillaryDataList,ancillaryData);
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
				            document.getElementById("ManualLicenseInvasivenessUn").appendChild(input);
						}else{
							var license = document.getElementById("ancillaryData.license");
							license.value = ancillaryData.license;
						}
					}
				}
            }
         });
		$('#ancillaryInvasiveness').collapse("show");
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		var license = document.getElementById("ancillaryData.license");
		$scope.resetLicenseList(license,$scope.lincese_list);
		$scope.index_ancillary='';
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
			//if index is different to '' then replace the item because is an edit option
			referenceFactoryUn.addTo(referenceList,reference,$scope.index_reference);

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
		referenceFactoryUn.deleteFrom(referenceList,reference);
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

	//Atomized fields
	$scope.addAncillaryDataAto = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.license !== ''){
			var license = document.getElementById("ancillaryData.license");
			if(license !== undefined && license!==null){
				ancillaryData.license = license.value;
			}
			//if index is different to '' then replace the item because is an edit option
			ancillaryDataFactoryAto.addTo(ancillaryDataList,ancillaryData,$scope.index_ancillary_ato);

			//Add all local reference to general reference vector
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryAto.addTo($scope.formData.references,reference);
			});
			
			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$scope.resetLicenseList(license,$scope.lincese_list_ato);
			$scope.index_ancillary_ato='';
			$('#ancillaryInvasivenessAto').collapse("hide");
		}else{
			alert("La licencia debe ser seleccionada");
		}	
	};

	$scope.editAncillaryDataAto = function(ancillaryDataList,ancillaryData,index) {
		$scope.index_ancillary_ato = index;
		$scope.ancillaryDataAto = angular.copy(ancillaryData);
		var checked_almost_one = false;
		angular.forEach($scope.lincese_list_ato, function(item) {
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
				            document.getElementById("ManualLicenseInvasivenessAto").appendChild(input);
						}else{
							var license = document.getElementById("ancillaryData.license");
							license.value = ancillaryData.license;
						}
					}
				}
            }
         });
		$('#ancillaryInvasivenessAto').collapse("show");
	};

	$scope.cancelAncillaryDataAto = function() {
		$scope.ancillaryDataAto = angular.copy(origAD);
		var license = document.getElementById("ancillaryData.license");
		$scope.resetLicenseList(license,$scope.lincese_list_ato);
		$scope.index_ancillary_ato='';
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
			//if index is different to '' then replace the item because is an edit option
			referenceFactoryAto.addTo(referenceList,reference,$scope.index_reference_ato);
			//Reset the scope variable
			$scope.referenceAto = origR;
			origR = angular.copy($scope.referenceAto);
			$scope.checked_ato = !$scope.checked_ato;
			$scope.index_reference_ato = '';
		}else{
			alert("El tipo de referencia debe ser seleccionado");
		}
	};

	$scope.editReferenceAto = function(referenceList,reference,index) {
		$scope.referenceAto = angular.copy(reference);
		$scope.checked_ato = !$scope.checked_ato;
		$scope.index_reference_ato = index;
	};

	$scope.cancelReferenceAto = function() {
		$scope.referenceAto = angular.copy(origR);
		$scope.checked_ato = !$scope.checked_ato;
		$scope.index_reference_ato = '';
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