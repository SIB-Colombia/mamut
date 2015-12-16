'use strict';

angular.module('app.controllers.modal',[])
.controller('ModalCtrl', function ($scope, $uibModal) {

  $scope.animationsEnabled = true;

  $scope.open = function (references,list) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'referenceSearch',
      controller: 'ModalInstanceCtrl',
      resolve: {
        items: function () {
          return references;
        },
        list: function () {
          return list;
        }
      }
    });

    modalInstance.result.then(function () {
      
    }, function () {
    
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

})

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, list) {
  $scope.items = items;
  $scope.list = list;

  $scope.toggleSelection = function toggleSelection(item) {
    var idx = list.indexOf(item);

    // is currently selected
    if (idx > -1) {
     list.splice(idx, 1);
    }

    // is newly selected
    else {
      list.push(item);
    }
  };

  
  $scope.ok = function () {
    $scope.items = '';
    $uibModalInstance.close(list);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});