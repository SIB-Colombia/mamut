'use strict';

formApp.factory('referenceFactory', function(){
	var Reference = function (){
		this.id= '';
		this.profile_id='';
		this.group_id='';
		this.created='';
		this.last_modified='';
		this.identifiers=[];
		this.abstract='';
		this.tags='';
		this.type= '';
		this.source= '';
		this.title='';
		this.authors=[];
		this.year='';
		this.volume='';
		this.issue='';
		this.pages='';
		this.series='';
		this.chapter='';
		this.websites='';
		this.accessed='';
		this.publisher='';
		this.city='';
		this.edition='';
		this.institution='';
		this.editors=[];
		this.keywors=[];
		this.doi='';
		this.isbn='';
		this.issn='';
		this.link='';
	};
	
	Reference.prototype = {
		addReference: function addReference(ReferenceList, reference){
			if (reference.type !== '') {
				ReferenceList.push(reference);
				reference = '';
			}
		},
		removeReference: function removeReference(ReferenceList, reference){
			var index = ReferenceList.indexOf(reference);
			ReferenceList.splice(index);
		}
	};
 	return Reference;
});