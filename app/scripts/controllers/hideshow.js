/* global angular Firebase */
(function(window) {
  'use strict';
  angular.module('burybox').controller('HideShowController', function($firebase, $http) {

    var hideshow = this;
  //  hideshow.timer = { };
    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
    var timeToOpen;
    ref.authWithOAuthPopup('google', function(error, authData) {
      //var userUid = authData.uid;
      //console.log(userUid);

    $http.get('https://sweltering-inferno-1762.firebaseio.com/user/' + authData.uid + '/timer' + '.json')

      .then(function setValue(response) {
        hideshow.timer = response.data;
        timeToOpen = response.data.opendate;

      });
    });

      console.log(window.timeToOpen);
      var today = Date.now();
      console.log(today);
  });
})(window);
