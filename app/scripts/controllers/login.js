/* global Firebase angular */
  (function() {
    'use strict';

    angular.module('burybox').controller('LoginController', function() {

      var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
      var authData = ref.getAuth();
      if(authData) {
        console.log("you did it!", authData.uid);
      }

      this.login = function() {
          ref.authWithOAuthPopup('google', function(error) {
            if (error) {
              console.log("failed", error);
            } else {
              console.log("way to go!", authData);
            }
          }, {
            remember: 'sessionOnly',
            scope: 'email'
          });
      };

    });

  })();
