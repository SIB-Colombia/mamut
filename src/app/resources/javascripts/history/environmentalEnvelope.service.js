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
	
	return environmentalEnvelope;
});