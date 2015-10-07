'use strict';

angular.module('app.controllers.measurement',[])
.controller('MeasurementCtrl', ['$scope', function($scope) {
	$scope.measurementOrFact = {
		measurementID: '',
		measurementType: '',
		measurementValue: '',
		measurementAccuracy: '',
		measurementUnit: '',
		measurementDeterminedDate: '',
		measurementDeterminedBy: [],
		measurementMethod: '',
		measurementRemarks: '',
		relatedTo: ''
	};

	var measurementCopy = angular.copy($scope.measurementOrFact);

	$scope.$watch('lifeFormAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.lifeFormAtomized.measurementValue;
			angular.forEach($scope.lifeForms, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('lifeFormAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.lifeForms, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('lifeCycleAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.lifeCycleAtomized.measurementValue;
			angular.forEach($scope.lifeCycles, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('lifeCycleAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.lifeCycles, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('reproductionAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.reproductionAtomized.measurementValue;
			angular.forEach($scope.reproductions, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('reproductionAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.reproductions, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('dispersalAtomized.purpose.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.dispersalAtomized.purpose.measurementValue;
			angular.forEach($scope.purposes, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('dispersalAtomized.purpose.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.purposes, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});

	$scope.$watch('formData.dispersal.dispersalAtomized.distance.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.formData.dispersal.dispersalAtomized.distance.measurementValue;
			angular.forEach($scope.purposes, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('formData.dispersal.dispersalAtomized.distance.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.purposes, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.formData.dispersal.dispersalAtomized.distance.measurementType = attr.measurementtype;
					$scope.formData.dispersal.dispersalAtomized.distance.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('formData.behavior.behaviorAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.formData.behavior.behaviorAtomized.measurementValue;
			angular.forEach($scope.behaviors, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('formData.behavior.behaviorAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.behaviors, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.formData.behavior.behaviorAtomized.measurementType = attr.measurementtype;
					$scope.formData.behavior.behaviorAtomized.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('molecularDataAtomizedType.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.molecularDataAtomizedType.measurementOrFact.measurementValue;
			angular.forEach($scope.behaviors, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('molecularDataAtomizedType.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.behaviors, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.molecularDataAtomizedType.measurementOrFact.measurementType = attr.measurementtype;
					$scope.molecularDataAtomizedType.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('ecologicalSignificanceAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.ecologicalSignificanceAtomized.measurementValue;
			angular.forEach($scope.ecologicalSignificances, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('ecologicalSignificanceAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.ecologicalSignificances, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('environmentalEnvelopeAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.environmentalEnvelopeAtomized.measurementValue;
			angular.forEach($scope.environmentalEnvelopes, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('environmentalEnvelopeAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.environmentalEnvelopes, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('habitatsAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.habitatsAtomized.measurementValue;
			angular.forEach($scope.habitats, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('habitatsAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.habitats, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('territoryAtomized.extentOfOccurrence.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.territoryAtomized.extentOfOccurrence.measurementValue;
			angular.forEach($scope.extentOfOccurrence, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('territoryAtomized.extentOfOccurrence.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.extentOfOccurrence, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.territory.territoryAtomized.extentOfOccurrence.measurementType = attr.measurementtype;
					$scope.territory.territoryAtomized.extentOfOccurrence.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('territoryAtomized.areaOfOccupancy.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.territoryAtomized.areaOfOccupancy.measurementValue;
			angular.forEach($scope.areaOfOccupancy, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('territoryAtomized.areaOfOccupancy.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.areaOfOccupancy, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
				}
			});
		}
	});
	$scope.$watch('directThreatsAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.directThreatsAtomized.measurementValue;
			angular.forEach($scope.directThreats, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('directThreatsAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.directThreats, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.directThreats.directThreatsAtomized.measurementType = attr.measurementtype;
					$scope.directThreats.directThreatsAtomized.measurementValue = name;
				}
			});
		}
	});

	$scope.addMeasurementOrFactVector = function(measurementOrFact, measurement) {
		if (measurement !== undefined) {
			if (measurement.measurementValue !== '') {
				measurementOrFact.push(measurement);

				$scope.measurementOrFact = measurementCopy;
				measurementCopy = angular.copy($scope.measurementOrFact);

				$scope.selectedAttr = [];
			}
		}
	};
	$scope.addMeasurementOrFact = function(measurementOrFact, measurement) {
		if (measurement !== undefined) {
			if (measurement.measurementValue !== '') {
				measurementOrFact = measurement;
				
				$scope.measurementOrFact = measurementCopy;
				measurementCopy = angular.copy($scope.measurementOrFact);
				
				$scope.selectedAttr = [];
			}
		}
	};
}])