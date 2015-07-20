/* global angular */
(function() {
  'use strict';

angular.module('burybox')
  .config(function($routeProvider) {

    $routeProvider.when('/index', {
      templateUrl: 'views/landing.html'
    });

    $routeProvider.when('/landing', {
      templateUrl: 'views/landing.html',
      //where login/authentication happens
      controller: 'LoginController',
      controllerAs: 'login'
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

    $routeProvider.when('/savebox', {
      templateUrl: 'views/savebox.html'
      //where completed boxes are viewed and saved
    });

    $routeProvider.when('/404', {
      templateUrl: 'views/404.html'
    });

    $routeProvider.when('/', {
      redirectTo: '/landing',
    });

    $routeProvider.otherwise('/landing');
  });


})();
