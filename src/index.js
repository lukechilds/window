const { JSDOM } = require('jsdom');

// Class to return a window instance.
// Accepts a jsdom config object.
module.exports = class Window {
	constructor(jsdomConfig) {
		return (new JSDOM('', jsdomConfig)).window;
	}
};
