/* global Firebase angular */
  (function() {
    'use strict';

    angular.module('burybox')

    .controller('LoginController', function() {
      var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

      var self = this;

      self.login = function() {
        firebase.authWithOAuthPopup('google', function() {
          //remember: 'sessionOnly';
        });

      };
    });
  })();
  /*(function() {
    'use strict';

    angular.module('burybox')

    .controller('LoginController', function($state, $timeout, $firebaseAuth, $location) {

      var self = this;

      self = {};

      var auth = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

      self.authObj = $firebaseAuth(auth);
      self.login = function() {
        self.authObj.$authWithPassword({
          email: self.user,
          password: self.password
        });
        self.go = function() {
          $location.path('/addtobox');
        };

      };


        });
  })(); /*
