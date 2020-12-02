const { JSDOM, ResourceLoader } = require('jsdom');
const fetch = require('cross-fetch');

// Class to return a window instance.
// Accepts a jsdom config object.
module.exports = class Window {
	constructor(jsdomConfig = {}) {
		const { proxy, strictSSL, userAgent } = jsdomConfig;
		const resources = new ResourceLoader({
			proxy,
			strictSSL,
			userAgent
		});
		const win = (new JSDOM('', Object.assign(jsdomConfig, {
			resources
		}))).window;
		win.fetch = fetch;
		return win;
	}
};
