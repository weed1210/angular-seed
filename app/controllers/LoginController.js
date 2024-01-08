'use strict';

angular.module('myApp.login', ['ngRoute', 'myApp.services'])

   .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/login', {
         templateUrl: 'partials/login.html',
         controller: 'LoginController',
      });
   }])

   .controller('LoginController', function (userService, $location, $rootScope) {
      this.user = {
         username: "",
         password: ""
      }

      this.submit = function () {
         console.log(this.user);
         userService.login(this.user)
            .then(response => {
               userService.SetCredentials(response.data.access_token)
               $location.path('/users')
               console.log($location.path());
            });

      }
   });