'use strict';

angular.module('homeApp',['ng', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ui.directives','ui.filters', 'ui.router','ui.bootstrap','ngAnimate','ngFileUpload', 'angularModalService', 'ngTable'])

.controller('homeController', ['$scope', '$http', 'ngTableParams', function($scope, $http, ngTableParams) {
	$scope.tableParams = new ngTableParams({
      page: 1,
      count: 10,
  }, {
      getData: function ($defer, params) {
        var page = params.page();
        var size = params.count();
        var testUrl = 'http://192.168.205.20:3000/get-list';
        var search = {
          q: 'angular',
          page: page,
          per_page: size
        }
        $http.get(testUrl, { params: search, headers: { 'Content-Type': 'application/json'} })
         .then(function(res) {
            params.total(res.data.total);
            $defer.resolve(res.data.docs);
          }, function(reason) {
            console.log(reason);
            $defer.reject();
          }
        );
      }
   });
}]);