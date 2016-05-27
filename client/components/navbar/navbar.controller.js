'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Blog',
    'state': 'main'

  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}
//$scope.clickNav = function(navbar) {
  //$scope.clickedNav = navbar;
//};


angular.module('schoolsample2App')
  .controller('NavbarController', NavbarController);
