'use strict';

angular.module('app.services',[])
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

	return {
		migratoryAtomizedType : migratoryAtomizedType,
		migratory : migratory
	};
});