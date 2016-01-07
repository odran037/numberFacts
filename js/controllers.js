(function() {

  'use strict';

  angular
    .module('numFacts')
    .controller('mathController', mathController)
    .controller('triviaController', triviaController)
    .controller('dateController', dateController);

  function mathController(service) {

    var vm = this
    vm.getMathFacts = function() {
      service.getMathData(vm.facts).then(function(response) {
        vm.factData = response;
      });
    }

  }

  function triviaController(service) {

    var vm = this;
    vm.getTriviaFacts = function() {
      service.getTriviaData(vm.facts).then(function(response) {
        vm.factData = response;
      });
    }

  }

  function dateController(service) {

    var vm = this;
    vm.getDateFacts = function() {
      service.getDateData(vm.facts).then(function(response) {
        vm.factData = response;
      });
    }

  }

})();