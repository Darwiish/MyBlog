'use strict';

angular.module('schoolsample2App')
  .controller('AdminCtrl', function($scope, $state, socket,$mdDialog, $mdToast, AboutService, MainService,BlogService) {
    $scope.reverse = false;
  //  $scope.newadmin = {};

    class AdminCtrl {
      constructor(User) {
        // Use the User $resource to fetch all users
        this.users = User.query();
      }

      delete(user) {
        user.$remove();
        this.users.splice(this.users.indexOf(user), 1);
      }
    }

    AboutService.query(function(abouts) {
      $scope.abouts = abouts;
      socket.syncUpdates('about', $scope.abouts);
    });

    MainService.query(function(mains) {
      $scope.mains = mains;
      socket.syncUpdates('main', $scope.mains);
    });

    BlogService.query(function(blogs) {
      $scope.blogs = blogs;
      socket.syncUpdates('blog', $scope.blogs);
    });



    $scope.updateAbout = function(about) {
    $scope.updateAbout = about;
  };

  $scope.updateAbout = function(about) {
     AboutService.update({
       id: $scope.about._id
    }, $scope.about, function(about) {
       $scope.about = about;
     });
   };


  $scope.deleteBlog = function(blog) {
    BlogService.delete({
      id: blog._id},function(){
        console.log("Delete");

      });
   };

  $scope.deleteMain = function(main, event) {
        var confirm = $mdDialog.confirm()
          .title('Delete main')
          .textContent('Are you sure you want to delete')
          .ariaLabel('Delete')
          .targetEvent(event)
          .openFrom('#right')
          .ok('Please do it!')
          .cancel('No I changed my mind');
        $mdDialog.show(confirm).then(function() {
          _.remove($scope.deleteMain, function(main) {
            id: main._id === $scope.editingMain._id;
          });
       });
     };

  //  $scope.deleteMain = function(main) {
  //     MainService.delete({
    //     id: main._id},function(){
    //       console.log("Delete");

    //     });
    //   };


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('admin');
    });
  });
