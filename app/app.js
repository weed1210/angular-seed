'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngCookies',
  'myApp.services',
  'myApp.login',
  'myApp.main',
  'myApp.user',
])
  .value('host', 'https://localhost:7234')
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/login' });
  }]);

app.run(["$location", "$http", "$rootScope",
  function ($location, $http, $rootScope) {
    var authToken = localStorage.getItem('authToken');
    console.log('Auth token: ' + authToken);
    if (authToken) {
      $http.defaults.headers.common["Authorization"] = authToken;
    }

    $rootScope.$on("$locationChangeStart", function (event, next, current) {
      if ($location.path() !== "/login" && !authToken) {
        $location.path("/login");
      }
    });
  }
]);
