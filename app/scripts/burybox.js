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
    $routeProvider.when('/addtobox', {
      templateUrl: 'views/addtobox.html'
    });
    $routeProvider.when('/savebox', {
      templateUrl: 'views/savebox.html'
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
