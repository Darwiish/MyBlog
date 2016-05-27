'use strict';

angular.module('schoolsample2App')
  .factory('BlogService', function($resource) {
    return $resource('/api/blogs/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
      }
    });
  });
