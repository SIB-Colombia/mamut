'use strict';

angular.module('app.controllers.reference',[])
.controller('ReferenceCrtl', ['$scope', '$http','ReferenceFactory', function($scope, $http, ReferenceFactory){

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;
	$scope.index_reference = '';
	
	var origR = angular.copy($scope.reference);

	$scope.checked = false; // This will be binded using the ps-open attribute

	$scope.slide = function(){
        $scope.checked = !$scope.checked;
    };

	$scope.addReferences = function(){
		var req_1 = {
			method: 'POST',
			url: 'http://apichigui-env.us-east-1.elasticbeanstalk.com/fichas/'+$scope.formData._id+'/references/',
			headers: {
			  'Content-Type': 'application/JSON'
			},
			data: { "id_user" : $scope.useremail,
				"references":$scope.formData.references

			}
		};
		$http(req_1).then(function (response) {
			if(response.status===200){
				alert("Elemento guardado satisfactoriamente!");
			}
        });
	};

	$scope.addReference = function (referenceList, reference){
		//if index is different to '' then replace the item because is an edit option
		referenceFactoryLocal.addTo(referenceList, reference, $scope.index_reference);
		
		$scope.reference = angular.copy(origR);
		origR = angular.copy($scope.reference);
		$scope.checked = !$scope.checked;
		$scope.index_reference = '';
	};

	$scope.removeReference = function (referenceList, reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference,index) {
		$scope.index_reference = index;
		$scope.reference = angular.copy(reference);
		$scope.checked = !$scope.checked;
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
		$scope.index_reference = '';
	};
}]);
