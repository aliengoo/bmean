(function () {
  "use strict";

  window.app.factory('filterSvc', ['$resource', 'apiUrl', function ($resource, apiUrl) {
    return $resource(apiUrl + "filter", {}, {
      filter : {
        method : 'POST',
        isArray : false
      }
    });
  }]);
}());
