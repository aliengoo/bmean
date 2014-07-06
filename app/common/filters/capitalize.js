(function () {
  "use strict";

  window.app.filter('capitalize', function () {
    return function (input) {
      var result;

      if (input && typeof input === "string" && input.length > 0) {
        result = input.charAt(0).toUpperCase() + input.slice(1);
      }

      return result;
    };
  });
}());
