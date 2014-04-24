(function () {
  "use strict";

  module.exports = function(server) {
    // TODO : Register your routes here
    // index.ejs route
    server.get('/', function (req, res) {
      res.render('index');
    });

    // api routes
    require('./thing')(server);
  };

}());
