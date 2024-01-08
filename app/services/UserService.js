'use strict';

angular.module('myApp.services', [])
   .factory('userService', function ($http, host) {
      var factory = {};

      factory.login = function (data) {
         var req = {
            method: 'POST',
            url: `${host}/api/User/Login`,
            data: {
               username: data.username,
               password: data.password
            }
         }
         return $http(req);
      }

      factory.getUsers = function () {
         var req = {
            method: 'GET',
            url: `${host}/api/User`
         }
         $http(req)
            .then(response => {
               console.log(response);
            })
      }

      factory.SetCredentials = function (jwtToken) {
         var authToken = "Bearer " + jwtToken;
         $http.defaults.headers.common["Authorization"] = "Bearer " + jwtToken;
        localStorage.setItem("authToken", authToken);
      };

      // factory.ClearCredentials = function () {
      //    $rootScope.globals = {};
      //    $cookies.remove("globals");
      //    $http.defaults.headers.common.Authorization = "Bearer ";
      // };

      return factory;
   });