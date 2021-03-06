/* global angular Firebase*/
(function(){
  'use strict';

angular.module('burybox').controller('TimeController', function($firebaseArray, $location){

var time = this;
var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com/user');
var authData = ref.getAuth();
var timestampRef = ref.child(authData.uid + '/timer');

time.open = {opendate: null};

//time.toFirebase = {endDate: ' '}

time.data = $firebaseArray(timestampRef);

time.submit = function(){
  var timestamp = time.open.opendate.getTime();
  ref.child(authData.uid).child('timer').update({
    opendate: timestamp
  });
  console.log(timestamp);
};


document.getElementById('closebutton').addEventListener('click', function(){
  $location.path('/home');
});

});
})();
