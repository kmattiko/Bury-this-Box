/* global Firebase angular */
  (function() {
    'use strict';

    angular.module('burybox').controller('LoginController', function() {

    var newUser = true;
    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
    var authData = ref.getAuth();
    if (authData) {
      console.log("you did it!", authData.uid);
    }
    this.login = function() {
      ref.authWithOAuthPopup('google', function(error) {
        if (error) {
          console.log("failed", error);
        } else {
          console.log("done successfully", authData);
        }
      }, {
        remember: 'sessionOnly'
      });
    };

    ref.onAuth(function() {
      if (authData && newUser) {
        ref.child('user').child(authData.uid).set({
          provider: authData.provider,
          name: authData.google.displayName
        });
      }
    });

    /*  var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
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
      };*/

    });

  })();
