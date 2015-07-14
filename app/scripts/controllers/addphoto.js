/* global angular */
(function() {
  'use strict';

var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var output = document.getElementById('output');
    output.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

/*  angular.module('burybox')

  .controller('PhotoController', function($http) {
    var photo = this;
    photo.lists = [];

    $http.get('/api/list/photo.json')
      .then(function(response) {
        console.log(response.data);
        photo.lists = response.data;
      });
  });*/



})();
