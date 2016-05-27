'use strict';

angular.module('schoolsample2App')
  .controller('AboutCtrl', function ($scope,AboutService) {
    $scope.message = 'Hello';


    AboutService.query(function(abouts) {
      $scope.abouts = abouts;
      socket.syncUpdates('about', $scope.abouts);


    });
  });
