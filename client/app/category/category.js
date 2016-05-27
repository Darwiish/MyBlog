'use strict';

angular.module('schoolsample2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category/:id',
        templateUrl: 'app/category/category.html',
        controller: 'CategoryCtrl'
      });
  });
