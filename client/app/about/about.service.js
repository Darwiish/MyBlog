'use strict';

angular.module('schoolsample2App')
  .factory('AboutService', function($resource) {
    return $resource('/api/abouts/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
      }
    });
  });
