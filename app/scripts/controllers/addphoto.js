
(function() {
'use strict';

angular.module('burybox')

.controller('PhotoController', function($http) {
  var photo = this;
  photo.lists = [{"url": "http://placekitten.com/g/200/300",
"title":"Whatevah", "description":"not important", "date":"today"}];

/*  $http.get('/api/image.json')
  .then(function(respoonse) {
    console.log(response)
    photo.lists = response.data;
  });*/
});



})();
