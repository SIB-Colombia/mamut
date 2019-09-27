'use strict';

angular.module('app.controllers.synonmy',[])
.controller("SynonmyCtrl", ['$scope', '$http', 'ReferenceFactory', 'AncillaryDataFactory', 'SynonmyFactory', function($scope,$http,ReferenceFactory,AncillaryDataFactory,SynonmyFactory){
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

	// This will be binded using the ps-open attribute
	$scope.checked = false; 

	//to edit
	$scope.index_synonyms = '';
	$scope.index_ancillary = '';
	$scope.index_reference = '';

	$scope.slide = function(){
	    $scope.checked = !$scope.checked;
	};

	$scope.addSynonymsDB= function() {
		var req_1 = {
			 method: 'POST',
			 url: 'http://51.38.179.153:3002/fichas/'+$scope.formData._id+'/synonyms_atomized/',
			 headers: {
			   'Content-Type': 'application/JSON'
			 },
			 data: { "id_user" : $scope.useremail,
			 		"synonymsAtomized":$scope.formData.synonymsAtomized

			 }
		};

		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};

	//ADD
	$scope.addSynonymsAtomized = function(synonymsAtomized, synonmy) {
		if (JSON.stringify(synonmy) !== JSON.stringify(origS)){
			if($scope.index_synonyms!==''){
				synonymsAtomized[$scope.index_synonyms] = angular.copy(synonmy);
			}else{
				synonmyFactoryLocal.add(synonymsAtomized, synonmy);
			}
			
			//Reset the scope variable
			$scope.synonmy = origS;
			origS = angular.copy($scope.synonmy);
			$scope.index_synonyms = '';
			$('#sysnonymForm').collapse("hide");
		}
	};

	//DELETE
	$scope.removeSynonymsAtomized = function(synonymsAtomized, synonmy) {
		synonmyFactoryLocal.delete(synonymsAtomized, synonmy);
	};

	//EDIT
	$scope.editSynonymsAtomized = function(synonymsAtomized, synonmy, index) {
		$scope.synonmy = angular.copy(synonmy);
		$scope.index_synonyms = index;
		$('#sysnonymForm').collapse("show");
	};

	//CANCEL
	$scope.cancelSynonym = function() {
		$scope.synonmy = angular.copy(origS);
		$scope.index_synonyms = '';
		$('#sysnonymForm').collapse("hide");
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
