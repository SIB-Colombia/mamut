'use strict';

angular.module('app.controllers.measurement',[])
.controller('MeasurementCtrl', ['$scope', 'MeasurementFactory', function($scope, MeasurementFactory) {

	var measurementCopy;

	$scope.$watch('lifeFormAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.lifeFormAtomized.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.lifeForms, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('lifeFormAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				} 
			});
		}
	});
	$scope.$watch('lifeCycleAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.lifeCycleAtomized.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.lifeCycles, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('lifeCycleAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('reproductionAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.reproductionAtomized.measurementValue;
			$scope.selectedAttr_2.length = 0;

			angular.forEach($scope.lenguajes.reproduction, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr_2.push(attr);
				}
			});
		}
	});
	$scope.$watch('reproductionAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr_2, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.measurementOrFact.measurementDeterminedBy = attr.measurementdeterminedby;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('dispersalAtomized.purpose.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.dispersalAtomized.purpose.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.purposes, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('dispersalAtomized.purpose.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});

	$scope.$watch('formData.dispersal.dispersalAtomized.distance.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.formData.dispersal.dispersalAtomized.distance.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.distance, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('formData.dispersal.dispersalAtomized.distance.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.formData.dispersal.dispersalAtomized.distance.measurementOrFact.measurementType = attr.measurementtype;
					$scope.formData.dispersal.dispersalAtomized.distance.measurementOrFact.measurementValue = name;
					$scope.formData.dispersal.dispersalAtomized.distance.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.formData.dispersal.dispersalAtomized.distance.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('formData.behavior.behaviorAtomized.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.formData.behavior.behaviorAtomized.measurementValue;
			$scope.selectedAttr.length = 0;
			
			angular.forEach($scope.lenguajes.behaviors, function(attr) {
				if (attr.measurementtype === name) {

					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('formData.behavior.behaviorAtomized.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.formData.behavior.behaviorAtomized.measurementOrFact.measurementType = attr.measurementtype;
					$scope.formData.behavior.behaviorAtomized.measurementOrFact.measurementValue = name;
					$scope.formData.behavior.behaviorAtomized.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.formData.behavior.behaviorAtomized.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('molecularDataAtomizedType.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.molecularDataAtomizedType.measurementOrFact.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.molecularData, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('molecularDataAtomizedType.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.molecularDataAtomizedType.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.molecularDataAtomizedType.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.molecularDataAtomizedType.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.molecularDataAtomizedType.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('interactionsAtomizedType.interactionSpeciesType.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.interactionsAtomizedType.interactionSpeciesType.measurementOrFact.measurementValue;
			$scope.selectedAttr_2.length = 0;

			angular.forEach($scope.lenguajes.interactionSpeciesType, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr_2.push(attr);
				}
			});
		}
	});
	$scope.$watch('interactionsAtomizedType.interactionSpeciesType.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr_2, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('environmentalEnvelopeAtomized.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.lenguajes.environmentalEnvelopes, function(attr) {
				if (attr.measurementtype === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});

	$scope.$watch('ecologicalSignificanceAtomized.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.ecologicalSignificanceAtomized.measurementOrFact.measurementValue;
			$scope.selectedAttr_3.length = 0;

			angular.forEach($scope.lenguajes.ecologicalSignificances, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr_3.push(attr);
				}
			});
		}
	});

	$scope.$watch('ecologicalSignificanceAtomized.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr_3, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});

	$scope.$watch('habitatAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.habitatAtomized.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.habitat, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('habitatAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				} 
			});
		}
	});

	$scope.$watch('territoryAtomized.extentOfOccurrence.measurementType', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			
			$scope.measurementOrFact.measurementType = name;
			$scope.measurementOrFact.measurementValue = $scope.territoryAtomized.extentOfOccurrence.measurementValue;
		}
	}); 

	$scope.$watch('territoryAtomized.areaOfOccupancy.measurementType', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			
			$scope.measurementOrFact.measurementType = name;
			$scope.measurementOrFact.measurementValue = $scope.territoryAtomized.areaOfOccupancy.measurementValue;
		}
	});


	$scope.$watch('formData.directThreats.directThreatsAtomized.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			//delete $scope.formData.directThreats.directThreatsAtomized.measurementOrFact.measurementValue;
			$scope.selectedAttr_2.length = 0;

			angular.forEach($scope.lenguajes.directThreats, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr_2.push(attr);
				}
			});
		}
	});
	$scope.$watch('formData.directThreats.directThreatsAtomized.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr_2, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.formData.directThreats.directThreatsAtomized.measurementOrFact.measurementType = attr.measurementtype;
					$scope.formData.directThreats.directThreatsAtomized.measurementOrFact.measurementValue = name;
					$scope.formData.directThreats.directThreatsAtomized.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.formData.directThreats.directThreatsAtomized.ancillaryData.source = attr.url;
				}
			});
		}
	});

	$scope.$watch('managementAction.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.managementAction.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.managementAction, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('managementAction.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});

	$scope.$watch('threatStatusClass.threatStatusAtomized.threatCategory.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.threatStatusClass.threatStatusAtomized.threatCategory.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lenguajes.threatCategory, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('threatStatusClass.threatStatusAtomized.threatCategory.measurementValue', function(name) {
		if (name !== undefined) {
			$scope.measurementOrFact = new MeasurementFactory().measurement;
			measurementCopy = angular.copy($scope.measurementOrFact);
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.threatStatusClass.threatStatusAtomized.threatCategory.measurementType = attr.measurementtype;
					$scope.threatStatusClass.threatStatusAtomized.threatCategory.measurementValue = name;
				}
			});
		}
	});

	$scope.addMeasurementOrFactVector = function(measurementOrFact, measurement) {
		if (measurement !== undefined) {
			if (measurement.measurementOrFact.measurementValue !== '') {
				measurementOrFact.push({'measurementOrFact':measurement.measurementOrFact,'ancillaryData':measurement.ancillaryData});

				$scope.measurementOrFact = angular.copy(measurementCopy);
				measurementCopy = angular.copy($scope.measurementOrFact);

				$scope.selectedAttr.length = 0;
			}
		}
	};
	$scope.addMeasurementOrFact = function(measurementOrFact, measurement) {
		if (measurement !== undefined) {
			if (measurement.measurementOrFact.measurementValue !== '') {
				measurementOrFact.measurementOrFact = angular.copy(measurement.measurementOrFact);
				measurementOrFact.ancillaryData = angular.copy(measurement.ancillaryData);
				
				$scope.measurementOrFact = angular.copy(measurementCopy);
				measurementCopy = angular.copy($scope.measurementOrFact);
				
				$scope.selectedAttr.length = 0;
			}
		}
	};
}]);