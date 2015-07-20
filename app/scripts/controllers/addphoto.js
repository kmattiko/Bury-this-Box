/* global angular Firebase*/
(function() {
  'use strict';
  angular.module('burybox').controller('PhotoController', function($firebaseArray) {

      var photo = this;

      var firebase = new Firebase('https://sweltering-inferno-1762.firebaseio.com/');

      photo.data = $firebaseArray(firebase);
      console.log(photo.data);

    /*  self.submit = function() {
        self.data.$add({
        photo: self.photoLoad */

      photo.submit = function() {
        photo.data.$add({
          photo: photo.url,
          title: photo.title,
          description: photo.description
        });
        photo.url = '';
        photo.title = '';
        photo.description = '';
      };


    });

})();
