/* global angular */
(function() {
  'use strict';

angular.module('burybox', ['ngRoute', 'restangular', 'firebase', 'timer', 'angular-cloudinary'])

  .config(function($routeProvider) {

    $routeProvider.when('/index', {
      templateUrl: 'views/landing.html'
    });

    $routeProvider.when('/landing', {
      templateUrl: 'views/landing.html'
      //where login/authentication happens
    });

    $routeProvider.when('/makebox', {
      templateUrl: 'views/makebox.html'
      //where user goes to start a box
    });

    $routeProvider.when('/addtobox', {
      url: 'addtobox',
      templateUrl: 'views/addtobox.html'
      //where boxes are added to
    });

    $routeProvider.when('/hideshow', {
      templateUrl: 'views/hideshow.html'
      //where completed boxes are viewed and saved
    });

    $routeProvider.when('/completebox', {
      templateUrl: 'views/completebox.html'
      //page for completed box and closed boxes
    });

    $routeProvider.when('/home', {
      templateUrl: 'views/home.html'
    });

    $routeProvider.when('/closedbox', {
      templateUrl: 'views/closedbox.html'
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
