/* global angular */
(function() {
  'use strict';

angular.module('burybox', ['ngRoute', 'restangular', 'firebase'])

  .config(function($routeProvider) {

    $routeProvider.when('/index', {
      templateUrl: 'views/landing.html'
    });

    $routeProvider.when('/landing', {
      templateUrl: 'views/landing.html'
      //where login/authentication happens
    });

    $routeProvider.when('/addtobox', {
      url: 'addtobox',
      templateUrl: 'views/addtobox.html'
      //where boxes are added to
    });

    $routeProvider.when('/completebox', {
      templateUrl: 'views/completebox.html'
      //page for completed box and closed boxes
    });

    $routeProvider.when('/home', {
      templateUrl: 'views/home.html'
    });

    $routeProvider.when('/home2', {
      templateUrl: 'views/home2.html'
    });

    $routeProvider.when('/thanks', {
      templateUrl: 'views/thanks.html'
    });

    $routeProvider.when('/404', {
      templateUrl: 'views/404.html'
    });

    $routeProvider.when('/', {
      redirectTo: '/landing'
    });

    $routeProvider.otherwise('/landing');
  });


})();
