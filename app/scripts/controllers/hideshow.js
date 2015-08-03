/* global angular Firebase */
(function(){
'use strict';
angular.module('burybox').controller('HideShowController', function($firebase, $firebaseArray, $http){

  var hideshow = this;
  hideshow.opendate = [ ];
  console.log(hideshow.opendate);

//  var today = Date.now()

 //$http.get('https://sweltering-inferno-1762.firebaseio.com/user/google:112632700758187071933/opendate').then(function(response){
   //return response;
 //});
 //hideshow.opendate = $firebaseArray(ref);
 console.log('hello');


});
})();
