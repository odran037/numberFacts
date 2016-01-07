(function() {

  'use strict';

  angular
    .module('numFacts')
    .config(config);

  function config($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl : 'templates/math.html',
        controller : 'mathController',
        controllerAs : 'vm'
      })
      .when('/trivia', {
        templateUrl : 'templates/trivia.html',
        controller : 'triviaController',
        controllerAs : 'vm'
      })
      .when('/date', {
        templateUrl : 'templates/date.html',
        controller : 'dateController',
        controllerAs : 'vm'
      })
      .otherwise({
        redirectTo : '/'
      })
  }

})();