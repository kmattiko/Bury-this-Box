/* global Firebase*/
(function(){
'use strict';
 angular.module('burybox').controller('LogoutController', function() {
   var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
   this.logout = function() {
     ref.unauth();
   };
});

})();
