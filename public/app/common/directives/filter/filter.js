(function () {
  "use strict";

  window.app.directive('filter', ['$rootScope', '$injector', '$timeout', 'storeSvc', function ($rootScope, $injector, $timeout, storeSvc) {

    var defaultFilter = {
      page: {
        current: 1,
        size: 18
      }
    };

    return {
      replace: true,
      restrict: 'E',
      templateUrl: function ($elem, $attr) {
        return $attr.templateUrl;
      },
      scope: {
        results: '=', // the result of a filter request
        filterInProgress: '=', // indicates that a filter is in progress
        defaultFilter : '=', // the default filter, if undefined, one will be appointed for you
        elementData : '=', // additional data used in the template
        serviceName: '@', // the service responsible for providing data from a query
        key: '@' // the storage and broadcast key
      },
      link: function ($scope) {

        var service = $injector.get($scope.serviceName);

        $scope.filterRequest = storeSvc.get($scope.key, $scope.defaultFilter || defaultFilter);

        var filterSuccessHandler = function (result) {
          $scope.results = result.results;
          $scope.filterRequest.page = result.page;
          storeSvc.set($scope.key, $scope.filterRequest);
        };

        $scope.applyFilter = function (filter) {

          if (filter) {
            $scope.filterRequest = filter;
          }

          $scope.filterInProgress = true;
          service.filter($scope.filterRequest, filterSuccessHandler).$promise.finally(function () {
            $scope.filterInProgress = false;

            // timeout allows child scopes to register there observers before broadcasting begins
            $timeout(function() {
              $rootScope.$broadcast($scope.key + ':changed', $scope.filterRequest);
            }, 100);
          });
        };

        $scope.resetFilter = function () {
          $scope.filterRequest = storeSvc.set($scope.key, angular.copy($scope.defaultFilter || defaultFilter));
          $scope.applyFilter();
        };

        $scope.$on($scope.key + ':apply', function (ev, filter) {
          $scope.applyFilter(filter);
        });

        $scope.$on($scope.key + ':reset', function () {
          $scope.filterRequest = storeSvc.get($scope.key, defaultFilter);
        });

        $scope.$on($scope.key + ':setPage', function (event, page) {
          $scope.filterRequest.page = page;
          $scope.applyFilter();
        });

        $scope.applyFilter();
      }
    };
  }]);
}());
