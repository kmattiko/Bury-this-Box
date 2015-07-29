/* global angular */
(function(){
  'use strict';

angular.module('burybox').controller('TimeController', function(){

var time = this;

time.open = {
  opendate: null
}

time.toFirebase = {
  endDate: ' '
}

time.submit = function(){
  var timestamp = time.open.opendate.getTime();
  time.toFirebase.endDate = timestamp;
  console.log(timestamp);
/*  var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com/');
  timestamp.data = firebaseObject(firebase);

  timestamp.submit = function() {
    timestamp.data.$add {(
      timestamp: time.toFirebase.endDate = timestamp
    )}*/
  }
}

var today = new Date();

console.log(today);
// var opendate = new Date(time.opendate);

//console.log(opendate);
    // probably needs to be NG-Model to tie view to date shown here
//var x = today <= opendate;
//console.log(x)
});
/*if (today >= opendate)
{
  ngRoute('/closedbox')
}
else {
  return;
};*/

//if (this.timer-stopped === true) {
//  ng-show = !time.dangerzone;
//}

/*$scope.startTimer = function() {
  $scope.$broadcast('timer-start');
  $scope.timerRunning = true;
};

$scope.stopTimer = function() {
  $scope.$broadcast('timer-stop');
  $scope.timerRunning = false;
};
$scope.goTo = function(route) {
  if (timer.countdown == 0) {
    ''
  }
}
 $scope.$on('timer-stopped', function() {
   if (time.countdown === 0) {
    $scope.click = (dangerzone);
    }
    else {
      return !dangerzone;
    };
//remember: session;*/
})();
