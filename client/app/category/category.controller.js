'use strict';

angular.module('schoolsample2App')
  .controller('CategoryCtrl', function($scope, $state,$stateParams, socket, CategoryService) {
    $scope.reverse = false;

    CategoryService.get({id:$stateParams.id}, function(category){
      //  $scope.category = category;
      console.log(category);
    })

  });
