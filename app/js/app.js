
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ng', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ui.directives','ui.filters', 'ui.router','ui.bootstrap','ngAnimate','ngFileUpload', 'angularModalService'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    
    $stateProvider
         // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/metaData)
        .state('form.metaData', {
            url: '/metaData',
            templateUrl: 'metaData.html'
        })
        
        // url will be /form/baseElem
        .state('form.baseElem', {
            url: '/baseElem',
            templateUrl: 'baseElem.html'
        })
        
        // url will be /form/recordMeta
        .state('form.recordMeta', {
            url: '/recordMeta',
            templateUrl: 'recordMeta.html'
        })
        .state('form.nomeAndClass', {
            url: '/nomeAndClass',
            templateUrl: 'nomeAndClass.html'
        })
        
        // url will be /form/taxoDesc
        .state('form.taxoDesc', {
            url: '/taxoDesc',
            templateUrl: 'taxoDesc.html'
        })
        
        // url will be /form/history
        .state('form.history', {
            url: '/history',
            templateUrl: 'history.html'
        })

        // url will be /form/history
        .state('form.historyC', {
            url: '/historyC',
            templateUrl: 'historyC.html'
        })

        // url will be /form/invasiveness
        .state('form.invasiveness', {
            url: '/invasiveness',
            templateUrl: 'invasiveness.html'
        })
        
        // url will be /form/habitat
        .state('form.habitat', {
            url: '/habitat',
            templateUrl: 'habitat.html'
        })
        
        // url will be /form/demogra
        .state('form.demogra', {
            url: '/demogra',
            templateUrl: 'demogra.html'
        })

        // url will be /form/uses
        .state('form.uses', {
            url: '/uses',
            templateUrl: 'uses.html'
        })
        
        // url will be /form/references
        .state('form.references', {
            url: '/references',
            templateUrl: 'references.html'
        })
        
        // url will be /form/ancillary
        .state('form.ancillary', {
            url: '/ancillary',
            templateUrl: 'ancillary.html'
        })

        // url will be /form/associatedParty
        .state('form.associatedParty', {
            url: '/associatedParty',
            templateUrl: 'associatedParty.html'
        });

        
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/nomeAndClass');
})

.config([
  '$translateProvider',
  function translationConfigFn($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('es_CO');
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
  }
])

.controller('CollapseDemoCtrl', ['$scope', function($scope) {
    $scope.isCollapsed = true;
    $scope.isCollapsed_1 = true;
    $scope.isCollapsed_2 = true;
}])

.controller('UploadFile', ['$scope', 'Upload', function($scope, Upload) {
     $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });
    $scope.log = '';

    $scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    fields: {
                        'username': $scope.username
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    $scope.log = 'file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    $scope.$apply();
                });
            }
        }
    };
}])

.controller('checkBoxController',['$scope', '$http', function ($scope, $http) {
 
      // toggle selection for a given employee by name
    $scope.toggleSelection = function toggleSelection(selection, name) {

        var idx = selection.indexOf(name);
        // is currently selected
        if (idx > -1) {
            selection.splice(idx, 1);
        }
        // is newly selected
        else {
            selection.push(name);
        }
    };

    $scope.updateSelectionFeeding = function updateSelectionEvent(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.annualCycleAtomizedType.Event = element.name;
    };

   $scope.updateSelectionFeeding = function updateSelectionFeeding(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.feedingAtomizedType.type = element.name;
    };

    $scope.updateSelectionThropic = function updateSelectionThropic(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.thropic.strategy = element.name;
    };

    $scope.updateSelectionDispersalType = function updateSelectionDispersalType(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.formData.dispersal.dispersalAtomized.type = element.name;
    };

    $scope.updateSelectionStructureDispersed = function updateSelectionStructureDispersed(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.formData.dispersal.dispersalAtomized.structureDispersed = element.name;
    };

    $scope.updateSelectionOrigin = function updateSelectionOrigin(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.origin = element.name;
    };

    $scope.updateSelectionPresence = function updateSelectionPresence(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.presence = element.name;
    };

    $scope.updateSelectionPersistence = function updateSelectionPersistence(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.persistence = element.name;
    };

    $scope.updateSelectionDistribution = function updateSelectionDistribution(name) {
        var idx = $scope.invasivenessAtomizedType.distribution.indexOf(name);
        // is currently selected
        if (idx > -1) {
            $scope.invasivenessAtomizedType.distribution.splice(idx, 1);
        }
        // is newly selected
        else {
            $scope.invasivenessAtomizedType.distribution.push(name);
        }
    };

    $scope.updateSelectionHarmful = function updateSelectionDistribution(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.harmful = element.name;
    };

    $scope.updateSelectionAbundance = function updateSelectionAbundance(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.abundance = element.name;
    };
    $scope.updateSelectionTrend = function updateSelectionTrend(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.trend = element.name;
    };
    $scope.updateSelectionRateOfSpread = function updateSelectionRateOfSpread(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.rateOfSpread = element.name;
    };

    $scope.updateSelectionRegulatoryListing = function updateSelectionRegulatoryListing(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.regulatoryListing = element.name;
    };

    $scope.updateSelectionLocalityType = function updateSelectionLocalityType(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.localityType = element.name;
    };

    $scope.updateSelectionLocationValue = function updateSelectionLocationValue(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.locationValue = element.name;
    };
    $scope.updateSelectionPublicationDatePrecision = function updateSelectionPublicationDatePrecision(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.invasivenessAtomizedType.publicationDatePrecision = element.name;
    };

    $scope.updateSelectionDistributionScope = function updateSelectionDistributionScope(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.distributionClass.distributionScope.type = element.name;
    };

    $scope.updateSelectionRegion = function updateSelectionRegion(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.populationBiologyAtomized.region = element.name;
    };

    $scope.updateSelectionThreatCategory = function updateSelectionThreatCategory(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.threatStatusClass.threatStatusAtomized.threatCategory = element.name;
    };

    $scope.updateSelectionAutority = function updateSelectionAutority(element) {
         var idx = $scope.threatStatusClass.threatStatusAtomized.authority.indexOf(name);
        if (idx > -1) {
            $scope.threatStatusClass.threatStatusAtomized.authority.splice(idx, 1);
        }
        else {
            $scope.threatStatusClass.threatStatusAtomized.authority.push(name);
        }
    };
    $scope.updateSelectionProtectionLegal = function updateSelectionProtectionLegal(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.legislationAtomizedType.protectionLegalStatus = element.name;
    };
    $scope.updateSelectionProtectionLegalStatus = function updateSelectionProtectionLegalStatus(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.legislationAtomizedType.status = element.name;
    };
    $scope.updateSelectionProtectionLegalType = function updateSelectionProtectionLegalType(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.legislationAtomizedType.type = element.name;
    };
    $scope.updateSelectionProtectionLegalNorm = function updateSelectionProtectionLegalNorm(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.legislationAtomizedType.norm = element.name;
    };
     $scope.updateSelectionPartUsedCategory = function updateSelectionPartUsedCategory(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.usesAtomizedType.partUsed = element.name;
    };
     $scope.updateSelectionUseTypeAtomized = function updateSelectionUseTypeAtomized(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.usesAtomizedType.useTypeAtomized = element.name;
    };
     $scope.updateSelectionManagementType = function updateSelectionManagementType(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.managementAndConservationAtomizedType.type = element.name;
    };
    $scope.updateSelectionManagementAction = function updateSelectionManagementAction(element) {
         var idx = $scope.managementAndConservationAtomizedType.actions.indexOf(name);
        if (idx > -1) {
            $scope.managementAndConservationAtomizedType.actions.splice(idx, 1);
        }
        else {
            $scope.managementAndConservationAtomizedType.actions.push(name);
        }
    };
    
}])
.controller('MeasurementCtrl',['$scope', function ($scope) {
    $scope.$watch('lifeFormAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.lifeFormAtomized.measurementValue;
            angular.forEach($scope.lifeForms, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('lifeFormAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.lifeForms, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('lifeCycleAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.lifeCycleAtomized.measurementValue;
            angular.forEach($scope.lifeCycles, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('lifeCycleAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.lifeCycles, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('reproductionAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.reproductionAtomized.measurementValue;
            angular.forEach($scope.reproductions, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('reproductionAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.reproductions, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('dispersalAtomized.purpose.measurementType', function(name){
        if(name!=undefined){
            delete $scope.dispersalAtomized.purpose.measurementValue;
            angular.forEach($scope.purposes, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('dispersalAtomized.purpose.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.purposes, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });

    $scope.$watch('formData.dispersal.dispersalAtomized.distance.measurementType', function(name){
        if(name!=undefined){
            delete $scope.formData.dispersal.dispersalAtomized.distance.measurementValue;
            angular.forEach($scope.purposes, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('formData.dispersal.dispersalAtomized.distance.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.purposes, function(attr){
              if(attr.measurementvalue === name){
                    $scope.formData.dispersal.dispersalAtomized.distance.measurementType = attr.measurementtype;
                    $scope.formData.dispersal.dispersalAtomized.distance.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('formData.behavior.behaviorAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.formData.behavior.behaviorAtomized.measurementValue;
            angular.forEach($scope.behaviors, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('formData.behavior.behaviorAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.behaviors, function(attr){
              if(attr.measurementvalue === name){
                    $scope.formData.behavior.behaviorAtomized.measurementType = attr.measurementtype;
                    $scope.formData.behavior.behaviorAtomized.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('molecularDataAtomizedType.measurementOrFact.measurementType', function(name){
        if(name!=undefined){
            delete $scope.molecularDataAtomizedType.measurementOrFact.measurementValue;
            angular.forEach($scope.behaviors, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('molecularDataAtomizedType.measurementOrFact.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.behaviors, function(attr){
              if(attr.measurementvalue === name){
                    $scope.molecularDataAtomizedType.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.molecularDataAtomizedType.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('ecologicalSignificanceAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.ecologicalSignificanceAtomized.measurementValue;
            angular.forEach($scope.ecologicalSignificances, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('ecologicalSignificanceAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.ecologicalSignificances, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('environmentalEnvelopeAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.environmentalEnvelopeAtomized.measurementValue;
            angular.forEach($scope.environmentalEnvelopes, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('environmentalEnvelopeAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.environmentalEnvelopes, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('habitatsAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.habitatsAtomized.measurementValue;
            angular.forEach($scope.habitats, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('habitatsAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.habitats, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('territoryAtomized.extentOfOccurrence.measurementType', function(name){
        if(name!=undefined){
            delete $scope.territoryAtomized.extentOfOccurrence.measurementValue;
            angular.forEach($scope.extentOfOccurrence, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('territoryAtomized.extentOfOccurrence.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.extentOfOccurrence, function(attr){
              if(attr.measurementvalue === name){
                    $scope.territory.territoryAtomized.extentOfOccurrence.measurementType = attr.measurementtype;
                    $scope.territory.territoryAtomized.extentOfOccurrence.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('territoryAtomized.areaOfOccupancy.measurementType', function(name){
        if(name!=undefined){
            delete $scope.territoryAtomized.areaOfOccupancy.measurementValue;
            angular.forEach($scope.areaOfOccupancy, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('territoryAtomized.areaOfOccupancy.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.areaOfOccupancy, function(attr){
              if(attr.measurementvalue === name){
                    $scope.measurementOrFact.measurementType = attr.measurementtype;
                    $scope.measurementOrFact.measurementValue =  name;
                 }
            });
        }
    });
    $scope.$watch('directThreatsAtomized.measurementType', function(name){
        if(name!=undefined){
            delete $scope.directThreatsAtomized.measurementValue;
            angular.forEach($scope.directThreats, function(attr){
              if(attr.measurementtype === name){
                $scope.selectedAttr.push(attr);
              }
            });
        }
    });
    $scope.$watch('directThreatsAtomized.measurementValue', function(name){
        if(name!=undefined){
             angular.forEach($scope.directThreats, function(attr){
              if(attr.measurementvalue === name){
                    $scope.directThreats.directThreatsAtomized.measurementType = attr.measurementtype;
                    $scope.directThreats.directThreatsAtomized.measurementValue =  name;
                 }
            });
        }
    });
    

}])
.controller('UbicacionCtrl', ['$scope', function ($scope) {  
    $scope.$watch('distributionOpt2.country', function(name){
        if(name!=undefined){
            delete $scope.distributionOpt2.stateProvince;
            delete $scope.distributionOpt2.county;
            angular.forEach($scope.ubicacion, function(attr){
              if(attr.countryName === name){
                $scope.selectedAttr = attr;
              }
            });
        }
    });
    $scope.$watch('distributionOpt2.stateProvince', function(name){
        if(name!=undefined){
            delete $scope.distributionOpt2.county;
            angular.forEach($scope.ubicacion, function(attr){
              angular.forEach(attr.departments, function(attr2){
                if(attr2.departmentName === name){
                  $scope.selectedAttr2 = attr2;
                }
              });  
            });
         }   
      });
    $scope.$watch('invasivenessAtomizedType.countryCode', function(name){
        if(name!=undefined){
            $scope.invasivenessAtomizedType.stateProvince = '';
            $scope.invasivenessAtomizedType.county = '';
            angular.forEach($scope.ubicacion, function(attr){
              if(attr.countryName === name){
                $scope.selectedAttr = attr;
              }
            });
        }
    });
    $scope.$watch('invasivenessAtomizedType.stateProvince', function(name){
        if(name!=undefined){
            $scope.invasivenessAtomizedType.county = '';
            angular.forEach($scope.ubicacion, function(attr){
              angular.forEach(attr.departments, function(attr2){
                if(attr2.departmentName === name){
                  $scope.selectedAttr2 = attr2;
                }
              });  
            });
         }   
      });
    $scope.$watch('threatStatusClass.threatStatusAtomized.aplliesTo.country', function(name){
        if(name!=undefined){
            $scope.threatStatusClass.threatStatusAtomized.aplliesTo.stateProvince = '';
            $scope.threatStatusClass.threatStatusAtomized.aplliesTo.county = '';
            angular.forEach($scope.ubicacion, function(attr){
              if(attr.countryName === name){
                $scope.selectedAttr = attr;
              }
            });
        }
    });
    $scope.$watch('threatStatusClass.threatStatusAtomized.aplliesTo.stateProvince', function(name){
        if(name!=undefined){
            $scope.threatStatusClass.threatStatusAtomized.aplliesTo.county = '';
            angular.forEach($scope.ubicacion, function(attr){
              angular.forEach(attr.departments, function(attr2){
                if(attr2.departmentName === name){
                  $scope.selectedAttr2 = attr2;
                }
              });  
            });
         }   
      });
    $scope.$watch('legislationAtomizedType.aplliesTo.country', function(name){
        if(name!=undefined){
            $scope.legislationAtomizedType.aplliesTo.stateProvince = '';
            $scope.legislationAtomizedType.aplliesTo.county = '';
            angular.forEach($scope.ubicacion, function(attr){
              if(attr.countryName === name){
                $scope.selectedAttr = attr;
              }
            });
        }
    });
    $scope.$watch('legislationAtomizedType.aplliesTo.stateProvince', function(name){
        if(name!=undefined){
            $scope.legislationAtomizedType.aplliesTo.county = '';
            angular.forEach($scope.ubicacion, function(attr){
              angular.forEach(attr.departments, function(attr2){
                if(attr2.departmentName === name){
                  $scope.selectedAttr2 = attr2;
                }
              });  
            });
         }   
      });

    $scope.$watch('associatedParty.country', function(name){
        if(name!=undefined){
            $scope.associatedParty.state = '';
            $scope.associatedParty.city = '';
            angular.forEach($scope.ubicacion, function(attr){
              if(attr.countryName === name){
                $scope.selectedAttr = attr;
              }
            });
        }
    });
    $scope.$watch('associatedParty.state', function(name){
        if(name!=undefined){
            $scope.associatedParty.city = '';
            angular.forEach($scope.ubicacion, function(attr){
              angular.forEach(attr.departments, function(attr2){
                if(attr2.departmentName === name){
                  $scope.selectedAttr2 = attr2;
                }
              });  
            });
         }   
      });
}])  

// our controller for the form
// =============================================================================
.controller('formController', function($scope, ModalService, $http, $filter, $timeout) {

    $http.get('/app/resources/distribution.json')
       .then(function(res){
          $scope.ubicacion = res.data;                
    });

    $http.get('/app/resources/language.json')
       .then(function(res){
          $scope.idiomas = res.data;                
    }); 

    oboe({
        url: 'http://s3.amazonaws.com/mutis/vocabularies/test/lenguajesControlados.json',
        method: 'GET'
    })
   .done(function(things) {
        if(things.lifeForms!=undefined){
            $scope.lifeForms = things.lifeForms;
        }
        if(things.lifeCycles!=undefined){
            $scope.lifeCycles = things.lifeCycles;
        }
        if(things.reproductions!=undefined){
            $scope.reproductions = things.reproductions;
        }
        if(things.event!=undefined){
            $scope.event = things.event;
        }
        if(things.primaryDietSource!=undefined){
            $scope.primaryDietSource = things.primaryDietSource;
        }
        if(things.strategies!=undefined){
            $scope.strategies = things.strategies;
        }
        if(things.purposes!=undefined){
            $scope.purposes = things.purposes;
        }
        if(things.dispersalType!=undefined){
            $scope.dispersalType = things.dispersalType;
        }
        if(things.structureDispersed!=undefined){
            $scope.structureDispersed = things.structureDispersed;
        }
        if(things.distance!=undefined){
            $scope.distance = things.distance;
        }
        if(things.behaviors!=undefined){
            $scope.behaviors = things.behaviors;
        }
        if(things.interactionSpeciesType!=undefined){
            $scope.interactionSpeciesType = things.interactionSpeciesType;
        }
        if(things.molecularDatas!=undefined){
            $scope.molecularDatas = things.molecularDatas;
        }
        if(things.migratoryCauses!=undefined){
            $scope.migratoryCauses = things.migratoryCauses;
        }
        if(things.migratoryPatterns!=undefined){
            $scope.migratoryPatterns = things.migratoryPatterns;
        }
        if(things.ecologicalSignificances!=undefined){
            $scope.ecologicalSignificances = things.ecologicalSignificances;
        }
        if(things.environmentalEnvelopes!=undefined){
            $scope.environmentalEnvelopes = things.environmentalEnvelopes;
        }
         if(things.origin!=undefined){
            $scope.origin = things.origin;
        }
        if(things.presence!=undefined){
            $scope.presence = things.presence;
        }
        if(things.persistence!=undefined){
            $scope.persistence = things.presistence;
        }
        if(things.distribution!=undefined){
            $scope.distribution = things.distribution;
        }
        if(things.harmful!=undefined){
            $scope.harmful = things.harmful;
        }  
        if(things.abundance!=undefined){
            $scope.abundance = things.abundance;
        }  
        if(things.trend!=undefined){
            $scope.trend = things.trend;
        }  
        if(things.rateOfSpread!=undefined){
            $scope.rateOfSpread = things.rateOfSpread;
        }  
        if(things.regulatoryListing!=undefined){
            $scope.regulatoryListing = things.regulatoryListing;
        }    
        if(things.localityType!=undefined){
            $scope.localityType = things.localityType;
        }  
        if(things.locationStandard!=undefined){
            $scope.locationStandard = things.locationStandard;
        }  
        if(things.publicationDatePrecision!=undefined){
            $scope.publicationDatePrecision = things.publicationDatePrecision;
        }  
        if(things.habitats!=undefined){
            $scope.habitats = things.habitats;
        } 
        if(things.distributionScope!=undefined){
            $scope.distributionScope = things.distributionScope;
        } 
        if(things.extentOfOccurrence!=undefined){
            $scope.extentOfOccurrence = things.extentOfOccurrence;
        } 
        if(things.areaOfOccupancy!=undefined){
            $scope.areaOfOccupancy = things.areaOfOccupancy;
        } 
        if(things.region!=undefined){
            $scope.region = things.region;
        } 
        if(things.mortalityRate!=undefined){
            $scope.mortalityRate = things.mortalityRate;
        }  
        if(things.birthRate!=undefined){
            $scope.birthRate = things.birthRate;
        } 
        if(things.avaregeDensity!=undefined){
            $scope.avaregeDensity = things.avaregeDensity;
        } 
        if(things.populationGrowthRate!=undefined){
            $scope.populationGrowthRate = things.populationGrowthRate;
        } 
        if(things.threatCategory!=undefined){
            $scope.threatCategory = things.threatCategory;
        } 
        if(things.authority!=undefined){
            $scope.authority = things.authority;
        } 
        if(things.directThreats!=undefined){
            $scope.directThreats = things.directThreats;
        } 
        if(things.legislationProtection!=undefined){
            $scope.legislationProtection = things.legislationProtection;
        } 
        if(things.legislationStatus!=undefined){
            $scope.legislationStatus = things.legislationStatus;
        } 
        if(things.legislationType!=undefined){
            $scope.legislationType = things.legislationType;
        } 
        if(things.legislationNorm!=undefined){
            $scope.legislationNorm = things.legislationNorm;
        } 
        if(things.partUsed!=undefined){
            $scope.partUsed = things.partUsed;
        } 
        if(things.useTypeAtomized!=undefined){
            $scope.useTypeAtomized = things.useTypeAtomized;
        } 
        if(things.managementType!=undefined){
            $scope.managementType = things.managementType;
        } 
        if(things.managementAction!=undefined){
            $scope.managementAction = things.managementAction;
        } 

   })
   .fail(function() {

      // we don't got it
   });
    
    //variables
    $scope.selectedAttr = [];
    $scope.date = new Date();
    $scope.basesElements='';
    $scope.language='';
    $scope.version={major:'',minor:'',modifier:'',dataIssued:'',preferredFlag:''};
    $scope.author = {name:'',role:''};

    //General Form
    $scope.formData = {};
    //Revision
    $scope.formData.revisiones=[];
    //Taxon Record Name
    $scope.formData.taxonRecordName={scientificName:{attributes:{id:'',isAnamorphic:'',nomenclaturalCode:''},simple:'',rank:'',canonicalName:{simple:'',uninomial:'',genus:{ref:'',linkType:''},epithet:{infragenericEpithet:'',specificEpithet:'',infraspecificEpithet:''}},canonicalAuthorship:{simple:'',authorship:{simple:'',year:[],authors:[]}},specialAuthorship:{basionymAuthorship:{simple:'',year:[],authors:[]},combinationAuthorship:[]},publishedln:{identifier:'',datatype:'',source:''},year:'',microReference:'',typificacion:{simple:'', typeVoucherEntity:{voucherReference:[],lectotypePublicationVoucher:[],lectotypeMicroReferenceVoucher:[],typeOfType:''}},typeNameEntity:{nameReference:{identifier:'',datatype:'',source:''},lectotypePublication:{identifier:'',datatype:'',source:''},lectotypeMicroReference:{identifier:'',datatype:'',source:''}},spellingCorrentionOf:[],basionym:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},basedOn:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},conservedAgainst:[],laterHomonymOf:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},sanctioned:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},replacementNameFor:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},publicationStatus:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},providerLink:'',providerSpecificData:{anyOne:[],anyTwo:''},ancillaryData:[]}};
    //Synonyms
    $scope.synonmy = {rank:'' ,canonicalName:'', canonicalAuthorship:'', publishedln:{identifier:'',datatype:'',source:''}, synonymStatus:'',ancillaryData:[]};
    $scope.formData.synonymsAtomized=[];
    //Common Names
    $scope.commonName = {name:'',language:[],usedIn:'',usedBy:'',ancillaryData:[]};
    $scope.formData.commonNameAtomized = [];
    //Hierarchy
    $scope.hierarchy = {classification:'',recommended:'',kingdom:'',phylum:'',classHierarchy:'',order:'',family:'',genus:'',subGenus:'',taxonRank:'',specificEpithet:'',infraspecificEpithet:'',higherClassification:'',parentTaxon:'',ancillaryData:[]};
    $scope.formData.hierarchy=[];
    //Uses
    $scope.formData.uses=[];
    //Identification Keys
    $scope.formData.identificationKeys={keys:[],ancillaryData:[]};
    //Full Description
    $scope.formData.fullDescription={fullDescriptionAtomized:[],ancillaryDataA:[],fullDescriptionUnstructured:'',ancillaryData:[]};
    //LIfe Form
    $scope.formData.lifeForm={lifeFormAtomized:[], ancillaryDataA:[] ,lifeFormUnstructured:'',ancillaryData:[]};
    //Life Cycle
    $scope.formData.lifeCycle={lifeCycleAtomized:[], ancillaryDataA:[], lifeCycleUnstructured:'',ancillaryData:[]};
    //Reproduction
    $scope.formData.reproduction={reproductionAtomized:[], ancillaryDataA:[], reproductionUnstructured:'',ancillaryData:[]};
    //Annual Cycle
    $scope.annualCycleAtomizedType ={Event:'',startTimeInterval:'',endTimeInterval:'' ,ancillaryData:[]};
    $scope.formData.annualCycle={annualCycleAtomized:[],annualCycleUnstructured:'',ancillaryData:[]};
    //Feeding
    $scope.thropic = {strategy:'', strategyRemarks:''};
    $scope.feedingAtomizedType = {type:'',thropic:[], ancillaryData:[]};
    $scope.formData.feeding={feedingAtomized:[],feedingUnstructured:'',ancillaryData:[]};
    //Dispersal
    $scope.formData.dispersal={dispersalAtomized:{purpose:[], type:'',structureDispersed:'',distance:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}},ancillaryDataA:[], dispersalUnstructured:'',ancillaryData:[]};
    //Behavior
    $scope.formData.behavior={behaviorAtomized:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},ancillaryDataA:[],behaviorUnstructured:'',ancillaryData:[]};
    //Interactions
    $scope.interactionsAtomizedType = {interactionSpecies:'',interactionSpeciesType:[], ancillaryData:[]};
    $scope.formData.interactions = {interactionsAtomized:[],interactionsUnstructured:'',ancillaryData:[]};
    //Molecular Data
    $scope.molecularDataAtomizedType = {measurementOrFact:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},relatedTo:'', ancillaryData:[]};
    $scope.formData.molecularData={molecularDataAtomized:[],molecularDataUnstructured:'',ancillaryData:[]};
    //Migratory
    $scope.migratoryAtomizedType ={causes:[],patterns:[],routes:[],season:'', ancillaryData:[]};
    $scope.formData.migratory={migratoryAtomized:[],migratoryUnstructured:'',ancillaryData:[]};
    //Ecological Significance
    $scope.formData.ecologicalSignificance={ecologicalSignificanceAtomized:[],ancillaryDataA:[],ecologicalSignificanceUnstructured:'',ancillaryData:[]};
    //Environmental Envelope
    $scope.formData.environmentalEnvelope={environmentalEnvelopeAtomized:[],ancillaryDataA:[],environmentalEnvelopeUnstructured:'',ancillaryData:[]};
    //Invasiveness
    $scope.invasivenessAtomizedType = {origin:'',presence:'',persistence:'',distribution:[], harmful:'',modified:'',startValidateDate:'',endValidateDate:'',countryCode:'',stateProvince:'',county:'',localityName:'',language:'',citation:'',abundance:'',trend:'',rateOfSpread:'',regulatoryListing:'',memo:'',publicationDate:'',localityType:'',locationValue:'',publicationDatePrecision:'',whatImpact:'',vector:'',route:'',target:[],mechanism:[],ancillaryData:[]};
    $scope.formData.invasiveness={invasivenessAtomized:[],invasivenessUnstructured:'',ancillaryData:[]};
    //Habitats
    $scope.formData.habitat={habitatsAtomized:[],ancillaryDataA:[],habitatsUnstructured:'',ancillaryData:[]};
    //Distribution
    $scope.distributionOpt2 = {country:'',stateProvince:'',county:'',municipality:'',locality:'',ancillaryData:[]};
    $scope.distributionClass = {distributionScope:{type:'',ancillaryData:[]},temporalCoverage:{startDate:'',endDate:''},distributionAtomized:[],distributionUnstructured:'',ancillaryData:[]}
    $scope.formData.distribution=[];
    //Endemic
    $scope.endemicTo = '';
    $scope.endemicAtomizedType = {endemicTo:[],endemicIn:'',ancillaryData:[]};
    $scope.formData.endemicAtomized=[];
    //Territory
    $scope.formData.territory={territoryAtomized:{extentOfOccurrence:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}, areaOfOccupancy:[],ancillaryData:[]},territoryUnstructured:'',ancillaryData:[]};
    //Population Biology
    $scope.populationBiologyAtomized={region:'',abundanceData:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},densityData:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},patternDistribution:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},size:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},sexRatio:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},fecundity:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},mortalityRate:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},birthRate:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},numberIndividualsPerObservation:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},averageDensity:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}, populationTrend:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},recruitment:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},populationGrowthRate:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},emigration:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},immigration:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}, descriptionLifeStages:[],proportionIndividualsPerStageLife:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},carryingCapacity:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},ancillaryData:[]};
    $scope.formData.populationBiology={populationBiologyAtomized:[], populationBiologyUnstructured:'',ancillaryData:[]};
    //ThreatStatus
    $scope.threatStatusClass = {threatStatusAtomized:{threatCategory:'',authority:[], aplliesTo:{country:'',stateProvince:'',county:'',municipality:'',locality:''},ancillaryData:[]},threatStatusUnstructured:'',ancillaryData:[]}
    $scope.formData.threatStatus=[];
    //Direct Threats
    $scope.formData.directThreats={directThreatsAtomized:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},ancillaryDataA:[],directThreatsUnstructured:'',ancillaryData:[]};
    //Legislation
    $scope.legislationAtomizedType = {legislationName:'',protectionLegalStatus:'',legislationRead:'',status:'',type:'',norm:'',aplliesTo:{country:'',stateProvince:'',county:'',municipality:'',locality:''},ancillaryData:[]};
    $scope.formData.legislation={legislationAtomized:[],legislationUnstructured:'',ancillaryData:[]};
    //Uses, Management and Conservation
    $scope.usesAtomizedType={sourceOfInformation:{references:[],sourceOfInformationText:''},useValue:'',partUsed:'',users:'',organisms:'',vernacularNameUseAnnotations:'',productionDetails:'',meansOfApplicationAdministration:'',seasonOfAvailabilityUse:'',conservationExplotationData:'',useTypeAtomized:'',economics:'',ratingPopularity:'',properties:'',potential:'',useNotes:'',ancillaryData:[]};
    $scope.managementAndConservationAtomizedType={type:'',objective:'',managementPlan:'', actions:[],humanAndEnvironmentalrelevanc:'',ancillaryData:[]};
    $scope.formData.usesManagementAndConservation={usesAtomized:[],managementAndConservationAtomized:[],managementAndConservationUnstructured:'',ancillaryData:[]};
    //Associated Party
    $scope.associatedParty = {firstName:'',lastName:'',position:'',organisation:'',address:'',city:'',state:'',country:'',postalCode:'',phone:'',email:'',homepage:'',personnelDirectory:'',personnelIdentifier:'',role:''};
    $scope.formData.associatedParty=[];
    //Measurement Or Fact
    $scope.measurementOrFact = {measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''};
    //Reference
    $scope.reference={identifier:'',datatype:'',source:''};
    $scope.formData.references=[];
    //AncillaryData
    $scope.ancillaryData = {identifier:'',dataType:'',mimeType:'', agent:[{firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''}], created:'' ,modified:'',license:'',rights:'',rigthsHolder:'',bibliographicCitation:'',audience:[],source:'',subject:[],description:'',mediaURL:[],thumbnailURL:'',location:'',geoPoint:'',reference:[],additionalInformation:'',dataObject:''};
    $scope.formData.ancillaryData=[];
    
    //$scope.formData.dataset={alternateIdentifier:[], title:[], creator:'',metadataProvider:[],associatedParty:'',pubDate:'',language:'',abstract:'',keyworset:'',additionalInfo:'',intellectialRights:'',distribution:'',coverage:'',purpose:'',contact:[],methods:'',project:''};

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };

    //Revision
    $scope.addRevision = function(revisiones) {
      revisiones.push({associatedParty:{firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''}, pubDate: '', created: ''});
    };

    $scope.removeRevision = function() {
        var lastItem = $scope.formData.revisiones.length-1;
        $scope.formData.revisiones.splice(lastItem);
    };

    //Reference
    $scope.addReferenceDirec = function(reference) {
        $scope.formData.references.push(reference);       
        $scope.reference={identifier:'',datatype:'',source:''};
    };

    $scope.removeReferenceDirec = function() {
        var lastItem = $scope.formData.references.length-1;
        $scope.formData.references.splice(lastItem);
    };

    //Get Taxomic Information from GBIF
    $scope.getTaxonInformation= function(taxonName) {
        var keyValue = '';
        $.ajax({
            url: 'http://api.gbif.org/v1/species?name='+taxonName+'&limit=1',
            dataType: 'JSONP',
            jsonpCallback: 'callback',
            type: 'GET',
            success: function (data) {
                if(data.results.length > 0){
                    $scope.$apply(function(){
                        //drop old information
                        $scope.formData.synonymsAtomized=[];
                        $scope.formData.commonNameAtomized = [];
                        $scope.formData.hierarchy=[];
                        //taxonRecordName
                        $scope.formData.taxonRecordName.scientificName.simple = (data.results[0].scientificName!=undefined)?data.results[0].scientificName:'';
                        $scope.formData.taxonRecordName.scientificName.rank = (data.results[0].rank!=undefined)?data.results[0].rank:'';
                        $scope.formData.taxonRecordName.scientificName.canonicalName.simple = (data.results[0].canonicalName!=undefined)?data.results[0].canonicalName:'';
                        $scope.formData.taxonRecordName.scientificName.canonicalAuthorship.simple = (data.results[0].authorship!=undefined)?data.results[0].authorship:'';
                        $scope.formData.taxonRecordName.scientificName.publishedln.simple = (data.results[0].publishedIn!=undefined)?data.results[0].publishedIn:'';
                        //hierarchy
                        $scope.formData.hierarchy.push({classification:'',recommended:'',kingdom:(data.results[0].kingdom!=undefined)?data.results[0].kingdom:'',phylum:(data.results[0].phylum!=undefined)?data.results[0].phylum:'',classHierarchy:(data.results[0].class!=undefined)?data.results[0].class:'',order:(data.results[0].order!=undefined)?data.results[0].order:'',family:(data.results[0].family!=undefined)?data.results[0].family:'',genus:(data.results[0].genus!=undefined)?data.results[0].genus:'',subGenus:'',taxonRank:(data.results[0].rank!=undefined)?data.results[0].rank:'',specificEpithet:'',infraspecificEpithet:'',higherClassification:'',parentTaxon:(data.results[0].parent!=undefined)?data.results[0].parent:'',ancillaryData:[{identifier:'',dataType:'',mimeType:'', agent:[{firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''}], created:$scope.date ,modified:$scope.date,title:'',license:'',rights:'',rigthsHolder:'',bibliographicCitation:'',audience:[],source:(data.results[0].accordingTo!=undefined)?data.results[0].accordingTo:'',subject:[],description:'',mediaURL:[],thumbnailURL:'',location:'',geoPoint:'',reference:[],additionalInformation:'',dataObject:''}]});
                        //key for synonyms and commonNames
                        switch(angular.lowercase(data.results[0].rank)){
                            case 'kingdom':
                                keyValue = data.results[0].kingdomKey;
                                break;
                            case 'phylum':
                                keyValue = data.results[0].phylumKey;
                                break;
                            case 'class':
                                keyValue = data.results[0].classKey;
                                break;
                            case 'order':
                                keyValue = data.results[0].orderKey;
                                break;
                            case 'family':
                                keyValue = data.results[0].familyKey;
                                break;
                            case 'genus':
                                keyValue = data.results[0].genusKey;
                                break;
                            case 'species':
                                keyValue = data.results[0].speciesKey;
                                break;
                            default:
                                keyValue = '';
                        };
                        //synonyms and commonNames
                        if(keyValue!=''){
                           $.ajax({
                                url: 'http://api.gbif.org/v1/species/'+keyValue+'/synonyms',
                                dataType: 'JSONP',
                                jsonpCallback: 'callback',
                                type: 'GET',
                                success: function (data_1) {
                                    if(data_1.results.length > 0){
                                        $scope.$apply(function(){
                                            for (i = 0; i<data_1.results.length;i++){
                                                $scope.formData.synonymsAtomized.push({synonymName:{attributes:{id:'',isAnamorphic:'',nomenclaturalCode:''},simple:(data_1.results[i].scientificName!=undefined)?data_1.results[i].scientificName:'',rank:(data_1.results[i].rank!=undefined)?data_1.results[i].rank:'',canonicalName:{simple:(data_1.results[i].canonicalName!=undefined)?data_1.results[i].canonicalName:'',uninomial:'',genus:{ref:'',linkType:''},epithet:{infragenericEpithet:'',specificEpithet:'',infraspecificEpithet:''}},canonicalAuthorship: {simple:(data_1.results[i].authorship!=undefined)?data_1.results[i].authorship:'',authorship:{simple:'',year:[],authors:[]}},specialAuthorship:{basionymAuthorship:{simple:'',year:[],authors:[]},combinationAuthorship:[]},publishedln:{identifier:'',datatype:'',source:(data_1.results[i].publishedIn!=undefined)?data_1.results[i].publishedIn:''},year:'',microReference:'',typificacion:{simple:'', typeVoucherEntity:{voucherReference:[],lectotypePublicationVoucher:[],lectotypeMicroReferenceVoucher:[],typeOfType:''},typeNameEntity:{nameReference:{identifier:'',datatype:'',source:''},lectotypePublication:{identifier:'',datatype:'',source:''},lectotypeMicroReference:{identifier:'',datatype:'',source:''}}},spellingCorrentionOf:[],basionym:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},basedOn:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},conservedAgainst:[],laterHomonymOf:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},sanctioned:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},replacementNameFor:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},publicationStatus:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},providerLink:'',providerSpecificData:{anyOne:[],anyTwo:''}},synonymStatus:(data_1.results[i].nomenclaturalStatus!=undefined && data_1.results[i].nomenclaturalStatus[0]!=undefined)?data_1.results[i].nomenclaturalStatus:'',ancillaryData:[]});
                                            }
                                        });
                                   }
                                },
                                error: function (xhr, ajaxOptions, thrownError) { 
                                    console.log("Status: " + xhr.status);
                                    console.log("Message: " + thrownError);
                                }
                            });

                            $.ajax({
                                url: 'http://api.gbif.org/v1/species/'+keyValue+'/vernacularNames',
                                dataType: 'JSONP',
                                jsonpCallback: 'callback',
                                type: 'GET',
                                success: function (data_1) {
                                    if(data_1.results.length > 0){
                                        $scope.$apply(function(){
                                            var langName = '';
                                            for (i = 0; i<data_1.results.length;i++){
                                                if(data_1.results[i].language!=undefined){
                                                    langName = $scope.findLanguageName(data_1.results[i].language);
                                                }
                                                $scope.formData.commonNameAtomized.push({name:(data_1.results[i].vernacularName!=undefined)?data_1.results[i].vernacularName:'',language:{languageIso:(data_1.results[i].language!=undefined)?data_1.results[i].language:'', languageName:langName},usedIn:{distributionScope:{type:'',ancillaryData:[]},temporalCoverage:{startDate:'',endDate:''},distributionAtomizedBranch:[],distributionUnstructured:(data_1.results[i].area!=undefined)?data_1.results[i].area:'',ancillaryData:[]}, usedBy:'',ancillaryData:[]});
                                            }
                                        });
                                   }
                                },
                                error: function (xhr, ajaxOptions, thrownError) { 
                                    console.log("Status: " + xhr.status);
                                    console.log("Message: " + thrownError);
                                }
                            });  
                        }
                    });
               }
            },
            error: function (xhr, ajaxOptions, thrownError) { 
                console.log("Status: " + xhr.status);
                console.log("Message: " + thrownError);
            }
        });
      };

    $scope.findLanguageName = function(languageIso){
        if(languageIso!= undefined && languageIso != ''){
            for (var d = 0, len = $scope.idiomas.length; d < len; d += 1) {
                if ($scope.idiomas[d].ISO === languageIso) {
                    return $scope.idiomas[d].Idioma;
                }
            }
        }
    };  

    //Synonyms
    $scope.addSynonymsAtomized = function(synonymsAtomized,synonmy) {
        if(synonmy.canonicalName!=''){
            synonymsAtomized.push({synonymName:{attributes:{id:'',isAnamorphic:'',nomenclaturalCode:''},simple:'',rank:synonmy.rank,canonicalName:{simple:synonmy.canonicalName,uninomial:'',genus:{ref:'',linkType:''},epithet:{infragenericEpithet:'',specificEpithet:'',infraspecificEpithet:''}},canonicalAuthorship: {simple:synonmy.canonicalAuthorship,authorship:{simple:'',year:[],authors:[]}},specialAuthorship:{basionymAuthorship:{simple:'',year:[],authors:[]},combinationAuthorship:[]},publishedln:synonmy.publishedln, year:'',microReference:'',typificacion:{simple:'', typeVoucherEntity:{voucherReference:[],lectotypePublicationVoucher:[],lectotypeMicroReferenceVoucher:[],typeOfType:''},typeNameEntity:{nameReference:{identifier:'',datatype:'',source:''},lectotypePublication:{identifier:'',datatype:'',source:''},lectotypeMicroReference:{identifier:'',datatype:'',source:''}}},spellingCorrentionOf:[],basionym:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},basedOn:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},conservedAgainst:[],laterHomonymOf:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},sanctioned:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},replacementNameFor:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},publicationStatus:{ruleConsidered:'',note:'',reletedName:{identifier:'',datatype:'',source:''},publishedln:{identifier:'',datatype:'',source:''},microReference:''},providerLink:'',providerSpecificData:{anyOne:[],anyTwo:''}},synonymStatus:synonmy.synonymStatus,ancillaryData:synonmy.ancillaryData});
            $scope.synonmy = {rank:'' ,canonicalName:'', canonicalAuthorship:'', publishedln:'', synonymStatus:'',ancillaryData:[]};
        }
    };

    $scope.removeSynonymsAtomized = function() {
        var lastItem = $scope.formData.synonymsAtomized.length-1;
        $scope.formData.synonymsAtomized.splice(lastItem);
    };

    //Common names
    $scope.addCommonNamesAtomized = function(commonNameAtomized,commonName) {
        if(commonName.name!=''){
            commonNameAtomized.splice(0,0,{name:commonName.name,language:commonName.language,usedIn:{distributionScope:{type:'',ancillaryData:[]},temporalCoverage:{startDate:'',endDate:''},distributionAtomizedBranch:[],distributionUnstructured:commonName.usedIn,ancillaryData:[]}, usedBy:commonName.usedBy,ancillaryData:commonName.ancillaryData});
            $scope.commonName = {name:'',language:[],usedIn:'',usedBy:'',ancillaryData:[]};
        }
    };

    $scope.removeCommonNamesAtomized = function() {
        var lastItem = $scope.formData.commonNameAtomized.length-1;
        $scope.formData.commonNameAtomized.splice(lastItem);
    };

    //Hierarchy
    $scope.addHierarchy = function(hierarchy,hier) {
        if(hier.kingdom!=''){
            hierarchy.push(hier);
            $scope.hierarchy = {classification:'',recommended:'',kingdom:'',phylum:'',classHierarchy:'',order:'',family:'',genus:'',subGenus:'',taxonRank:'',specificEpithet:'',infraspecificEpithet:'',higherClassification:'',parentTaxon:'',ancillaryData:[]};
        }
    };

    $scope.removeHierarchy = function() {
        var lastItem = $scope.formData.hierarchy.length-1;
        $scope.formData.hierarchy.splice(lastItem);
    };

    //MeasuremenetOrFact
    $scope.addMeasurementOrFactVector = function(measurementOrFact,measurement,model){
        if(measurement!=undefined){
            if(measurement.measurementValue!=''){
                measurementOrFact.push(measurement);
                $scope.measurementOrFact = {measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}
                $scope.selectedAttr = [];
            }
        }    
    };
    $scope.addMeasurementOrFact = function(measurementOrFact,measurement){
        if(measurement!=undefined){
            if(measurement.measurementValue!=''){
                measurementOrFact = measurement;
                $scope.measurementOrFact = {measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}
                $scope.selectedAttr = [];
            }
        }    
    };

    //Annual Cycle
    $scope.addAnnualCycleAtomizedType = function(annualCycleAtomizedType,annualCycle){
        if(annualCycle.Event!=''){
            annualCycleAtomizedType.push(annualCycle);
            $scope.annualCycleAtomizedType ={Event:'',startTimeInterval:'',endTimeInterval:'' ,ancillaryData:[]};
        }
    };

    //Feeding
    $scope.addFeedingAtomizedType = function(feedingAtomizedType,feeding){
        if(feeding.type!=''){
            feedingAtomizedType.push(feeding);
            $scope.feedingAtomizedType = {type:'',thropic:[], ancillaryData:[]};
        }
    };
    $scope.addThropic = function(thropics,thropic){
        if(thropic!=''){
            thropics.push(thropic);
            $scope.thropic = {strategy:'', strategyRemarks:''};
        }
    };

    //Interactions
    $scope.addInteractionAtomizedType = function(interactionAtomizedType,interaction){
        if(interaction.interactionSpecies!=''){
            interactionAtomizedType.push(interaction);
            $scope.interactionsAtomizedType = {interactionSpecies:'',interactionSpeciesType:[], ancillaryData:[]};
        }
    };
    

    //Molecular Data
    $scope.addMolecularDataAtomizedType = function(molecularDataAtomizedType,molecular){
        if(molecular.measurementOrFact.measurementType!=''){
            molecularDataAtomizedType.push(molecular);
            $scope.molecularDataAtomizedType = {measurementOrFact:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},relatedTo:'', ancillaryData:[]};

        }
    };

    //Endemic
    $scope.addEndemic = function(endemicAtomized,endemic){
        if(endemic.endemicTo!=''){
            endemicAtomized.push(endemic);
            $scope.endemicAtomizedType = {endemicTo:[],endemicIn:'',ancillaryData:[]};
        }
    };

    $scope.addEndemicTo = function(endemicAtomized,endemicTo){
        if(endemicTo!=''){
            endemicAtomized.push(endemicTo);
            $scope.endemicTo = '';
        }
    };

    $scope.addPopulationBiology = function(populationBiologyAtomized){
        if(populationBiologyAtomized.region!=''){
            $scope.formData.populationBiology.populationBiologyAtomized.push(populationBiologyAtomized);
            $scope.populationBiologyAtomized={region:'',abundanceData:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},densityData:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},patternDistribution:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},size:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},sexRatio:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},fecundity:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},mortalityRate:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},birthRate:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},numberIndividualsPerObservation:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},averageDensity:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}, populationTrend:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},recruitment:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},populationGrowthRate:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},emigration:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},immigration:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''}, descriptionLifeStages:[],proportionIndividualsPerStageLife:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},carryingCapacity:{measurementID:'',measurementType:'',measurementValue:'',measurementAccuracy:'',measurementUnit:'',measurementDeterminedDate:'',measurementDeterminedBy:[],measurementMethod:'',measurementRemarks:'',relatedTo:''},ancillaryData:[]};
        }
    };

    $scope.addThreatStatusClass = function(threatStatusClass){
        if(threatStatusClass.threatStatusAtomized.threatCategory!=''){
            $scope.formData.threatStatus.push(threatStatusClass);
            $scope.threatStatusClass = {threatStatusAtomized:{threatCategory:'',authority:[], aplliesTo:{country:'',stateProvince:'',county:'',municipality:'',locality:''},ancillaryData:[]},threatStatusUnstructured:'',ancillaryData:[]}
        }
    };

     $scope.addLegislationAtomized = function(legislationAtomizedType){
        if(legislationAtomizedType.legislationName!=''){
            $scope.formData.legislation.legislationAtomized.push(legislationAtomizedType);
            $scope.legislationAtomizedType = {legislationName:'',protectionLegalStatus:'',legislationRead:'',status:'',type:'',norm:'',aplliesTo:{country:'',stateProvince:'',county:'',municipality:'',locality:''},ancillaryData:[]};
        }
    };

   
    $scope.addYear = function(years,year){
        years.push(year);
    };
    
    $scope.addAuthor = function(authors,author){
        //authors.push(name:author.name,role:author.role);
        $scope.author={name:'',role:''};
    };

    //Ancillary Data
    $scope.addAncillaryData = function(ancillaryDataList,ancillary) {
        if(ancillary.license!=''){
            ancillaryDataList.push(ancillary);
            $scope.ancillaryData = {identifier:'',dataType:'',mimeType:'', agent:[{firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''}], created:'' ,modified:'',license:'',rights:'',rigthsHolder:'',bibliographicCitation:'',audience:[],source:'',subject:[],description:'',mediaURL:[],thumbnailURL:'',location:'',geoPoint:'',reference:[],additionalInformation:'',dataObject:''};
        }
    };

    $scope.removeAncillaryData = function(ancillaryDataList, ancillaryData ) {
        var index = ancillaryDataList.indexOf(ancillaryData);
        ancillaryDataList.splice(index,1);
    };

    //Reference
    $scope.addReference = function(references, reference) {
        references.push(reference);
        $scope.formData.references.push(reference);       
        $scope.reference={identifier:'',datatype:'',source:''};
    };

    $scope.addAgent = function(agent) {
        if(agent==undefined){
            agent=[];
        }
        agent.push({firstName:'',lastName:'',organisation:'',position:'',address:'',phone:'',email:'',role:'',homepage:''});
    };

    //Distribution
    $scope.addDistributionOpt2 = function(distribution,opt2) {
        if(opt2.country!=undefined){
             distribution.push(opt2);
             $scope.distributionOpt2 = {country:'',stateProvince:'',county:'',municipality:'',locality:''};
        }
    };

    $scope.removeDistribution = function() {
        var lastItem = $scope.formData.distribution.length-1;
        $scope.formData.distribution.splice(lastItem);
    };

    //Threat Status
    $scope.addThreatStatus = function(threatStatus) {
        threatStatus.push();
    };

    $scope.removeThreatStatus = function() {
        var lastItem = $scope.formData.threatStatus.length-1;
        $scope.formData.threatStatus.splice(lastItem);
    };

    //INvasiveness
    $scope.addInvasiveness = function(invasiveness) {
        $scope.formData.invasiveness.invasivenessAtomized.push(invasiveness);
        $scope.invasivenessAtomizedType = {origin:'',presence:'',persistence:'',distribution:[], harmful:'',modified:'',startValidateDate:'',endValidateDate:'',countryCode:'',stateProvince:'',county:'',localityName:'',language:'',citation:'',abundance:'',trend:'',rateOfSpread:'',regulatoryListing:'',memo:'',publicationDate:'',localityType:'',locationValue:'',publicationDatePrecision:'',whatImpact:'',vector:'',route:'',target:'',mechanism:''};
    };

    //Uses Atomized
    $scope.addUsesAtomized = function(usesAtomized){
        $scope.formData.usesManagementAndConservation.usesAtomized.push(usesAtomized);
        $scope.usesAtomizedType={sourceOfInformation:{references:[],sourceOfInformationText:''},useValue:'',partUsed:'',users:'',organisms:'',vernacularNameUseAnnotations:'',productionDetails:'',meansOfApplicationAdministration:'',seasonOfAvailabilityUse:'',conservationExplotationData:'',useTypeAtomized:'',economics:'',ratingPopularity:'',properties:'',potential:'',useNotes:'',ancillaryData:[]};
    };

    //Management And Conservation
    $scope.addManagementAndConservation = function(managementAndConservation){
        $scope.formData.usesManagementAndConservation.managementAndConservationAtomized.push(managementAndConservation);
        $scope.managementAndConservationAtomizedType={type:'',objective:'',managementPlan:'', actions:[],humanAndEnvironmentalrelevanc:'',ancillaryData:[]};
    };

     $scope.addAssociatedParty = function(associatedParty){
        $scope.formData.associatedParty.push(associatedParty);
        $scope.associatedParty = {firstName:'',lastName:'',position:'',organisation:'',address:'',city:'',state:'',country:'',postalCode:'',phone:'',email:'',homepage:'',personnelDirectory:'',personnelIdentifier:'',role:''};
     }

    //Get linces info for reference
    $scope.getInfoLicence = function(url,ancillary){
        if(url!=undefined){
            url_parts = url.split('/');
            if(url.indexOf('www.flickr.com') > -1){
                var photo_id = url_parts[5];
                $http.get('https://api.flickr.com/services/rest/?&method=flickr.photos.getInfo&photo_id='+photo_id+'&api_key=d70bb0faa317f97f15ecf636ee77c33e&format=json&per_page=500')
                   .then(function(res){
                        data = res.data.replace('jsonFlickrApi(','').replace(')','').replace(/\n/g,'');
                        var objetoJSONFinal =  JSON.parse(data);
                        var license;
                        switch(objetoJSONFinal.photo.license){
                            case "0":
                                license = "All Rights Reserved";
                                break;
                            case "1":
                                license = "http://creativecommons.org/licenses/by-nc-sa/2.0/";
                                break;
                            case "2":
                                license = "http://creativecommons.org/licenses/by-nc/2.0/";
                                break;
                            case "3":
                                license = "http://creativecommons.org/licenses/by-nc-nd/2.0/";
                                break;
                            case "4":
                                license = "http://creativecommons.org/licenses/by/2.0/";
                                break;
                            case "5":
                                license = "http://creativecommons.org/licenses/by-sa/2.0/";
                                break;
                            case "6":
                                license = "http://creativecommons.org/licenses/by-nd/2.0/";
                                break;
                            case "7":
                                license = "http://flickr.com/commons/usage/";
                                break;
                            case "8":
                                license = "http://www.usa.gov/copyright.shtml";
                                break;
                        } 
                        $http.get('https://api.flickr.com/services/rest/?&method=flickr.photos.getSizes&photo_id='+photo_id+'&api_key=d70bb0faa317f97f15ecf636ee77c33e&format=json&per_page=500')
                            .then(function(res){
                                data_1 = res.data.replace('jsonFlickrApi(','').replace(')','').replace(/\n/g,'');
                                var objetoJSONFinal_1 =  JSON.parse(data_1);
                                if(typeof  objetoJSONFinal_1.sizes.size[5].source != 'undefined'){
                                    $scope.ancillaryData.source = (objetoJSONFinal_1.sizes.size[5].source).replace(/'/g, "\''");
                                    $scope.imageurl =(objetoJSONFinal_1.sizes.size[5].source).replace(/'/g, "\''");  
                                }
                            });
                         
                        $scope.ancillaryData.license = license;
                        $scope.ancillaryData.rightsHolder = objetoJSONFinal.photo.owner.username;
                        $scope.ancillaryData.bibliographicCitation = objetoJSONFinal.photo.description._content;
                });
            }
            if(url.indexOf('commons.wikimedia.org') > -1 ){
                var imagen = (url_parts[url_parts.length-1]).split(':')[1];
                console.log(imagen);
                $.ajax({
                    url: 'https://commons.wikimedia.org/w/api.php?action=query&titles=Image:'+imagen+'&prop=imageinfo&iiprop=extmetadata&format=json',
                    dataType: 'JSONP',
                    jsonpCallback: 'callback',
                    type: 'GET',
                    headers: { 'Api-User-Agent': 'Example/1.0' },
                    success: function (data) {
                        console.log(data);
                    }
                });
            }
        }
    };

});
