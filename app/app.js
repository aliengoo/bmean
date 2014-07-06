(function () {
  "use strict";

  window.app = angular.module('app', ['ngResource', 'ngCookies', 'ngAnimate', 'fx.animations', 'ui.router', 'ui.utils', 'ui.bootstrap', 'btford.socket-io', 'chieffancypants.loadingBar', 'cfp.hotkeys', 'LocalStorageModule'])
    .config(['$provide', '$stateProvider', '$urlRouterProvider', 'cfpLoadingBarProvider', 'localStorageServiceProvider', function ($provide, $stateProvider, $urlRouterProvider, cfpLoadingBarProvider, localStorageServiceProvider) {

      // TODO : Uncomment to disable the spinner
      //cfpLoadingBarProvider.includeSpinner = false;


      // TODO : Set the prefix for local storage
      // localStorageServiceProvider.setPrefix('newPrefix');

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
        templateUrl: 'html/home/home.html',
        controller: 'homeCtrl'
      });
    }]);
}());
