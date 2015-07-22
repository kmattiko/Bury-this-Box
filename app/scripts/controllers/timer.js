(function(){
  'use strict';

  angular.module('burybox')

.controller('TimeController', function($scope){
$scope.timerRunning = true;

$scope.startTimer = function() {
  $scope.$broadcast('timer-start');
  $scope.timerRunning = true;
};

$scope.stopTimer = function() {
  $scope.$broadcast('timer-stop');
  $scope.timerRunning = false;
};

$scope.$on('timer-stopped', function() {
  alert("timer stopped")
});
})

})();
