/* global angular Firebase */
(function(){
'use strict';
angular.module('burybox').controller('HideShowController', function($firebase, $firebaseArray, $http){

  var hideshow = this;
  hideshow.opendate = [ ];
  console.log(hideshow.opendate);

//  var today = Date.now()

 var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com/user');
 hideshow.opendate = $firebaseArray(ref);
 console.log(hideshow.opendate);
//  console.log(ref);

  //var authData = ref.getAuth();
  //var timestamp = ref.data;

  //console.log(timestamp);
//  console.log(today);


});
})();
