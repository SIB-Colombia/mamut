'use strict';

angular.module('app.services.lifeForm',[])
.factory('LifeFormFactory', function(){
	return function() {
		this.lifeForm = {
			lifeFormAtomized: [],
			lifeFormUnstructured: '',
			ancillaryData: []
		};

		this.delete = function(list,lifeFormAtomized){
			var index = list.indexOf(lifeFormAtomized);
			list.splice(index,1);
		};
	};
});