/* global angular */
(function() {
  'use strict';

    angular.module('burybox')
    .controller('PhotoController',  PhotoController);

    function PhotoController($scope, $firebaseArray, FIREBASE_URL, $firebaseObject, $stateParams) {
      var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com/');
      $scope.theContent = $firebaseArray(ref)

      function($scope) {
      $scope.list = [];
      $scope.theContent = {
        testField: ''
      };
      // $scope.text = 'howdy';
      $scope.submit = function() {
          $scope.list.push($scope.theContent);
          $scope.theContent = { testField: ''};
        };
      };
      });


    /*function($scope) {
      $scope.list = [];
      $scope.theContent = {
        testField: ''
      };
      // $scope.text = 'howdy';
      $scope.submit = function() {
          $scope.list.push($scope.theContent);
          $scope.theContent = { testField: ''};
        };
      });*/


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
