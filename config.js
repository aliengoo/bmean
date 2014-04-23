(function () {
  "use strict";

  var config = {
    development : {
      databaseUrl : 'mongodb://localhost/bmean',
      port : 3001
    }
  };

  module.exports = function(){
    return config[process.env.NODE_ENV];
  }();
}());

