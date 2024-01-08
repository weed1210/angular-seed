'use strict';

angular.module('myApp.user', ['ngRoute', 'myApp.services'])

   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/users', {
         templateUrl: 'partials/users.html',
         controller: 'UserController',
      });
   }])

   .controller('UserController', ['userService', function (userService) {
      this.users = userService.getUsers();
   }]);