const { JSDOM, ResourceLoader } = require('jsdom');

// Class to return a window instance.
// Accepts a jsdom config object.
module.exports = class Window {
	constructor(jsdomConfig = {}) {
		let resources = jsdomConfig.resources;
		if (!resources) {
			const { proxy, strictSSL, userAgent } = jsdomConfig;
			resources = new ResourceLoader({
				proxy,
				strictSSL,
				userAgent
			});
		}
		return (new JSDOM('', Object.assign(jsdomConfig, {
			resources
		}))).window;
	}
};
