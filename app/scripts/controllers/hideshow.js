/* global angular Firebase */
(function() {

  angular.module('burybox').controller('HideShowController', function($firebase, $http) {

    var hideshow = this;
    hideshow.today = {};
    hideshow.endTime = {};
    hideshow.normDate = {}

    var ref = new Firebase('https://sweltering-inferno-1762.firebaseio.com');
    ref.authWithOAuthPopup('google', function(error, authData) {
      //var userUid = authData.uid;
      //console.log(userUid);

      $http.get('https://sweltering-inferno-1762.firebaseio.com/user/' + authData.uid + '/timer' + '.json')
        .then(function(response) {
        //  if (response.data.opendate === null) {
        //    return null
        //  } else {
            hideshow.endTime = response.data.opendate;
            hideshow.normDate = hideshow.endTime;
          //console.log(hideshow.normDate);
          //  console.log(hideshow.endTime);
        });
    });
    //    console.log(hideshow.endTime);
    hideshow.today = Date.now();
    console.log(hideshow.today);

  });
})();
