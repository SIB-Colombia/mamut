'use strict';

angular.module('app.services.environmentalEnvelope',[])
.service('environmentalEnvelopeService', function(){
	var environmentalEnvelope;

	environmentalEnvelope = {
		environmentalEnvelopeAtomized: [],
		ancillaryDataA: [],
		environmentalEnvelopeUnstructured: '',
		ancillaryData: []
	};

	environmentalEnvelope.delete = function(list,environmentalEnvelopeAtomized){
		var index = list.indexOf(environmentalEnvelopeAtomized);
		list.splice(index,1);
	};
	
	return environmentalEnvelope;
});