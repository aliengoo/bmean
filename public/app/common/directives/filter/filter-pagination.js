(function () {
  "use strict";

  window.app.directive('filterPagination', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

    var template = '<section>' +
                      '<pagination boundary-links="true" total-items="filterRequest.page.totalItems" page="filterRequest.page.current" items-per-page="filterRequest.page.size" max-size="10" class="pagination-sm" on-select-page="setPage(page)"></pagination>' +
                      '<p class="text-muted" ng-if="filterRequest.page.totalItems > 1">{{filterRequest.page.totalItems}} items found</p>' +
                      '<p class="text-muted" ng-if="filterRequest.page.totalItems === 1">{{filterRequest.page.totalItems}} items found</p>' +
                    '</section>';
    return {
      replace: true,
      restrict: 'E',
      template: template,
      scope: {
        key: '@'
      },
      link: function ($scope) {

        $rootScope.$on($scope.key + ':changed', function (event, filterRequest) {
          $timeout(function() {
            $scope.$apply(function () {
              $scope.filterRequest = filterRequest;
            });
          });
        });

        $scope.setPage = function(page) {
          $scope.filterRequest.page.current = page;
          $rootScope.$broadcast($scope.key + ':apply');
        };
      }
    };
  }]);
}());
