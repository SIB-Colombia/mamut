'use strict';

angular.module('app.controllers.measurement',[])
.controller('MeasurementCtrl', ['$scope', 'measurementService', function($scope, measurementService) {
	
	$scope.measurementOrFact = {
		measurementOrFact : {
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
		},
		ancillaryData : {
			identifier:'',
			dataType:'',
			mimeType:'',
			agent:[],
			created:'',
			modified:'',
			license:'',
			rights:'',
			rightsHolder:'',
			bibliographicCitation:'',
			audience:[],
			source:'',
			subject:[],
			description:'',
			mediaURL:[],
			thumbnailURL:'',
			location:'',
			geoPoint:'',
			reference:[],
			additionalInformation:'',
			dataObject:''
		}
	};

	var measurementCopy = angular.copy($scope.measurementOrFact);

	$scope.$watch('lifeFormAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.lifeFormAtomized.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.lifeForms, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('lifeFormAtomized.measurementValue', function(name) {
		if (name !== undefined) {

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

			angular.forEach($scope.lifeCycles, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('lifeCycleAtomized.measurementValue', function(name) {
		if (name !== undefined) {
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
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.reproduction, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('reproductionAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.selectedAttr, function(attr) {
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

			angular.forEach($scope.purposes, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('dispersalAtomized.purpose.measurementValue', function(name) {
		if (name !== undefined) {
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

			angular.forEach($scope.distance, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('formData.dispersal.dispersalAtomized.distance.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
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
			
			angular.forEach($scope.behaviors, function(attr) {
				if (attr.measurementtype === name) {

					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('formData.behavior.behaviorAtomized.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
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

			angular.forEach($scope.molecularData, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('molecularDataAtomizedType.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
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
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.interactionSpeciesType, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('interactionsAtomizedType.interactionSpeciesType.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
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
	$scope.$watch('environmentalEnvelopeAtomized.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.environmentalEnvelopeAtomized.measurementOrFact.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.environmentalEnvelopes, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('environmentalEnvelopeAtomized.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
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
	$scope.$watch('ecologicalSignificanceAtomized.measurementOrFact.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.ecologicalSignificanceAtomized.measurementOrFact.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.ecologicalSignificances, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});

	$scope.$watch('ecologicalSignificanceAtomized.measurementOrFact.measurementValue', function(name) {
		if (name !== undefined) {
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

	$scope.$watch('habitatAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.habitatAtomized.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.habitat, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('habitatAtomized.measurementValue', function(name) {
		if (name !== undefined) {

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
			delete $scope.territoryAtomized.extentOfOccurrence.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.extentOfOccurrence, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('territoryAtomized.extentOfOccurrence.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.territory.territoryAtomized.extentOfOccurrence.measurementOrFact.measurementType = attr.measurementtype;
					$scope.territory.territoryAtomized.extentOfOccurrence.measurementOrFact.measurementValue = name;
					$scope.territory.territoryAtomized.extentOfOccurrence.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.territory.territoryAtomized.extentOfOccurrence.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('territoryAtomized.areaOfOccupancy.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.territoryAtomized.areaOfOccupancy.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.areaOfOccupancy, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('territoryAtomized.areaOfOccupancy.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.measurementOrFact.measurementType = attr.measurementtype;
					$scope.measurementOrFact.measurementValue = name;
					$scope.measurementOrFact.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.measurementOrFact.ancillaryData.source = attr.url;
				}
			});
		}
	});
	$scope.$watch('directThreatsAtomized.measurementType', function(name) {
		if (name !== undefined) {
			delete $scope.directThreatsAtomized.measurementValue;
			$scope.selectedAttr.length = 0;

			angular.forEach($scope.directThreats, function(attr) {
				if (attr.measurementtype === name) {
					$scope.selectedAttr.push(attr);
				}
			});
		}
	});
	$scope.$watch('directThreatsAtomized.measurementValue', function(name) {
		if (name !== undefined) {
			angular.forEach($scope.selectedAttr, function(attr) {
				if (attr.measurementvalue === name) {
					$scope.directThreats.directThreatsAtomized.measurementOrFact.measurementType = attr.measurementtype;
					$scope.directThreats.directThreatsAtomized.measurementOrFact.measurementValue = name;
					$scope.directThreats.directThreatsAtomized.ancillaryData.bibliographicCitation = attr.referencia;
					$scope.directThreats.directThreatsAtomized.ancillaryData.source = attr.url;
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
				measurementOrFact = {'measurementOrFact':measurement.measurementOrFact,'ancillaryData':measurement.ancillaryData};
				
				$scope.measurementOrFact = measurementCopy;
				measurementCopy = angular.copy($scope.measurementOrFact);
				
				$scope.selectedAttr.length = 0;
			}
		}
	};
}])