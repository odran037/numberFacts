(function() {
  angular.module('numFacts', ['ngRoute'])

  /*
   * Routes
   */
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template   : '<h1 class="cover-heading">Math</h1><p class="lead"><form role="search"><input type="number" ng-model="facts" placeholder="Enter a number" ng-change="getMathFacts()" class="btn-default"></form></p><p class="lead">{{factData}}</p>',
        controller : 'mathController'
      })
      .when('/trivia', {
        template   : '<h1 class="cover-heading">Trivia</h1><p class="lead"><form role="search"><input type="number" ng-model="facts" placeholder="Enter a number" ng-change="getMathFacts()" class="btn-default"></form></p><p class="lead">{{factData}}</p>',
        controller : 'triviaController'
      })
      .when('/date', {
        template   : '<h1 class="cover-heading">Date</h1><p class="lead"><form role="search"><input type="number" ng-model="facts" placeholder="Enter a year: yyyy" class="btn-default" ng-change="getMathFacts()"></form></p><p class="lead">{{factData}}</p>',
        controller : 'dateController'
      })
      .otherwise({
        redirectTo  : '/'
      })
  })

  /*
   * Math
   */
  .controller('mathController', function($scope, service){
    $scope.getMathFacts = function() {
      service.getMathData($scope.facts).then(function(response) {
        $scope.factData = response;
      });
    }
  })

  /*
   * Trivia
   */
  .controller('triviaController', function($scope, service){
    $scope.getMathFacts = function() {
      service.getTriviaData($scope.facts).then(function(response) {
        $scope.factData = response;
      });
    }
  })

  /*
   * Date
   */
  .controller('dateController', function($scope, service){
    $scope.getMathFacts = function() {
      service.getDateData($scope.facts).then(function(response) {
        $scope.factData = response;
      });
    }
  })

  /*
   * Service
   */
  .service('service', function($http, $q){
    
    // Math
    this.getMathData = function(number) {
      var dfd = $q.defer();
      $http.get('http://numbersapi.com/' + number + '/math').then(function(response) {
        var resp = response.data;
        dfd.resolve(resp);
      })
      return dfd.promise;
    };

    // Trivia
    this.getDateData = function(number) {
      var dfd = $q.defer();
      $http.get('http://numbersapi.com/' + number + '/year').then(function(response) {
        var resp = response.data;
        dfd.resolve(resp);
      })
      return dfd.promise;
    };

    // Date
    this.getTriviaData = function(number) {
      var dfd = $q.defer();
      $http.get('http://numbersapi.com/' + number).then(function(response) {
        var resp = response.data;
        dfd.resolve(resp);
      })
      return dfd.promise;
    }
  });
})();