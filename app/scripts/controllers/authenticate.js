/* global  */
(function() {
  'use strict';

  angular.module('burybox')

  .controller('LoginController', function() {
    var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

    var self = this;

    self.login = function() {
      firebase.authWithOAuthPopup('google', function(error, auth) {
        //remember: 'sessionOnly';
      });

    };
  });
})(); 
