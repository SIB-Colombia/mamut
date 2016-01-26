'use strict';

angular.module('app.controllers.pageSlide',[])
.controller('PageSlideCtrl', ['$scope', function($scope) {
	
	$scope.checked = false; // This will be binded using the ps-open attribute
    
    $scope.slide = function(){
        $scope.checked = !$scope.checked
    }
    
}]);