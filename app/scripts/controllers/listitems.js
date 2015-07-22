/* global */
/*(function(){
'use strict';
 angular.module('burybox')

  .controller('ListController', function($http) {
    console.log('hello');
    var list = this;

    list.photos = [];

    $http.get('https://sweltering-inferno-1762.firebaseio.com/')
      .then(function(response) {
        console.log(response);
        list.photos = response.data;
      });
  });





})();*/
