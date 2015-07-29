/* global angular */
(function(){
  'use strict';

angular.module('burybox').controller('TimeController', function(){

var time = this;
//conlsole.log(time.opendate)
time.blah = {
  opendate: null
}

time.toFirebase = {
  endDate: ' '
}

time.submit = function(){
  var timestamp = time.blah.opendate.getTime();
time.toFirebase.endDate = timestamp;

  console.log(timestamp);

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
