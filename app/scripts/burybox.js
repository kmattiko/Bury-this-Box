/* global angular */
(function() {
  'use strict';

angular.module('burybox', ['ngRoute', 'restangular'])
  .config(function($routeProvider) {
    $routeProvider.when('/landing', {
      templateUrl: 'views/landing.html'
    });
    $routeProvider.when('/googlelogin', {
      templateUrl: 'views/viewbox.html',
      controller: 'LoginController',
      controllerAs: 'login'
    });
    $routeProvider.when('/makebox', {
      templateUrl: 'views/makebox.html'
    });
    $routeProvider.when('/viewbox', {
      templateUrl: 'views/viewbox.html'
    //  controller: 'AddToBoxController',
    //  controllerAs: 'AddtoBox'
    });
    $routeProvider.when('/404', {
      templateUrl: 'views/404.html'
    });
  });


//path eventually to go here with storage data
//.config(function(RestangularProvider){
//  RestangularProvider.setBaseUrl('https:')
//})

})();
