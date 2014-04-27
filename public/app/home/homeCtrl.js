(function () {
  "use strict";

  window.app.controller('homeCtrl', ['$scope', 'toastrSvc', 'socketSvc', function ($scope, toastrSvc, socketSvc) {
    $scope.message = 'BMEAN';

    toastrSvc.success('Hello', 'World!');
  }]);
}());