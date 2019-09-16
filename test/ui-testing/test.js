// const newTitle = require('./new_title.js');
const filters = require('./filters.js');
const search = require('./search.js');
const newTitle = require('./new-title.js');

module.exports.test = function test(uiTestCtx) {
  /* filter existing records */
  filters.test(uiTestCtx);

  /* create distinct instance records only and search for them */
  search.test(uiTestCtx);

  /* create elaborate instance record, minimal holdings and item records; search for it */
  newTitle.test(uiTestCtx);
};
