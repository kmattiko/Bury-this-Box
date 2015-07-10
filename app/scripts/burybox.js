/* global angular */
(function(window) {
  'use strict';

angular.module('burybox', ['ngRoute', 'restangular'])
  .config(function($routeProvider) {
    $routeProvider.when('/landing', {
      templateUrl: 'app/views/landing.html'
    });
    $routeProvider.when('/makebox', {
      templateUrl: 'app/views/makebox.html'
    });
    $routeProvider.when('/viewbox', {
      templateUrl: 'app/views/viewbox.html'
    })

//path eventually to go here with storage data
//.config(function(RestangularProvider){
//  RestangularProvider.setBaseUrl('https:')
//})

})(window);
