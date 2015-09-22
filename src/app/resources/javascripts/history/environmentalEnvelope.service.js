'use strict';

angular.module('app.services',[])
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