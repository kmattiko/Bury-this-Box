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

})();
