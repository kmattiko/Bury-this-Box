/* global angular */
(function(window) {
  'use strict';

angular.module('burybox', ['ngRoute', 'restangular'])
  .config(function($routeProvider) {
    $routeProvider.when('/landing', {
      templateUrl: 'views/questions.html'
    });
    $routeProvder.when('/makebox', {
      templateUrl: 'views/makebox.html'
    });
    $routeProvider.when('/viewbox', {
      templateUrl: 'views/viewbox'
    });
    $routeProvider.otherwise('/404');
  });

})(window);
