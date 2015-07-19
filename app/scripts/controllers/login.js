/* global Firebase angular */
(function() {
  'use strict';

  angular.module('burybox', ['firebase'])

  .controller('LoginController', function($state, $timeout, $firebaseAuth) {

    var self = this;

    self = {};

    var auth = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

    self.authObj = $firebaseAuth(auth);
    self.login = function(user, password) {
      self.authObj.$authWithPassword ({
        email : self.user,
        password : self.password,
      })
      self.go = function(path) {
        $location.path('views/addtobox.html');
      };

      }
      return self;


      });
})();

/*  var services = angular.module('burybox', ['firebase'])

  services.factory ('authServices', ['$state', '$timeout','$firebaseAuth',

  function ( $state, $timeout, $firebaseAuth ) {

  var self = this;

  var authServices = {};
  var auth = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

  authServices.authObj = $firebaseAuth(auth);
  authServices.login = function (user, password) {
    authServices.authObj.$authWithPassword({
      email : user,
      password : password
    })
    self.go = function(path) {
      $location.path('views/addtobox.html');
    };
  };
  return authServices;
}
  ]); */
