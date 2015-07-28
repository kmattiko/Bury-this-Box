/* global angular */
(function(){
  'use strict';

//angular.module('burybox').controller('TimeController', function(){

//var time = this;
var today = new Date(2015, 28, 7);
var tomorrow = new Date(2015, 29, 7);

var x = today < tomorrow;
console.log(x)
//var today = Date.now();

/*var opendate = new Date(time.submit)
var dstring = opendate.toGMTString();
console.log(dstring);






if (time.opendate < today)
{
  ngRoute('#/closedbox')
}
else {
  return false;
}
});*/

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
