(function () {
  "use strict";

  module.exports = function(server) {
    server.get('/api/things', function (req, res) {
      res.send({
        iama : 'thing'
      });
    });
  };
}());
