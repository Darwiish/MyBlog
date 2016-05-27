'use strict';

angular.module('schoolsample2App')
  .controller('MainCtrl', function($scope, $state, socket, MainService, BlogService,AboutService) {
  $scope.reverse = false;
    $scope.newMain = {};


    $scope.createMain = function(mainForm) {
      if(mainForm.$valid){
      MainService.save($scope.newMain);
      $scope.newMain = {};
      }
    }



    BlogService.query(function(recentblogs) {
      $scope.recentblogs = recentblogs;
      socket.syncUpdates('blog', $scope.recentblogs);
    });

    AboutService.query(function(abouts) {
      $scope.abouts = abouts;
      socket.syncUpdates('about', $scope.abouts);
    });


    $scope.clickBlog = function(blog) {
      $scope.clickedBlog = blog;
    };

    $scope.undoBlog = function() {
      $scope.clickedBlog = undefined;
    }

  });
