(function () {
  "use strict";

  window.app.factory('socketSvc', ['socketFactory', function(socketFactory) {
    return socketFactory();
  }]);
}());