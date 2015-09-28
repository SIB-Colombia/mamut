'use strict';

angular.module('app.services.associatedParty',[])
.service('associatedPartyService', function(){

	var associatedParty;

	associatedParty = {
		firstName: '',
		lastName: '',
		position: '',
		organisation: '',
		address: '',
		city: '',
		state: '',
		country: '',
		postalCode: '',
		phone: '',
		email: '',
		homepage: '',
		personnelDirectory: '',
		personnelIdentifier: '',
		role: ''
	};
	
	return associatedParty;
});