/* global angular Firebase*/
(function() {
  'use strict';

  angular.module('burybox').controller('PhotoController', function($firebaseArray, $location) {

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

//  photo.url.$loaded().then(function(data, key){
//    console.log(photo.url);
//  });

      var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com/');
      var authData = ref.getAuth();
      var photosRef = ref.child(authData.uid + '/photos')
      var photoFolder = {
        photo.photo = '',
        photo.title = '',
        photo.description = ''
      };

      photo.photoFolder = $firebaseArray(photosRef);

      photo.submit = function() {
        photo.data.$add({
          photo: photo.photo,
          title: photo.title,
          description: photo.description
        }).then(funcion(){
          $location.path('/photos');
        });
      };


    });

})();
