(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$app','$location', 'ConferenceRoomUser','LoopBackAuth'];
    function LoginController($app, $location, ConferenceRoomUser, LoopBackAuth) {
        console.log("LoginController ctor");
        var vm = this;

        vm.login = login;
        vm.primeCurrentUserCache = primeCurrentUserCache;

        (function initController() {
            // reset login status
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
        })();







        function login() {
            vm.dataLoading = true;

          var success = function(value,response) {
            console.log('ConferenceRoomUser.getCurrentId()',ConferenceRoomUser.getCurrentId());

            console.log('switching path to /');
            $location.path('/');
            primeCurrentUserCache();
          }

          var error = function(err)
          {
            console.log('login failed:', err);

            vm.dataLoading = false;
          }

          ConferenceRoomUser.login({username: vm.username, password: vm.password}, success,error);


        };
    }

})();
