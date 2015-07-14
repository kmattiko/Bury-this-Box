/* global angular */
(function() {
  'use strict';

  angular.module('burybox')

  .controller('PhotoController', function($http) {
    var photo = this;
    photo.lists = [];

    $http.get('/api/list/photo.json')
      .then(function(response) {
        console.log(response.data);
        photo.lists = response.data;
      });
  });



})();
