/* global angular Firebase */
(function() {
  'use strict';
  angular.module('burybox').controller('HideShowController', function($firebase, $http) {

    var hideshow = this;
    //  hideshow.timer = { };
    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
    ref.authWithOAuthPopup('google', function(error, authData) {
      //var userUid = authData.uid;
      //console.log(userUid);

      $http.get('https://sweltering-inferno-1762.firebaseio.com/user/' + authData.uid + '/timer' + '.json')

      .then(function setValue(response) {
        hideshow.timer = response.data;
        var timeToOpen = response.data.opendate;

        console.log(timeToOpen);
        var today = Date.now();
        console.log(today);
      });
    });


  });
})();
