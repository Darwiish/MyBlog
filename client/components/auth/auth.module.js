'use strict';

angular.module('schoolsample2App.auth', [
  'schoolsample2App.constants',
  'schoolsample2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
