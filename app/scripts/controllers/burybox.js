/* global angular */
(function() {
  'use strict';

angular.module('burybox', ['restangular', 'ngRoute', 'burybox.services', 'burybox.login'])
.controller('MainController', MainController)

function MainController() {

  console.log("hello world");
}


})();
