(function(window) {
  'use strict';

angular.module('bury-this-box')

.controller('MainController', function($scope){
  var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

  var self = this;

  this.login = function(){
    firebase.authWithOAuthPopup('google', function(error, auth){
      $scope.$apply(function(){
        self.username = auth.google.username;
        console.log('testing');

      });
    });
  };

});

)}(window);
