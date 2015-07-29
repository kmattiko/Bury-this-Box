/* global angular Firebase*/
(function() {
  'use strict';
  angular.module('burybox').controller('PhotoController', function($firebaseArray, $http) {

      var photo = this;

      document.getElementById('upload_widget_opener').addEventListener('click', function(){

        cloudinary.openUploadWidget({
          cloud_name: 'kmattiko', upload_preset: 'q5mpk6sc'
        },
      function(error, result) {
        console.log(result[0].url)
        return photo.url = result[0].url
      });
    }, false);
      //var cloudinary = new Cloudinary('https://api.cloudinary.com/c1_1/kmattiko/image/upload');

    /*  document.getElementById("upload_widget_opener").addEventListener("click", function() {
      /*  cloudinary.openUploadWidget({ cloud_name: 'kmattiko', upload_preset: 'q5mpk6sc'}),
        funcion(error, result) {
          console.log(error, result)
        };
      }, false);*/
      //  $http.post("https://api.cloudinary.com/c1_1/kmattiko/image/upload");

       /*cloudinary.uploader.upload('upload_widget_opener') ({
          cloud_name: 'kmattiko'
          upload_preset: 'q5mpk6sc'
        }),

        /*function(error, results) {
          console.log(result[0].url)
          return photo.url = result[0].url
        };*/
    // }, false);

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
