(function () {
  "use strict";

  // See http://socket.io/#how-to-use
  // listener is the result of server.listen()
  module.exports = function(listener) {
    var io = require('socket.io').listen(listener);

    io.sockets.on('connection', function (socket) {
      // TODO : Add socket stuff here
    });

    return io;
  };
}());