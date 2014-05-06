(function () {
  "use strict";

  window.app.controller('homeCtrl', ['$scope', 'toastrSvc', 'socketSvc', 'hotkeys', function ($scope, toastrSvc, socketSvc, hotkeys) {
    $scope.message = 'BMEAN';

    toastrSvc.success('Hello', 'World!');

  }]);
}());