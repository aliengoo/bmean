(function () {
  "use strict";

  window.app = angular.module('app', ['ngResource', 'ngCookies', 'ngAnimate', 'ui.router', 'ui.utils', 'ui.bootstrap'])
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
;(function () {
  "use strict";

  window.app.factory('storeSvc', [function() {

    return {
      get : function(key) {
        return amplify.store(key);
      },

      set : function(key, value) {
        amplify.store(key, value);

        return value;
      }
    };
  }]);
}());
;(function () {
  "use strict";

  window.app.factory('toastrSvc', [function () {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "positionClass": "toast-bottom-right",
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "8000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };

    return {
      info: function (message, title) {
        toastr.warning(message, title);
      },
      success: function (message, title) {
        toastr.success(message, title);
      },
      warning: function (message, title) {
        toastr.warning(message, title);
      },
      error: function (message, title) {
        toastr.error(message, title);
      },
      clear: function () {
        toastr.clear();
      }
    };
  }]);
}());
;(function () {
  "use strict";

  window.app.controller('homeCtrl', ['$scope', 'toastrSvc', function ($scope, toastrSvc) {
    $scope.message = 'BMEAN';

    toastrSvc.success('Hello', 'World!');
  }]);
}());