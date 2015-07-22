(function(){
  'use strict';

  angular.module('burybox')

.controller('TimeController', function($scope){
$scope.timerRunning = true;

$scope.$on('timer-stopped', function() {
  alert("timer stopped")
});
})

})();
