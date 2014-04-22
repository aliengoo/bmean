(function () {
  "use strict";

  window.app = angular.module('app', ['ngResource', 'ngCookie', 'ngAnimate', 'ui.router', 'ui.utils', 'ui.bootstrap'])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', function ($provide, $stateProvider, $urlRouterProvider) {

      // TODO : Handle uncaught exceptions here
      $provide.decorator("$exceptionHandler", ['$delegate', '$injector', function ($delegate, $injector) {
        return function (exception, cause) {
          $delegate(exception, cause);

          var rootScope = $injector.get('$rootScope');

          rootScope.$broadcast('uncaughtException', {
            exception: exception,
            cause: cause
          });

          // TODO : Add logic here to process uncaught exceptions, or wire up a listener
        };
      }]);

      // TODO : Specify some routes
      $urlRouterProvider.otherwise('/home');

      $stateProvider.state('home', {
        url : '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl'
      });
    }]);
}());
