/* global angular Firebase */
(function() {
  'use strict';
  angular.module('burybox').controller('HideShowController', function($firebase, $firebaseArray, $firebaseObject, $http) {

    var hideshow = this;

    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

    ref.authWithOAuthPopup('google', function(error, authData){
      var userUid = authData.uid;
      console.log(userUid);
    });
  //  var auth = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
  //  var authData = auth.getAuth();
  //  var authRef = auth.child(authData.uid);
  //  console.log(authRef);
  //  var authdData = googleUser;
    //var googleUser = auth.child('user').child(auth.uid);
    //var googleUser = auth.child('user').child(authUser.google.id);
  //  console.log(authdData);
    //('google', function(authData) {
    //    console.log(authData);
    //});
    //  var hideshow = this;
    //  hideshow.opendate = [ ];
    //  console.log(hideshow.opendate);

    //  var today = Date.now()

    //$http.get('https://sweltering-inferno-1762.firebaseio.com/user/opendate').then(function(response){
    //return response;
    //});
    //hideshow.opendate = $firebaseArray(ref);

    hideshow.opendate = [];
    $http.get('https://sweltering-inferno-1762.firebaseio.com/user/google%3A112632700758187071933/opendate' + '.json')
      //$http.get('https://sweltering-inferno-1762.firebaseio.com/user/google%3A112632700758187071933/opendate' + '.json');
      .then(function(response) {
        console.log(response);
        hideshow.opendate = response.data;
        console.log(response.data);
      });



  });
})();
