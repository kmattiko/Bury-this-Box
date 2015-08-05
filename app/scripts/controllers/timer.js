/* global angular Firebase*/
(function(){
  'use strict';

angular.module('burybox').controller('TimeController', function($firebaseArray, $location){


var time = this;
var today = Date.now();
var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com/user');
var authData = ref.getAuth();
var timestampRef = ref.child(authData.uid + '/timer');

time.open = {opendate: null}

time.data = $firebaseArray(timestampRef);

time.submit = function(){
  var timestamp = time.open.opendate.getTime();
  ref.child(authData.uid).child('timer').update({
    opendate: timestamp
  })
//   .then(function(response){
// //    console.log(response);
//   })
  console.log(timestamp);
};
//time.open {
//  opendate: timestamp
//}

document.getElementById('closebutton').addEventListener('click', function(){
  $location.path('/home')
});

});
})();
