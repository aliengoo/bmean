(function () {
  "use strict";

  window.app.controller('filterExampleCtrl', ['$scope', function ($scope) {
    $scope.defaultFilter = {
      page: {
        size: 18,
        current: 1,
        sortColumn: 'lastName',
        sortOrder: -1
      }
    };

    $scope.elementData = {
      message : 'This is a filter'
    };
  }]);
}());
