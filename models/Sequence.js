(function () {
  "use strict";

  var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  var sequenceSchema = new Schema({
    name : String,
    value : Number
  }, {
    collection : 'sequences'
  });

  // Updates/creates a sequence and returns the entire sequence document
  sequenceSchema.statics.nextVal = function(name, cb) {
    this.findOneAndUpdate({
      name: name
    }, {
      $inc : {
        value : 1
      }
    }, {
      new : true,
      upsert : true
    }, cb);
  };

  module.exports = mongoose.model('Sequence', sequenceSchema);
}());

