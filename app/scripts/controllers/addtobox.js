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
        console.log(result[0].url);
        photo.folder.picture = result[0].url
      });
    }, false);

      var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com/user');
      var authData = ref.getAuth();
      var photosRef = ref.child(authData.uid + '/photos');
      photo.folder = {
        picture: '',
        title: '',
        description: ''
      };

      photo.data = $firebaseArray(photosRef);

      photo.submit = function() {
        photo.data.$add(photo.folder).then(function(response){
          console.log(response);
        });
      };

    });

})();
