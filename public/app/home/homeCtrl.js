(function () {
  "use strict";

  window.app.controller('homeCtrl', ['$scope', 'toastrSvc', function ($scope, toastrSvc) {
    $scope.message = 'BMEAN';

    toastrSvc.success('Hello', 'World!');
  }]);
}());