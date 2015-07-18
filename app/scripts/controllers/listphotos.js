(function(){
'use strict';

 var app = angular.module('burybox')

  app.controller('ListController', function($http) {

    var list = this;

    list.photos = [];

    $http.get('https://sweltering-inferno-1762.firebaseio.com/')
      .then(function(response) {
        console.log(response);
        list.photos = response.data;
      });
  });





})();
