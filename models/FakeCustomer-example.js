(function () {
  "use strict";

  var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    util = require('util'),
    pagination = require('../helpers/pagination');

  var fakeCustomerSchema = new Schema({
    firstName : String,
    lastName : String
  }, {
    collection : 'fakeCustomers'
  });

  fakeCustomerSchema.statics.filter = function(filter, callback) {
    var query = util._extend({}, filter);
    delete query.page;

    var self = this;

    // count the number of results
    this.count(query, function (countErr, count) {
      if (countErr) {
        callback(countErr);
      } else{

        // calculate the page size
        pagination.calculate(filter.page, count);

        // query
        var q = self.find(query)
          .limit(filter.page.size)
          .skip(filter.page.skip);

        if (filter.page.sortColumn) {
          var sort = filter.page.sortColumn;

          if ((filter.page.sortOrder || 0) < 0){
            sort = '-' + sort;
          }

          q.sort(sort);
        }

        q.exec(callback);
      }
    });
  };

  module.exports = mongoose.model('FakeCustomer', fakeCustomerSchema);
}());
