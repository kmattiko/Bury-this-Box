/* global angular */
(function() {
  'use strict';

angular.module('burybox', ['ngRoute', 'restangular'])
  .config(function($routeProvider) {
    $routeProvider.when('/landing', {
      templateUrl: 'views/landing.html'
    });
    $routeProvider.when('/makebox', {
      templateUrl: 'views/makebox.html'
    });
    $routeProvider.when('/viewbox', {
      templateUrl: 'views/viewbox.html'
    });
  })

  .controller('MainController', function(){
    console.log('yo');
  });

//path eventually to go here with storage data
//.config(function(RestangularProvider){
//  RestangularProvider.setBaseUrl('https:')
//})

})();
