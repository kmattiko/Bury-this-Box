/* global angular Firebase */
(function(){
'use strict';
angular.module('burybox').controller('HideShowController', function($firebase, $http){

  var hideshow = this;

//  var today = Date.now()
  var timestamp = $http.get('https://sweltering-inferno-1762.firebaseio.com/user/opendate')

  console.log(timestamp);
//  console.log(today);


});
})();
