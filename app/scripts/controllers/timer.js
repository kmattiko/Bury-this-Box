/* global angular */
(function(){
  'use strict';

angular.module('burybox').controller('TimeController', function(){

var time = this;

if (time.opendate < CurrentDate)
{
  ngRoute('#/closedbox')
}
else {
  return false;
}
});

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
