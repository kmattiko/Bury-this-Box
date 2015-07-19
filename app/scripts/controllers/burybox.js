/* global angular */
(function() {
  'use strict';

angular.module('burybox', ['restangular', 'ngRoute', 'burybox.services', 'burybox.login'])
.controller('MainController', function(){

  console.log('hello world');

});


})();
