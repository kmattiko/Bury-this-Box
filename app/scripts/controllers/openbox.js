/* global angular */
(function(){
'use strict';

var app = angular.module('burybox');
  app.controller('NewBoxController', function(Auth){

  var self = this;

  Auth.onAuth(function(user){
      self.user = user;
  });
console.log(self.user);
});

})();
