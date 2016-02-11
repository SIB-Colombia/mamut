'use strict';

angular.module('app.controllers.upload',[])
.controller('UploadFile', function ($scope) {
    $scope.replaceSC = function(str){
    
    	var strI = ((((str).replace(/\\'{\\i/g,"í")).replace(/\\'{I/g,"Í")).replace(/\\'\\i/g,"í")).replace(/\\'\\I/g,"Í");
    	var strO = ((((strI).replace(/\\'{o/g,"ó")).replace(/\\'{O/g,"Ó")).replace(/\\'o/g,"ó")).replace(/\\'O/g,"Ó");
    	var strU = ((((strO).replace(/\\'{u/g,"ú")).replace(/\\'{U/g,"Ú")).replace(/\\'u/g,"ú")).replace(/\\'U/g,"Ú");
    	var strA = ((((strU).replace(/\\'{a/g,"á")).replace(/\\'{A/g,"Á")).replace(/\\'a/g,"á")).replace(/\\'A/g,"Á");
    	var strE = ((((strA).replace(/\\'{e/g,"é")).replace(/\\'{E/g,"É")).replace(/\\'e/g,"é")).replace(/\\'E/g,"É");
    	var strN = ((((strE).replace(/\\~{n/g,"ñ")).replace(/\\~{N/g,"Ñ")).replace(/\\~n/g,"ñ")).replace(/\\~N/g,"Ñ");
    	var strClean = (strN).replace(/{/g,"");
    	var strFinal = (strClean).replace(/}/g,"");
    	return strFinal;
    };
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
        
		var sample = bibtexParse.toJSON($scope.content);

		angular.forEach(sample, function(reference) {
			var skeleton_reference = {
				id: '',
				profile_id: '',
				group_id: '',
				created: '',
				last_modified: '',
				identifiers:[],
				abstract: '',
				tags: '',
				type: '',
				source: '',
				title: '',
				authors:[],
				year: '',
				volume: '',
				issue: '',
				pages: '',
				series: '',
				chapter: '',
				websites: '',
				accessed: '',
				publisher: '',
				address: '',
				edition: '',
				institution: '',
				editors:[],
				keywords:[],
				doi: '',
				isbn: '',
				issn: '',
				link: ''
			};

			skeleton_reference.doi = reference.entryTags.doi;
			skeleton_reference.issn = reference.entryTags.issn;
			skeleton_reference.isbn = reference.entryTags.isbn;
			skeleton_reference.pages = reference.entryTags.pages;
			skeleton_reference.year = reference.entryTags.year;
			skeleton_reference.edition = reference.entryTags.edition;
			skeleton_reference.volume = reference.entryTags.volume;
			skeleton_reference.pages = reference.entryTags.pages;
			skeleton_reference.link = reference.entryTags.url;


			if(reference.entryTags.title !== undefined){
				skeleton_reference.title =  $scope.replaceSC(reference.entryTags.title);
			} else {
				skeleton_reference.title = '';
			}

			if(reference.entryTags.keywords !== undefined){
				skeleton_reference.keywords = $scope.replaceSC(reference.entryTags.keywords);
			} else {
				skeleton_reference.keywords = '';
			}

			if(reference.entryTags['mendeley-tags'] !== undefined){
				skeleton_reference.tags = $scope.replaceSC(reference.entryTags['mendeley-tags']);
			} else {
				skeleton_reference.tags = '';
			}

			if(reference.entryTags.publisher !== undefined){
				skeleton_reference.publisher =  $scope.replaceSC(reference.entryTags.publisher);
			} else {
				skeleton_reference.publisher = '';
			}

			if(reference.entryTags.issue !== undefined){
				skeleton_reference.issue =  $scope.replaceSC(reference.entryTags.annote);
			} else {
				skeleton_reference.issue = '';
			}
			if(reference.entryTags.abstract !== undefined){
				skeleton_reference.abstract =  $scope.replaceSC(reference.entryTags.abstract);
			} else {
				skeleton_reference.abstract = '';
			}
			
			
			if(reference.entryTags.author !== undefined ){
				var author = $scope.replaceSC(reference.entryTags.author);
				if((author).indexOf('and') > -1){
					skeleton_reference.authors = (author).split(" and ");
				}else{
					skeleton_reference.authors = [].concat(author);
				}
			}

			if(reference.entryTags.editor !== undefined ){
				var editor = $scope.replaceSC(reference.entryTags.editor);
				if((editor).indexOf('and') > -1){
					skeleton_reference.editors = (editor).split(" and ");
				}else{
					skeleton_reference.editors = [].concat(editor);
				}
			}

			switch(reference.entryType){
				case 'book':
					skeleton_reference.type=reference.entryType;
					break;
				case 'misc':
					skeleton_reference.type='miscellany';
					if(reference.entryTags.booktitle !== undefined){
						skeleton_reference.source =  $scope.replaceSC(reference.entryTags.booktitle);
					} else {
						skeleton_reference.source = '';
					}
					break;
				case 'incollection':
					skeleton_reference.type='book_section';
					if(reference.entryTags.booktitle !== undefined){
						skeleton_reference.source =  $scope.replaceSC(reference.entryTags.booktitle);
					} else {
						skeleton_reference.source = '';
					}
					break;
				case 'article':
					skeleton_reference.type=reference.entryType;
					if(reference.entryTags.journal !== undefined){
						skeleton_reference.source =  $scope.replaceSC(reference.entryTags.journal);
					} else {
						skeleton_reference.source = '';
					} 
					break;
				case 'phdthesis':
					skeleton_reference.type='thesis';
					if(reference.entryTags.school !== undefined){
						skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.school);
					} else {
						skeleton_reference.institution = '';
					}
					break;
				case 'techreport':
					skeleton_reference.type='report';
					if(reference.entryTags.institution !== undefined){
						skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.institution);
					} else {
						skeleton_reference.institution = '';
					}
					break;
				case 'inproceedings':
					skeleton_reference.type='conference_proceedings';
					if(reference.entryTags.booktitle !== undefined){
						skeleton_reference.source =  $scope.replaceSC(reference.entryTags.booktitle);
					} else {
						skeleton_reference.source = '';
					} 
					if(reference.entryTags.organization !== undefined){
						skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.organization);
					} else {
						skeleton_reference.institution = '';
					}
					break;
				case 'unpublished':
					skeleton_reference.type='working_paper';
					if(reference.entryTags.school !== undefined){
						skeleton_reference.institution =  $scope.replaceSC(reference.entryTags.school);
					} else {
						skeleton_reference.institution = '';
					}
					break;
				default:
					break;
			}
			$scope.formData.references.push(skeleton_reference);
		});
    };
  })

.directive('onReadFile', function ($parse) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);
            
			element.on('change', function(onChangeEvent) {
				var reader = new FileReader();
                
				reader.onload = function(onLoadEvent) {
					scope.$apply(function() {
						fn(scope, {$fileContent:onLoadEvent.target.result});
					});
				};

				reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
			});
		}
	};
});