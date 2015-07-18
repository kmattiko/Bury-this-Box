/* global angular Firebase */
(function() {
  'use strict';

  angular.module('burybox.login', ['burybox.services'])
  .controller('LoginController', ['$scope', 'authServices', function($scope, authServices) {
    $scope.login = function(event) {
      event.preventDefault();
      authServices.login(this.model.user, this.model.pass);
    };
  }
]);

    })();

  //  var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

  //  var self = this;

  //  self.login = function() {
  //   firebase.authWithOAuthPopup('google', function(error, auth) {
        //remember: 'sessionOnly';
//      });

  // };//
//  });

/*angular.module('burybox')

.controller('LoginController', function() {
  var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

  var self = this;

  self.login = function() {
//    firebase.authWithOAuthPopup('google', function(error, auth) {
      //remember: 'sessionOnly';
//    });

//  };
//}); */
