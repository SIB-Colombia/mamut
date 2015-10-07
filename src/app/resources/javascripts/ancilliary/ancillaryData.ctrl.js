'use strict';

angular.module('app.controllers.ancillary',[])
.controller('AncillaryDataCtrl', ['$scope', '$http', 'ancillaryDataService', function($scope, $http, ancillaryDataService){
	
	$scope.ancillaryData = ancillaryDataService;
	$scope.formData.ancillaryData = [];
	var origAD = angular.copy($scope.ancillaryData);
	//$scope.reference = referenceService.reference;

	$scope.addAncillaryData = function addAncillaryData(ancillaryDataList, ancillary){
		if (ancillary.source !== '') {
			ancillaryDataService.addTo(ancillaryDataList, ancillary);
			$scope.ancillaryData = origAD;
			origAD = angular.copy($scope.ancillaryData);
			var image = document.getElementById("image");
			image.parentNode.removeChild(image);
		}
	};

	$scope.removeAncillaryData = function removeAncillaryData(ancillaryDataList, ancillary){
		ancillaryDataService.deleteFrom(ancillaryDataList,ancillary)
	};

	$scope.getInfoLicence = function(url, ancillary) {
		if (url !== undefined) {
			var url_parts = url.split('/');
			if (url.indexOf('www.flickr.com') > -1) {
				var photo_id = url_parts[5];
				$http.get('https://api.flickr.com/services/rest/?&method=flickr.photos.getInfo&photo_id=' + photo_id + '&api_key=d70bb0faa317f97f15ecf636ee77c33e&format=json&per_page=500')
					.then(function(res) {
						var data = res.data.replace('jsonFlickrApi(', '').replace(')', '').replace(/\n/g, '');
						var objetoJSONFinal = JSON.parse(data);
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
									$scope.ancillaryData.source = (objetoJSONFinal_1.sizes.size[5].source).replace(/'/g, "\''");
									$scope.imageurl = (objetoJSONFinal_1.sizes.size[5].source).replace(/'/g, "\''");
								}
							});

						$scope.ancillaryData.license = license;
						$scope.ancillaryData.rightsHolder = objetoJSONFinal.photo.owner.username;
						$scope.ancillaryData.bibliographicCitation = objetoJSONFinal.photo.description._content;
					});
			}
			if (url.indexOf('commons.wikimedia.org') > -1) {
				var imagen = (url_parts[url_parts.length - 1]).split(':')[1];
				console.log(imagen);
				$.ajax({
					url: 'https://commons.wikimedia.org/w/api.php?action=query&titles=Image:' + imagen + '&prop=imageinfo&iiprop=extmetadata&format=json',
					dataType: 'JSONP',
					jsonpCallback: 'callback',
					type: 'GET',
					headers: {
						'Api-User-Agent': 'Example/1.0'
					},
					success: function(data) {
						console.log(data);
					}
				});
			}
		}
	};
}]);