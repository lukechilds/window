const jsdom = require('jsdom');
const clone = require('clone');

// Function to return a window object.
// Accepts a jsdom config object.
// Config object must be cloned before passing through otherwise jsdom will add
// lots of properties to the original reference.
module.exports = window = (jsdomConfig = {}) => jsdom.jsdom('', clone(jsdomConfig)).defaultView;
