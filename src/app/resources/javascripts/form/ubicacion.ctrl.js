'use strict';

angular.module('app.controllers.ubicacion',[])
.controller('UbicacionCtrl', ['$scope', function($scope) {
	$scope.$watch('distributionOpt2.country', function(name) {
		if (name !== undefined) {
			delete $scope.distributionOpt2.stateProvince;
			delete $scope.distributionOpt2.county;
			angular.forEach($scope.ubicacion, function(attr) {
				if (attr.countryName === name) {
					$scope.selectedAttr = attr;
				}
			});
		}
	});
	$scope.$watch('distributionOpt2.stateProvince', function(name) {
		if (name !== undefined) {
			delete $scope.distributionOpt2.county;
			angular.forEach($scope.ubicacion, function(attr) {
				angular.forEach(attr.departments, function(attr2) {
					if (attr2.departmentName === name) {
						$scope.selectedAttr2 = attr2;
					}
				});
			});
		}
	});
	$scope.$watch('invasivenessAtomizedType.countryCode', function(name) {
		if (name !== undefined) {
			$scope.invasivenessAtomizedType.stateProvince = '';
			$scope.invasivenessAtomizedType.county = '';
			angular.forEach($scope.ubicacion, function(attr) {
				if (attr.countryName === name) {
					$scope.selectedAttr = attr;
				}
			});
		}
	});
	$scope.$watch('invasivenessAtomizedType.stateProvince', function(name) {
		if (name !== undefined) {
			$scope.invasivenessAtomizedType.county = '';
			angular.forEach($scope.ubicacion, function(attr) {
				angular.forEach(attr.departments, function(attr2) {
					if (attr2.departmentName === name) {
						$scope.selectedAttr2 = attr2;
					}
				});
			});
		}
	});
	$scope.$watch('threatStatusClass.threatStatusAtomized.appliesTo.country', function(name) {
		if (name !== undefined) {
			$scope.threatStatusClass.threatStatusAtomized.appliesTo.stateProvince = '';
			$scope.threatStatusClass.threatStatusAtomized.appliesTo.county = '';
			angular.forEach($scope.ubicacion, function(attr) {
				if (attr.countryName === name) {
					$scope.selectedAttr = attr;
				}
			});
		}
	});
	$scope.$watch('threatStatusClass.threatStatusAtomized.appliesTo.stateProvince', function(name) {
		if (name !== undefined) {
			$scope.threatStatusClass.threatStatusAtomized.appliesTo.county = '';
			angular.forEach($scope.ubicacion, function(attr) {
				angular.forEach(attr.departments, function(attr2) {
					if (attr2.departmentName === name) {
						$scope.selectedAttr2 = attr2;
					}
				});
			});
		}
	});
	$scope.$watch('legislationAtomizedType.appliesTo.country', function(name) {
		if (name !== undefined) {
			$scope.legislationAtomizedType.appliesTo.stateProvince = '';
			$scope.legislationAtomizedType.appliesTo.county = '';
			angular.forEach($scope.ubicacion, function(attr) {
				if (attr.countryName === name) {
					$scope.selectedAttr = attr;
				}
			});
		}
	});
	$scope.$watch('legislationAtomizedType.appliesTo.stateProvince', function(name) {
		if (name !== undefined) {
			$scope.legislationAtomizedType.appliesTo.county = '';
			angular.forEach($scope.ubicacion, function(attr) {
				angular.forEach(attr.departments, function(attr2) {
					if (attr2.departmentName === name) {
						$scope.selectedAttr2 = attr2;
					}
				});
			});
		}
	});

	$scope.$watch('associatedParty.country', function(name) {
		if (name !== undefined) {
			$scope.associatedParty.state = '';
			$scope.associatedParty.city = '';
			angular.forEach($scope.ubicacion, function(attr) {
				if (attr.countryName === name) {
					$scope.selectedAttr = attr;
				}
			});
		}
	});
	$scope.$watch('associatedParty.state', function(name) {
		if (name !== undefined) {
			$scope.associatedParty.city = '';
			angular.forEach($scope.ubicacion, function(attr) {
				angular.forEach(attr.departments, function(attr2) {
					if (attr2.departmentName === name) {
						$scope.selectedAttr2 = attr2;
					}
				});
			});
		}
	});
}]);