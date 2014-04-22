(function () {
  "use strict";

  var events = require('events'),
    EventEmitter = events.EventEmitter,
    util = require('util');

  // TODO : This thing is a demo
  module.exports = (function(){

    var self;

    function Thing(){
      self = this;
      EventEmitter.call(this);
    }

    util.inherits(Thing, EventEmitter);

    Thing.prototype.sayHello = function(name) {
      var message = util.format('hello, %s', name);
      self.emit('saidHello', message);
    };

    return Thing;
  });
}());
