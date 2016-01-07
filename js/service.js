(function() {

  'use strict';

  angular
    .module('numFacts')
    .service('service', service);

  function service($http, $q){
    
    this.getMathData = function(number) {
      var dfd = $q.defer();
      $http.get('http://numbersapi.com/' + number + '/math').then(function(response) {
        var resp = response.data;
        dfd.resolve(resp);
      });
      return dfd.promise;
    };

    this.getDateData = function(number) {
      var dfd = $q.defer();
      $http.get('http://numbersapi.com/' + number + '/year').then(function(response) {
        var resp = response.data;
        dfd.resolve(resp);
      });
      return dfd.promise;
    };

    this.getTriviaData = function(number) {
      var dfd = $q.defer();
      $http.get('http://numbersapi.com/' + number).then(function(response) {
        var resp = response.data;
        dfd.resolve(resp);
      });
      return dfd.promise;
    }

  }

})();