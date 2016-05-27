'use strict';

angular.module('schoolsample2App')
  .controller('BlogCtrl', function($scope, $state, socket,$stateParams, BlogService,CategoryService) {
    $scope.reverse = false;
    $scope.newblog = {};


    BlogService.query(function(blogs) {
      $scope.blogs = blogs;
      socket.syncUpdates('blog', $scope.blogs);
    });

    BlogService.query(function(recentblogs) {
      $scope.recentblogs = recentblogs;
      socket.syncUpdates('blog', $scope.recentblogs);
    });

    CategoryService.query(function(categories) {
      $scope.categories = categories;
      socket.syncUpdates('category', $scope.categories);
    });


    $scope.createBlog = function(blog) {
      if(blog.$valid){
      BlogService.save($scope.newblog);
      $scope.newblog = {};
      }
    }

        $scope.isCatagory = function(blog){
          if(blog.category){
            return blog.category()._id === blog.category._id;
          }
        };


    $scope.clickCategory = function(category) {
      $scope.clickedCategory = category;
    };

    $scope.clickBlog = function(blog) {
      $scope.clickedBlog = blog;
    };

    $scope.clickBlog = function(recentblogs) {
      $scope.clickedBlog = recentblogs;
    };

    $scope.undoBlog = function() {
      $scope.clickedBlog = undefined;
    }

    // BlogService.update({
    //   id: $scope.blog._id
    // }, $scope.blog, function(blog) {
    //   $scope.blog = blog;
    //   var toast = $mdToast.simple()
    //     .textContent('blog Deleted')
    //     .action('OK')
    //     .highlightAction(false)
    //     .position('top');
    //   $mdToast.show(toast);
    //   $scope.editingBlog = undefined;
    // });


    $scope.deleteBlog = function(blog) {
      BlogService.delete({
        id: blog._id
      }, function(blog) {
        console.log("Blog deletred");
      });
    }

   $scope.searchtext="";

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('blog');
    });
  });
