/* global angular Firebase */
(function() {

  angular.module('burybox').controller('HideShowController', function($firebase, $http) {

    var self = this;

    var endTime;

    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
    ref.authWithOAuthPopup('google', function (error, authData) {
      //var userUid = authData.uid;
      //console.log(userUid);

      $http.get('https://sweltering-inferno-1762.firebaseio.com/user/' + authData.uid + '/timer' + '.json')
       .then(function(response) {
        endTime = response.data.opendate;
      //  console.log(endTime);
      });
    });
    console.log(endTime);
    var today = Date.now();
    console.log(today);
  });
})();
