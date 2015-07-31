/* global Firebase angular */
  (function() {
    'use strict';

    angular.module('burybox').controller('LoginController', function($location) {

    var login = self
    //var newUser = true;
    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
    login.auth = Auth.magicAuth;
    login.authData = null;
    login.addUser = function(){
      login.auth.$onAuth(function(authData) {
        loin.authData = authData;
        if (authData) {
          ref.child('users').child(authData.uid).update({
            provider: authData.provider,
            name: authData.google.displayName,
            image: authData.google.profileImageURL
          });
        }
      });
    };
    login.login = function() {
      Auth.googleLogin();
    };
    login.checkAuth = function() {
      console.log(Auth.authStatus());
    };
    login.logout = function() {
      Auth.googleLogout();
    };
  });

  })();
