/* global angular Firebase */
(function() {

  angular.module('burybox').controller('HideShowController', function($firebase, $http) {

    var hideshow = this;
    hideshow.endTime = {};

    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
    ref.authWithOAuthPopup('google', function (error, authData) {
      //var userUid = authData.uid;
      //console.log(userUid);

      $http.get('https://sweltering-inferno-1762.firebaseio.com/user/' + authData.uid + '/timer' + '.json')
       .then(function(response) {
        hideshow.endTime = response.data.opendate;
        console.log(hideshow.endTime);
      });
    });
//    console.log(hideshow.endTime);
    var today = Date.now();
    console.log(today);
  });
})();
