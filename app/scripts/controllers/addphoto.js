/* global angular */
(function() {
  'use strict';

    angular.module('burybox')
    .controller('PhotoController', function($scope) {
      $scope.list = [];
      $scope.someText = {
        testField: ''
      };
      // $scope.text = 'howdy';
      $scope.submit = function() {
          $scope.list.push($scope.someText);
          $scope.someText = { testField: ''};
        };
      });
      //on NG-CLick of submit button img needs to convert to
    //  console.log("test")
    //  var selectedFile = $('#input').get(0).file[0];





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
