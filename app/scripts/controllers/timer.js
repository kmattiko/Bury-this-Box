/* global angular Firebase*/
(function(){
  'use strict';

angular.module('burybox').controller('TimeController', function($firebaseArray){

var time = this;
var today = Date.now();
console.log(today);

time.open = {opendate: null}

time.toFirebase = {endDate: ' '}

time.submit = function(){
  var timestamp = time.open.opendate.getTime();
  time.data.$add(timestamp).then(function(response){
    console.log(response);
  })
  console.log(timestamp);
};

var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com/user');
var authData = ref.getAuth();
var timestampRef = ref.child(authData.uid + '/opendate');

time.data = $firebaseArray(timestampRef);


//ng-model="time.open.opendate"
//ng-submit="time.submit()"

});
})();
