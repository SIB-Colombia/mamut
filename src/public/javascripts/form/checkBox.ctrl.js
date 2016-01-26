'use strict';

angular.module('app.controllers.checkBox',[])
.controller('CheckBoxCrtl', ['$scope', function($scope) {
    $scope.updateSelectionEvent = function updateSelectionEvent(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.annualCycleAtomizedType.Event === element.name){
            element.checked= false;
            $scope.annualCycleAtomizedType.Event='';
        }else{
            element.checked= true;
            $scope.annualCycleAtomizedType.Event = element.name;
        }
    };

   $scope.updateSelectionFeeding = function updateSelectionFeeding(element, list) {
         angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.feedingAtomizedType.type === element.name){
            element.checked= false;
            $scope.feedingAtomizedType.type='';
        }else{
            element.checked= true;
            $scope.feedingAtomizedType.type = element.name;
        }
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
        if($scope.formData.dispersal.dispersalAtomized.type === element.name){
            element.checked= false;
            $scope.formData.dispersal.dispersalAtomized.type='';
        }else{
            element.checked= true;
            $scope.formData.dispersal.dispersalAtomized.type = element.name;
        }
    };

    $scope.updateSelectionStructureDispersed = function updateSelectionStructureDispersed(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.formData.dispersal.dispersalAtomized.structureDispersed === element.name){
            element.checked= false;
            $scope.formData.dispersal.dispersalAtomized.structureDispersed ='';
        }else{
            element.checked= true;
            $scope.formData.dispersal.dispersalAtomized.structureDispersed = element.name;
        }
    };

    $scope.updateSelectionOrigin = function updateSelectionOrigin(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.origin === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.origin ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.origin = element.name;
        }
    };

    $scope.updateSelectionPresence = function updateSelectionPresence(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.presence === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.presence ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.presence = element.name;
        }
    };

    $scope.updateSelectionPersistence = function updateSelectionPersistence(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.persistence === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.persistence ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.persistence = element.name;
        }
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
        if($scope.invasivenessAtomizedType.harmful === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.harmful ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.harmful = element.name;
        }
    };

    $scope.updateSelectionAbundance = function updateSelectionAbundance(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.abundance === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.abundance ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.abundance = element.name;
        }
    };

    $scope.updateSelectionTrend = function updateSelectionTrend(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.trend === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.trend ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.trend = element.name;
        }
    };

    $scope.updateSelectionRateOfSpread = function updateSelectionRateOfSpread(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.rateOfSpread === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.rateOfSpread ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.rateOfSpread = element.name;
        }
    };

    $scope.updateSelectionRegulatoryListing = function updateSelectionRegulatoryListing(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.regulatoryListing === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.regulatoryListing ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.regulatoryListing = element.name;
        }
    };

    $scope.updateSelectionLocalityType = function updateSelectionLocalityType(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.localityType === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.localityType ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.localityType = element.name;
        }
    };

    $scope.updateSelectionLocationValue = function updateSelectionLocationValue(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.locationValue === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.locationValue ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.locationValue = element.name;
        }
    };

    $scope.updateSelectionPublicationDatePrecision = function updateSelectionPublicationDatePrecision(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.invasivenessAtomizedType.publicationDatePrecision === element.name){
            element.checked= false;
            $scope.invasivenessAtomizedType.publicationDatePrecision ='';
        }else{
            element.checked= true;
            $scope.invasivenessAtomizedType.publicationDatePrecision = element.name;
        }
    };

    $scope.updateSelectionDistributionScope = function updateSelectionDistributionScope(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.distributionClass.distributionScope.type === element.name){
            element.checked= false;
            $scope.distributionClass.distributionScope.type ='';
        }else{
            element.checked= true;
            $scope.distributionClass.distributionScope.type = element.name;
        }
    };

    $scope.updateSelectionRegion = function updateSelectionRegion(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.populationBiologyAtomized.region === element.name){
            element.checked= false;
            $scope.populationBiologyAtomized.region ='';
        }else{
            element.checked= true;
            $scope.populationBiologyAtomized.region = element.name;
        }
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
        if($scope.threatStatusClass.threatStatusAtomized.apendiceCITES === element.name){
            element.checked= false;
            $scope.threatStatusClass.threatStatusAtomized.apendiceCITES ='';
        }else{
            element.checked= true;
            $scope.threatStatusClass.threatStatusAtomized.apendiceCITES = element.name;
        }
    };

    $scope.updateSelectionProtectionLegal = function updateSelectionProtectionLegal(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.legislationAtomizedType.protectionLegalStatus === element.name){
            element.checked= false;
            $scope.legislationAtomizedType.protectionLegalStatus ='';
        }else{
            element.checked= true;
            $scope.legislationAtomizedType.protectionLegalStatus = element.name;
        }
    };

    $scope.updateSelectionProtectionLegalStatus = function updateSelectionProtectionLegalStatus(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.legislationAtomizedType.status === element.name){
            element.checked= false;
            $scope.legislationAtomizedType.status.origin ='';
        }else{
           element.checked= true;
           $scope.legislationAtomizedType.status = element.name;
        }
    };

    $scope.updateSelectionProtectionLegalType = function updateSelectionProtectionLegalType(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.legislationAtomizedType.type === element.name){
            element.checked= false;
            $scope.legislationAtomizedType.type ='';
        }else{
            element.checked= true;
            $scope.legislationAtomizedType.type = element.name;
        }
    };

    $scope.updateSelectionProtectionLegalNorm = function updateSelectionProtectionLegalNorm(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.legislationAtomizedType.norm === element.name){
            element.checked= false;
            $scope.legislationAtomizedType.norm ='';
        }else{
            element.checked= true;
            $scope.legislationAtomizedType.norm = element.name;
        }
    };

     $scope.updateSelectionPartUsedCategory = function updateSelectionPartUsedCategory(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.usesAtomizedType.partUsed === element.name){
            element.checked= false;
            $scope.usesAtomizedType.partUsed ='';
        }else{
            element.checked= true;
            $scope.usesAtomizedType.partUsed = element.name;
        }
    };

     $scope.updateSelectionUseTypeAtomized = function updateSelectionUseTypeAtomized(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.usesAtomizedType.useTypeAtomized === element.name){
            element.checked= false;
            $scope.usesAtomizedType.useTypeAtomized ='';
        }else{
            element.checked= true;
            $scope.usesAtomizedType.useTypeAtomized = element.name;
        }
    };

     $scope.updateSelectionManagementType = function updateSelectionManagementType(element, list) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });
        if($scope.managementAndConservationAtomizedType.type === element.name){
            element.checked= false;
            $scope.managementAndConservationAtomizedType.type ='';
        }else{
            element.checked= true;
            $scope.managementAndConservationAtomizedType.type = element.name;
        }
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

     $scope.updateSelectionLicence = function updateSelectionLicence(element, list, ManualLicense) {
        angular.forEach(list, function(item) {
            item.checked = false;
        });

        if($scope.ancillaryData.license === element.nombre || document.getElementById(ManualLicense).children[0] !== undefined){
            element.checked= false;
            $scope.ancillaryData.license ='';
            if(document.getElementById(ManualLicense).children[0] !== undefined){
               document.getElementById('ancillaryData.license').remove(); 
            }
        }else{
            element.checked= true;
            if(element.nombre === 'Otra' && document.getElementById(ManualLicense).children[0] === undefined){
                var input = document.createElement("input");
                input.type = "text";
                input.id = "ancillaryData.license";
                document.getElementById(ManualLicense).appendChild(input);
            }else{
                if(document.getElementById(ManualLicense).children[0] !== undefined){
                   document.getElementById('ancillaryData.license').remove(); 
                }
                $scope.ancillaryData.license = element.nombre;
            }
        }
    };
}]);