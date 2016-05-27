'use strict';

angular.module('schoolsample2App')
  .factory('MainService', function($resource) {
    return $resource('/api/mains/:id',{
        id: '@id'
      },{
        update: {
          method: 'PUT'
          }

        });
      });
