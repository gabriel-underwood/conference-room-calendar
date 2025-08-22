(function () {
  'use strict';

  angular
    .module('app')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope','$location','ConferenceRoomUser'];
  function NavbarController($scope,$location,ConferenceRoomUser) {
    console.log('CalendarController ctor');


    console.log('in ctor, cachedCurrent is : ' + ConferenceRoomUser.getCachedCurrent());

    var vm = this;

    vm.ConferenceRoomUser = ConferenceRoomUser;
    // this is cached in lb-services after the call to ConferenceRoomUser.getCurrent()
    // but is shadowed here for simpler bind in the view
    vm.username = '';
    vm.email = '';


    function getCurrentUser() {


      var success = function(value,response) {

        console.log('in Success, curret user is:' + ConferenceRoomUser.getCachedCurrent());
        $scope.$evalAsync(function () {
          vm.username= ConferenceRoomUser.getCachedCurrent().username;
          vm.email = ConferenceRoomUser.getCachedCurrent().email;
          console.log('in apply, current user is:' + ConferenceRoomUser.getCachedCurrent());
        });

      }

      var error = function(err)
      {
        console.log('getCurrent failed:', err);
        $scope.$evalAsync(function () {
          vm.username= '';
          vm.email = '';
          console.log('in apply error, current user is:' + ConferenceRoomUser.getCachedCurrent());
        });

      }

      ConferenceRoomUser.getCurrent( success,error);


    };




  }

})();
