'use strict';

angular.module('schoolsample2App')
  .factory('CategoryService', function($resource) {
    return $resource('/api/categorys/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
      }
    });
  });
