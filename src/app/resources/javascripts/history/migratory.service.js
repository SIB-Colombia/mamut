'use strict';

angular.module('app.services.migratory',[])
.service('migratoryService', function(){
	var migratoryAtomizedType;
	var migratory;

	migratoryAtomizedType = {
		causes: [],
		patterns: [],
		routes: [],
		season: '',
		ancillaryData: []
	};

	migratory = {
		migratoryAtomized: [],
		migratoryUnstructured: '',
		ancillaryData: []
	};

	migratory.add = function(list,migratoryAtomizedType){
		list.push(migratoryAtomizedType);
	};

	migratory.delete = function(list,migratoryAtomized){
		var index = list.indexOf(migratoryAtomized);
		list.splice(index,1);
	};

	return {
		migratoryAtomizedType : migratoryAtomizedType,
		migratory : migratory
	};
});