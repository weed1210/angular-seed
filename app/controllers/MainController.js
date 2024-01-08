'use strict';

angular.module('myApp.main', ['ngRoute'])
   .controller('MainController', function ($scope, $routeParams, $location) {

      $scope.showSidebar = function () {
         var currentPath = $location.path();
         if (currentPath == '/login') {
            return false;
         } else {
            return true;
         }
      };
   })