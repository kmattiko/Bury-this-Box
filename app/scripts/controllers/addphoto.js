/* global angular Firebase*/
(function() {
  'use strict';

  var app = angular.module('burybox');

    app.controller('PhotoController', function ($firebaseArray) {

      var self = this;

      var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com/');

      self.data = $firebaseArray(firebase);
      console.log(self.data);

      self.submit = function() {
        self.data.$add({
          photo: self.photo,
          title: self.title,
          description: self.description
        });
        self.photoLoad = '';
        self.photoTitle = '';
        self.photoDescription = '';
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
  //  var selectedFile = $('#input').get(0).file[0];


})();
