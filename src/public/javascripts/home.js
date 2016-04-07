'use strict';

angular.module('homeApp',['ng', 'ngCookies', 'ngSanitize', 'pascalprecht.translate', 'ui.directives','ui.filters', 'ui.router','ui.bootstrap','ngAnimate','ngFileUpload', 'angularModalService', 'ngTable'])

.controller('homeController', ['$scope', '$http', 'ngTableParams', function($scope, $http, ngTableParams) {
  console.log($scope.data);
  $scope.tableParams = new ngTableParams({
      page: 1,
      count: 10,
  }, {
      counts:[], // hide page counts control
      getData: function ($defer, params) {
        var page = params.page();
        var size = params.count();
        var testUrl = 'http://192.168.205.191:8080/lista';
        var search = {
          q: 'angular',
          page: page,
          per_page: size
        };
        $http.get(testUrl, { headers: { 'Content-Type': 'application/json'} })
         .then(function(res) {
            //params.total(res.data.total);
            //$defer.resolve(res.data.docs);
            $defer.resolve(res.data);
          }, function(reason) {
            console.log(reason);
            $defer.reject();
          }
        );
      }
   });

  $scope.search = function(){
    var searchText = $scope.searchT;
    $scope.tableParams = new ngTableParams({
          page: 1,
          count: 10,
      }, {
          counts:[], // hide page counts control
          getData: function ($defer, params) {
            var page = params.page();
            var size = params.count();
            var testUrl = 'http://apimamut.elasticbeanstalk.com/search/tax_author/'+searchText;
            var search = {
              q: 'angular',
              page: page,
              per_page: size
            };
            $http.get(testUrl, { params: search, headers: { 'Content-Type': 'application/json'} })
             .then(function(res) {
                params.total(res.data.total);
                $defer.resolve(res.data);
              }, function(reason) {
                console.log(reason);
                $defer.reject();
              }
            );
          }
       });
  };

  $(document).ready(function(){
    $('.filterable .btn-filter').click(function(){
        var $panel = $(this).parents('.filterable'),
        $filters = $panel.find('.filters input'),
        $tbody = $panel.find('.table tbody');
        if ($filters.prop('disabled') === true) {
            $filters.prop('disabled', false);
            $filters.first().focus();
        } else {
            $filters.val('').prop('disabled', true);
            $tbody.find('.no-result').remove();
            $tbody.find('tr').show();
        }
      });

    $('.filterable .filters input').keyup(function(e){
        /* Ignore tab key */
        var code = e.keyCode || e.which;
        if (code === '9'){
          return;  
        } 
        /* Useful DOM data and selectors */
        var $input = $(this),
        inputContent = $input.val().toLowerCase(),
        $panel = $input.parents('.filterable'),
        column = $panel.find('.filters th').index($input.parents('th')),
        $table = $panel.find('.table'),
        $rows = $table.find('tbody tr');
        /* Dirtiest filter function ever ;) */
        var $filteredRows = $rows.filter(function(){
            var value = $(this).find('td').eq(column).text().toLowerCase();
            return value.indexOf(inputContent) === -1;
        });
        /* Clean previous no-result if exist */
        $table.find('tbody .no-result').remove();
        /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
        $rows.show();
        $filteredRows.hide();
        /* Prepend no-result row if all rows are filtered */
        if ($filteredRows.length === $rows.length) {
            $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="'+ $table.find('.filters th').length +'">No se encontraron resultados</td></tr>'));
        }
     });
  });
}]);