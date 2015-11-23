'use strict';

angular.module('app.controllers.checkBox',[])
.controller('CheckBoxCrtl', ['$scope', function($scope) {
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

    $scope.updateSelectionThropic = function updateSelectionThropic(name) {
        var idx = -1;
        for(var i = 0, len = $scope.feedingAtomizedType.thropic.length; i < len; i++) {
            if($scope.feedingAtomizedType.thropic[i].strategy === name.name){
                idx = i;
            } 
        }
        // is currently selected
        if (idx > -1) {
            $scope.feedingAtomizedType.thropic.splice(idx, 1);
        }
        // is newly selected
        else {
            $scope.feedingAtomizedType.thropic.push({'strategy':name.name});
        }
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
        if (idx > -1) {
            $scope.invasivenessAtomizedType.distribution.splice(idx, 1);
        }
        else {
            $scope.invasivenessAtomizedType.distribution.push(name.name);
        }
    };

    $scope.updateSelectionHarmful = function updateSelectionHarmful(element, list) {
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

    $scope.updateSelectionAutority = function updateSelectionAutority(name) {
         var idx = $scope.threatStatusClass.threatStatusAtomized.authority.indexOf(name);
        if (idx > -1) {
            $scope.threatStatusClass.threatStatusAtomized.authority.splice(idx, 1);
        }
        else {
            $scope.threatStatusClass.threatStatusAtomized.authority.push(name.name);
        }
    };

    $scope.updateSelectionApendiceCITES = function updateSelectionApendiceCITES(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        element.checked= true;
        $scope.threatStatusClass.threatStatusAtomized.apendiceCITES = element.name;
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
    $scope.updateSelectionManagementAction = function updateSelectionManagementAction(name) {
         var idx = $scope.managementAndConservationAtomizedType.actions.indexOf(name);
        if (idx > -1) {
            $scope.managementAndConservationAtomizedType.actions.splice(idx, 1);
        }
        else {
            $scope.managementAndConservationAtomizedType.actions.push(name.name);
        }
    };
}]);