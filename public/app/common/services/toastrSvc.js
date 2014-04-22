(function () {
  "use strict";

  window.app.factory('toastrSvc', [function () {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "positionClass": "toast-bottom-right",
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "8000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };

    return {
      info: function (message, title) {
        toastr.warning(message, title);
      },
      success: function (message, title) {
        toastr.success(message, title);
      },
      warning: function (message, title) {
        toastr.warning(message, title);
      },
      error: function (message, title) {
        toastr.error(message, title);
      },
      clear: function () {
        toastr.clear();
      }
    };
  }]);
}());
