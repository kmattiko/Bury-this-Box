/* global angular Firebase */

(function(){
'use strict';
console.log('hello to you too');
angular.module('burybox').controller('HideShowController', function($firebase, $http){
  console.log('test');
});
  console.log('hello there');
  var hideshow = self;
  var today = Date.now();
  console.log(today);
  var timestamp = $http.get('https://sweltering-inferno-1762.firebaseio.com/user/opendate');
  console.log(timestamp);


})();
