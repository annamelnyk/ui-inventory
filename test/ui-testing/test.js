// const newTitle = require('./new_title.js');
const filters = require('./filters.js');
const search = require('./search.js');
const newTitle = require('./new-title.js');
const newItem = require('./new-item.js');

module.exports.test = function test(uiTestCtx) {
  newTitle.test(uiTestCtx);
  newItem.test(uiTestCtx);
  filters.test(uiTestCtx);
  search.test(uiTestCtx);
};
