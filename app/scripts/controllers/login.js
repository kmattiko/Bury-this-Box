(function() {
  'use strict';

/*  var services = angular.module('burybox.services', ['firebase'])

  services.factory ('authServices', ['$state', '$timeout','$firebaseAuth',

  function ( $state, $timeout, $firebaseAuth ) {

  var authServices = {};
  var auth = new Firebase('https://sweltering-inferno-1762.firebaseio.com');

  authServices.authObj = $firebaseAuth(auth);
  authServices.login = function (user, password) {
    authServices.authObj.$authWithPassword({
      email : user,
      password : password
    })
    .then(function(response){
      $state.go('/addtobox')
    });
  };
  return authServices;
}
  ]); */
})();
