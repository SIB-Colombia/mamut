'use strict';

angular.module('app.controllers.ancillary',[])
.controller('AncillaryDataCtrl', ['$scope', '$http', 'AncillaryDataFactory', 'ReferenceFactory', function($scope, $http, AncillaryDataFactory,ReferenceFactory){
	//Ancillary
	var ancillaryDataFactoryLocal = new AncillaryDataFactory();
	$scope.ancillaryData = ancillaryDataFactoryLocal.ancillaryData;

	//reference
	var referenceFactoryLocal = new ReferenceFactory();
	$scope.reference = referenceFactoryLocal.reference;

	var origAD = angular.copy($scope.ancillaryData);
	var origR = angular.copy($scope.reference);

	//list of lincese
	$scope.lincese_list = angular.copy($scope.lenguajes.licences);

	//list of proveedores de contenido
	$scope.prov_contenido = angular.copy($scope.lenguajes.provContenido);

	//imageUrl
	$scope.imageurl = '';

	// This will be binded using the ps-open attribute
	$scope.checked = false; 

	$scope.slide = function(){
        $scope.checked = !$scope.checked;
    };
    
	$scope.addAncillaries = function(){
		if($scope.formData.ancillaryData.length > 0){
			console.log('enviar cambios');
		}
	};


	$scope.addAncillaryData = function(ancillaryDataList, ancillary){
		if (JSON.stringify(ancillary) !== JSON.stringify(origAD)){
			var license = document.getElementById("ancillaryData.license");
			if(license !== undefined && license!==null){
				ancillary.license = license.value;
				license.parentNode.removeChild(license);
			}
			ancillaryDataFactoryLocal.addTo(ancillaryDataList, ancillary);

			//Add all local reference to general reference vector
			angular.forEach(ancillary.reference, function(reference) {
				referenceFactoryLocal.addTo($scope.formData.references,reference);
			});

			//Reset var
			$scope.ancillaryData = origAD;
			$scope.reference = origR;
			origAD = angular.copy($scope.ancillaryData);
			origR = angular.copy($scope.reference);
			$scope.resetLicenseList(license,$scope.lincese_list);

			var imageDOM = document.getElementById("imageD");
			if(imageDOM !== undefined && imageDOM!==null){
				imageDOM.parentNode.removeChild(imageDOM);
			}
		}
	};

	$scope.removeAncillaryData = function(ancillaryDataList, ancillary){
		ancillaryDataFactoryLocal.deleteFrom(ancillaryDataList,ancillary);
	};

	$scope.editAncillaryData = function(ancillaryDataList, ancillary){
		$scope.ancillaryData = angular.copy(ancillary);
		var checked_almost_one = false;
		angular.forEach($scope.lincese_list, function(item) {
            if(ancillary.license!==null){
            	if(ancillary.license === item.nombre){
  					item.checked = true;
  					checked_almost_one = true;
				}else{
					item.checked = false;
					if(item.nombre==='Otra' && !checked_almost_one){
					 	if(document.getElementById('ancillaryData.license') === null){
							item.checked = true;
							var input = document.createElement("input");
				            input.type = "text";
				            input.id = "ancillaryData.license";
				            input.value = ancillary.license;
				            input.disabled = true;
				            document.getElementById("ManualLicense").appendChild(input);
						}else{
							var license = document.getElementById("ancillaryData.license");
							license.value = ancillary.license;
						}
					}
				}
            }
        });
	};

	$scope.cancelAncillaryData = function() {
		$scope.ancillaryData = angular.copy(origAD);
		var license = document.getElementById("ancillaryData.license");
		$scope.resetLicenseList(license,$scope.lincese_list);
	};

	$scope.addReference = function(referenceList,reference){
		if(reference.type !== ''){
			referenceFactoryLocal.addTo(referenceList,reference);
			//Reset the scope variable
			$scope.reference = origR;
			origR = angular.copy($scope.reference);
			$scope.checked = !$scope.checked;
		}
	};

	$scope.removeReference = function(referenceList,reference){
		referenceFactoryLocal.deleteFrom(referenceList,reference);
	};

	$scope.editReference = function(referenceList,reference) {
		$scope.reference = angular.copy(reference);
		$scope.checked = !$scope.checked;
	};

	$scope.cancelReference = function() {
		$scope.reference = angular.copy(origR);
		$scope.checked = !$scope.checked;
	};

	$scope.getInfoLicence = function(url, ancillary) {
		
		ancillary.rightsHolder = '';
		ancillary.bibliographicCitation = '';
		ancillary.source = '';
		ancillary.license = '';
		$scope.imageurl = '';
		angular.forEach($scope.lincese_list, function(item) {
			item.checked = false;
   		});
		if (url !== undefined && url.length > 0) {
			var url_parts = url.split('/');
			if (url.indexOf('www.flickr.com') > -1) {
				var photo_id = url_parts[5];
				$http.get('https://api.flickr.com/services/rest/?&method=flickr.photos.getInfo&photo_id=' + photo_id + '&api_key=d70bb0faa317f97f15ecf636ee77c33e&format=json&per_page=500')
					.then(function(res) {
						var data = res.data.replace('jsonFlickrApi(', '').replace('})', '}').replace(/\n/g, '');
						var objetoJSONFinal = JSON.parse(data);
						ancillary.rightsHolder = objetoJSONFinal.photo.owner.username;
						ancillary.bibliographicCitation = objetoJSONFinal.photo.description._content;
						
						var license;
						switch (objetoJSONFinal.photo.license) {
							case "0":
								license = "All Rights Reserved";
								break;
							case "1":
								license = "http://creativecommons.org/licenses/by-nc-sa/2.0/";
								break;
							case "2":
								license = "http://creativecommons.org/licenses/by-nc/2.0/";
								break;
							case "3":
								license = "http://creativecommons.org/licenses/by-nc-nd/2.0/";
								break;
							case "4":
								license = "http://creativecommons.org/licenses/by/2.0/";
								break;
							case "5":
								license = "http://creativecommons.org/licenses/by-sa/2.0/";
								break;
							case "6":
								license = "http://creativecommons.org/licenses/by-nd/2.0/";
								break;
							case "7":
								license = "http://flickr.com/commons/usage/";
								break;
							case "8":
								license = "http://www.usa.gov/copyright.shtml";
								break;
						}
						$http.get('https://api.flickr.com/services/rest/?&method=flickr.photos.getSizes&photo_id=' + photo_id + '&api_key=d70bb0faa317f97f15ecf636ee77c33e&format=json&per_page=500')
							.then(function(res) {
								var data_1 = res.data.replace('jsonFlickrApi(', '').replace(')', '').replace(/\n/g, '');
								var objetoJSONFinal_1 = JSON.parse(data_1);
								if (typeof objetoJSONFinal_1.sizes.size[5].source !== 'undefined') {
									ancillary.source = (objetoJSONFinal_1.sizes.size[5].source).replace(/'/g, "\''");
									$scope.imageurl = (objetoJSONFinal_1.sizes.size[5].source).replace(/'/g, "\''");
								}
							});
						
						var checked_almost_one = false;
						angular.forEach($scope.lincese_list, function(item) {
				            if(license!==null){
				            	if(license === item.nombre){
				  					item.checked = true;
				  					checked_almost_one = true;
								}else{
									if(item.nombre==='Otra'&& !checked_almost_one){
									 	if(document.getElementById('ancillaryData.license') === null){
											item.checked = true;
											var input = document.createElement("input");
								            input.type = "text";
								            input.id = "ancillaryData.license";
								            input.value = license;
								            input.disabled = true;
								            document.getElementById("ManualLicense").appendChild(input);
										}else{
											var license_field = document.getElementById("ancillaryData.license");
											license_field.value = license;
										}
									}
								}
				            }
				        });
					});
			}
			if (url.indexOf('commons.wikimedia.org') > -1) {
				
				var imagen = (url_parts[url_parts.length - 1]).split(':')[1];
				$.ajax({
					url: 'https://commons.wikimedia.org/w/api.php?action=query&titles=Image:' + imagen + '&prop=imageinfo&iiprop=extmetadata&format=json',
					dataType: 'JSONP',
					jsonpCallback: 'callback',
					type: 'GET',
					headers: {
						'Api-User-Agent': 'Example/1.0'
					},
					success: function(data) {
						var info = data.query.pages[Object.keys(data.query.pages)[0]].imageinfo[0].extmetadata;
						ancillary.source = url;
						ancillary.rightsHolder = info.Artist.value;
						ancillary.bibliographicCitation = info.ImageDescription.value;

						var license ='';
						if(info.LicenseUrl===undefined){
							license = info.LicenseShortName.value;
						}else{
							license = info.LicenseUrl.value;
						}

						var checked_almost_one = false;
						angular.forEach($scope.lincese_list, function(item) {
				            if(license!==null){
				            	if(license === item.nombre){
				  					item.checked = true;
				  					checked_almost_one = true;
								}else{
									if(item.nombre==='Otra' && !checked_almost_one){
									 	if(document.getElementById('ancillaryData.license') === null){
											item.checked = true;
											var input = document.createElement("input");
								            input.type = "text";
								            input.id = "ancillaryData.license";
								            input.value = license;
								            input.disabled = true;
								            document.getElementById("ManualLicense").appendChild(input);
										}else{
											var license_field = document.getElementById("ancillaryData.license");
											license_field.value = license;
										}
									}
								}
				            }
				        });
				        $.ajax({
							url: 'https://commons.wikimedia.org/w/api.php?action=query&titles=Image:' + imagen + '&prop=imageinfo&iiprop=url&format=json',
							dataType: 'JSONP',
							jsonpCallback: 'callback',
							type: 'GET',
							headers: {
								'Api-User-Agent': 'Example/1.0'
							},
							success: function(data1) {
								var infoUrl = data1.query.pages[Object.keys(data1.query.pages)[0]].imageinfo[0].url;
								//var partsUrl = (infoUrl).split('commons');
								//var urlFine = partsUrl[0]+'commons/thumb' + partsUrl[1];
								$scope.imageurl = infoUrl;
							}
						});
					}
				});
				
			}
			if (url.indexOf('www.youtube.com') > -1) {
				var video_id = (url_parts[url_parts.length - 1]).split('=')[1];
				$.ajax({
					url: 'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id='+video_id+'&key=AIzaSyBNk4m-R-PyUt5hmtpBc3CaQ-fophHIjkQ',
					dataType: 'JSONP',
					jsonpCallback: 'callback',
					type: 'GET',
					headers: {
						'Api-User-Agent': 'Example/1.0'
					},
					success: function(data) {
						var license = data.items[0].contentDetails.licensedContent;
						var checked_almost_one = false;
						angular.forEach($scope.lincese_list, function(item) {
				            if(license!==null){
				            	if(license === item.nombre){
				  					item.checked = true;
				  					checked_almost_one = true;
								}else{
									if(item.nombre==='Otra'&& !checked_almost_one){
									 	if(document.getElementById('ancillaryData.license') === null){
											item.checked = true;
											var input = document.createElement("input");
								            input.type = "text";
								            input.id = "ancillaryData.license";
								            input.value = license;
								            input.disabled = true;
								            document.getElementById("ManualLicense").appendChild(input);
										}else{
											var license_field = document.getElementById("ancillaryData.license");
											license_field.value = license;
										}
									}
								}
				            }
				        });
						
						ancillary.rightsHolder = data.items[0].snippet.channelTitle;
						ancillary.bibliographicCitation = data.items[0].snippet.description;
					}
				});
			}

						
			if (url.indexOf('www.xeno-canto.org/') > -1) {
				var sound_id = (url_parts[url_parts.length - 1]);
				$.ajax({
					url: 'http://www.xeno-canto.org/api/2/recordings?query=nr:'+ sound_id,
					dataType: 'JSONP',
					jsonpCallback: 'callback',
					type: 'GET',
					headers: {
						'Api-User-Agent': 'Example/1.0'
					},
					success: function(data) {
						var data_1 = data.replace(/\n/g, '');
						var objetoJSONFinal_1 = JSON.parse(data_1);
						console.log(objetoJSONFinal_1);
					}
				});
			}
		}
	};
}]);