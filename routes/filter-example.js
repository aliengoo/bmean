(function () {
  "use strict";

  var FakeCustomer = require('../models/FakeCustomer-example');

  module.exports = function(server) {
    server.post('/api/fake-customers', function (req, res) {
      FakeCustomer.filter(req.body, function (err, results) {
        if (err) {
          console.log(err);
          res.send(500);
        } else {
          res.send({
            results : results,
            page : req.body.page
          });
        }
      });
    });
  };
}());