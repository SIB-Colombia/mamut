'use strict';

angular.module('app.services.form',[])
.factory('FormFactory', ['$resource', function($resource) {
return $resource('http://192.168.205.12:3000/get-record/:id', {id:'@id'});
}]);