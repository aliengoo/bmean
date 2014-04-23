(function () {
  "use strict";

  /**
   * Calculates pagination based on a count.
   * @param page
   * @param count
   * @returns {page}
   */
  exports.calculate = function(page, count) {

    if (!page) {
      return null;
    }

    var totalItems = count;

    if (!totalItems) {
      totalItems = page.totalItems;
    }

    if (totalItems < 1) {
      page.current = 0;
      page.totalPages = 0;
    }

    var remainder = totalItems % page.size;

    page.totalItems = totalItems;
    page.totalPages = parseInt((totalItems / page.size) + (remainder > 0 ? 1 : 0));

    page.current = page.current < 1 ? 1 : page.current;

    if (page.totalPages < page.current) {
      page.current = page.totalPages;
    }

    if (page.current > 0) {
      page.skip = (page.current - 1) * page.size;
    }

    return page;
  };
}());

