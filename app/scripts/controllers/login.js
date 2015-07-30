/* global Firebase angular */
  (function() {
    'use strict';

    angular.module('burybox').controller('LoginController', function($location) {

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
          console.log("authenticated successfully", authData);
        }
      }, {
        scope: 'email'
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

    document.getElementById('loginrouting').addEventListener('click', function(){
      if (Date.now >= timestamp) {
      $location.path('/closedbox')
    } else {
      $location.path('/home')
    }
    });

    });

  })();
