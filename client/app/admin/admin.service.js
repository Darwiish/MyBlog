'use strict';

angular.module('schoolsample2App')
  .factory('AdminService', function($resource) {
    return $resource('/api/admin/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
      }
    });
  });
