(function () {
  'use strict';

  angular
    .module('app')
    .controller('CalendarController', CalendarController);

  CalendarController.$inject = ['$location'];
  function CalendarController($location) {
    console.log('CalendarController ctor');
    var vm = this;






  }

})();
