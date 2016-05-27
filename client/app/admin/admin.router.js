'use strict';

angular.module('schoolsample2App.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        authenticate: 'admin'
      });
  });
