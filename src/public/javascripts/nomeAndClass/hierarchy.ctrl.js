'use strict';

angular.module('app.controllers.hierarchy',[])
.controller('HierarchyCtrl', ['$scope', '$http', 'ReferenceFactory', 'AncillaryDataFactory', 'HierarchyFactory',  function($scope,$http,ReferenceFactory,AncillaryDataFactory,HierarchyFactory) {
	//hierarchy
	var hierarchyFactoryLocal = new HierarchyFactory();
	$scope.hierarchy = hierarchyFactoryLocal.hierarchy;
	
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;
	
	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	

	//reset variables
	var origH = angular.copy($scope.hierarchy);
	var origR = angular.copy($scope.reference);
	var origAD = angular.copy($scope.ancillaryData);

	// This will be binded using the ps-open attribute
	$scope.checked = false; 

	//to edit
	$scope.index_hierarchy = '';
	$scope.index_ancillary = '';
	$scope.index_reference = '';

	$scope.slide = function(){
	    $scope.checked = !$scope.checked;
	};

	$scope.addHierarchyDB= function() {
		var req_1 = {
			 method: 'POST',
			 url: 'http://apichigui-env.us-east-1.elasticbeanstalk.com/fichas/'+$scope.formData._id+'/hierarchy/',
			 headers: {
			   'Content-Type': 'application/JSON'
			 },
			 data: { "id_user" : $scope.useremail,
			 		"hierarchy":$scope.formData.hierarchy

			 }
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};

	//ADD
	$scope.addHierarchy = function(hierarchy, hier) {
		if (JSON.stringify(hier) !== JSON.stringify(origH)){
			if($scope.index_hierarchy !== ''){
				hierarchy[$scope.index_hierarchy] = angular.copy(hier);
			}else{
				hierarchyFactoryLocal.add(hierarchy, hier);
			}
			
			//Reset the scope variable
			$scope.hierarchy = origH;
			origH = angular.copy($scope.hierarchy);
			$scope.index_hierarchy = '';
			$('#hierarchyForm').collapse("hide");
		}
	};

	//DELETE
	$scope.removeHierarchy = function(hierarchy, hier) {
		hierarchyFactoryLocal.delete(hierarchy, hier);
	};

	//EDIT
	$scope.editHierarchy = function(hierarchy, hier,index) {
		$scope.hierarchy = angular.copy(hier);
		$scope.index_hierarchy = index;
		$('#hierarchyForm').collapse("show");
	};

	//CANCEL
	$scope.cancelHierarchy = function() {
		$scope.hierarchy = angular.copy(origH);
		$scope.index_hierarchy = '';
		$('#hierarchyForm').collapse("hide");
	};

	$scope.addAncillaryData = function(ancillaryDataList,ancillaryData){
		if(ancillaryData.license !== ''){
			//if index is different to '' then replace the item because is an edit option
			ancillaryDataFactoryLocal.addTo(ancillaryDataList,ancillaryData,$scope.index_ancillary);

			//Add all local reference to general reference vector
			angular.forEach(ancillaryData.reference, function(reference) {
				referenceFactoryLocal.addTo($scope.formData.references,reference);
			});

			//Reset the scope variable
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			$scope.index_ancillary='';
		}else{
			alert("La licencia debe ser seleccionada");
		}	
	};

	$scope.removeAncillaryData = function(ancillaryDataList,ancillaryData){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillaryData);
	};

	$scope.editAncillaryData = function(ancillaryDataList,ancillaryData,index) {
		$scope.ancillaryData = angular.copy(ancillaryData);
		$scope.index_ancillary = index;
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
