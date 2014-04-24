(function () {
  "use strict";

  var Thing = require('../models/Thing');

  module.exports = function(server) {

    var thing = new Thing();

    server.get('/api/things', function (req, res) {

      thing.on('saidHello', function (message) {
        res.send({
          message : message
        });
      });

      thing.sayHello('Mars!');
    });
  };
}());
