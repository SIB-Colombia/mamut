'use strict';

angular.module('app.services.migratory',[])
.factory('MigratoryFactory', function(){
	return function() {
		this.migratoryAtomizedType = {
			causes: '',
			patterns: '',
			routes: [],
			season: '',
			ancillaryData: []
		};

		this.migratory = {
			migratoryAtomized: [],
			migratoryUnstructured: '',
			ancillaryData: []
		};

		this.add = function(list,migratoryAtomizedType){
			list.push(migratoryAtomizedType);
		};

		this.delete = function(list,migratoryAtomized){
			var index = list.indexOf(migratoryAtomized);
			list.splice(index,1);
		};
	};
});