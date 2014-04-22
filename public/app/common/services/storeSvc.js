(function () {
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
