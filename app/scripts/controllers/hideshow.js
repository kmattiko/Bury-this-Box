/* global angular Firebase */
(function() {
  'use strict';
  angular.module('burybox').controller('HideShowController', function($firebase, $firebaseArray, $firebaseObject, $http) {

    var hideshow = this;
    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

    ref.authWithOAuthPopup('google', function(error, authData) {
      //var userUid = authData.uid;
      //console.log(userUid);

    $http.get('https://sweltering-inferno-1762.firebaseio.com/user/' + authData.uid + '/opendate' + '.json')
      //$http.get('https://sweltering-inferno-1762.firebaseio.com/user/google%3A112632700758187071933/opendate' + '.json');
      .then(function(response) {
        hideshow.opendate = response.data;
        console.log(response.data);
      });

    });

  });
})();
