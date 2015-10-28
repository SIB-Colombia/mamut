'use strict';

angular.module('app.services.associatedParty',[])
.factory('AssociatedPartyFactory', function(){
	return function() {
		this.associatedParty = {
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

		this.add = function(list,associatedParty){
			list.push(associatedParty);
		};

		this.delete = function(list,associatedParty){
			var index = list.indexOf(associatedParty);
			list.splice(index,1);
		};
	};
});