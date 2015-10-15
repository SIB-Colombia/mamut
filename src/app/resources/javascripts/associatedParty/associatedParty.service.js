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

	associatedParty.add = function(list,associatedParty){
		list.push(associatedParty);
	};

	associatedParty.delete = function(list,associatedParty){
		var index = list.indexOf(associatedParty);
		list.splice(index,1);
	};
	
	return associatedParty;
});