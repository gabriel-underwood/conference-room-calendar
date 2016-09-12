(function () {
  'use strict';
  angular
    .module('app', [
      'lbServices',
   //   'ui.router',
      'ui.bootstrap',
      'ngRoute',
      'ngCookies'
    ])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider'];
  function config($routeProvider, $locationProvider, $httpProvider) {
    console.log('app.config');
    $routeProvider
      .when('/', {
        controller: 'CalendarController',
        templateUrl: 'calendar/calendar.view.html',
        controllerAs: 'vm'
      })
      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'login/login.view.html',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/login'});

    // Provider only available in config, not in run
    $httpProvider.interceptors.push(function ($q, $location, LoopBackAuth) {
      return {
        responseError: function (rejection) {
          if (rejection.status == 401) {
            console.log('Got a 401, clearing local user and switching path to /login');
            //Now clearing the loopback values from client browser for safe logout...
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            $location.nextAfterLogin = $location.path();
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });
  }

  run.$inject = ['$rootScope', '$location', '$cookieStore', '$http', 'ConferenceRoomUser'];
  function run($rootScope, $location, $cookieStore, $http, ConferenceRoomUser) {
    console.log('app.run');
    // keep user logged in after page refresh
    /*
     $rootScope.globals = $cookieStore.get('globals') || {};
     if ($rootScope.globals.currentUser) {
     $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
     }
     */


    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in
      if ($location.path() !== '/login' && !ConferenceRoomUser.isAuthenticated()) {
        console.log('switching path to /login');
        $location.path('/login');
      }
    });

    primeCurrentUserCache($rootScope,ConferenceRoomUser);
  }

  run.$inject = ['$rootScope','ConferenceRoomUser'];
  function primeCurrentUserCache($rootScope, ConferenceRoomUser) {


    var success = function(value,response) {

      console.log('in primeCurrentUserCache Success, curret user is:' + ConferenceRoomUser.getCachedCurrent());
      $rootScope.$evalAsync();
    }

    var error = function(err)
    {
      console.log('getCurrent failed:', err);
    }
    ConferenceRoomUser.getCurrent( success,error);
  }

})();

