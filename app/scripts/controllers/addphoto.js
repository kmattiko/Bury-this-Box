
(function() {
'use strict';

angular.module('burybox')

.controller('PhotoController', function($http) {
  var photo = this;
  photo.list = [ ];

  $http.get('/api/image.json')
  .then(function(respoonse) {
    console.log(response)
    photo.list = response.data;
  });
});



})();
