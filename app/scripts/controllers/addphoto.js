/* global angular */
(function() {
  'use strict';

/*angular.module('appFilereader', []).directive('appFilereader', function($q){
  var slice = Array.prototype.slice;

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function(scope, element, attrs, ngModel) {
      if (!ngModel) return;

      ngModel.$render = function() {};

      element.bind('change', function(e) {
        var element = e.target;

        $q.all(slice.call(element.files, 0).map(readFile))
        .then(function(values) {
          if (element.multiple) ngModel.$setViewValue(values);
          else ngModel.$setViewValue(values.length ? values[0] : null);

        });

        function readFile(file) {
          var deferred = $q.defer();

          var reader = new FileReader();
          reader.onload = function(e) {
            deferred.resolve(e.target.result);
          };
          reader.onerror = function(e) {
            deferred.reject(e);
          };
          reader.readAsDataURL(file);

          return deferred.promise;
        }
      });
    }
  };
});*/




/*.directive('fileread', [function () {
  return {
    scope: {
      fileread: "="
    };
    link: function (scope, element, attributes) {
      element.bind("change", function (changeEvent) {
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
          scope.$apply(function () {
            scope.fileread = loadEvent.target.result;
          });
        }
        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
}]);*/


/*  angular.module('burybox')

  .controller('PhotoController', function($http) {
    var photo = this;
    photo.lists = [];

    $http.get('/api/list/photo.json')
      .then(function(response) {
        console.log(response.data);
        photo.lists = response.data;
      });
  });*/



})();
