/* global Firebase angular */
  (function() {
    'use strict';

    angular.module('burybox')

    .controller('LoginController', function() {
      var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

      var self = this;

      self.login = function() {
        ref.authWithOAuthPopup('google', function() {
    //      remember: 'sessionOnly';
        });
      };
    });

        /*  this.googlelogin = Auth.googlelogin;

              Auth.onAuth(function(user, authdUser){
                self.user = user;
              })*/


  })();
